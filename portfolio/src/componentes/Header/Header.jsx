import {Link} from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { SlSpeech } from "react-icons/sl";

export default function Header() {
    return (
        <header className='py-5 px-5 bg-gradient-to-r from-rose-500 to-rose-900 h-16 font-mono font-bold text-xl text-white'>
            <nav className='flex gap-10'>
                <Link to='/' className='flex gap-1'> <FaHome className=' self-center'/> Home</Link>
                <Link to='Projetos' className='flex gap-1'> <GrProjects className=' self-center'/> Projetos</Link>
                <Link to='contato' className='flex gap-1'> <SlSpeech className=' self-center' /> Contato</Link>
            </nav>
        </header>
    )
}