import Ruan from "../assets/icon_me.jpg"
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
import TechnologycsOnPc from "../components/TechnologycsOnPC.jsx"

const Home = () => {

    return (
        <>
            <Reveal>
                <section className={`${Styles.home}`} id="home">
                    <div><img src={Ruan} alt="Ruan" className={Styles.ruan} /></div>
                    <div>
                        <TypingInput />
                        <div className={Styles.icons_redes}>
                            <a href="https://github.com/RuanCancio" target="_blank"><img src={GitIcon} alt="Meu Github" /></a>
                            <a href="https://www.instagram.com/cancioruan/" target="_blank"><img src={InstaIcon} alt="Meu Instagram" /></a>
                            <a href="https://www.linkedin.com/in/ruancancio/" target="_blank"><img src={LinkedIcon} alt="Meu LinkedIn" /></a>
                        </div>
                    </div>
                </section>
            </Reveal>
            <Reveal>
                <section className={Styles.about_me} id="about_me">
                    <section className={Styles.about_itens}>
                        <TypingText
                            text="About me"
                            loop={1}
                            speed={90} />
                        <p>
                            Hi! My name is Ruan. I'm a developer passionate about technology and programming. <br />
                            I have experience creating modern projects and features, with a focus on Nextjs, JavaScript/TypeScript, and FullStack Development. <br />
                            By combining clean code with intuitive design, I am to build applications that don't just work — they delight the user. <br />
                            In my portfolio, you'll find projects that showcase my creativity, dedication, and attention to detail. <br />
                        </p>
                    </section>
                </section>
            </Reveal>
            <Reveal>
                <section id="technology" className={Styles.sec_tec}>
                    <section className={Styles.tec_icons}>
                        <div className={Styles.tec_center}>
                            <div className={Styles.isVisibleTech}><TechIcon/></div>
                            <TechnologycsOnPc/>
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
                        text="Shall we get your idea off the ground? Choose your favorite network."
                        loop={1}
                        speed={90} className={Styles.textTitle} />
                    <Contact_item />
                    <section className={Styles.invite_me}>
                        <ContactForm />
                    </section>
                </section>
            </Reveal>
        </>

    )
}

export default Home