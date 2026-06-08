import { useState } from 'react'
import { pizzas } from '../data/pizzas'
import './Pedido.css'

const TAMANHOS = ['Pequena', 'Média', 'Grande']

const TAMANHO_KEY = { Pequena: 'P', Média: 'M', Grande: 'G' }

export default function Pedido() {
  const [itens, setItens] = useState([{ pizzaId: 1, tamanho: 'Média', quantidade: 1 }])
  const [tipo, setTipo] = useState('entrega')
  const [form, setForm] = useState({ nome: '', telefone: '', endereco: '', obs: '' })
  const [enviado, setEnviado] = useState(false)

  const addItem = () => setItens([...itens, { pizzaId: 1, tamanho: 'Média', quantidade: 1 }])

  const removeItem = (idx) => setItens(itens.filter((_, i) => i !== idx))

  const updateItem = (idx, field, value) => {
    const novos = [...itens]
    novos[idx] = { ...novos[idx], [field]: value }
    setItens(novos)
  }

  const calcSubtotal = (item) => {
    const pizza = pizzas.find(p => p.id === Number(item.pizzaId))
    if (!pizza) return 0
    return pizza.tamanhos[TAMANHO_KEY[item.tamanho]] * item.quantidade
  }

  const total = itens.reduce((acc, item) => acc + calcSubtotal(item), 0)
  const entrega = tipo === 'entrega' ? 6.90 : 0

  const handleSubmit = (e) => {
    e.preventDefault()
    setEnviado(true)
  }

  if (enviado) {
    return (
      <div className="pedido-page">
        <div className="pedido-sucesso container">
          <span className="pedido-sucesso__icon">🎉</span>
          <h2>Pedido Confirmado!</h2>
          <p>
            Obrigado, <strong>{form.nome}</strong>! Seu pedido foi recebido e está sendo preparado.
            Em breve entraremos em contato pelo número <strong>{form.telefone}</strong>.
          </p>
          <p className="pedido-sucesso__tempo">
            {tipo === 'entrega' ? '⏱ Previsão de entrega: 30–40 minutos' : '⏱ Retirada disponível em: 20 minutos'}
          </p>
          <button className="btn-primary" onClick={() => { setEnviado(false); setForm({ nome: '', telefone: '', endereco: '', obs: '' }); setItens([{ pizzaId: 1, tamanho: 'Média', quantidade: 1 }]) }}>
            Fazer Novo Pedido
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="pedido-page">
      <div className="pedido-hero">
        <div className="container">
          <div className="ornament">✦</div>
          <h1 className="section-title">Fazer Pedido</h1>
          <p className="section-subtitle">Monte seu pedido e receba em casa ou retire na loja</p>
        </div>
      </div>

      <form className="pedido-body container" onSubmit={handleSubmit}>
        <div className="pedido-grid">
          {/* COLUNA ESQUERDA */}
          <div>
            {/* Tipo */}
            <div className="pedido-card">
              <h3 className="pedido-card__title">Tipo de pedido</h3>
              <div className="tipo-tabs">
                <button
                  type="button"
                  className={`tipo-tab ${tipo === 'entrega' ? 'active' : ''}`}
                  onClick={() => setTipo('entrega')}
                >
                  🛵 Entrega
                </button>
                <button
                  type="button"
                  className={`tipo-tab ${tipo === 'retirada' ? 'active' : ''}`}
                  onClick={() => setTipo('retirada')}
                >
                  🏪 Retirada
                </button>
              </div>
            </div>

            {/* Itens */}
            <div className="pedido-card">
              <h3 className="pedido-card__title">Pizzas</h3>
              {itens.map((item, idx) => (
                <div key={idx} className="pedido-item">
                  <select
                    value={item.pizzaId}
                    onChange={e => updateItem(idx, 'pizzaId', e.target.value)}
                    className="pedido-select"
                  >
                    {pizzas.map(p => (
                      <option key={p.id} value={p.id}>{p.emoji} {p.nome}</option>
                    ))}
                  </select>
                  <select
                    value={item.tamanho}
                    onChange={e => updateItem(idx, 'tamanho', e.target.value)}
                    className="pedido-select pedido-select--sm"
                  >
                    {TAMANHOS.map(t => <option key={t}>{t}</option>)}
                  </select>
                  <div className="pedido-qty">
                    <button type="button" onClick={() => updateItem(idx, 'quantidade', Math.max(1, item.quantidade - 1))}>−</button>
                    <span>{item.quantidade}</span>
                    <button type="button" onClick={() => updateItem(idx, 'quantidade', item.quantidade + 1)}>+</button>
                  </div>
                  <span className="pedido-item__preco">
                    R$ {calcSubtotal(item).toFixed(2).replace('.', ',')}
                  </span>
                  {itens.length > 1 && (
                    <button type="button" className="pedido-item__remove" onClick={() => removeItem(idx)}>✕</button>
                  )}
                </div>
              ))}
              <button type="button" className="btn-add-item" onClick={addItem}>
                + Adicionar pizza
              </button>
            </div>

            {/* Dados */}
            <div className="pedido-card">
              <h3 className="pedido-card__title">Seus dados</h3>
              <div className="form-group">
                <label>Nome completo *</label>
                <input
                  required
                  type="text"
                  value={form.nome}
                  onChange={e => setForm({ ...form, nome: e.target.value })}
                  placeholder="João Silva"
                />
              </div>
              <div className="form-group">
                <label>Telefone / WhatsApp *</label>
                <input
                  required
                  type="tel"
                  value={form.telefone}
                  onChange={e => setForm({ ...form, telefone: e.target.value })}
                  placeholder="(11) 99999-0000"
                />
              </div>
              {tipo === 'entrega' && (
                <div className="form-group">
                  <label>Endereço de entrega *</label>
                  <input
                    required={tipo === 'entrega'}
                    type="text"
                    value={form.endereco}
                    onChange={e => setForm({ ...form, endereco: e.target.value })}
                    placeholder="Rua, número, bairro"
                  />
                </div>
              )}
              <div className="form-group">
                <label>Observações</label>
                <textarea
                  value={form.obs}
                  onChange={e => setForm({ ...form, obs: e.target.value })}
                  placeholder="Sem cebola, borda recheada..."
                  rows={3}
                />
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: RESUMO */}
          <div>
            <div className="pedido-resumo">
              <h3 className="pedido-card__title">Resumo do pedido</h3>
              {itens.map((item, idx) => {
                const pizza = pizzas.find(p => p.id === Number(item.pizzaId))
                return (
                  <div key={idx} className="resumo-linha">
                    <span>{pizza?.emoji} {pizza?.nome} ({item.tamanho}) ×{item.quantidade}</span>
                    <span>R$ {calcSubtotal(item).toFixed(2).replace('.', ',')}</span>
                  </div>
                )
              })}
              <div className="resumo-separador" />
              {tipo === 'entrega' && (
                <div className="resumo-linha resumo-linha--taxa">
                  <span>Taxa de entrega</span>
                  <span>R$ 6,90</span>
                </div>
              )}
              <div className="resumo-total">
                <span>Total</span>
                <strong>R$ {(total + entrega).toFixed(2).replace('.', ',')}</strong>
              </div>

              <div className="resumo-pagamento">
                <p className="resumo-pagamento__label">Pagamento na entrega</p>
                <div className="pagamento-opcoes">
                  {['💳 Cartão', '💵 Dinheiro', '📱 Pix'].map(m => (
                    <span key={m} className="pagamento-opcao">{m}</span>
                  ))}
                </div>
              </div>

              <button type="submit" className="btn-primary btn-confirmar">
                Confirmar Pedido →
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
