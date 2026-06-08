import { Link } from 'react-router-dom'
import './PizzaCard.css'

export default function PizzaCard({ pizza }) {
  return (
    <div className="pizza-card">
      <div className="pizza-card__img">
        <span className="pizza-card__emoji">{pizza.emoji}</span>
        {pizza.destaque && <span className="pizza-card__badge">Destaque</span>}
      </div>
      <div className="pizza-card__body">
        <h3 className="pizza-card__name">{pizza.nome}</h3>
        <p className="pizza-card__desc">{pizza.descricao}</p>
        <div className="pizza-card__footer">
          <div className="pizza-card__price">
            <span className="pizza-card__price-label">A partir de</span>
            <span className="pizza-card__price-value">R$ {pizza.preco.toFixed(2).replace('.', ',')}</span>
          </div>
          <Link to="/pedido" className="pizza-card__btn">Pedir</Link>
        </div>
      </div>
    </div>
  )
}
