"use client"

import { useState, useEffect } from "react"
import { Edit, Trash2, Plus, Search, X, DollarSign, Clock, MapPin } from "react-feather"

const TourManagement = () => {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [currentTour, setCurrentTour] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    destination: "",
    duration: "",
    price: "",
    description: "",
    inclusions: "",
    exclusions: "",
    itinerary: "",
    imageUrl: "",
  })
  const [error, setError] = useState("")
  const [destinations, setDestinations] = useState([])

  useEffect(() => {
    fetchTours()
    fetchDestinations()
  }, [])

  const fetchTours = async () => {
    try {
      // In a real app, you would fetch this data from your API
      // const response = await axios.get('http://localhost:5000/api/tours');
      // setTours(response.data);

      // Simulated data
      setTours([
        {
          id: 1,
          name: "Paris City Tour",
          destination: "Paris, France",
          duration: "5 days",
          price: 1200,
          description: "Explore the romantic city of Paris with guided tours of iconic landmarks.",
          inclusions: "Hotel, Breakfast, Guided tours, Museum entries",
          exclusions: "Flights, Lunch and Dinner, Personal expenses",
          itinerary:
            "Day 1: Arrival and Eiffel Tower\nDay 2: Louvre Museum\nDay 3: Notre-Dame and Latin Quarter\nDay 4: Versailles Palace\nDay 5: Montmartre and Departure",
          imageUrl: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 2,
          name: "Tokyo Adventure",
          destination: "Tokyo, Japan",
          duration: "7 days",
          price: 1800,
          description: "Discover the blend of traditional and modern in Tokyo.",
          inclusions: "Hotel, Breakfast, Guided tours, Public transport pass",
          exclusions: "Flights, Lunch and Dinner, Personal expenses",
          itinerary:
            "Day 1: Arrival and Tokyo Tower\nDay 2: Senso-ji Temple and Asakusa\nDay 3: Shibuya and Harajuku\nDay 4: Akihabara and Ueno Park\nDay 5: Day trip to Mt. Fuji\nDay 6: Shinjuku and Tokyo Metropolitan Building\nDay 7: Shopping and Departure",
          imageUrl: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 3,
          name: "New York City Pass",
          destination: "New York City, United States",
          duration: "4 days",
          price: 1500,
          description: "Experience the vibrant energy of New York City with this comprehensive city pass.",
          inclusions: "Hotel, Breakfast, City pass for attractions, Subway pass",
          exclusions: "Flights, Lunch and Dinner, Personal expenses",
          itinerary:
            "Day 1: Arrival and Times Square\nDay 2: Statue of Liberty and 9/11 Memorial\nDay 3: Central Park and Museums\nDay 4: Brooklyn Bridge and Departure",
          imageUrl: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 4,
          name: "Rome Historical Tour",
          destination: "Rome, Italy",
          duration: "6 days",
          price: 1400,
          description: "Journey through time in the ancient city of Rome.",
          inclusions: "Hotel, Breakfast, Guided tours, Skip-the-line tickets",
          exclusions: "Flights, Lunch and Dinner, Personal expenses",
          itinerary:
            "Day 1: Arrival and Roman Forum\nDay 2: Colosseum and Palatine Hill\nDay 3: Vatican City\nDay 4: Trevi Fountain and Spanish Steps\nDay 5: Day trip to Pompeii\nDay 6: Shopping and Departure",
          imageUrl: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 5,
          name: "Bali Beach Retreat",
          destination: "Bali, Indonesia",
          duration: "8 days",
          price: 1600,
          description: "Relax and rejuvenate on the beautiful beaches of Bali.",
          inclusions: "Resort stay, Breakfast and Dinner, Airport transfers, Spa treatment",
          exclusions: "Flights, Lunch, Personal expenses, Optional activities",
          itinerary:
            "Day 1: Arrival and Welcome Dinner\nDay 2: Beach day and Water sports\nDay 3: Ubud and Rice Terraces\nDay 4: Temple Tour\nDay 5: Mount Batur Sunrise Trek\nDay 6: Spa and Relaxation\nDay 7: Uluwatu Temple and Kecak Dance\nDay 8: Shopping and Departure",
          imageUrl: "/placeholder.svg?height=200&width=300",
        },
      ])
    } catch (error) {
      console.error("Error fetching tours:", error)
    } finally {
      setLoading(false)
    }
  }

  const fetchDestinations = async () => {
    try {
      // In a real app, you would fetch this data from your API
      // const response = await axios.get('http://localhost:5000/api/destinations');
      // setDestinations(response.data);

      // Simulated data
      setDestinations([
        { id: 1, name: "Megamalai Tea Estate, Megamalai" },
        { id: 2, name: "Suruli falls, combum" },
        { id: 3, name: "chinna suruli falls, mayiladumparai" },
        { id: 4, name: "Kumbakkarai Falls,Periyakulam" },
        { id: 5, name: "Seran's Fun Park,Vadaveeranaickenpatty,Theni" },
      ])
    } catch (error) {
      console.error("Error fetching destinations:", error)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try {
      if (currentTour) {
        // Update existing tour
        // In a real app, you would call your API
        // await axios.put(`http://localhost:5000/api/tours/${currentTour.id}`, formData);

        // Update local state
        setTours(tours.map((tour) => (tour.id === currentTour.id ? { ...tour, ...formData } : tour)))
      } else {
        // Create new tour
        // In a real app, you would call your API
        // const response = await axios.post('http://localhost:5000/api/tours', formData);

        // Add to local state with a fake ID
        const newTour = {
          id: tours.length + 1,
          ...formData,
        }
        setTours([...tours, newTour])
      }

      resetForm()
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred")
    }
  }

  const handleEdit = (tour) => {
    setCurrentTour(tour)
    setFormData({
      name: tour.name,
      destination: tour.destination,
      duration: tour.duration,
      price: tour.price,
      description: tour.description,
      inclusions: tour.inclusions,
      exclusions: tour.exclusions,
      itinerary: tour.itinerary,
      imageUrl: tour.imageUrl,
    })
    setShowModal(true)
  }

  const handleDelete = async (tourId) => {
    if (window.confirm("Are you sure you want to delete this tour?")) {
      try {
        // In a real app, you would call your API
        // await axios.delete(`http://localhost:5000/api/tours/${tourId}`);

        // Update local state
        setTours(tours.filter((tour) => tour.id !== tourId))
      } catch (error) {
        console.error("Error deleting tour:", error)
      }
    }
  }

  const resetForm = () => {
    setCurrentTour(null)
    setFormData({
      name: "",
      destination: "",
      duration: "",
      price: "",
      description: "",
      inclusions: "",
      exclusions: "",
      itinerary: "",
      imageUrl: "",
    })
    setShowModal(false)
  }

  const filteredTours = tours.filter(
    (tour) =>
      tour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tour.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tour.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

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
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Tour Management</h2>
          <p className="text-gray-500 dark:text-gray-400">Manage tour packages and itineraries</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search tours..."
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
            onClick={() => setShowModal(true)}
            className="flex items-center justify-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
          >
            <Plus className="h-5 w-5" />
            Add Tour
          </button>
        </div>
      </div>

      {/* Tours Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTours.length > 0 ? (
          filteredTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                <img src={tour.imageUrl || "/placeholder.svg"} alt={tour.name} className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 rounded-full p-1 shadow">
                  <DollarSign className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{tour.name}</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(tour)}
                      className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <Edit className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(tour.id)}
                      className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-400 mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{tour.destination}</span>
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-300 line-clamp-2">{tour.description}</p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="text-lg font-bold text-green-600 dark:text-green-400">${tour.price}</div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-8 text-gray-500 dark:text-gray-400">No tours found</div>
        )}
      </div>

      {/* Add/Edit Tour Modal */}
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
                  {currentTour ? "Edit Tour" : "Add New Tour"}
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
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Tour Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="destination"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Destination
                      </label>
                      <select
                        name="destination"
                        id="destination"
                        value={formData.destination}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      >
                        <option value="">Select a destination</option>
                        {destinations.map((destination) => (
                          <option key={destination.id} value={destination.name}>
                            {destination.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="duration" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Duration
                      </label>
                      <input
                        type="text"
                        name="duration"
                        id="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. 5 days"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Price (INR)
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      min="0"
                      value={formData.price}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Description
                    </label>
                    <textarea
                      name="description"
                      id="description"
                      rows="3"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    ></textarea>
                  </div>

                  <div>
                    <label htmlFor="inclusions" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Inclusions
                    </label>
                    <input
                      type="text"
                      name="inclusions"
                      id="inclusions"
                      value={formData.inclusions}
                      onChange={handleInputChange}
                      required
                      placeholder="Separate items with commas"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="exclusions" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Exclusions
                    </label>
                    <input
                      type="text"
                      name="exclusions"
                      id="exclusions"
                      value={formData.exclusions}
                      onChange={handleInputChange}
                      required
                      placeholder="Separate items with commas"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="itinerary" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Itinerary
                    </label>
                    <textarea
                      name="itinerary"
                      id="itinerary"
                      rows="5"
                      value={formData.itinerary}
                      onChange={handleInputChange}
                      required
                      placeholder="Day 1: ...\nDay 2: ..."
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    ></textarea>
                  </div>

                  <div>
                    <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Image URL
                    </label>
                    <input
                      type="text"
                      name="imageUrl"
                      id="imageUrl"
                      value={formData.imageUrl}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>

                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:col-start-2 sm:text-sm"
                    >
                      {currentTour ? "Update" : "Create"}
                    </button>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:mt-0 sm:col-start-1 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600"
                    >
                      Cancel
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

export default TourManagement

