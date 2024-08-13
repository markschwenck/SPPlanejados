import styles from './Header.module.css'
import Logo from '../../assets/Logo/Logo-reformulada.png'
import { Link } from 'react-router-dom'



function Header() {
    return (
        <header className={styles.header}>
            <span>
                <img className={styles.img} src={Logo} alt="" />
            </span>
            <nav className={styles.nav}>
                <Link to="/"> Home </Link>
                <Link to="/sobre"> Sobre </Link>
                <Link to="/projetos"> Projetos </Link>
                <Link to="/contato"> Contato </Link>
            </nav>
        </header>
    )
}

export default Header 