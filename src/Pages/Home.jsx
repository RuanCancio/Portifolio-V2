import Ruan from "../assets/1080.jpg"
import TypingInput from "../components/TypingInput.jsx"
import Styles from "../Css/Layout.module.css"
import GitIcon from "../assets/Github.svg"
import InstaIcon from "../assets/Instagram.svg"
import LinkedIcon from "../assets/Linkedin.svg"
import TypingText from "../components/TypingText.jsx"
import TechIcon from "../components/TechIcon.jsx"
import Projects from "../components/Projects.jsx"
import Reveal from "../components/Reveal.jsx"
import Contact_item from "../components/Contact_item.jsx"
import ContactForm from "../components/ContactForm.jsx"

const Home = () => {

    return (
        <>
            <Reveal>
                <section className={`${Styles.home}`} id="home">
                    <img src={Ruan} alt="Ruan" className={Styles.ruan} />
                    <TypingInput />
                    <div className={Styles.icons_redes}>
                        <a href="https://github.com/RuanCancio" target="_blank"><img src={GitIcon} alt="Meu Github" /></a>
                        <a href="https://www.instagram.com/cancioruan/" target="_blank"><img src={InstaIcon} alt="Meu Instagram" /></a>
                        <a href="https://www.linkedin.com/in/ruancancio/" target="_blank"><img src={LinkedIcon} alt="Meu LinkedIn" /></a>
                    </div>
                    <div className={Styles.btn_cv}><a href="/assets/Ruan_Cancio_Desenvolvedor_Junior.pdf" download>Baixar Currículo</a></div>
                </section>
            </Reveal>
            <Reveal>
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
                </section>
            </Reveal>
            <Reveal>
                <section id="technology" className={Styles.sec_tec}>
                    <section className={Styles.tec_icons}>
                        <div className={Styles.tec_center}>
                            <TechIcon />
                        </div>
                    </section>
                </section>
            </Reveal>
            <Reveal>
                <section id="projects" className={Styles.my_projects}>
                    <TypingText
                        text="Meus Projetos"
                        loop={1}
                        speed={90} />
                    <Projects />
                </section>
            </Reveal>
            <Reveal>
                <section id="contact" className={Styles.Contact_me}>
                    <TypingText
                        text="Vamos tirar sua ideia do papel? Escolha sua rede favorita."
                        loop={1}
                        speed={90} />
                    <Contact_item />
                    <section className={Styles.invite_me}>
                        <ContactForm/>
                    </section>
                </section>
            </Reveal>
        </>

    )
}

export default Home