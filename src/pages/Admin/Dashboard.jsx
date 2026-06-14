import { useState } from 'react'
import { mockPedidos, pizzas } from '../../data/pizzas'
import './Dashboard.css'

const STATUS_OPCOES = ['Aguardando', 'Em preparo', 'A caminho', 'Entregue']

export default function AdminDashboard() {
  const [pedidos, setPedidos] = useState(mockPedidos)
  const [aba, setAba] = useState('pedidos')

  const mudarStatus = (id, novoStatus) => {
    setPedidos(prev => prev.map(p => p.id === id ? { ...p, status: novoStatus } : p))
  }

  const totalHoje = pedidos.reduce((acc, p) => acc + p.total, 0)
  const totalPedidos = pedidos.length
  const entregues = pedidos.filter(p => p.status === 'Entregue').length
  const ticketMedio = totalHoje / totalPedidos

  return (
    <div className="admin-page">
      <div className="page-hero">
        <div className="container">
          <span className="section-label center-label">Painel administrativo</span>
          <h1 className="section-title center">Gestão Bella Napoli 🛠</h1>
          <p className="section-sub center">Acompanhe pedidos, cardápio e métricas da pizzaria</p>
        </div>
      </div>

      <div className="container admin-body">
        {/* MÉTRICAS */}
        <div className="admin-stats">
          <div className="admin-stat">
            <span>💰</span>
            <div><strong>R$ {totalHoje.toFixed(2).replace('.', ',')}</strong><p>Faturamento (hoje)</p></div>
          </div>
          <div className="admin-stat">
            <span>📦</span>
            <div><strong>{totalPedidos}</strong><p>Pedidos no dia</p></div>
          </div>
          <div className="admin-stat">
            <span>✅</span>
            <div><strong>{entregues}</strong><p>Pedidos entregues</p></div>
          </div>
          <div className="admin-stat">
            <span>🎯</span>
            <div><strong>R$ {ticketMedio.toFixed(2).replace('.', ',')}</strong><p>Ticket médio</p></div>
          </div>
        </div>

        {/* TABS */}
        <div className="admin-tabs">
          <button className={aba === 'pedidos' ? 'active' : ''} onClick={() => setAba('pedidos')}>📋 Pedidos</button>
          <button className={aba === 'cardapio' ? 'active' : ''} onClick={() => setAba('cardapio')}>🍕 Cardápio</button>
        </div>

        {/* PEDIDOS */}
        {aba === 'pedidos' && (
          <div className="admin-card">
            <h3>Pedidos do dia</h3>
            <div className="tabela">
              <div className="tabela__header">
                <span>Pedido</span><span>Cliente</span><span>Itens</span><span>Tipo</span><span>Total</span><span>Status</span>
              </div>
              {pedidos.map(p => (
                <div key={p.id} className="tabela__row">
                  <span className="tabela__id">{p.id}</span>
                  <span>{p.cliente}</span>
                  <span className="tabela__itens">{p.itens.join(', ')}</span>
                  <span>{p.tipo}</span>
                  <span className="tabela__total">R$ {p.total.toFixed(2).replace('.', ',')}</span>
                  <select value={p.status} onChange={e => mudarStatus(p.id, e.target.value)} className={`status-select status--${p.status.toLowerCase().replace(/ /g, '-')}`}>
                    {STATUS_OPCOES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CARDÁPIO */}
        {aba === 'cardapio' && (
          <div className="admin-card">
            <h3>Itens do cardápio</h3>
            <div className="tabela">
              <div className="tabela__header tabela__header--cardapio">
                <span>Pizza</span><span>Categoria</span><span>P</span><span>M</span><span>G</span>
              </div>
              {pizzas.map(p => (
                <div key={p.id} className="tabela__row tabela__row--cardapio">
                  <span className="tabela__pizza"><img src={p.img} alt={p.nome} />{p.nome}</span>
                  <span className="tabela__cat">{p.categoria}</span>
                  <span>R$ {p.tamanhos.P.toFixed(2).replace('.', ',')}</span>
                  <span>R$ {p.tamanhos.M.toFixed(2).replace('.', ',')}</span>
                  <span>R$ {p.tamanhos.G.toFixed(2).replace('.', ',')}</span>
                </div>
              ))}
            </div>
            <p className="admin-nota">💡 Em uma versão conectada a banco de dados, esta tela permitiria editar preços, adicionar e remover pizzas em tempo real.</p>
          </div>
        )}
      </div>
    </div>
  )
}
