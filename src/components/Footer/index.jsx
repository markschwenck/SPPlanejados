import styles from '../Footer/Footer.module.css'
import Logo from '../../assets/Logo/Logo-reformulada.png'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
            <span>
               <img src= {Logo} alt="" />
            </span>
                <p>Direitos</p>
            </div>

            <div>
                <ul>
                    <li href="">Home</li>
                    <li href="">Sobre</li>
                    <li href="">Projetos</li>
                    <li href="">Contato</li>
                </ul>
            </div>

            <div>
                Localização e contato
            </div>
            
        </footer>
    )
}

export default Footer