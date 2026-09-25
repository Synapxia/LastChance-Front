import { createContext, useContext, useEffect, useState } from 'react'
import { getProfile, login as loginRequest, register as registerRequest } from '../modules/auth/services'

const TOKEN_KEY = 'lastchance_token'
const AuthContext = createContext(null)

export function AuthProvider({ children }) {
	const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY))
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(Boolean(localStorage.getItem(TOKEN_KEY)))

	useEffect(() => {
		if (!token) {
			setLoading(false)
			return
		}

		getProfile(token)
			.then(setUser)
			.catch(() => logout())
			.finally(() => setLoading(false))
	}, [token])

	async function login(credentials) {
		const response = await loginRequest(credentials)
		localStorage.setItem(TOKEN_KEY, response.token)
		setToken(response.token)
		return response
	}

	async function register(userData) {
		return registerRequest(userData)
	}

	function logout() {
		localStorage.removeItem(TOKEN_KEY)
		setToken(null)
		setUser(null)
	}

	const value = { token, user, loading, isAuthenticated: Boolean(token && user), login, register, logout }

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
	return useContext(AuthContext)
}
