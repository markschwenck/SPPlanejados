import styles from './Header.module.css'
import Logo from '../../assets/Logo/Logo-reformulada.png'



function Header () {
    return (
        <header className= {styles.header}>
            <span>
               <img src= {Logo} alt="" />
            </span>
            <ul>
                <li href="">Home</li>
                <li href="">Sobre</li>
                <li href="">Projetos</li>
                <li href="">Contato</li>
            </ul>
        </header>
    )
}

export default Header 