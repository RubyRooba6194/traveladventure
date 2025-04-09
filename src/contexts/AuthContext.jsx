"use client"

import { createContext, useContext, useState, useEffect } from "react"
import axios from "axios"

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkLoggedIn = async () => {
      const token = localStorage.getItem("token");
  
      if (!token) {
        setLoading(false);
        return;
      }
  
      try {
        const response = await axios.get("http://localhost:5000/api/admin/me", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
  
        setUser(response.data);
      } catch (error) {
        console.error("Auth error:", error?.response?.data || error.message);
        localStorage.removeItem("token");
      } finally {
        setLoading(false);
      }
    };
  
    checkLoggedIn();
  }, []);
  

  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:5000/api/admin/login", {
        email,
        password,
      })

      const { token, user } = response.data
      localStorage.setItem("token", token)
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
      setUser(user)
      return user
    } catch (error) {
      throw new Error(error.response?.data?.message || "Login failed")
    }
  }

  const logout = () => {
    localStorage.removeItem("token")
    delete axios.defaults.headers.common["Authorization"]
    setUser(null)
  }

  const value = {
    user,
    loading,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

