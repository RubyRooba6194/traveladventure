"use client"

import { useState, useEffect } from "react"
import { Edit, Trash2, Plus, Search, X, MapPin } from "react-feather"

const DestinationManagement = () => {
  const [destinations, setDestinations] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [currentDestination, setCurrentDestination] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    description: "",
    imageUrl: "",
    popularAttractions: "",
    bestTimeToVisit: "",
  })
  const [error, setError] = useState("")

  useEffect(() => {
    fetchDestinations()
  }, [])

  const fetchDestinations = async () => {
    try {
      // In a real app, you would fetch this data from your API
      // const response = await axios.get('http://localhost:5000/api/destinations');
      // setDestinations(response.data);

      // Simulated data
      setDestinations([
        {
          id: 1,
          name: "Paris",
          country: "France",
          description: "The City of Light, known for its art, culture, and the Eiffel Tower.",
          imageUrl: "/placeholder.svg?height=200&width=300",
          popularAttractions: "Eiffel Tower, Louvre Museum, Notre-Dame Cathedral",
          bestTimeToVisit: "April to June, September to October",
        },
        {
          id: 2,
          name: "Tokyo",
          country: "Japan",
          description: "A bustling metropolis that mixes ultramodern and traditional.",
          imageUrl: "/placeholder.svg?height=200&width=300",
          popularAttractions: "Tokyo Tower, Senso-ji Temple, Shibuya Crossing",
          bestTimeToVisit: "March to May, September to November",
        },
        {
          id: 3,
          name: "New York City",
          country: "United States",
          description: "The Big Apple, a global center for art, culture, fashion, and finance.",
          imageUrl: "/placeholder.svg?height=200&width=300",
          popularAttractions: "Statue of Liberty, Times Square, Central Park",
          bestTimeToVisit: "April to June, September to November",
        },
        {
          id: 4,
          name: "Rome",
          country: "Italy",
          description: "The Eternal City, with ancient ruins, art, and vibrant street life.",
          imageUrl: "/placeholder.svg?height=200&width=300",
          popularAttractions: "Colosseum, Vatican City, Trevi Fountain",
          bestTimeToVisit: "April to May, September to October",
        },
        {
          id: 5,
          name: "Bali",
          country: "Indonesia",
          description: "Island paradise known for beaches, volcanic mountains, and temples.",
          imageUrl: "/placeholder.svg?height=200&width=300",
          popularAttractions: "Tanah Lot, Ubud Monkey Forest, Uluwatu Temple",
          bestTimeToVisit: "April to October",
        },
      ])
    } catch (error) {
      console.error("Error fetching destinations:", error)
    } finally {
      setLoading(false)
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
      if (currentDestination) {
        // Update existing destination
        // In a real app, you would call your API
        // await axios.put(`http://localhost:5000/api/destinations/${currentDestination.id}`, formData);

        // Update local state
        setDestinations(
          destinations.map((destination) =>
            destination.id === currentDestination.id ? { ...destination, ...formData } : destination,
          ),
        )
      } else {
        // Create new destination
        // In a real app, you would call your API
        // const response = await axios.post('http://localhost:5000/api/destinations', formData);

        // Add to local state with a fake ID
        const newDestination = {
          id: destinations.length + 1,
          ...formData,
        }
        setDestinations([...destinations, newDestination])
      }

      resetForm()
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred")
    }
  }

  const handleEdit = (destination) => {
    setCurrentDestination(destination)
    setFormData({
      name: destination.name,
      country: destination.country,
      description: destination.description,
      imageUrl: destination.imageUrl,
      popularAttractions: destination.popularAttractions,
      bestTimeToVisit: destination.bestTimeToVisit,
    })
    setShowModal(true)
  }

  const handleDelete = async (destinationId) => {
    if (window.confirm("Are you sure you want to delete this destination?")) {
      try {
        // In a real app, you would call your API
        // await axios.delete(`http://localhost:5000/api/destinations/${destinationId}`);

        // Update local state
        setDestinations(destinations.filter((destination) => destination.id !== destinationId))
      } catch (error) {
        console.error("Error deleting destination:", error)
      }
    }
  }

  const resetForm = () => {
    setCurrentDestination(null)
    setFormData({
      name: "",
      country: "",
      description: "",
      imageUrl: "",
      popularAttractions: "",
      bestTimeToVisit: "",
    })
    setShowModal(false)
  }

  const filteredDestinations = destinations.filter(
    (destination) =>
      destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      destination.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      destination.description.toLowerCase().includes(searchTerm.toLowerCase()),
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
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Destination Management</h2>
          <p className="text-gray-500 dark:text-gray-400">Manage travel destinations and locations</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search destinations..."
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
            Add Destination
          </button>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                <img
                  src={destination.imageUrl || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{destination.name}</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(destination)}
                      className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <Edit className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(destination.id)}
                      className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-400 mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{destination.country}</span>
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-300 line-clamp-2">{destination.description}</p>
                <div className="mt-3">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Popular Attractions:</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1">
                    {destination.popularAttractions}
                  </p>
                </div>
                <div className="mt-2">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Best Time to Visit:</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{destination.bestTimeToVisit}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-8 text-gray-500 dark:text-gray-400">No destinations found</div>
        )}
      </div>

      {/* Add/Edit Destination Modal */}
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
                  {currentDestination ? "Edit Destination" : "Add New Destination"}
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
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Destination Name
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

                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        id="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </div>
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
                    <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Image URL
                    </label>
                    <div className="flex items-center mt-1">
                      <input
                        type="text"
                        name="imageUrl"
                        id="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleInputChange}
                        required
                        className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </div>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      Enter a URL for the destination image
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="popularAttractions"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Popular Attractions
                    </label>
                    <input
                      type="text"
                      name="popularAttractions"
                      id="popularAttractions"
                      value={formData.popularAttractions}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Separate attractions with commas"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="bestTimeToVisit"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Best Time to Visit
                    </label>
                    <input
                      type="text"
                      name="bestTimeToVisit"
                      id="bestTimeToVisit"
                      value={formData.bestTimeToVisit}
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
                      {currentDestination ? "Update" : "Create"}
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

export default DestinationManagement

