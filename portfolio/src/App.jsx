import { Outlet } from 'react-router-dom'
import Header from './componentes/Header/Header'
import Footer from './componentes/Footer/Footer'

export default function App() {
  return (
    <>
      <div className=' mb-16 bg-black text-white min-h-screen max-h-full'>
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </>
  )
}