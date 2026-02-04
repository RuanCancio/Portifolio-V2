import { Link } from 'react-router-dom'
import Styles from '../Css/Contact_item.module.css'
const Contact_item = () => {
    return (
        <>
            <section className={Styles.contact_align}>
                <Link target="_blank" rel='noopener noreferrer' to={"https://wa.me/5591988200006?text=Olá%20Ruan,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar!"}>
                    <div className={Styles.contact_icon}>
                        <img src="../assets/Whatsapp.svg" alt="WhatsApp-Icon" />
                        <h2>Chamar no WhatsApp</h2>
                    </div>
                </Link>
                <Link target="_blank" rel='noopener noreferrer' to={"mailto:slidruan@gmail.com?subject=Contato%20via%20Portfólio&body=Olá%20Ruan,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."}>
                    <div className={Styles.contact_icon}>
                        <img src="../assets/Email.svg" alt="Email-Icon" />
                        <h2>Me mande um e-mail</h2>
                    </div>
                </Link>
            </section>
        </>
    )
}

export default Contact_item