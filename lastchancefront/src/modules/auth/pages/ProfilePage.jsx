import { useAuth } from '../../../context/AuthContext'

export default function ProfilePage() {
  const { user, logout } = useAuth()
  return <main className="profile-page"><header className="topbar"><span className="brand">LastChance</span><button className="secondary-button" onClick={logout}>Cerrar sesión</button></header><section className="profile-content"><span className="eyebrow">Mi cuenta</span><h1>Tu perfil</h1><div className="profile-panel"><p className="profile-label">Información de usuario</p>{Object.entries(user || {}).map(([key, value]) => <div className="profile-row" key={key}><span>{key.replaceAll('_', ' ')}</span><strong>{String(value)}</strong></div>)}</div></section></main>
}