"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import { useTheme } from "../../contexts/ThemeContext"
import Sidebar from "./Sidebar"
import Header from "./Header"

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { user, handleLogout } = useAuth(); // Use handleLogout from context
  const { darkMode, toggleTheme } = useTheme()
  const navigate = useNavigate()

  // Rename local function to avoid conflict
  const onLogout = () => {
    handleLogout() 
    navigate("/login")
  }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} userRole={user?.role} />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          user={user}
          darkMode={darkMode}
          toggleTheme={toggleTheme}
          handleLogout={onLogout} // Pass renamed function
        />

        <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}

export default Layout
