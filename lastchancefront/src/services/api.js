const API_URL = (
	process.env.REACT_APP_API_URL ||
	process.env.VITE_API_URL ||
	'http://127.0.0.1:5000'
).replace(/\/$/, '')

export async function apiRequest(path, options = {}) {
	const response = await fetch(`${API_URL}${path}`, {
		...options,
		headers: {
			'Content-Type': 'application/json',
			...(options.token ? { Authorization: `Bearer ${options.token}` } : {}),
			...options.headers,
		},
	})

	const contentType = response.headers.get('content-type') || ''
	const body = contentType.includes('application/json')
		? await response.json()
		: await response.text()

	if (!response.ok) {
		const error = new Error(body?.mensaje || 'No se pudo completar la solicitud')
		error.status = response.status
		error.data = body
		throw error
	}

	return body
}
