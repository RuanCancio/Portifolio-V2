import Ruan from "../assets/1080.jpg"
import TypingInput from "../components/TypingInput.jsx"
import Styles from "../Css/Layout.module.css"
import GitIcon from "../assets/Github.svg"
import InstaIcon from "../assets/Instagram.svg"
import LinkedIcon from "../assets/Linkedin.svg"
import TypingText from "../components/TypingText.jsx"
import TecIcon from "../components/TechIcon.jsx"

const Home = () => {

    return (
        <>
            <section className={`${Styles.home}`} id="home">
                <img src={Ruan} alt="Ruan" className={Styles.ruan} />
                <TypingInput />
                <div className={Styles.icons_redes}>

                    <a href="https://github.com/RuanCancio" target="_blank"><img src={GitIcon} alt="Meu Github" /></a>
                    <a href="https://www.instagram.com/cancioruan/" target="_blank"><img src={InstaIcon} alt="Meu Instagram" /></a>
                    <a href="https://www.linkedin.com/in/ruancancio/" target="_blank"><img src={LinkedIcon} alt="Meu LinkedIn" /></a>

                </div>
                <div className={Styles.btn_cv}><a href="../assets/Ruan_Cancio_Desenvolvedor_Junior.pdf" download>Baixar Currículo</a></div>
            </section>
            <section className={Styles.about_me} id="about_me">
                <section className={Styles.about_itens}>
                    <TypingText
                        text="Sobre mim"
                        loop={1}
                        speed={90} />
                    <p>
                        Olá! Eu sou <strong>Ruan</strong>, desenvolvedor apaixonado por tecnologia e programação.
                        Tenho experiência em criar projetos modernos e funcionais, explorando principalmente <strong>React, JavaScript e Desenvolvimento web</strong>.
                    </p>
                    <p>
                        Unindo código limpo e design intuitivo, foco em criar aplicações que não apenas funcionam, mas encantam o usuário.
                    </p>
                    <p>
                        Aqui no meu portfólio, você vai encontrar projetos que mostram minha criatividade, dedicação e atenção aos detalhes.
                    </p>

                    <div className={Styles.carrossel}>

                    </div>
                </section>
                <section id="tecnologias" className={Styles.sec_tec}>
                    <section className={Styles.sec_items}>
                        <TypingText
                            text="Minhas Tecnologias"
                            loop={1}
                            speed={90}
                        />
                    </section>
                    <section className={Styles.tec_icons}>
                      <TecIcon/>
                    </section>
                </section>
            </section>
        </>

    )
}

export default Home