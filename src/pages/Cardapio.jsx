import { useState } from 'react'
import PizzaCard from '../components/PizzaCard'
import { pizzas, categorias } from '../data/pizzas'
import './Cardapio.css'

export default function Cardapio() {
  const [cat, setCat] = useState('todas')
  const [busca, setBusca] = useState('')

  const lista = pizzas.filter(p =>
    (cat === 'todas' || p.categoria === cat) &&
    (p.nome.toLowerCase().includes(busca.toLowerCase()) || p.descricao.toLowerCase().includes(busca.toLowerCase()))
  )

  return (
    <div className="cardapio-page">
      <div className="page-hero">
        <div className="container">
          <span className="section-label center-label">Escolha a sua</span>
          <h1 className="section-title center">Nosso Cardápio</h1>
          <p className="section-sub center">Pizzas artesanais com ingredientes selecionados e massa de fermentação lenta</p>
        </div>
      </div>

      <div className="container cardapio-body">
        <div className="cardapio-filtros">
          <div className="cats">
            {categorias.map(c => (
              <button key={c.id} className={`cat-btn ${cat === c.id ? 'active' : ''}`} onClick={() => setCat(c.id)}>{c.label}</button>
            ))}
          </div>
          <input type="search" placeholder="🔍 Buscar pizza..." value={busca} onChange={e => setBusca(e.target.value)} className="busca-input" />
        </div>

        {lista.length > 0
          ? <div className="cards-grid">{lista.map(p => <PizzaCard key={p.id} pizza={p} />)}</div>
          : <div className="vazio"><p>🍕 Nenhuma pizza encontrada</p></div>
        }

        <div className="tamanhos-info">
          <h3>Tamanhos disponíveis</h3>
          <div className="tamanhos-grid">
            {[['Pequena', '25 cm', '4 fatias', '1–2 pessoas'], ['Média', '30 cm', '6 fatias', '2–3 pessoas'], ['Grande', '35 cm', '8 fatias', '3–4 pessoas']].map(([t, cm, f, p]) => (
              <div key={t} className="tamanho-item">
                <strong>{t}</strong>
                <span>{cm} · {f}</span>
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
