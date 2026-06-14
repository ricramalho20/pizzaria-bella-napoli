import { useState } from 'react'
import './Contato.css'

export default function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', assunto: '', mensagem: '' })
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = e => { e.preventDefault(); setEnviado(true) }

  return (
    <div className="contato-page">
      <div className="page-hero">
        <div className="container">
          <span className="section-label center-label">Fale conosco</span>
          <h1 className="section-title center">Contato</h1>
          <p className="section-sub center">Dúvidas, sugestões ou reservas? Estamos aqui!</p>
        </div>
      </div>

      <div className="contato-body container">
        <div className="contato-grid">
          <div>
            <div className="contato-infos">
              {[
                ['📍', 'Endereço', 'Rua das Pizzas, 42 – Centro\nSão Paulo – SP, 01310-100'],
                ['📞', 'Telefone / WhatsApp', '(11) 98765-4321'],
                ['📧', 'E-mail', 'contato@bellanapoli.com.br'],
                ['🕐', 'Horário', 'Segunda a Domingo\n18h00 – 23h30'],
              ].map(([ic, t, d]) => (
                <div key={t} className="info-item">
                  <span>{ic}</span>
                  <div>
                    <strong>{t}</strong>
                    <p style={{ whiteSpace: 'pre-line' }}>{d}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mapa fictício via OpenStreetMap embed */}
            <div className="mapa">
              <iframe
                title="Localização Bella Napoli"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-46.6600%2C-23.5510%2C-46.6400%2C-23.5410&layer=mapnik"
                width="100%"
                height="280"
                style={{ border: 'none', borderRadius: '12px' }}
                loading="lazy"
              />
              <p className="mapa-label">📍 Rua das Pizzas, 42 – Centro, São Paulo</p>
            </div>
          </div>

          <div>
            {enviado ? (
              <div className="form-sucesso">
                <span>✅</span>
                <h3>Mensagem enviada!</h3>
                <p>Responderemos em até 24 horas no e-mail informado.</p>
                <button className="btn btn-red" onClick={() => { setEnviado(false); setForm({ nome: '', email: '', assunto: '', mensagem: '' }) }}>Enviar outra mensagem</button>
              </div>
            ) : (
              <form className="contato-form" onSubmit={handleSubmit}>
                <h2>Envie uma mensagem</h2>
                {[['nome', 'text', 'Nome completo *', 'Seu nome'], ['email', 'email', 'E-mail *', 'seu@email.com'], ['assunto', 'text', 'Assunto', 'Sobre o quê?']].map(([k, t, l, pl]) => (
                  <div key={k} className="form-group">
                    <label>{l}</label>
                    <input required={l.includes('*')} type={t} value={form[k]} onChange={e => setForm({ ...form, [k]: e.target.value })} placeholder={pl} />
                  </div>
                ))}
                <div className="form-group">
                  <label>Mensagem *</label>
                  <textarea required rows={5} value={form.mensagem} onChange={e => setForm({ ...form, mensagem: e.target.value })} placeholder="Como podemos ajudar?" />
                </div>
                <button type="submit" className="btn btn-red" style={{ width: '100%', justifyContent: 'center' }}>Enviar mensagem →</button>
              </form>
            )}
          </div>
        </div>

        <div className="redes">
          <h3>Siga-nos nas redes</h3>
          <div className="redes-grid">
            {[['📸', 'Instagram', '@bellanapoli.sp'], ['👍', 'Facebook', 'Bella Napoli Pizzaria'], ['💬', 'WhatsApp', '(11) 98765-4321'], ['🎵', 'TikTok', '@bellanapoli']].map(([ic, r, h]) => (
              <div key={r} className="rede-card"><span>{ic}</span><div><strong>{r}</strong><p>{h}</p></div></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
