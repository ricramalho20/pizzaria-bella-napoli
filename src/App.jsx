import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppProvider, useApp } from './context/AppContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import WhatsAppBtn from './components/WhatsAppBtn'
import Home from './pages/Home'
import Cardapio from './pages/Cardapio'
import Pedido from './pages/Pedido'
import Contato from './pages/Contato'
import Login from './pages/Login'
import MinhaConta from './pages/MinhaConta'
import AdminDashboard from './pages/Admin/Dashboard'
import './App.css'

function PrivateRoute({ children, adminOnly }) {
  const { user } = useApp()
  if (!user) return <Navigate to="/login" />
  if (adminOnly && user.role !== 'admin') return <Navigate to="/" />
  return children
}

function Layout() {
  return (
    <>
      <Navbar />
      <CartDrawer />
      <WhatsAppBtn />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/pedido" element={<Pedido />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/login" element={<Login />} />
          <Route path="/minha-conta" element={<PrivateRoute><MinhaConta /></PrivateRoute>} />
          <Route path="/admin" element={<PrivateRoute adminOnly><AdminDashboard /></PrivateRoute>} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </AppProvider>
  )
}
