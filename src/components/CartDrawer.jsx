import { useApp } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import './CartDrawer.css'

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, removeFromCart, updateQty, cartTotal, clearCart, TAMANHO_KEY } = useApp()
  const navigate = useNavigate()

  const ir = () => { setCartOpen(false); navigate('/pedido') }

  return (
    <>
      <div className={`cart-overlay ${cartOpen ? 'open' : ''}`} onClick={() => setCartOpen(false)} />
      <div className={`cart-drawer ${cartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h3>🛒 Seu carrinho</h3>
          <button onClick={() => setCartOpen(false)}>✕</button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <span>🍕</span>
            <p>Seu carrinho está vazio</p>
            <button className="btn btn-red" onClick={() => { setCartOpen(false); navigate('/cardapio') }}>Ver cardápio</button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.key} className="cart-item">
                  <img src={item.pizza.img} alt={item.pizza.nome} />
                  <div className="cart-item__info">
                    <p className="cart-item__name">{item.pizza.nome}</p>
                    <p className="cart-item__size">{item.tamanho}</p>
                    <p className="cart-item__price">R$ {(item.pizza.tamanhos[TAMANHO_KEY[item.tamanho]] * item.quantidade).toFixed(2).replace('.', ',')}</p>
                  </div>
                  <div className="cart-item__qty">
                    <button onClick={() => updateQty(item.key, item.quantidade - 1)}>−</button>
                    <span>{item.quantidade}</span>
                    <button onClick={() => updateQty(item.key, item.quantidade + 1)}>+</button>
                  </div>
                  <button className="cart-item__del" onClick={() => removeFromCart(item.key)}>🗑</button>
                </div>
              ))}
            </div>
            <div className="cart-footer">
              <div className="cart-total">
                <span>Total</span>
                <strong>R$ {cartTotal.toFixed(2).replace('.', ',')}</strong>
              </div>
              <button className="btn btn-red" style={{ width: '100%' }} onClick={ir}>Finalizar pedido →</button>
              <button className="cart-clear" onClick={clearCart}>Limpar carrinho</button>
            </div>
          </>
        )}
      </div>
    </>
  )
}
