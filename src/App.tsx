
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import NavBar from './components/navbar/Navbar'
import Cadastro from './pages/cadastro/Cadastro'
import ListaCadastro from './pages/listaCadastro/ListaCadastro'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import AdmCadastro from './pages/admCadastro/admCadastro'

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Cadastro" element={<Cadastro/>} />
      <Route path="/ListaCadastro" element={<ListaCadastro/>} />
      <Route path="/AdmCadastro" element={<AdmCadastro/>} />
    </Routes>
    
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
