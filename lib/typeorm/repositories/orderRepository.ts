import { AppDataSource, initializeDatabase } from "../config";
import { Order, OrderItemInterface, OrderStatus, PaymentStatus } from "../entities/Order";
import { ObjectId } from "mongodb";

export interface CreateOrderData {
  userId: string;
  items: OrderItemInterface[];
  totalItems: number;
  totalPrice: string;
  tax?: string;
  shippingCost?: string;
  shippingAddress?: string;
  shippingCity?: string;
  shippingState?: string;
  shippingZipCode?: string;
  shippingCountry?: string;
  phoneNumber?: string;
  paymentMethod?: string;
  notes?: string;
}

export interface UpdateOrderData {
  orderStatus?: OrderStatus;
  paymentStatus?: PaymentStatus;
  trackingNumber?: string;
  transactionId?: string;
  estimatedDelivery?: Date;
  deliveredAt?: Date;
  notes?: string;
}

export class OrderRepository {
  static async getRepository() {
    const dataSource = await initializeDatabase();
    return dataSource.getMongoRepository(Order);
  }

  // Create new order
  static async createOrder(orderData: CreateOrderData): Promise<Order> {
    const repo = await this.getRepository();

    const order = repo.create({
      userId: orderData.userId,
      items: orderData.items,
      totalItems: orderData.totalItems,
      totalPrice: orderData.totalPrice,
      tax: orderData.tax || "0",
      shippingCost: orderData.shippingCost || "0",
      shippingAddress: orderData.shippingAddress,
      shippingCity: orderData.shippingCity,
      shippingState: orderData.shippingState,
      shippingZipCode: orderData.shippingZipCode,
      shippingCountry: orderData.shippingCountry,
      phoneNumber: orderData.phoneNumber,
      paymentMethod: orderData.paymentMethod,
      notes: orderData.notes,
      orderStatus: OrderStatus.PENDING,
      paymentStatus: PaymentStatus.PENDING,
    });

    await repo.save(order);
    return order;
  }

  // Get all orders for a user
  static async getOrdersByUserId(userId: string): Promise<Order[]> {
    const repo = await this.getRepository();
    return repo.find({
      where: { userId } as any,
      order: { createdAt: "DESC" } as any,
    });
  }

  // Get single order by ID
  static async getOrderById(orderId: string): Promise<Order | null> {
    const repo = await this.getRepository();
    return repo.findOne({
      where: { _id: new ObjectId(orderId) } as any,
    });
  }

  // Get order with user verification
  static async getOrderByIdAndUserId(
    orderId: string,
    userId: string
  ): Promise<Order | null> {
    const repo = await this.getRepository();
    return repo.findOne({
      where: { _id: new ObjectId(orderId), userId } as any,
    });
  }

  // Update order
  static async updateOrder(
    orderId: string,
    updateData: UpdateOrderData
  ): Promise<Order | null> {
    const repo = await this.getRepository();

    await repo.update(new ObjectId(orderId), updateData as any);

    return repo.findOne({
      where: { _id: new ObjectId(orderId) } as any,
    });
  }

  // Update order status
  static async updateOrderStatus(
    orderId: string,
    orderStatus: OrderStatus
  ): Promise<Order | null> {
    return this.updateOrder(orderId, { orderStatus });
  }

  // Update payment status
  static async updatePaymentStatus(
    orderId: string,
    paymentStatus: PaymentStatus
  ): Promise<Order | null> {
    return this.updateOrder(orderId, { paymentStatus });
  }

  // Get orders by status
  static async getOrdersByStatus(
    status: OrderStatus,
    userId?: string
  ): Promise<Order[]> {
    const repo = await this.getRepository();

    const where: any = { orderStatus: status };
    if (userId) {
      where.userId = userId;
    }

    return repo.find({
      where,
      order: { createdAt: "DESC" } as any,
    });
  }

  // Get orders by payment status
  static async getOrdersByPaymentStatus(
    paymentStatus: PaymentStatus,
    userId?: string
  ): Promise<Order[]> {
    const repo = await this.getRepository();

    const where: any = { paymentStatus };
    if (userId) {
      where.userId = userId;
    }

    return repo.find({
      where,
      order: { createdAt: "DESC" } as any,
    });
  }

  // Get recent orders for a user
  static async getRecentOrdersByUserId(
    userId: string,
    limit: number = 10
  ): Promise<Order[]> {
    const repo = await this.getRepository();

    return repo.find({
      where: { userId } as any,
      order: { createdAt: "DESC" } as any,
      take: limit,
    });
  }

  // Get order statistics for user
  static async getOrderStats(userId: string) {
    const repo = await this.getRepository();

    const orders = await repo.find({
      where: { userId } as any,
    });

    const stats = {
      totalOrders: orders.length,
      totalSpent: orders
        .reduce((sum, order) => sum + parseFloat(order.totalPrice), 0)
        .toFixed(2),
      pendingOrders: orders.filter(
        (o) => o.orderStatus === OrderStatus.PENDING
      ).length,
      deliveredOrders: orders.filter(
        (o) => o.orderStatus === OrderStatus.DELIVERED
      ).length,
      cancelledOrders: orders.filter(
        (o) => o.orderStatus === OrderStatus.CANCELLED
      ).length,
    };

    return stats;
  }

  // Cancel order
  static async cancelOrder(orderId: string): Promise<Order | null> {
    return this.updateOrder(orderId, {
      orderStatus: OrderStatus.CANCELLED,
    });
  }

  // Confirm order (after payment)
  static async confirmOrder(orderId: string): Promise<Order | null> {
    return this.updateOrder(orderId, {
      orderStatus: OrderStatus.CONFIRMED,
      paymentStatus: PaymentStatus.COMPLETED,
    });
  }

  // Mark as shipped
  static async markAsShipped(
    orderId: string,
    trackingNumber: string
  ): Promise<Order | null> {
    return this.updateOrder(orderId, {
      orderStatus: OrderStatus.SHIPPED,
      trackingNumber,
    });
  }

  // Mark as delivered
  static async markAsDelivered(orderId: string): Promise<Order | null> {
    return this.updateOrder(orderId, {
      orderStatus: OrderStatus.DELIVERED,
      deliveredAt: new Date(),
    });
  }

  // Search orders by tracking number
  static async getOrderByTrackingNumber(
    trackingNumber: string
  ): Promise<Order | null> {
    const repo = await this.getRepository();

    return repo.findOne({
      where: { trackingNumber } as any,
    });
  }

  // Delete order
  static async deleteOrder(orderId: string): Promise<boolean> {
    const repo = await this.getRepository();

    const result = await repo.delete(new ObjectId(orderId));
    return (result.affected || 0) > 0;
  }
}