import { useState } from 'react'
import { useAuth } from '../../../context/AuthContext'

export default function LoginPage({ onRegister, onSuccess }) {
	const { login } = useAuth()
	const [form, setForm] = useState({ usuario_email: '', usuario_contrasena: '' })
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)

	function updateField(event) {
		setForm({ ...form, [event.target.name]: event.target.value })
	}

	async function handleSubmit(event) {
		event.preventDefault()
		setError('')
		setLoading(true)
		try {
			await login(form)
			onSuccess()
		} catch (requestError) {
			setError(requestError.message)
		} finally {
			setLoading(false)
		}
	}

	return (
		<main className="auth-layout">
			<section className="auth-intro">
				<span className="eyebrow">LastChance</span>
				<h1>Todo empieza con una oportunidad.</h1>
				<p>Accede a tu cuenta para continuar.</p>
			</section>
			<section className="auth-card">
				<span className="eyebrow">Bienvenido</span>
				<h2>Iniciar sesión</h2>
				<form onSubmit={handleSubmit}>
					<label>Correo electrónico<input name="usuario_email" type="email" value={form.usuario_email} onChange={updateField} required /></label>
					<label>Contraseña<input name="usuario_contrasena" type="password" value={form.usuario_contrasena} onChange={updateField} required /></label>
					{error && <p className="error-message">{error}</p>}
					<button className="primary-button" disabled={loading}>{loading ? 'Ingresando...' : 'Ingresar'}</button>
				</form>
				<p className="form-footer">¿Aún no tienes cuenta? <button className="link-button" onClick={onRegister}>Crear una cuenta</button></p>
			</section>
		</main>
	)
}
