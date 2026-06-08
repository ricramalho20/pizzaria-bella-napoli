import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-icon">🍕</span>
          <span className="navbar__logo-text">
            <strong>Bella</strong> Napoli
          </span>
        </Link>

        <button
          className={`navbar__burger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>

        <ul className={`navbar__links ${open ? 'open' : ''}`}>
          {[
            { to: '/', label: 'Início' },
            { to: '/cardapio', label: 'Cardápio' },
            { to: '/pedido', label: 'Fazer Pedido' },
            { to: '/contato', label: 'Contato' },
          ].map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/pedido" className="navbar__cta" onClick={() => setOpen(false)}>
              Pedir Agora
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
