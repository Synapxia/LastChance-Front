import { useEffect, useState } from 'react'
import { AuthProvider, useAuth } from '../context/AuthContext'
import LoginPage from '../modules/auth/pages/LoginPage'
import ProfilePage from '../modules/auth/pages/ProfilePage'
import RegisterPage from '../modules/auth/pages/RegisterPage'

function AuthApp() {
	const { isAuthenticated, loading } = useAuth()
	const [page, setPage] = useState(window.location.pathname === '/registro' ? 'register' : 'login')

	useEffect(() => {
		if (isAuthenticated) setPage('profile')
	}, [isAuthenticated])

	if (loading) return <div className="loading-screen">Cargando...</div>
	if (isAuthenticated || page === 'profile') return <ProfilePage />
	if (page === 'register') return <RegisterPage onLogin={() => setPage('login')} />
	return <LoginPage onRegister={() => setPage('register')} onSuccess={() => setPage('profile')} />
}

export default function App() {
	return <AuthProvider><AuthApp /></AuthProvider>
}
