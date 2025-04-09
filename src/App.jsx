"use client"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { ThemeProvider } from "./contexts/ThemeContext"
import { AuthProvider, useAuth } from "./contexts/AuthContext"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import UserManagement from "./pages/UserManagement"
import BookingManagement from "./pages/BookingManagement"
import DestinationManagement from "./pages/DestinationManagement"
import TourManagement from "./pages/TourManagement"
import ChatSupport from "./pages/ChatSupport"
import Layout from "./components/layout/Layout"
import "./index.css"

// Protected route component
const ProtectedRoute = ({ element, allowedRoles }) => {
  const { user, loading } = useAuth()

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>
  }

  if (!user) {
    return <Navigate to="/login" />
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" />
  }

  return element
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <ThemeProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute
                  element={
                    <Layout>
                      <Dashboard />
                    </Layout>
                  }
                  allowedRoles={["admin", "editor", "staff"]}
                />
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute
                  element={
                    <Layout>
                      <Dashboard />
                    </Layout>
                  }
                  allowedRoles={["admin", "editor", "staff"]}
                />
              }
            />
            <Route
              path="/users"
              element={
                <ProtectedRoute
                  element={
                    <Layout>
                      <UserManagement />
                    </Layout>
                  }
                  allowedRoles={["admin"]}
                />
              }
            />
            <Route
              path="/bookings"
              element={
                <ProtectedRoute
                  element={
                    <Layout>
                      <BookingManagement />
                    </Layout>
                  }
                  allowedRoles={["admin", "editor", "staff"]}
                />
              }
            />
            <Route
              path="/destinations"
              element={
                <ProtectedRoute
                  element={
                    <Layout>
                      <DestinationManagement />
                    </Layout>
                  }
                  allowedRoles={["admin", "editor"]}
                />
              }
            />
            <Route
              path="/tours"
              element={
                <ProtectedRoute
                  element={
                    <Layout>
                      <TourManagement />
                    </Layout>
                  }
                  allowedRoles={["admin", "editor"]}
                />
              }
            />
            <Route
              path="/chat"
              element={
                <ProtectedRoute
                  element={
                    <Layout>
                      <ChatSupport />
                    </Layout>
                  }
                  allowedRoles={["admin", "editor", "staff"]}
                />
              }
            />
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  )
}

export default App

