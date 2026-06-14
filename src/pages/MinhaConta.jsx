import { useApp } from '../context/AppContext'
import { mockPedidos } from '../data/pizzas'
import './MinhaConta.css'

export default function MinhaConta() {
  const { user } = useApp()

  // Simula pedidos do cliente logado (em produção viria da API/banco)
  const meusPedidos = mockPedidos.slice(0, 3)

  return (
    <div className="conta-page">
      <div className="page-hero">
        <div className="container">
          <span className="section-label center-label">Minha conta</span>
          <h1 className="section-title center">Olá, {user.nome.split(' ')[0]}! 👋</h1>
          <p className="section-sub center">Acompanhe seus pedidos e dados</p>
        </div>
      </div>

      <div className="container conta-body">
        <div className="conta-grid">
          <div className="conta-card">
            <h3>Meus dados</h3>
            <div className="dado-linha"><span>Nome</span><strong>{user.nome}</strong></div>
            <div className="dado-linha"><span>E-mail</span><strong>{user.email}</strong></div>
            <div className="dado-linha"><span>Tipo de conta</span><strong>{user.role === 'admin' ? 'Administrador' : 'Cliente'}</strong></div>
          </div>

          <div className="conta-card conta-card--wide">
            <h3>Histórico de pedidos</h3>
            {meusPedidos.map(p => (
              <div key={p.id} className="pedido-row">
                <div>
                  <p className="pedido-row__id">{p.id}</p>
                  <p className="pedido-row__itens">{p.itens.join(', ')}</p>
                </div>
                <div className="pedido-row__meta">
                  <span className={`status status--${p.status.toLowerCase().replace(/ /g, '-')}`}>{p.status}</span>
                  <strong>R$ {p.total.toFixed(2).replace('.', ',')}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
