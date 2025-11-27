"use client";

import { useState, useEffect, useRef } from "react";

export default function CustomerChat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [chatRoom, setChatRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const messagesEndRef = useRef(null);

  // Scroll to bottom
//   const scrollToBottom = () => {
//     setTimeout(() => {
//       messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//     }, 8000);
//   };

//   useEffect( , [messages]);

  // Initialize chat room once
  useEffect(() => {
    initializeChatRoom();
  }, []);

  const initializeChatRoom = async () => {
    try {
      const response = await fetch("/api/chat/rooms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customerName: "Customer" }),
      });

      const data = await response.json();
      setChatRoom(data.chatRoom);
      await fetchMessages(data.chatRoom._id);
    } catch (error) {
      console.error("Error initializing chat:", error);
    } finally {
      setLoading(false);
    }
  };

  // Poll only after chatRoom exists
  useEffect(() => {
    if (!chatRoom?._id) return;

    const interval = setInterval(() => {
      fetchMessages(chatRoom._id);
    }, 3000);

    return () => clearInterval(interval);
  }, [chatRoom]);

  const fetchMessages = async (roomId) => {
    if (!roomId) return;

    try {
      const response = await fetch(
        `/api/chat/messages?chatRoomId=${roomId}&limit=100`
      );

      const data = await response.json();
      setMessages(data.messages || []);

      const unread = data.messages.filter(
        (msg) => msg.senderType === "technician" && !msg.isRead
      ).length;

      setUnreadCount(unread);

      if (unread > 0) {
        await markMessagesAsRead(roomId);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const markMessagesAsRead = async (roomId) => {
    try {
      await fetch("/api/chat/messages/read", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chatRoomId: roomId,
          userType: "customer",
        }),
      });
      setUnreadCount(0);
    } catch (error) {
      console.error("Error marking messages as read:", error);
    }
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !chatRoom || sending) return;

    setSending(true);

    try {
      await fetch("/api/chat/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chatRoomId: chatRoom._id,
          content: newMessage,
          senderType: "customer",
          senderName: "Customer",
        }),
      });

      setNewMessage("");
      await fetchMessages(chatRoom._id);
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-gray-600">Loading chat...</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-green-400"></div>
          <span>Technical Support</span>
        </div>
        {unreadCount > 0 && (
          <div className="bg-green-500 px-2 py-1 rounded text-xs font-semibold">
            {unreadCount} new
          </div>
        )}
      </div>

      {/* Messages */}
      <div className="h-96 overflow-y-auto p-4 bg-gray-50">
        {messages.map((msg) => {
          const isCustomer = msg.senderType === "customer";
          return (
            <div
              key={msg._id}
              className={`flex ${isCustomer ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`px-4 py-2 rounded-lg max-w-xs ${
                  isCustomer
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-800 shadow"
                }`}
              >
                {!isCustomer && (
                  <div className="text-xs font-semibold text-blue-600">
                    {msg.senderName}
                  </div>
                )}
                <p>{msg.content}</p>
                <div
                  className={`text-xs mt-1 ${
                    isCustomer ? "text-blue-200" : "text-gray-500"
                  }`}
                >
                  {formatTime(msg.createdAt)}
                  {isCustomer && msg.isRead && <span className="ml-1">✓✓</span>}
                </div>
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t flex gap-2">
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type message..."
          disabled={sending}
          className="flex-1 px-3 py-2 border rounded-lg"
        />
        <button
          onClick={handleSendMessage}
          disabled={sending || !newMessage.trim()}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-400"
        >
          {sending ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
}
