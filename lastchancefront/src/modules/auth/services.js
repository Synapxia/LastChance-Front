import { apiRequest } from '../../services/api'

export function login(credentials) {
	return apiRequest('/auth/login', {
		method: 'POST',
		body: JSON.stringify(credentials),
	})
}

export function register(userData) {
	return apiRequest('/auth/registro', {
		method: 'POST',
		body: JSON.stringify(userData),
	})
}

export function getProfile(token) {
	return apiRequest('/auth/perfil', { token })
}
