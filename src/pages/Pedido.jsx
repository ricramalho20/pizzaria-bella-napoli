import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { pizzas } from '../data/pizzas'
import './Pedido.css'

const TAMANHOS = ['Pequena', 'Média', 'Grande']
const KEYS = { Pequena: 'P', Média: 'M', Grande: 'G' }

function CardForm() {
  const [num, setNum] = useState('')
  const formatNum = v => v.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim()
  return (
    <div className="card-form">
      <div className="form-group">
        <label>Número do cartão</label>
        <input value={num} onChange={e => setNum(formatNum(e.target.value))} placeholder="0000 0000 0000 0000" maxLength={19} />
        <div className="card-brands">
          <span className="cb cb-visa">VISA</span>
          <span className="cb cb-master">MC</span>
          <span className="cb cb-elo">ELO</span>
          <span className="cb cb-amex">AMEX</span>
        </div>
      </div>
      <div className="form-group">
        <label>Nome no cartão</label>
        <input placeholder="NOME SOBRENOME" style={{ textTransform: 'uppercase' }} />
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Validade</label>
          <input placeholder="MM/AA" maxLength={5} />
        </div>
        <div className="form-group">
          <label>CVV</label>
          <input placeholder="123" maxLength={4} type="password" />
        </div>
      </div>
    </div>
  )
}

function QrCode() {
  return (
    <div className="qr-wrap">
      <div className="qr-box">
        <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className="qr-svg">
          <rect width="120" height="120" fill="white"/>
          <rect x="10" y="10" width="40" height="40" fill="none" stroke="#333" strokeWidth="4"/>
          <rect x="18" y="18" width="24" height="24" fill="#333"/>
          <rect x="70" y="10" width="40" height="40" fill="none" stroke="#333" strokeWidth="4"/>
          <rect x="78" y="18" width="24" height="24" fill="#333"/>
          <rect x="10" y="70" width="40" height="40" fill="none" stroke="#333" strokeWidth="4"/>
          <rect x="18" y="78" width="24" height="24" fill="#333"/>
          <rect x="70" y="70" width="8" height="8" fill="#333"/>
          <rect x="82" y="70" width="8" height="8" fill="#333"/>
          <rect x="94" y="70" width="16" height="8" fill="#333"/>
          <rect x="70" y="82" width="16" height="8" fill="#333"/>
          <rect x="90" y="82" width="8" height="8" fill="#333"/>
          <rect x="102" y="82" width="8" height="8" fill="#333"/>
          <rect x="70" y="94" width="8" height="16" fill="#333"/>
          <rect x="82" y="100" width="28" height="10" fill="#333"/>
        </svg>
      </div>
      <p className="qr-key">Chave Pix: <strong>11987654321</strong></p>
      <p className="qr-tip">Abra o app do seu banco, escaneie o QR Code ou copie a chave Pix acima.</p>
      <div className="qr-banks">
        <span>🏦 Itaú</span><span>🏦 Bradesco</span><span>🟣 Nubank</span><span>🔵 BB</span><span>🟢 Caixa</span>
      </div>
    </div>
  )
}

export default function Pedido() {
  const { cart, cartTotal, clearCart, TAMANHO_KEY } = useApp()
  const [itens, setItens] = useState([{ pizzaId: 1, tamanho: 'Média', quantidade: 1 }])
  const [tipo, setTipo] = useState('entrega')
  const [pagamento, setPagamento] = useState('credito')
  const [form, setForm] = useState({ nome: '', telefone: '', endereco: '', obs: '' })
  const [enviado, setEnviado] = useState(false)
  const [pedidoNum] = useState(() => Math.floor(Math.random() * 900) + 100)

  const useCart = cart.length > 0

  const calcSub = item => {
    const p = pizzas.find(p => p.id === Number(item.pizzaId))
    return p ? p.tamanhos[KEYS[item.tamanho]] * item.quantidade : 0
  }

  const manualTotal = itens.reduce((a, i) => a + calcSub(i), 0)
  const total = useCart ? cartTotal : manualTotal
  const taxa = tipo === 'entrega' ? 6.90 : 0

  const addItem = () => setItens([...itens, { pizzaId: 1, tamanho: 'Média', quantidade: 1 }])
  const removeItem = i => setItens(itens.filter((_, idx) => idx !== i))
  const updateItem = (i, f, v) => { const n = [...itens]; n[i] = { ...n[i], [f]: v }; setItens(n) }

  const handleSubmit = e => { e.preventDefault(); setEnviado(true); if (useCart) clearCart() }

  if (enviado) return (
    <div className="pedido-page">
      <div className="sucesso container">
        <div className="sucesso__icon">🎉</div>
        <h2>Pedido #{pedidoNum} confirmado!</h2>
        <p>Obrigado, <strong>{form.nome || 'cliente'}</strong>! Seu pedido foi recebido e está sendo preparado com carinho.</p>
        <div className="sucesso__timer">
          <span className="sucesso__timer-icon">⏱</span>
          <div>
            <strong>{tipo === 'entrega' ? 'Previsão de entrega: 30–40 min' : 'Pronto para retirada em: 20 min'}</strong>
            <p>Acompanhe pelo WhatsApp: (11) 98765-4321</p>
          </div>
        </div>
        <button className="btn btn-red" onClick={() => { setEnviado(false); setForm({ nome: '', telefone: '', endereco: '', obs: '' }) }}>Fazer novo pedido</button>
      </div>
    </div>
  )

  return (
    <div className="pedido-page">
      <div className="page-hero">
        <div className="container">
          <span className="section-label center-label">Monte seu pedido</span>
          <h1 className="section-title center">Fazer Pedido</h1>
          <p className="section-sub center">Entrega ou retirada — você escolhe!</p>
        </div>
      </div>

      <form className="pedido-body container" onSubmit={handleSubmit}>
        <div className="pedido-grid">
          <div className="pedido-left">

            {/* TIPO */}
            <div className="pedido-card">
              <h3>Tipo de pedido</h3>
              <div className="tipo-tabs">
                {[['entrega', '🛵', 'Entrega em casa'], ['retirada', '🏪', 'Retirar na loja']].map(([v, ic, l]) => (
                  <button key={v} type="button" className={`tipo-tab ${tipo === v ? 'active' : ''}`} onClick={() => setTipo(v)}>
                    <span>{ic}</span>{l}
                  </button>
                ))}
              </div>
            </div>

            {/* ITENS */}
            {!useCart && (
              <div className="pedido-card">
                <h3>Pizzas</h3>
                {itens.map((item, idx) => (
                  <div key={idx} className="pedido-item">
                    <select value={item.pizzaId} onChange={e => updateItem(idx, 'pizzaId', e.target.value)} className="ped-select">
                      {pizzas.map(p => <option key={p.id} value={p.id}>{p.nome}</option>)}
                    </select>
                    <select value={item.tamanho} onChange={e => updateItem(idx, 'tamanho', e.target.value)} className="ped-select ped-select--sm">
                      {TAMANHOS.map(t => <option key={t}>{t}</option>)}
                    </select>
                    <div className="qty-ctrl">
                      <button type="button" onClick={() => updateItem(idx, 'quantidade', Math.max(1, item.quantidade - 1))}>−</button>
                      <span>{item.quantidade}</span>
                      <button type="button" onClick={() => updateItem(idx, 'quantidade', item.quantidade + 1)}>+</button>
                    </div>
                    <span className="item-preco">R$ {calcSub(item).toFixed(2).replace('.', ',')}</span>
                    {itens.length > 1 && <button type="button" className="item-del" onClick={() => removeItem(idx)}>✕</button>}
                  </div>
                ))}
                <button type="button" className="add-item-btn" onClick={addItem}>+ Adicionar pizza</button>
              </div>
            )}

            {useCart && (
              <div className="pedido-card">
                <h3>Itens do carrinho</h3>
                {cart.map(item => (
                  <div key={item.key} className="cart-line">
                    <img src={item.pizza.img} alt={item.pizza.nome} />
                    <div>
                      <p>{item.pizza.nome} — {item.tamanho} ×{item.quantidade}</p>
                      <p className="cart-line__price">R$ {(item.pizza.tamanhos[TAMANHO_KEY[item.tamanho]] * item.quantidade).toFixed(2).replace('.', ',')}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* DADOS */}
            <div className="pedido-card">
              <h3>Seus dados</h3>
              <div className="form-group">
                <label>Nome completo *</label>
                <input required value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} placeholder="João Silva" />
              </div>
              <div className="form-group">
                <label>Telefone / WhatsApp *</label>
                <input required value={form.telefone} onChange={e => setForm({ ...form, telefone: e.target.value })} placeholder="(11) 99999-0000" />
              </div>
              {tipo === 'entrega' && (
                <div className="form-group">
                  <label>Endereço completo *</label>
                  <input required value={form.endereco} onChange={e => setForm({ ...form, endereco: e.target.value })} placeholder="Rua, número, bairro, complemento" />
                </div>
              )}
              <div className="form-group">
                <label>Observações</label>
                <textarea value={form.obs} onChange={e => setForm({ ...form, obs: e.target.value })} placeholder="Sem cebola, borda recheada, molho extra..." rows={3} />
              </div>
            </div>

            {/* PAGAMENTO */}
            <div className="pedido-card">
              <h3>Forma de pagamento</h3>
              <div className="pay-tabs">
                {[['credito', '💳', 'Crédito'], ['debito', '💳', 'Débito'], ['pix', '📱', 'Pix'], ['dinheiro', '💵', 'Dinheiro']].map(([v, ic, l]) => (
                  <button key={v} type="button" className={`pay-tab ${pagamento === v ? 'active' : ''}`} onClick={() => setPagamento(v)}>
                    {ic} {l}
                  </button>
                ))}
              </div>
              {(pagamento === 'credito' || pagamento === 'debito') && <CardForm />}
              {pagamento === 'pix' && <QrCode />}
              {pagamento === 'dinheiro' && (
                <div className="troco-info">
                  <p>💵 Pagamento na entrega em dinheiro.</p>
                  <div className="form-group" style={{ marginTop: '1rem' }}>
                    <label>Troco para</label>
                    <input placeholder="R$ 0,00" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RESUMO */}
          <div className="pedido-resumo">
            <h3>Resumo do pedido</h3>
            {useCart
              ? cart.map(item => (
                <div key={item.key} className="resumo-linha">
                  <span>{item.pizza.nome} ({item.tamanho}) ×{item.quantidade}</span>
                  <span>R$ {(item.pizza.tamanhos[TAMANHO_KEY[item.tamanho]] * item.quantidade).toFixed(2).replace('.', ',')}</span>
                </div>
              ))
              : itens.map((item, idx) => {
                const p = pizzas.find(p => p.id === Number(item.pizzaId))
                return p ? (
                  <div key={idx} className="resumo-linha">
                    <span>{p.nome} ({item.tamanho}) ×{item.quantidade}</span>
                    <span>R$ {calcSub(item).toFixed(2).replace('.', ',')}</span>
                  </div>
                ) : null
              })
            }
            <div className="resumo-sep" />
            <div className="resumo-linha">
              <span>Subtotal</span>
              <span>R$ {total.toFixed(2).replace('.', ',')}</span>
            </div>
            {tipo === 'entrega' && (
              <div className="resumo-linha resumo-taxa">
                <span>Taxa de entrega</span>
                <span>R$ 6,90</span>
              </div>
            )}
            <div className="resumo-total">
              <span>Total</span>
              <strong>R$ {(total + taxa).toFixed(2).replace('.', ',')}</strong>
            </div>
            <div className="resumo-info">
              <p>{tipo === 'entrega' ? '🛵 Entrega em 30–40 min' : '🏪 Retirada em 20 min'}</p>
            </div>
            <button type="submit" className="btn btn-red" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}>
              Confirmar Pedido →
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
