import React, { useState, useRef, useEffect } from "react";

const AyurvedicChatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Namaste! 🙏 I'm your Ayurvedic wellness assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const commonAyurvedicQuestions = [
    "What are the three doshas?",
    "Suggest Ayurvedic remedies for digestion",
    "What is Panchakarma?",
    "Ayurvedic diet tips for my dosha",
    "How to reduce stress naturally?",
  ];

  const ayurvedicResponses = {
    greeting:
      "Namaste! 🙏 I'm here to help you with Ayurvedic wellness. You can ask me about doshas, treatments, diet, or general wellness tips.",
    doshas:
      "In Ayurveda, there are three primary doshas:\n\n• Vata (Air + Ether) - Creative, energetic\n• Pitta (Fire + Water) - Intelligent, focused\n• Kapha (Earth + Water) - Calm, grounded\n\nWould you like to know which dosha might be dominant for you?",
    digestion:
      "For better digestion, try:\n\n• Drinking warm water with lemon in morning\n• Eating meals at regular times\n• Including ginger and cumin in your diet\n• Practicing mindful eating\n• Taking Triphala powder with warm water at night",
    panchakarma:
      "Panchakarma is Ayurveda's detoxification therapy. It includes five procedures:\n\n1. Vamana (therapeutic vomiting)\n2. Virechana (purgation)\n3. Basti (enema)\n4. Nasya (nasal administration)\n5. Raktamokshana (bloodletting)\n\nIt should be done under expert supervision.",
    diet: "Ayurvedic diet tips:\n\n• Eat according to your dosha\n• Include all six tastes in meals\n• Favor fresh, seasonal foods\n• Avoid processed foods\n• Maintain proper meal timing",
    stress:
      "Natural stress relief methods:\n\n• Practice Pranayama breathing\n• Daily Abhyanga (self-massage)\n• Meditation and Yoga\n• Herbal teas like Ashwagandha or Brahmi\n• Adequate sleep and routine",
    default:
      "I'm still learning about Ayurveda. For more specific or personalized advice, I recommend consulting with a qualified Ayurvedic practitioner. Is there something else I can help you with?",
  };

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    if (
      message.includes("hello") ||
      message.includes("hi") ||
      message.includes("namaste")
    ) {
      return ayurvedicResponses.greeting;
    } else if (
      message.includes("dosha") ||
      message.includes("vata") ||
      message.includes("pitta") ||
      message.includes("kapha")
    ) {
      return ayurvedicResponses.doshas;
    } else if (
      message.includes("digest") ||
      message.includes("stomach") ||
      message.includes("gut")
    ) {
      return ayurvedicResponses.digestion;
    } else if (message.includes("panchakarma") || message.includes("detox")) {
      return ayurvedicResponses.panchakarma;
    } else if (
      message.includes("diet") ||
      message.includes("food") ||
      message.includes("eat")
    ) {
      return ayurvedicResponses.diet;
    } else if (
      message.includes("stress") ||
      message.includes("anxiety") ||
      message.includes("relax")
    ) {
      return ayurvedicResponses.stress;
    } else {
      return ayurvedicResponses.default;
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate bot response after delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickQuestionClick = (question) => {
    setInputMessage(question);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chatbot Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        >
          <div className="flex items-center justify-center w-12 h-12">
            <span className="text-2xl">🌿</span>
          </div>
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-96 h-96 flex flex-col border border-green-200">
          {/* Header */}
          <div className="bg-green-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-xl">🌿</span>
              </div>
              <div>
                <h3 className="font-semibold">Ayurvedic Assistant</h3>
                <p className="text-green-100 text-xs">Online - Ready to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-green-200 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto bg-green-50">
            <div className="space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-2xl ${
                      message.sender === "user"
                        ? "bg-green-500 text-white rounded-br-none"
                        : "bg-white text-gray-800 border border-green-200 rounded-bl-none"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">
                      {message.text}
                    </p>
                    <p
                      className={`text-xs mt-1 ${
                        message.sender === "user"
                          ? "text-green-100"
                          : "text-gray-500"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-green-200 p-3 rounded-2xl rounded-bl-none">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Quick Questions */}
          {messages.length <= 1 && (
            <div className="px-4 py-2 bg-green-100">
              <p className="text-xs text-green-800 mb-2">Try asking:</p>
              <div className="flex flex-wrap gap-2">
                {commonAyurvedicQuestions.slice(0, 3).map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestionClick(question)}
                    className="text-xs bg-white text-green-700 px-3 py-1 rounded-full border border-green-300 hover:bg-green-50 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 border-t border-green-200 bg-white rounded-b-2xl">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Ayurveda..."
                className="flex-1 px-4 py-2 border border-green-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={inputMessage.trim() === ""}
                className="bg-green-600 hover:bg-green-700 disabled:bg-green-300 text-white p-2 rounded-full transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AyurvedicChatbot;
