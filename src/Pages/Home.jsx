import Ruan from "../assets/1080.jpg"
import TypingInput from "../components/TypingInput.jsx"
import Styles from "../Css/Layout.module.css"
import GitIcon from "../assets/Github.svg"
import InstaIcon from "../assets/Instagram.svg"
import LinkedIcon from "../assets/Linkedin.svg"

const Home = ()=> {

    return (
        <section className={`${Styles.home}`} id="home">
        <img src={Ruan} alt="Ruan" className={Styles.ruan} />
        <TypingInput/>
        <div className={Styles.icons_redes}>
       
            <a href="https://github.com/RuanCancio" target="_blank"><img src={GitIcon} alt="Meu Github" /></a>
            <a href="https://www.instagram.com/cancioruan/" target="_blank"><img src={InstaIcon} alt="Meu Instagram" /></a>
            <a href="https://www.linkedin.com/in/ruancancio/" target="_blank"><img src={LinkedIcon} alt="Meu LinkedIn" /></a>
        
        </div>
        <div className={Styles.btn_cv}><a href="../assets/Ruan_Cancio_Desenvolvedor_Junior.pdf" download>Baixar Currículo</a></div>
        </section>
    )
}

export default Home