import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='Projetos'>Projetos</Link>
                <Link to='contato'>Contato</Link>
            </nav>
        </header>
    )
}