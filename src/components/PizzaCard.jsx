import { useState } from 'react'
import { useApp } from '../context/AppContext'
import './PizzaCard.css'

const TAMANHOS = ['Pequena', 'Média', 'Grande']

export default function PizzaCard({ pizza }) {
  const [tamanho, setTamanho] = useState('Média')
  const [added, setAdded] = useState(false)
  const { addToCart } = useApp()

  const KEYS = { Pequena: 'P', Média: 'M', Grande: 'G' }

  const handleAdd = () => {
    addToCart(pizza, tamanho, 1)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div className="pcard">
      <div className="pcard__img-wrap">
        <img src={pizza.img} alt={pizza.nome} className="pcard__img" />
        {pizza.destaque && <span className="pcard__badge">⭐ Destaque</span>}
      </div>
      <div className="pcard__body">
        <h3 className="pcard__name">{pizza.nome}</h3>
        <p className="pcard__desc">{pizza.descricao}</p>
        <div className="pcard__sizes">
          {TAMANHOS.map(t => (
            <button key={t} className={`pcard__size ${tamanho === t ? 'active' : ''}`} onClick={() => setTamanho(t)}>{t}</button>
          ))}
        </div>
        <div className="pcard__footer">
          <div>
            <span className="pcard__from">A partir de</span>
            <span className="pcard__price">R$ {pizza.tamanhos[KEYS[tamanho]].toFixed(2).replace('.', ',')}</span>
          </div>
          <button className={`pcard__btn ${added ? 'added' : ''}`} onClick={handleAdd}>
            {added ? '✓ Adicionado' : '+ Carrinho'}
          </button>
        </div>
      </div>
    </div>
  )
}
