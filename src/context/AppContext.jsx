import { createContext, useContext, useState, useEffect } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('bn_user')) || null } catch { return null }
  })
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('bn_user', JSON.stringify(user))
  }, [user])

  // Usuários mock (em produção viria de API)
  const USERS = [
    { id: 1, nome: 'Cliente Teste', email: 'cliente@teste.com', senha: '123456', role: 'cliente', pedidos: [] },
    { id: 2, nome: 'Admin', email: 'admin@bellanapoli.com', senha: 'admin123', role: 'admin', pedidos: [] },
  ]

  const login = (email, senha) => {
    const found = USERS.find(u => u.email === email && u.senha === senha)
    if (found) { setUser(found); return { ok: true, user: found } }
    return { ok: false, msg: 'E-mail ou senha incorretos.' }
  }

  const logout = () => setUser(null)

  const addToCart = (pizza, tamanho, quantidade) => {
    setCart(prev => {
      const key = `${pizza.id}-${tamanho}`
      const exists = prev.find(i => i.key === key)
      if (exists) return prev.map(i => i.key === key ? { ...i, quantidade: i.quantidade + quantidade } : i)
      return [...prev, { key, pizza, tamanho, quantidade }]
    })
    setCartOpen(true)
  }

  const removeFromCart = (key) => setCart(prev => prev.filter(i => i.key !== key))

  const updateQty = (key, qty) => {
    if (qty < 1) return removeFromCart(key)
    setCart(prev => prev.map(i => i.key === key ? { ...i, quantidade: qty } : i))
  }

  const clearCart = () => setCart([])

  const TAMANHO_KEY = { Pequena: 'P', Média: 'M', Grande: 'G' }
  const cartTotal = cart.reduce((acc, i) => acc + i.pizza.tamanhos[TAMANHO_KEY[i.tamanho]] * i.quantidade, 0)
  const cartCount = cart.reduce((acc, i) => acc + i.quantidade, 0)

  return (
    <AppContext.Provider value={{ user, login, logout, cart, cartOpen, setCartOpen, addToCart, removeFromCart, updateQty, clearCart, cartTotal, cartCount, TAMANHO_KEY }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
