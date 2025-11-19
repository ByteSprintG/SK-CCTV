import React, { useState } from 'react';
import { MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    orderNumber: '',
    comment: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Message sent successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto px-4">
          Stay In Touch With Us! Contact Us For Any Inquiries Or Questions You May Have.
        </p>
      </div>

      {/* Store Locator Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Store Locator
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Store Information */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <MapPin className="text-red-500" size={28} />
              Visit Our Showroom
            </h3>
            
            <div className="mb-6">
              <a 
                href="https://maps.google.com/?q=SimplyTek+Thimbirigasyaya" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-semibold text-lg"
              >
                SimplyTek - Thimbirigasyaya
              </a>
            </div>

            <div className="mb-8 text-gray-700 space-y-1">
              <p>No.1,</p>
              <p>Thimbirigasyaya Road,</p>
              <p>Colombo 05, Western 00500, Sri Lanka</p>
            </div>

            <div className="border-t pt-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Clock size={24} />
                Open Time
              </h4>
              <div className="space-y-2 text-gray-700">
                <p><span className="font-semibold">Weekdays:</span> 10 AM to 7 PM</p>
                <p><span className="font-semibold">Friday:</span> 10 AM to 12 PM & 2 PM to 7 PM</p>
                <p><span className="font-semibold">Saturday:</span> 10 AM to 6 PM</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798900826653!2d79.86358631477292!3d6.914762695009488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596d3b0c4c6d%3A0x5e0b5c5f5e0b5c5f!2sThimbirigasyaya%20Rd%2C%20Colombo!5e0!3m2!1sen!2slk!4v1234567890123!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Send us your message
          </h2>

          <div className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Phone Number */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            {/* Inquiry Type Dropdown */}
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
            >
              <option value="">Inquiry Type</option>
              <option value="general">General Inquiry</option>
              <option value="product">Product Inquiry</option>
              <option value="support">Technical Support</option>
              <option value="order">Order Status</option>
              <option value="other">Other</option>
            </select>

            {/* Order Number */}
            <input
              type="text"
              name="orderNumber"
              placeholder="Order Number (If Applicable)"
              value={formData.orderNumber}
              onChange={handleChange}
              className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            {/* Comment Textarea */}
            <textarea
              name="comment"
              placeholder="Comment"
              value={formData.comment}
              onChange={handleChange}
              rows="6"
              className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full transition duration-300 text-lg shadow-lg"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
