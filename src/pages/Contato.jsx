import { useState } from 'react'
import './Contato.css'

export default function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <div className="contato-page">
      <div className="contato-hero">
        <div className="container">
          <div className="ornament">✦</div>
          <h1 className="section-title">Fale Conosco</h1>
          <p className="section-subtitle">Dúvidas, sugestões ou reservas? Estamos aqui para ajudar.</p>
        </div>
      </div>

      <div className="contato-body container">
        <div className="contato-grid">
          {/* INFOS */}
          <div className="contato-infos">
            <h2>Onde estamos</h2>
            <div className="info-item">
              <span className="info-item__icon">📍</span>
              <div>
                <strong>Endereço</strong>
                <p>Rua das Pizzas, 42 – Centro<br />São Paulo – SP, 01310-100</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-item__icon">📞</span>
              <div>
                <strong>Telefone / WhatsApp</strong>
                <p>(11) 98765-4321</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-item__icon">📧</span>
              <div>
                <strong>E-mail</strong>
                <p>contato@bellanapoli.com.br</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-item__icon">🕐</span>
              <div>
                <strong>Horário de funcionamento</strong>
                <p>Segunda a Domingo<br />18h00 – 23h30</p>
              </div>
            </div>

            <div className="contato-mapa">
              <div className="mapa-placeholder">
                <span>🗺️</span>
                <p>Rua das Pizzas, 42 – Centro, SP</p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div>
            {enviado ? (
              <div className="contato-sucesso">
                <span>✅</span>
                <h3>Mensagem enviada!</h3>
                <p>Obrigado pelo contato. Responderemos em até 24 horas.</p>
                <button
                  className="btn-primary"
                  onClick={() => { setEnviado(false); setForm({ nome: '', email: '', mensagem: '' }) }}
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form className="contato-form" onSubmit={handleSubmit}>
                <h2>Envie uma mensagem</h2>
                <div className="form-group">
                  <label>Nome *</label>
                  <input
                    required
                    type="text"
                    value={form.nome}
                    onChange={e => setForm({ ...form, nome: e.target.value })}
                    placeholder="Seu nome completo"
                  />
                </div>
                <div className="form-group">
                  <label>E-mail *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="seu@email.com"
                  />
                </div>
                <div className="form-group">
                  <label>Mensagem *</label>
                  <textarea
                    required
                    rows={6}
                    value={form.mensagem}
                    onChange={e => setForm({ ...form, mensagem: e.target.value })}
                    placeholder="Como podemos ajudar?"
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  Enviar mensagem →
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Redes sociais */}
        <div className="contato-redes">
          <h3>Siga-nos nas redes sociais</h3>
          <div className="redes-grid">
            {[
              { icon: '📸', nome: '@bellanapoli.sp', rede: 'Instagram' },
              { icon: '👍', nome: 'Bella Napoli Pizzaria', rede: 'Facebook' },
              { icon: '💬', nome: '(11) 98765-4321', rede: 'WhatsApp' },
            ].map(r => (
              <div key={r.rede} className="rede-card">
                <span className="rede-card__icon">{r.icon}</span>
                <div>
                  <strong>{r.rede}</strong>
                  <p>{r.nome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
