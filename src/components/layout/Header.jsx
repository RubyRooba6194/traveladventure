"use client"

import { Menu, X, Sun, Moon, Bell, User } from "react-feather"
import { useState } from "react"

const Header = ({ sidebarOpen, setSidebarOpen, user, darkMode, toggleTheme, handleLogout }) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between h-16 px-4 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 mr-4 text-gray-500 rounded-md lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white main-logos">< img src="https://media-hosting.imagekit.io/98b37eac78b74e21/TravelBuddy-logo.png?Expires=1838228387&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Qeb9K2qJubyIJ2yqFS1KMVpn9j-MoowFOdtSSimvvaHZF4SNOTZJYbwhiL0ISDqbltwdq~tJQpQ86EThagJPyIpI1LPqPLrun0b8d31bijiKV~5jCFkw1RtQwzDWpkyIUMs1BMMAXL6O~xfRfeF6ur3ZDzWKAUTwx9FRs0FtzeH0IF9oIfCihCxvn6BTXu9YmHnfPTXu9TSJqsfTRS0LMzedmrXrqhmIX6Kmy2uaPXR3mOmTcX1XgnWfbo9rHXHyo7RJoeaHfyW103JZc65GCHcGhPVSf~F7Y8U2eK-W0MlOVXsbiiabap3oVXusWf-LJzXGhLfJnQ6vOfKmvdW1OQ__" className="main-logo" />
         TravelBuddy Admin Panel</h1>
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="p-2 text-gray-500 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
          aria-label="Toggle theme"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button
          className="p-2 text-gray-500 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
          aria-label="Notifications"
        >
          <Bell size={20} />
        </button>

        <div className="relative">
          <button
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="flex items-center space-x-2 text-gray-700 dark:text-gray-200"
          >
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
              {user?.name?.charAt(0) || <User size={16} />}
            </div>
            <span className="hidden md:inline-block">{user?.name || "User"}</span>
          </button>

          {userMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 py-2 bg-white rounded-md shadow-xl dark:bg-gray-800 border dark:border-gray-700">
              <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 border-b dark:border-gray-700">
                <p className="font-medium">{user?.name}</p>
                <p className="text-gray-500 dark:text-gray-400 capitalize">{user?.role}</p>
              </div>
              <a
                href="#profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                Profile
              </a>
              <a
                href="#settings"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                Settings
              </a>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-red-400 dark:hover:bg-gray-700"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header

