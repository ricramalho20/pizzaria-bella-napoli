import { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { user, logout, cartCount, setCartOpen } = useApp()
  const navigate = useNavigate()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const handleLogout = () => { logout(); navigate('/') }

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <Link to="/" className="nav__logo">
          <span>🍕</span>
          <span className="nav__logo-text"><strong>Bella</strong> Napoli</span>
        </Link>

        <button className={`nav__burger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>

        <ul className={`nav__links ${open ? 'open' : ''}`}>
          {[['/', 'Início'], ['/cardapio', 'Cardápio'], ['/pedido', 'Pedido'], ['/contato', 'Contato']].map(([to, label]) => (
            <li key={to}>
              <NavLink to={to} end={to === '/'} className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setOpen(false)}>
                {label}
              </NavLink>
            </li>
          ))}
          {user?.role === 'admin' && (
            <li><NavLink to="/admin" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setOpen(false)}>Admin</NavLink></li>
          )}
          {user ? (
            <>
              <li><NavLink to="/minha-conta" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setOpen(false)}>👤 {user.nome.split(' ')[0]}</NavLink></li>
              <li><button className="nav__logout" onClick={handleLogout}>Sair</button></li>
            </>
          ) : (
            <li><Link to="/login" className="nav__login-btn" onClick={() => setOpen(false)}>Entrar</Link></li>
          )}
          <li>
            <button className="nav__cart" onClick={() => { setCartOpen(true); setOpen(false) }}>
              🛒 {cartCount > 0 && <span className="nav__cart-badge">{cartCount}</span>}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
