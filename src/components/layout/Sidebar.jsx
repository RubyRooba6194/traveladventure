"use client"

import { NavLink } from "react-router-dom"
import { Home, Users, Calendar, Map, Compass, MessageCircle, Settings } from "react-feather"

const Sidebar = ({ sidebarOpen, setSidebarOpen, userRole }) => {
  // Define navigation items with role-based access
  const navItems = [
    {
      name: "Dashboard",
      icon: Home,
      path: "/dashboard",
      allowedRoles: ["admin", "editor", "staff"],
    },
    {
      name: "User Management",
      icon: Users,
      path: "/users",
      allowedRoles: ["admin"],
    },
    {
      name: "Booking Management",
      icon: Calendar,
      path: "/bookings",
      allowedRoles: ["admin", "editor", "staff"],
    },
    {
      name: "Destination Management",
      icon: Map,
      path: "/destinations",
      allowedRoles: ["admin", "editor"],
    },
    {
      name: "Tour Management",
      icon: Compass,
      path: "/tours",
      allowedRoles: ["admin", "editor"],
    },
    {
      name: "Chat Support",
      icon: MessageCircle,
      path: "/chat",
      allowedRoles: ["admin", "editor", "staff"],
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/settings",
      allowedRoles: ["admin"],
    },
  ]

  // Filter navigation items based on user role
  const filteredNavItems = navItems.filter((item) => item.allowedRoles.includes(userRole))

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white border-r dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-center h-16 border-b dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white main-logos">
          < img src="https://media-hosting.imagekit.io/98b37eac78b74e21/TravelBuddy-logo.png?Expires=1838228387&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Qeb9K2qJubyIJ2yqFS1KMVpn9j-MoowFOdtSSimvvaHZF4SNOTZJYbwhiL0ISDqbltwdq~tJQpQ86EThagJPyIpI1LPqPLrun0b8d31bijiKV~5jCFkw1RtQwzDWpkyIUMs1BMMAXL6O~xfRfeF6ur3ZDzWKAUTwx9FRs0FtzeH0IF9oIfCihCxvn6BTXu9YmHnfPTXu9TSJqsfTRS0LMzedmrXrqhmIX6Kmy2uaPXR3mOmTcX1XgnWfbo9rHXHyo7RJoeaHfyW103JZc65GCHcGhPVSf~F7Y8U2eK-W0MlOVXsbiiabap3oVXusWf-LJzXGhLfJnQ6vOfKmvdW1OQ__" className="main-logo" />
          TravelBuddy Admin</h2>
        </div>

        <nav className="mt-5 px-2">
          <div className="space-y-1">
            {filteredNavItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-2.5 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                  }`
                }
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    setSidebarOpen(false)
                  }
                }}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </NavLink>
            ))}
          </div>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar

