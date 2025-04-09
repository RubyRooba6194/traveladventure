"use client"

import { useState, useEffect, useRef } from "react"
import { Send, User, UserCheck } from "react-feather"
import { useAuth } from "../contexts/AuthContext"

const ChatSupport = () => {
  const { user } = useAuth()
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("")
  const [activeChats, setActiveChats] = useState([])
  const [currentChat, setCurrentChat] = useState(null)
  const [loading, setLoading] = useState(true)
  const [socket, setSocket] = useState(null)
  const messagesEndRef = useRef(null)

  // Initialize socket connection
  useEffect(() => {
    // In a real app, you would connect to your actual socket server
    // const newSocket = io('http://localhost:5000');
    // setSocket(newSocket);

    // For demo purposes, we'll simulate socket behavior
    setSocket({
      emit: (event, data) => {
        console.log(`Emitting ${event}:`, data)
        // Simulate receiving a response after sending a message
        if (event === "send_message" && currentChat) {
          setTimeout(() => {
            const autoReply = {
              id: Date.now(),
              chatId: currentChat.id,
              sender: { id: "system", name: "Support Agent", role: "agent" },
              content: `Thank you for your message. This is an automated response. Our team will get back to you shortly.`,
              timestamp: new Date().toISOString(),
            }
            setMessages((prev) => [...prev, autoReply])
          }, 1000)
        }
      },
      on: (event, callback) => {
        console.log(`Listening for ${event}`)
      },
      off: (event) => {
        console.log(`Stopped listening for ${event}`)
      },
    })

    return () => {
      // In a real app, you would disconnect the socket
      // if (socket) socket.disconnect();
    }
  }, [currentChat])

  // Fetch active chats
  useEffect(() => {
    const fetchChats = async () => {
      try {
        // In a real app, you would fetch this data from your API
        // const response = await axios.get('http://localhost:5000/api/chats');
        // setActiveChats(response.data);

        // Simulated data
        setActiveChats([
          {
            id: 1,
            user: { id: 101, name: "John Doe", email: "john@example.com" },
            lastMessage: "I need help with my booking",
            unread: 2,
            timestamp: "2023-06-01T10:30:00Z",
          },
          {
            id: 2,
            user: { id: 102, name: "Jane Smith", email: "jane@example.com" },
            lastMessage: "When is the best time to visit Tokyo?",
            unread: 0,
            timestamp: "2023-06-01T09:15:00Z",
          },
          {
            id: 3,
            user: { id: 103, name: "Mike Johnson", email: "mike@example.com" },
            lastMessage: "Can I get a refund for my cancelled tour?",
            unread: 1,
            timestamp: "2023-05-31T16:45:00Z",
          },
        ])
      } catch (error) {
        console.error("Error fetching chats:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchChats()
  }, [])

  // Fetch messages for the current chat
  useEffect(() => {
    if (currentChat) {
      const fetchMessages = async () => {
        try {
          // In a real app, you would fetch this data from your API
          // const response = await axios.get(`http://localhost:5000/api/chats/${currentChat.id}/messages`);
          // setMessages(response.data);

          // Simulated data
          if (currentChat.id === 1) {
            setMessages([
              {
                id: 1,
                chatId: 1,
                sender: { id: 101, name: "John Doe", role: "customer" },
                content: "I need help with my booking",
                timestamp: "2023-06-01T10:30:00Z",
              },
              {
                id: 2,
                chatId: 1,
                sender: { id: "agent1", name: "Support Agent", role: "agent" },
                content:
                  "Hello John, I'd be happy to help with your booking. Could you please provide your booking reference number?",
                timestamp: "2023-06-01T10:32:00Z",
              },
              {
                id: 3,
                chatId: 1,
                sender: { id: 101, name: "John Doe", role: "customer" },
                content: "My booking reference is TUR12345",
                timestamp: "2023-06-01T10:33:00Z",
              },
            ])
          } else if (currentChat.id === 2) {
            setMessages([
              {
                id: 1,
                chatId: 2,
                sender: { id: 102, name: "Jane Smith", role: "customer" },
                content: "When is the best time to visit Tokyo?",
                timestamp: "2023-06-01T09:15:00Z",
              },
              {
                id: 2,
                chatId: 2,
                sender: { id: "agent2", name: "Support Agent", role: "agent" },
                content:
                  "Hi Jane, the best time to visit Tokyo is during spring (March to May) for cherry blossoms or autumn (September to November) for pleasant weather and beautiful foliage. Would you like more specific information about either of these seasons?",
                timestamp: "2023-06-01T09:18:00Z",
              },
            ])
          } else if (currentChat.id === 3) {
            setMessages([
              {
                id: 1,
                chatId: 3,
                sender: { id: 103, name: "Mike Johnson", role: "customer" },
                content: "Can I get a refund for my cancelled tour?",
                timestamp: "2023-05-31T16:45:00Z",
              },
            ])
          }
        } catch (error) {
          console.error("Error fetching messages:", error)
        }
      }

      fetchMessages()

      // Mark chat as read when opened
      setActiveChats((prevChats) =>
        prevChats.map((chat) => (chat.id === currentChat.id ? { ...chat, unread: 0 } : chat)),
      )
    }
  }, [currentChat])

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = (e) => {
    e.preventDefault()

    if (!newMessage.trim() || !currentChat || !socket) return

    const message = {
      id: Date.now(),
      chatId: currentChat.id,
      sender: { id: user.id, name: user.name, role: user.role },
      content: newMessage,
      timestamp: new Date().toISOString(),
    }

    // Add message to local state
    setMessages((prev) => [...prev, message])

    // Send message via socket
    socket.emit("send_message", message)

    // Clear input
    setNewMessage("")
  }

  const formatTime = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString()
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="h-[calc(100vh-6rem)] flex flex-col">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Chat Support</h2>
          <p className="text-gray-500 dark:text-gray-400">Provide real-time support to customers</p>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
        {/* Chat List */}
        <div className="w-full md:w-1/3 lg:w-1/4 border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-medium text-gray-800 dark:text-white">Active Conversations</h3>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {activeChats.length > 0 ? (
              activeChats.map((chat) => (
                <button
                  key={chat.id}
                  onClick={() => setCurrentChat(chat)}
                  className={`w-full text-left p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                    currentChat?.id === chat.id ? "bg-gray-100 dark:bg-gray-700" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                        {chat.user.name.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-gray-800 dark:text-white">{chat.user.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 truncate w-40">{chat.lastMessage}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-xs text-gray-500 dark:text-gray-400">{formatTime(chat.timestamp)}</span>
                      {chat.unread > 0 && (
                        <span className="mt-1 px-2 py-0.5 bg-primary text-white text-xs rounded-full">
                          {chat.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              ))
            ) : (
              <div className="p-4 text-center text-gray-500 dark:text-gray-400">No active chats</div>
            )}
          </div>
        </div>

        {/* Chat Area */}
        <div className="hidden md:flex flex-col flex-1">
          {currentChat ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                    {currentChat.user.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-800 dark:text-white">{currentChat.user.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{currentChat.user.email}</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto">
                {messages.map((message, index) => {
                  const isCurrentUser = message.sender.role !== "customer"
                  const showDate =
                    index === 0 || formatDate(messages[index - 1].timestamp) !== formatDate(message.timestamp)

                  return (
                    <div key={message.id} className="mb-4">
                      {showDate && (
                        <div className="flex justify-center mb-4">
                          <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-2 py-1 rounded">
                            {formatDate(message.timestamp)}
                          </span>
                        </div>
                      )}
                      <div className={`flex ${isCurrentUser ? "justify-end" : "justify-start"}`}>
                        <div
                          className={`max-w-[75%] rounded-lg px-4 py-2 ${
                            isCurrentUser
                              ? "bg-primary text-white rounded-br-none"
                              : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-bl-none"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{message.sender.name}</span>
                            {message.sender.role === "agent" && <UserCheck className="h-4 w-4" />}
                          </div>
                          <p className="mt-1">{message.content}</p>
                          <div className="text-right mt-1">
                            <span
                              className={`text-xs ${
                                isCurrentUser ? "text-white/80" : "text-gray-500 dark:text-gray-400"
                              }`}
                            >
                              {formatTime(message.timestamp)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
                <div ref={messagesEndRef} />
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                  />
                  <button
                    type="submit"
                    disabled={!newMessage.trim()}
                    className="bg-primary text-white p-2 rounded-md hover:bg-primary-dark transition-colors disabled:opacity-50"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <User className="h-12 w-12 mx-auto text-gray-400 dark:text-gray-600" />
                <p className="mt-2 text-gray-500 dark:text-gray-400">Select a conversation to start chatting</p>
              </div>
            </div>
          )}
        </div>

        {/* Mobile: Show either list or chat */}
        <div className="flex flex-col flex-1 md:hidden">
          {currentChat ? (
            <>
              {/* Chat Header with back button */}
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center">
                <button onClick={() => setCurrentChat(null)} className="mr-3 text-gray-500 dark:text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                    {currentChat.user.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-800 dark:text-white">{currentChat.user.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{currentChat.user.email}</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto">
                {messages.map((message, index) => {
                  const isCurrentUser = message.sender.role !== "customer"
                  const showDate =
                    index === 0 || formatDate(messages[index - 1].timestamp) !== formatDate(message.timestamp)

                  return (
                    <div key={message.id} className="mb-4">
                      {showDate && (
                        <div className="flex justify-center mb-4">
                          <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-2 py-1 rounded">
                            {formatDate(message.timestamp)}
                          </span>
                        </div>
                      )}
                      <div className={`flex ${isCurrentUser ? "justify-end" : "justify-start"}`}>
                        <div
                          className={`max-w-[75%] rounded-lg px-4 py-2 ${
                            isCurrentUser
                              ? "bg-primary text-white rounded-br-none"
                              : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-bl-none"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{message.sender.name}</span>
                            {message.sender.role === "agent" && <UserCheck className="h-4 w-4" />}
                          </div>
                          <p className="mt-1">{message.content}</p>
                          <div className="text-right mt-1">
                            <span
                              className={`text-xs ${
                                isCurrentUser ? "text-white/80" : "text-gray-500 dark:text-gray-400"
                              }`}
                            >
                              {formatTime(message.timestamp)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
                <div ref={messagesEndRef} />
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                  />
                  <button
                    type="submit"
                    disabled={!newMessage.trim()}
                    className="bg-primary text-white p-2 rounded-md hover:bg-primary-dark transition-colors disabled:opacity-50"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </>
          ) : (
            // Show chat list on mobile when no chat is selected
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {activeChats.length > 0 ? (
                activeChats.map((chat) => (
                  <button
                    key={chat.id}
                    onClick={() => setCurrentChat(chat)}
                    className="w-full text-left p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                          {chat.user.name.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <p className="font-medium text-gray-800 dark:text-white">{chat.user.name}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 truncate w-40">{chat.lastMessage}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-xs text-gray-500 dark:text-gray-400">{formatTime(chat.timestamp)}</span>
                        {chat.unread > 0 && (
                          <span className="mt-1 px-2 py-0.5 bg-primary text-white text-xs rounded-full">
                            {chat.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                ))
              ) : (
                <div className="p-4 text-center text-gray-500 dark:text-gray-400">No active chats</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ChatSupport

