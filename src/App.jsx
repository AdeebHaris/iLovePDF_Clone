import { Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import Mergepdf from './pages/Mergepdf';
import SplitPdf from './pages/SplitPdf';
import CompressPdf from './pages/CompressPdf';
import LoginPage from './pages/LoginPage';
import Signup from './pages/Signup';
import JpgToPdf from './pages/JpgToPdf';

function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/merge' element={<Mergepdf/>}/>
        <Route path='/split' element={<SplitPdf/>}/>
        <Route path='/compress' element={<CompressPdf/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/jtop' element={<JpgToPdf/>}/>


      
      </Routes>
      <Footer/>
    </>
  )
}

export default App
