const {
    getDashboardStats,
    getRecentActivities,
  } = require("../models/DashboardModel.js");
  
  const getDashboardData = async (req, res) => {
    try {
      const stats = await getDashboardStats();
      const activities = getRecentActivities();
  
      res.status(200).json({
        stats,
        activities,
        chartData: [
          { month: "Jan", currentYear: 40, lastYear: 30 },
          { month: "Feb", currentYear: 45, lastYear: 35 },
          { month: "Mar", currentYear: 50, lastYear: 40 },
          { month: "Apr", currentYear: 60, lastYear: 50 },
          { month: "May", currentYear: 70, lastYear: 55 },
        ],
      });
    } catch (error) {
      console.error("Dashboard error:", error);
      res.status(500).json({ error: "Failed to load dashboard data" });
    }
  };
  
  module.exports = {getDashboardData};
  