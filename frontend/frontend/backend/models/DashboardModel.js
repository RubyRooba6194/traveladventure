const User = require("./User.js");
const Booking = require("./Booking.js");
const Destination = require("./Destination.js");
const Tour = require("./Tour.js");

const getDashboardStats = async () => {
  const totalUsers = await User.countDocuments();
  const totalBookings = await Booking.countDocuments();
  const totalDestinations = await Destination.countDocuments();
  const totalTours = await Tour.countDocuments();

  const revenueData = await Booking.aggregate([
    { $group: { _id: null, total: { $sum: "$amount" } } }
  ]);

  const revenue = revenueData[0]?.total || 0;
  const growth = 12.5;

  return {
    totalUsers,
    totalBookings,
    totalDestinations,
    totalTours,
    revenue,
    growth,
  };
};

const getRecentActivities = () => {
  return [
    {
      title: "New booking: Paris Tour by John Doe",
      time: "5 minutes ago",
      icon: "Calendar",
      color: "bg-blue-500",
    },
    {
      title: "New destination added: Bali, Indonesia",
      time: "1 hour ago",
      icon: "Map",
      color: "bg-green-500",
    },
  ];
};

module.exports = {
  getDashboardStats,
  getRecentActivities,
};
