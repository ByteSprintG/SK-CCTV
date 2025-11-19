// File: src/app/admin/page.tsx

"use client";
import React, { useState, useEffect } from "react";
import { Package, ShoppingCart, Camera } from "lucide-react";
import ProductsTab from "../components/ProductsTab";
import OrdersTab from "../components/OrdersTab";
import PackagesTab from "../components/PackagesTab";
import BookingTab from "./BookingTab";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState<
    "products" | "orders" | "packages" | "booking"
  >("products");
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalPackages: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      // Fetch products count
      const productsRes = await fetch("/api/products");
      const productsData = await productsRes.json();
      
      // Fetch orders count
      const ordersRes = await fetch("/api/admin/orders");
      const ordersData = await ordersRes.json();
      
      // Fetch packages count
      const packagesRes = await fetch("/api/cctv-packages");
      const packagesData = await packagesRes.json();

      setStats({
        totalProducts: productsData.products?.length || 0,
        totalOrders: ordersData.orders?.length || 0,
        totalPackages: packagesData.packages?.length || 0,
      });
    } catch (err) {
      console.error("Failed to fetch stats:", err);
    }
  };

  // Refresh stats when tab changes
  const handleTabChange = (tab: "products" | "orders" | "packages"| "booking") => {
    setActiveTab(tab);
    fetchStats();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Manage products, orders, and packages
          </p>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex gap-4">
            <button
              onClick={() => handleTabChange("products")}
              className={`px-4 py-4 font-medium border-b-2 transition-colors ${
                activeTab === "products"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center gap-2">
                <Package size={20} />
                <span>Products</span>
                <span
                  className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
                    activeTab === "products"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {stats.totalProducts}
                </span>
              </div>
            </button>

            <button
              onClick={() => handleTabChange("orders")}
              className={`px-4 py-4 font-medium border-b-2 transition-colors ${
                activeTab === "orders"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center gap-2">
                <ShoppingCart size={20} />
                <span>Orders</span>
                <span
                  className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
                    activeTab === "orders"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {stats.totalOrders}
                </span>
              </div>
            </button>

            <button
              onClick={() => handleTabChange("packages")}
              className={`px-4 py-4 font-medium border-b-2 transition-colors ${
                activeTab === "packages"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center gap-2">
                <Camera size={20} />
                <span>CCTV Packages</span>
                <span
                  className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
                    activeTab === "packages"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {stats.totalPackages}
                </span>
              </div>
            </button>

             <button
              onClick={() => handleTabChange("booking")}
              className={`px-4 py-4 font-medium border-b-2 transition-colors ${
                activeTab === "packages"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center gap-2">
                <Camera size={20} />
                <span>Booking</span>
                <span
                  className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
                    activeTab === "booking"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {stats.totalPackages}
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        {activeTab === "products" && <ProductsTab onUpdate={fetchStats} />}
        {activeTab === "orders" && <OrdersTab onUpdate={fetchStats} />}
        {activeTab === "packages" && <PackagesTab onUpdate={fetchStats} />}
        {activeTab === "booking" && <BookingTab />}
      </div>
    </div>
  );
}