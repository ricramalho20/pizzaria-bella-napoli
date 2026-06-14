import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import PizzaCard from '../components/PizzaCard'
import { pizzas, depoimentos } from '../data/pizzas'
import './Home.css'

function Stars({ n }) {
  return <span className="stars">{Array.from({ length: 5 }, (_, i) => <span key={i} className={i < n ? 'on' : ''}>★</span>)}</span>
}

export default function Home() {
  const destaques = pizzas.filter(p => p.destaque)
  const [counter, setCounter] = useState({ anos: 0, pedidos: 0, nota: 0 })
  const secRef = useRef()

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        animate('anos', 14, 1200)
        animate('pedidos', 2000, 1800)
        animateFloat('nota', 4.9, 1500)
        obs.disconnect()
      }
    }, { threshold: 0.3 })
    if (secRef.current) obs.observe(secRef.current)
    return () => obs.disconnect()
  }, [])

  const animate = (key, target, dur) => {
    const step = target / (dur / 16)
    let cur = 0
    const t = setInterval(() => {
      cur = Math.min(cur + step, target)
      setCounter(p => ({ ...p, [key]: Math.floor(cur) }))
      if (cur >= target) clearInterval(t)
    }, 16)
  }

  const animateFloat = (key, target, dur) => {
    const step = target / (dur / 16)
    let cur = 0
    const t = setInterval(() => {
      cur = Math.min(cur + step, target)
      setCounter(p => ({ ...p, [key]: cur.toFixed(1) }))
      if (cur >= target) clearInterval(t)
    }, 16)
  }

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__content container">
          <span className="section-label">Autêntica Pizza Italiana</span>
          <h1 className="hero__title">Sabor que<br /><em>aquece a alma</em></h1>
          <p className="hero__desc">Massa artesanal de fermentação lenta, ingredientes frescos e o segredo da família Napoli. Para comer aqui ou receber em casa.</p>
          <div className="hero__actions">
            <Link to="/cardapio" className="btn btn-red">Ver Cardápio</Link>
            <Link to="/pedido" className="btn btn-outline">Fazer Pedido</Link>
          </div>
          <div className="hero__badges">
            <span>🔥 Forno a lenha</span>
            <span>🛵 Entrega 30 min</span>
            <span>⭐ 4.9 no Google</span>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__pizza">🍕</div>
          <div className="hero__circle" />
        </div>
      </section>

      {/* STATS */}
      <section className="stats" ref={secRef}>
        <div className="container stats__grid">
          <div className="stat"><strong>+{counter.anos}</strong><span>anos de tradição</span></div>
          <div className="stat-div" />
          <div className="stat"><strong>+{counter.pedidos.toLocaleString()}</strong><span>pedidos entregues</span></div>
          <div className="stat-div" />
          <div className="stat"><strong>{counter.nota} ⭐</strong><span>avaliação média</span></div>
          <div className="stat-div" />
          <div className="stat"><strong>40 min</strong><span>tempo máx. entrega</span></div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="difs">
        <div className="container difs__grid">
          {[
            { icon: '🌾', t: 'Massa Artesanal', d: 'Fermentada por 48h para leveza e sabor únicos em cada mordida.' },
            { icon: '🍅', t: 'Ingredientes Frescos', d: 'Selecionamos os melhores tomates San Marzano importados.' },
            { icon: '🔥', t: 'Forno a Lenha', d: 'Assadas a 450°C por apenas 90 segundos, no ponto perfeito.' },
            { icon: '🛵', t: 'Entrega Garantida', d: 'Máximo 40 minutos ou seu próximo pedido é por nossa conta.' },
          ].map(d => (
            <div key={d.t} className="dif">
              <span>{d.icon}</span>
              <h3>{d.t}</h3>
              <p>{d.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DESTAQUES */}
      <section className="section-pad bg-cinza">
        <div className="container">
          <span className="section-label center-label">Mais pedidas</span>
          <h2 className="section-title center">Nossas Favoritas</h2>
          <p className="section-sub center">As pizzas que nossos clientes mais amam</p>
          <div className="cards-grid">
            {destaques.map(p => <PizzaCard key={p.id} pizza={p} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/cardapio" className="btn btn-outline">Ver cardápio completo →</Link>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="sobre">
        <div className="container sobre__inner">
          <div className="sobre__img">
            <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&h=500&fit=crop&auto=format" alt="Pizzaria" />
          </div>
          <div className="sobre__text">
            <span className="section-label">Nossa História</span>
            <h2 className="section-title">De Nápoles<br />para sua mesa</h2>
            <p>Em 2010, a família Napoli trouxe da Itália a receita que atravessou gerações: massa de fermentação lenta, molho de tomate artesanal e o amor que só se encontra em uma cozinha de família.</p>
            <p>Hoje, com mais de 14 anos de tradição, continuamos fiéis à origem — cada pizza é uma homenagem ao sabor autêntico da Campânia italiana.</p>
            <Link to="/contato" className="btn btn-red" style={{ marginTop: '1.5rem' }}>Fale Conosco</Link>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="section-pad bg-cinza">
        <div className="container">
          <span className="section-label center-label">O que dizem</span>
          <h2 className="section-title center">Avaliações dos Clientes</h2>
          <p className="section-sub center">Mais de 2.000 avaliações 5 estrelas</p>
          <div className="reviews-grid">
            {depoimentos.map(d => (
              <div key={d.id} className="review">
                <div className="review__top">
                  <div className="review__av" style={{ background: d.cor }}>{d.av}</div>
                  <div>
                    <p className="review__name">{d.nome}</p>
                    <p className="review__pizza">🍕 {d.pizza}</p>
                  </div>
                  <div className="review__meta">
                    <Stars n={d.estrelas} />
                    <span className="review__date">{d.data}</span>
                  </div>
                </div>
                <p className="review__text">"{d.texto}"</p>
                {d.ok && <span className="review__verified">✓ Compra verificada</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-final">
        <div className="container">
          <h2>Pronto para pedir? 🍕</h2>
          <p>Receba sua pizza favorita quentinha em até 40 minutos.</p>
          <Link to="/pedido" className="btn btn-white">Fazer Pedido Agora</Link>
        </div>
      </section>
    </div>
  )
}
