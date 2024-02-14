import styles from './Header.module.css'
import Logo from '../../assets/Logo/Logo-reformulada.png'



function Header () {
    return (
        <header className= {styles.header}>
            <span>
               <img src= {Logo} alt="" />
            </span>
            <nav>
                <a href="">Home</a>
                <a href="">Sobre</a>
                <a href="">Projetos</a>
                <a href="">Contato</a>
            </nav>
        </header>
    )
}

export default Header 