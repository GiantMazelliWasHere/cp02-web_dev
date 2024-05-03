import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './componentes/Header/Header'
import Footer from './componentes/Footer/Footer'

export default function App() {
  return (
    <>
      <div className=' m-0 mb-14 bg-black text-white'>
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </>
  )
}