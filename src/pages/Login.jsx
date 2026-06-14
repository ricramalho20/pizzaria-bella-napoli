import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import './Login.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const { login } = useApp()
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    const res = login(email, senha)
    if (res.ok) {
      navigate(res.user.role === 'admin' ? '/admin' : '/minha-conta')
    } else {
      setErro(res.msg)
    }
  }

  const preencher = (em, sn) => { setEmail(em); setSenha(sn); setErro('') }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <span>🍕</span>
          <h1>Bella Napoli</h1>
          <p>Entre na sua conta para acompanhar pedidos</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>E-mail</label>
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="seu@email.com" />
          </div>
          <div className="form-group">
            <label>Senha</label>
            <input type="password" required value={senha} onChange={e => setSenha(e.target.value)} placeholder="••••••••" />
          </div>
          {erro && <p className="login-erro">{erro}</p>}
          <button type="submit" className="btn btn-red" style={{ width: '100%', justifyContent: 'center' }}>Entrar</button>
        </form>

        <div className="login-demo">
          <p>Contas de demonstração:</p>
          <button type="button" onClick={() => preencher('cliente@teste.com', '123456')}>👤 Cliente — cliente@teste.com / 123456</button>
          <button type="button" onClick={() => preencher('admin@bellanapoli.com', 'admin123')}>🛠 Admin — admin@bellanapoli.com / admin123</button>
        </div>

        <Link to="/" className="login-back">← Voltar para o site</Link>
      </div>
    </div>
  )
}
