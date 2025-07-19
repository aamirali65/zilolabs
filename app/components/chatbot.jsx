'use client';
import React, { useState } from 'react';
import { Send, MessageSquare, X } from 'lucide-react';

function Chatbot() {
  const [showChat, setShowChat] = useState(false);
  const [showChatBubble, setShowChatBubble] = useState(true);
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', message: 'Hello! How can I help you today?' }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const trimmed = chatMessage.trim();
    if (!trimmed) return;

    const newUserMsg = { type: 'user', message: trimmed };
    setChatMessages(prev => [...prev, newUserMsg]);
    setChatMessage('');
    setLoading(true);

    try {
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed })
      });

      const data = await res.json();
      const botReply = { type: 'bot', message: data.reply };
      setChatMessages(prev => [...prev, botReply]);
    } catch (err) {
      setChatMessages(prev => [
        ...prev,
        { type: 'bot', message: 'Oops! Failed to connect to our assistant. Please try again.' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[70]">
      {showChat ? (
        <div className="bg-white rounded-2xl shadow-xl w-[90vw] sm:w-80 h-[60vh] sm:h-[500px] flex flex-col">
          {/* Header */}
          <div className="bg-primary text-white p-3 sm:p-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="font-semibold text-sm sm:text-base">Help Center</span>
            </div>
            <button onClick={() => setShowChat(false)} className="text-white/80 hover:text-white">
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-3 sm:space-y-4">
            {chatMessages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-2 sm:p-3 text-sm sm:text-base ${
                    msg.type === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {msg.message}
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-gray-500 text-sm italic">Bot is typing...</div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-3 sm:p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                autoComplete='off'
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 sm:px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
              />
              <button
                type="submit"
                className="bg-primary text-white p-2 rounded-lg hover:bg-primary transition duration-300"
              >
                <Send className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="flex flex-col items-end gap-2">
          {showChatBubble && (
            <div className="bg-white rounded-lg shadow-lg p-2 sm:p-3 flex items-center gap-2 max-w-[70vw] sm:max-w-none">
              <span className="text-gray-800 font-medium text-xs sm:text-sm">
                Hey there! Got any questions?
              </span>
              <button
                onClick={() => setShowChatBubble(false)}
                className="text-gray-400 hover:text-gray-600 ml-2"
              >
                <X className="h-3 w-3 sm:h-4 sm:w-4" />
              </button>
            </div>
          )}
          <button
            onClick={() => setShowChat(true)}
            className="bg-primary text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-primary transition duration-300"
          >
            <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
