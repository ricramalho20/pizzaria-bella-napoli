import { Link } from 'react-router-dom'
import PizzaCard from '../components/PizzaCard'
import { pizzas, depoimentos } from '../data/pizzas'
import './Home.css'

export default function Home() {
  const destaques = pizzas.filter(p => p.destaque)

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__pattern" />
        </div>
        <div className="hero__content container">
          <p className="hero__super">Autêntica Pizza Italiana</p>
          <h1 className="hero__title">
            Sabor que<br />
            <em>aquece a alma</em>
          </h1>
          <p className="hero__desc">
            Massa artesanal, ingredientes frescos e o segredo da família Napoli.
            Para comer aqui ou receber em casa.
          </p>
          <div className="hero__actions">
            <Link to="/cardapio" className="btn-primary">Ver Cardápio</Link>
            <Link to="/pedido" className="btn-secondary">Fazer Pedido</Link>
          </div>
          <div className="hero__stats">
            <div><strong>+14 anos</strong><span>de tradição</span></div>
            <div className="divider" />
            <div><strong>4,9 ⭐</strong><span>avaliação média</span></div>
            <div className="divider" />
            <div><strong>30 min</strong><span>tempo de entrega</span></div>
          </div>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__pizza-circle">🍕</div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="diferenciais">
        <div className="container">
          <div className="diferenciais__grid">
            {[
              { icon: '🌾', titulo: 'Massa Artesanal', texto: 'Fermentada por 48h para leveza e sabor únicos.' },
              { icon: '🍅', titulo: 'Ingredientes Frescos', texto: 'Selecionamos os melhores tomates San Marzano.' },
              { icon: '🔥', titulo: 'Forno a Lenha', texto: 'Assadas no ponto certo a 450°C de temperatura.' },
              { icon: '🛵', titulo: 'Entrega Rápida', texto: 'Máximo 40 minutos ou seu próximo pedido é grátis.' },
            ].map((d) => (
              <div key={d.titulo} className="diferencial-card">
                <span className="diferencial-card__icon">{d.icon}</span>
                <h3 className="diferencial-card__title">{d.titulo}</h3>
                <p className="diferencial-card__text">{d.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTAQUES */}
      <section className="destaques">
        <div className="container">
          <div className="ornament">✦</div>
          <h2 className="section-title">Nossas Favoritas</h2>
          <p className="section-subtitle">As pizzas mais pedidas da Bella Napoli</p>
          <div className="destaques__grid">
            {destaques.map(pizza => (
              <PizzaCard key={pizza.id} pizza={pizza} />
            ))}
          </div>
          <div className="destaques__cta">
            <Link to="/cardapio" className="btn-secondary">Ver Cardápio Completo →</Link>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="sobre">
        <div className="container sobre__inner">
          <div className="sobre__visual" aria-hidden="true">
            <div className="sobre__frame">
              <span>🍕</span>
            </div>
          </div>
          <div className="sobre__text">
            <div className="ornament">✦</div>
            <h2 className="section-title" style={{ textAlign: 'left' }}>Nossa História</h2>
            <p>
              Em 2010, a família Napoli trouxe da Itália a receita que atravessou gerações:
              massa de fermentação lenta, molho de tomate artesanal e o amor que só se encontra
              em uma cozinha de família.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Hoje, com mais de 14 anos de tradição, continuamos fiéis à origem — cada pizza
              é uma homenagem ao sabor autêntico da Campânia italiana.
            </p>
            <Link to="/contato" className="btn-primary" style={{ marginTop: '1.75rem', display: 'inline-block' }}>
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="depoimentos">
        <div className="container">
          <div className="ornament">✦</div>
          <h2 className="section-title">O que dizem nossos clientes</h2>
          <p className="section-subtitle">Mais de 2.000 avaliações 5 estrelas</p>
          <div className="depoimentos__grid">
            {depoimentos.map(d => (
              <div key={d.id} className="depoimento-card">
                <p className="depoimento-card__estrelas">{'⭐'.repeat(d.estrelas)}</p>
                <p className="depoimento-card__texto">"{d.texto}"</p>
                <p className="depoimento-card__nome">— {d.nome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-final">
        <div className="container">
          <h2>Pronto para pedir?</h2>
          <p>Receba sua pizza favorita em até 40 minutos.</p>
          <Link to="/pedido" className="btn-primary">Fazer Pedido Agora</Link>
        </div>
      </section>
    </div>
  )
}
