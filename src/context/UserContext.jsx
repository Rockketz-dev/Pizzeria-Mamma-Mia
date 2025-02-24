import { createContext, useState, useEffect } from 'react'

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  useEffect(() => {
    // Simular que el usuario está logueado por defecto (puede ser `false` si prefieres)
    const storedAuth = localStorage.getItem('auth')
    setIsAuthenticated(storedAuth === 'true')
  }, [])

  const login = () => {
    setIsAuthenticated(true)
    localStorage.setItem('auth', 'true')
  }

  const logout = () => {
    setIsAuthenticated(false)
    localStorage.setItem('auth', 'false')
  }

  return (
    <UserContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }
