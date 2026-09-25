import { useState } from 'react'
import { useAuth } from '../../../context/AuthContext'

export default function RegisterPage({ onLogin }) {
  const { register } = useAuth()
  const [form, setForm] = useState({ usuario_email: '', usuario_contrasena: '' })
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function updateField(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setMessage('')
    setLoading(true)
    try {
      const response = await register(form)
      setMessage(response.mensaje || 'Usuario registrado correctamente')
      setForm({ usuario_email: '', usuario_contrasena: '' })
    } catch (requestError) {
      setError(requestError.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="auth-layout">
      <section className="auth-intro"><span className="eyebrow">LastChance</span><h1>Una cuenta para seguir adelante.</h1><p>Regístrate y guarda tu acceso de forma segura.</p></section>
      <section className="auth-card"><span className="eyebrow">Nuevo usuario</span><h2>Crear cuenta</h2>
        <form onSubmit={handleSubmit}>
          <label>Correo electrónico<input name="usuario_email" type="email" value={form.usuario_email} onChange={updateField} required /></label>
          <label>Contraseña<input name="usuario_contrasena" type="password" minLength="6" value={form.usuario_contrasena} onChange={updateField} required /></label>
          {message && <p className="success-message">{message}</p>}{error && <p className="error-message">{error}</p>}
          <button className="primary-button" disabled={loading}>{loading ? 'Registrando...' : 'Registrarme'}</button>
        </form>
        <p className="form-footer">¿Ya tienes cuenta? <button className="link-button" onClick={onLogin}>Iniciar sesión</button></p>
      </section>
    </main>
  )
}