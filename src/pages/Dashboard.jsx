"use client"

import React, { useState, useEffect } from "react"
import { useAuth } from "../contexts/AuthContext"
import axios from "axios"
import {
  Users,
  Calendar,
  Map,
  Compass,
  TrendingUp,
  DollarSign,
} from "react-feather"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"

// Stat Card Component
const StatCard = ({ title, value, icon: Icon, color }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 border border-gray-200 dark:border-gray-700">
    <div className="flex items-center">
      <div className={`rounded-full p-3 ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="ml-4">
        <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">
          {title}
        </h3>
        <p className="text-2xl font-semibold text-gray-800 dark:text-white">
          {value}
        </p>
      </div>
    </div>
  </div>
)

// Chart Component with Recharts
// const ChartCard = ({ title, data }) => (
//   <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 border border-gray-200 dark:border-gray-700">
//     <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
//       {title}
//     </h3>
//     <div className="h-64">
//       <ResponsiveContainer width="100%" height="100%">
//         <LineChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
//           <XAxis dataKey="month" stroke="#8884d8" />
//           <YAxis stroke="#8884d8" />
//           <Tooltip />
//           <Line
//             type="monotone"
//             dataKey="bookings"
//             stroke="#10B981"
//             strokeWidth={2}
//             activeDot={{ r: 6 }}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   </div>
// )

const ChartCard = ({ title, data }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 border border-gray-200 dark:border-gray-700">
    <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
      {title}
    </h3>
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="month" stroke="#8884d8" />
          <YAxis stroke="#8884d8" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="currentYear"
            stroke="#10B981"
            strokeWidth={2}
            name="2025 Bookings"
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="lastYear"
            stroke="#6366F1"
            strokeWidth={2}
            name="2024 Bookings"
            strokeDasharray="5 5"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);


// Recent Activity
const RecentActivity = ({ activities }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 border border-gray-200 dark:border-gray-700">
    <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
      Recent Activity
    </h3>
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-start">
          <div className={`rounded-full p-2 ${activity.color} mr-3`}>
            {React.createElement(activity.icon, {
              className: "w-4 h-4 text-white",
            })}
          </div>
          <div>
            <p className="text-gray-800 dark:text-white font-medium">
              {activity.title}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {activity.time}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
)

const Dashboard = () => {
  const { user } = useAuth()
  const [stats, setStats] = useState({
    users: 0,
    bookings: 0,
    destinations: 0,
    tours: 0,
    revenue: 0,
    growth: 0,
  })
  const [activities, setActivities] = useState([])
  const [chartData, setChartData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/dashboard")
        setStats(response.data.stats)
        setActivities(response.data.activities)
        setChartData(response.data.chartData) // Assuming backend sends `chartData`
      } catch (error) {
        console.error("Error fetching dashboard data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchDashboardData()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Welcome back, {user?.name || "User"}!
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Here's what's happening with your tourism business today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard title="Total Users" value={stats.users} icon={Users} color="bg-blue-500" />
        <StatCard title="Total Bookings" value={stats.bookings} icon={Calendar} color="bg-green-500" />
        <StatCard title="Destinations" value={stats.destinations} icon={Map} color="bg-purple-500" />
        <StatCard title="Tours" value={stats.tours} icon={Compass} color="bg-yellow-500" />
        <StatCard title="Revenue" value={`$${stats.revenue.toLocaleString()}`} icon={DollarSign} color="bg-red-500" />
        <StatCard title="Growth" value={`${stats.growth}%`} icon={TrendingUp} color="bg-indigo-500" />
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ChartCard title="Booking Analytics" data={chartData} />
        </div>
        <div>
          <RecentActivity activities={activities} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard