import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <p className="footer__logo">🍕 <span>Bella Napoli</span></p>
          <p className="footer__tagline">Autêntica pizza italiana, feita com amor desde 2010.</p>
        </div>

        <div className="footer__links">
          <h4>Navegação</h4>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/cardapio">Cardápio</Link></li>
            <li><Link to="/pedido">Fazer Pedido</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </div>

        <div className="footer__contact">
          <h4>Contato</h4>
          <p>📍 Rua das Pizzas, 42 – Centro</p>
          <p>📞 (11) 98765-4321</p>
          <p>🕐 Seg–Dom: 18h–23h30</p>
          <p>📧 contato@bellanapoli.com.br</p>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Bella Napoli Pizzaria. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
