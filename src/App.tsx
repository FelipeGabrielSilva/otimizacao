
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import NavBar from './components/navbar/Navbar'
import Cadastro from './pages/cadastro/Cadastro'
import ListaCadastro from './pages/ListaCadastro'
import Home from './pages/Home'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Cadastro" element={<Cadastro/>} />
      <Route path="/ListaCadastro" element={<ListaCadastro/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
