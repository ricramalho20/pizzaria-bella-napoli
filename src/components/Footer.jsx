import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div>
          <p className="footer__logo">🍕 <span>Bella Napoli</span></p>
          <p className="footer__tag">Autêntica pizza italiana, feita com amor desde 2010.</p>
          <div className="footer__social">
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="Facebook">👍</a>
            <a href="https://wa.me/5511987654321" aria-label="WhatsApp">💬</a>
          </div>
        </div>
        <div>
          <h4>Navegação</h4>
          <ul>{[['/', 'Início'], ['/cardapio', 'Cardápio'], ['/pedido', 'Fazer Pedido'], ['/contato', 'Contato']].map(([to, l]) => <li key={to}><Link to={to}>{l}</Link></li>)}</ul>
        </div>
        <div>
          <h4>Contato</h4>
          <p>📍 Rua das Pizzas, 42 – Centro</p>
          <p>📞 (11) 98765-4321</p>
          <p>📧 contato@bellanapoli.com.br</p>
          <p>🕐 Seg–Dom: 18h–23h30</p>
        </div>
        <div>
          <h4>Pagamentos</h4>
          <div className="footer__payments">
            <span>VISA</span><span>Master</span><span>Elo</span><span>Pix</span><span>Amex</span>
          </div>
          <p className="footer__delivery">🛵 Entrega em até 40 min</p>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Bella Napoli Pizzaria. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
