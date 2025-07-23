import React, { useState } from 'react';
import {Bot } from 'lucide-react'; // optional icon
import { motion } from 'framer-motion'; // optional for animation

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      >
        <Bot className="h-6 w-6" />
      </button>

      {/* Chat Box (toggle visibility) */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-20 right-6 z-50 w-80 bg-white rounded-xl shadow-xl p-4"
        >
          <div className="text-sm font-semibold text-gray-700 mb-2">
            AI Assistant
          </div>
          <div className="h-48 overflow-y-auto border border-gray-200 rounded p-2 text-xs text-gray-600">
            Hello! I’m your shopping assistant. How can I help you?
          </div>
          <input
            type="text"
            placeholder="Type a message..."
            className="mt-2 w-full px-3 py-2 border rounded text-sm focus:outline-none focus:ring"
          />
        </motion.div>
      )}
    </>
  );
};

export default ChatAssistant;
