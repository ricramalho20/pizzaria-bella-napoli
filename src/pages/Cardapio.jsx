import { useState } from 'react'
import PizzaCard from '../components/PizzaCard'
import { pizzas, categorias } from '../data/pizzas'
import './Cardapio.css'

export default function Cardapio() {
  const [categoria, setCategoria] = useState('todas')
  const [busca, setBusca] = useState('')

  const filtradas = pizzas.filter(p => {
    const matchCat = categoria === 'todas' || p.categoria === categoria
    const matchBusca = p.nome.toLowerCase().includes(busca.toLowerCase()) ||
      p.descricao.toLowerCase().includes(busca.toLowerCase())
    return matchCat && matchBusca
  })

  return (
    <div className="cardapio-page">
      <div className="cardapio-hero">
        <div className="container">
          <div className="ornament">✦</div>
          <h1 className="section-title">Nosso Cardápio</h1>
          <p className="section-subtitle">
            Pizzas artesanais feitas com ingredientes frescos e massa de fermentação lenta
          </p>
        </div>
      </div>

      <div className="cardapio-body container">
        {/* Filtros */}
        <div className="cardapio-filtros">
          <div className="cardapio-categorias">
            {categorias.map(c => (
              <button
                key={c.id}
                className={`cat-btn ${categoria === c.id ? 'active' : ''}`}
                onClick={() => setCategoria(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>
          <input
            type="search"
            placeholder="Buscar pizza..."
            value={busca}
            onChange={e => setBusca(e.target.value)}
            className="cardapio-busca"
          />
        </div>

        {/* Grid */}
        {filtradas.length > 0 ? (
          <div className="cardapio-grid">
            {filtradas.map(pizza => (
              <PizzaCard key={pizza.id} pizza={pizza} />
            ))}
          </div>
        ) : (
          <div className="cardapio-vazio">
            <p>🍕 Nenhuma pizza encontrada para "<strong>{busca}</strong>"</p>
          </div>
        )}

        {/* Info tamanhos */}
        <div className="cardapio-tamanhos">
          <h3>Tamanhos disponíveis</h3>
          <div className="tamanhos-grid">
            <div>
              <strong>Pequena</strong>
              <span>25 cm · 4 fatias</span>
            </div>
            <div>
              <strong>Média</strong>
              <span>30 cm · 6 fatias</span>
            </div>
            <div>
              <strong>Grande</strong>
              <span>35 cm · 8 fatias</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
