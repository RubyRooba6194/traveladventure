"use client"

import { useState, useEffect } from "react"
import { Edit, Trash2, Plus, Search, X, Eye } from "react-feather"
import axios from 'axios';

const BookingManagement = () => {
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [currentBooking, setCurrentBooking] = useState(null)
  const [viewMode, setViewMode] = useState(false)
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    tourName: "",
    startDate: "",
    endDate: "",
    numberOfPeople: 1,
    totalPrice: 0,
    status: "pending",
  })
  const [error, setError] = useState("")
  const [tours, setTours] = useState([])

  useEffect(() => {
    fetchBookings()
    fetchTours()
  }, [])

  const fetchBookings = async () => {
    try {
      // In a real app, you would fetch this data from your API
      // const response = await axios.get('http://localhost:5000/api/bookings');
      // setBookings(response.data);

      // Simulated data
      setBookings([
        {
          id: 1,
          customerName: "John Doe",
          customerEmail: "john@example.com",
          tourName: "Paris City Tour",
          startDate: "2023-06-15",
          endDate: "2023-06-20",
          numberOfPeople: 2,
          totalPrice: 1200,
          status: "confirmed",
          createdAt: "2023-05-10",
        },
        {
          id: 2,
          customerName: "Jane Smith",
          customerEmail: "jane@example.com",
          tourName: "Tokyo Adventure",
          startDate: "2023-07-05",
          endDate: "2023-07-12",
          numberOfPeople: 1,
          totalPrice: 1800,
          status: "pending",
          createdAt: "2023-05-15",
        },
        {
          id: 3,
          customerName: "Mike Johnson",
          customerEmail: "mike@example.com",
          tourName: "New York City Pass",
          startDate: "2023-08-10",
          endDate: "2023-08-15",
          numberOfPeople: 4,
          totalPrice: 2400,
          status: "cancelled",
          createdAt: "2023-05-20",
        },
        {
          id: 4,
          customerName: "Sarah Williams",
          customerEmail: "sarah@example.com",
          tourName: "Rome Historical Tour",
          startDate: "2023-09-01",
          endDate: "2023-09-05",
          numberOfPeople: 2,
          totalPrice: 1500,
          status: "confirmed",
          createdAt: "2023-05-25",
        },
        {
          id: 5,
          customerName: "David Brown",
          customerEmail: "david@example.com",
          tourName: "Bali Beach Retreat",
          startDate: "2023-10-10",
          endDate: "2023-10-17",
          numberOfPeople: 2,
          totalPrice: 2200,
          status: "pending",
          createdAt: "2023-05-30",
        },
      ])
    } catch (error) {
      console.error("Error fetching bookings:", error)
    } finally {
      setLoading(false)
    }
  }

  const fetchTours = async () => {
    try {
      // In a real app, you would fetch this data from your API
      // const response = await axios.get('http://localhost:5000/api/tours');
      // setTours(response.data);

      // Simulated data
      setTours([
        { id: 1, name: "Paris City Tour", price: 600 },
        { id: 2, name: "Tokyo Adventure", price: 1800 },
        { id: 3, name: "New York City Pass", price: 600 },
        { id: 4, name: "Rome Historical Tour", price: 750 },
        { id: 5, name: "Bali Beach Retreat", price: 1100 },
      ])
    } catch (error) {
      console.error("Error fetching tours:", error)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target

    if (name === "tourName" && tours.length > 0) {
      const selectedTour = tours.find((tour) => tour.name === value)
      if (selectedTour) {
        const numberOfPeople = Number.parseInt(formData.numberOfPeople) || 1
        setFormData({
          ...formData,
          [name]: value,
          totalPrice: selectedTour.price * numberOfPeople,
        })
        return
      }
    }

    if (name === "numberOfPeople" && tours.length > 0) {
      const selectedTour = tours.find((tour) => tour.name === formData.tourName)
      if (selectedTour) {
        const numberOfPeople = Number.parseInt(value) || 1
        setFormData({
          ...formData,
          [name]: value,
          totalPrice: selectedTour.price * numberOfPeople,
        })
        return
      }
    }

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try {
      if (currentBooking) {
        // Update existing booking
        // In a real app, you would call your API
        // await axios.put(`http://localhost:5000/api/bookings/${currentBooking.id}`, formData);

        // Update local state
        setBookings(
          bookings.map((booking) => (booking.id === currentBooking.id ? { ...booking, ...formData } : booking)),
        )
      } else {
        // Create new booking
        // In a real app, you would call your API
        const response = await axios.post('http://localhost:5000/api/bookings', formData);

        // Add to local state with a fake ID
        const newBooking = {
          id: bookings.length + 1,
          ...formData,
          createdAt: new Date().toISOString().split("T")[0],
        }
        setBookings([...bookings, newBooking])
      }

      resetForm()
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred")
    }
  }

  const handleView = (booking) => {
    setCurrentBooking(booking)
    setFormData({
      customerName: booking.customerName,
      customerEmail: booking.customerEmail,
      tourName: booking.tourName,
      startDate: booking.startDate,
      endDate: booking.endDate,
      numberOfPeople: booking.numberOfPeople,
      totalPrice: booking.totalPrice,
      status: booking.status,
    })
    setViewMode(true)
    setShowModal(true)
  }

  const handleEdit = (booking) => {
    setCurrentBooking(booking)
    setFormData({
      customerName: booking.customerName,
      customerEmail: booking.customerEmail,
      tourName: booking.tourName,
      startDate: booking.startDate,
      endDate: booking.endDate,
      numberOfPeople: booking.numberOfPeople,
      totalPrice: booking.totalPrice,
      status: booking.status,
    })
    setViewMode(false)
    setShowModal(true)
  }

  const handleDelete = async (bookingId) => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      try {
        // In a real app, you would call your API
        // await axios.delete(`http://localhost:5000/api/bookings/${bookingId}`);

        // Update local state
        setBookings(bookings.filter((booking) => booking.id !== bookingId))
      } catch (error) {
        console.error("Error deleting booking:", error)
      }
    }
  }

  const resetForm = () => {
    setCurrentBooking(null)
    setFormData({
      customerName: "",
      customerEmail: "",
      tourName: "",
      startDate: "",
      endDate: "",
      numberOfPeople: 1,
      totalPrice: 0,
      status: "pending",
    })
    setViewMode(false)
    setShowModal(false)
  }

  const filteredBookings = bookings.filter(
    (booking) =>
      booking.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.customerEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.tourName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.status.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "cancelled":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Booking Management</h2>
          <p className="text-gray-500 dark:text-gray-400">Manage tour bookings and reservations</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search bookings..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-md w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            {searchTerm && (
              <button onClick={() => setSearchTerm("")} className="absolute right-3 top-2.5">
                <X className="h-5 w-5 text-gray-400" />
              </button>
            )}
          </div>

          <button
            onClick={() => {
              setViewMode(false)
              setShowModal(true)
            }}
            className="flex items-center justify-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
          >
            <Plus className="h-5 w-5" />
            Add Booking
          </button>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Customer
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Tour
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Dates
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Price
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {filteredBookings.length > 0 ? (
              filteredBookings.map((booking) => (
                <tr key={booking.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{booking.customerName}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{booking.customerEmail}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{booking.tourName}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {booking.numberOfPeople} {booking.numberOfPeople === 1 ? "person" : "people"}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{booking.startDate}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">to {booking.endDate}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    ${booking.totalPrice}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(booking.status)}`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => handleView(booking)}
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                      >
                        <Eye className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleEdit(booking)}
                        className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        <Edit className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(booking.id)}
                        className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
                  No bookings found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add/Edit/View Booking Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  {viewMode ? "Booking Details" : currentBooking ? "Edit Booking" : "Add New Booking"}
                </h3>

                {error && (
                  <div
                    className="mt-3 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative dark:bg-red-900 dark:text-red-100"
                    role="alert"
                  >
                    <span className="block sm:inline">{error}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="customerName"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Customer Name
                      </label>
                      <input
                        type="text"
                        name="customerName"
                        id="customerName"
                        value={formData.customerName}
                        onChange={handleInputChange}
                        required
                        disabled={viewMode}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white disabled:opacity-70"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="customerEmail"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Customer Email
                      </label>
                      <input
                        type="email"
                        name="customerEmail"
                        id="customerEmail"
                        value={formData.customerEmail}
                        onChange={handleInputChange}
                        required
                        disabled={viewMode}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white disabled:opacity-70"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="tourName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Tour
                    </label>
                    <select
                      name="tourName"
                      id="tourName"
                      value={formData.tourName}
                      onChange={handleInputChange}
                      required
                      disabled={viewMode}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white disabled:opacity-70"
                    >
                      <option value="">Select a tour</option>
                      {tours.map((tour) => (
                        <option key={tour.id} value={tour.name}>
                          {tour.name} - ${tour.price}/person
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Start Date
                      </label>
                      <input
                        type="date"
                        name="startDate"
                        id="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        required
                        disabled={viewMode}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white disabled:opacity-70"
                      />
                    </div>

                    <div>
                      <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        End Date
                      </label>
                      <input
                        type="date"
                        name="endDate"
                        id="endDate"
                        value={formData.endDate}
                        onChange={handleInputChange}
                        required
                        disabled={viewMode}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white disabled:opacity-70"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="numberOfPeople"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Number of People
                      </label>
                      <input
                        type="number"
                        name="numberOfPeople"
                        id="numberOfPeople"
                        min="1"
                        value={formData.numberOfPeople}
                        onChange={handleInputChange}
                        required
                        disabled={viewMode}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white disabled:opacity-70"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="totalPrice"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Total Price ($)
                      </label>
                      <input
                        type="number"
                        name="totalPrice"
                        id="totalPrice"
                        min="0"
                        value={formData.totalPrice}
                        onChange={handleInputChange}
                        required
                        disabled={viewMode}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white disabled:opacity-70"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Status
                    </label>
                    <select
                      name="status"
                      id="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      required
                      disabled={viewMode}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white disabled:opacity-70"
                    >
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>

                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                    {!viewMode && (
                      <button
                        type="submit"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:col-start-2 sm:text-sm"
                      >
                        {currentBooking ? "Update" : "Create"}
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={resetForm}
                      className={`mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:mt-0 ${viewMode ? "sm:col-span-2" : "sm:col-start-1"} sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600`}
                    >
                      {viewMode ? "Close" : "Cancel"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BookingManagement

