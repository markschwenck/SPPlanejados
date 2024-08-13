import styles from '../Footer/Footer.module.css'
import Logo from '../../assets/Logo/Logo-reformulada.png'
import { IoLocationSharp } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
    return (
        <footer className={styles.footer}>

            <div className={styles.content}>
                <span>
                    <img src={Logo} alt="" />
                </span>

                <span className={styles.links}>
                    <ul>
                        <li href="">Home</li>
                        <li href="">Sobre</li>
                        <li href="">Projetos</li>
                        <li href="">Contato</li>
                    </ul>
                </span>

                <span className={styles.icons}>
                    <ul>
                        <li><p><IoLocationSharp />  Tirol, Belo Horizonte-MG</p></li>
                        <li><p><IoLogoWhatsapp />  (31) 98761-8879</p></li>
                        <li><p><FaPhone />  (31) 98761-8879</p></li>
                        <li><p><MdEmail />  sp.planejados@hotmail.com</p></li>
                    </ul>
                </span>

            </div>
            <div className={styles.copy}>

                <p>Copyright © 2024</p>
                <p>Todos os Direitos Reservados.</p>
                <p>Desenvolvido por Markcell Schwenck</p>

            </div>

        </footer>
    )
}

export default Footer