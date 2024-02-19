import styles from '../Footer/Footer.module.css'
import Logo from '../../assets/Logo/Logo-reformulada.png'
import { IoLocationSharp } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
    return (
        <footer className={styles.footer}>
            
            <div>
            <span>
               <img src= {Logo} alt="" />
            </span>
                
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
                <p><IoLocationSharp/>  Tirol, Belo Horizonte-MG</p>
                <p><IoLogoWhatsapp/>  (31) 98761-8879</p>
                <p><FaPhone/>  (31) 98761-8879</p>
                <p><MdEmail />  sp.planejados@hotmail.com</p> 
            </div>

            <div className={styles.divdir}>
                <p>Copyright © 2023 <br/><br/> Todos os Direitos Reservados. <br/><br/>Desenvolvido por <br/> Markcell Schwenck</p>
            </div>
            
        </footer>
    )
}

export default Footer