
import { HashLink as Link } from "react-router-hash-link"
import Styles from "../Css/Layout.module.css"
import { useState } from "react"
import MenuIcon from "../assets/Menu.svg"
import MenuOpen from "../assets/OpenMenu.svg"

const Navbar = () => {

    const [menuOnMoba, setMenuOnMoba] = useState(false)
    const [isVisibleOnMoba, setIsVisibleOnMoba] = useState(false)


    return (
        <>
            <div className={Styles.isVisibleOnMoba}>
                <nav className={Styles.navbar}>
                    {menuOnMoba ? (
                        <>
                            <ul className={Styles.links}>
                                <li><img src={MenuOpen} alt="menuOpen" onClick={()=> setMenuOnMoba(!menuOnMoba)} /></li>
                                <li><Link smooth to="#">Home</Link></li>
                                <li><Link smooth to="#about_me">About me</Link></li>
                                <li><Link smooth to="#technology">Technologys</Link></li>
                                <li><Link smooth to="#projects">Projects</Link></li>
                                <li><Link smooth to="#contact">Contacts</Link></li>
                                <li><a href="/assets/Ruan_Barata_Cancio_Desenvolvedor_FullStack.pdf" download className={Styles.btn_cv}>Download CV</a></li>
                            </ul>
                        </>
                    ) : (<img src={MenuIcon} alt="menu" onClick={()=> setMenuOnMoba(!menuOnMoba)} className={Styles.MenuOpen} />)
                    }
                </nav>
            </div>
            <div className={Styles.isVisibleOnPc}>
                <nav className={Styles.navbarOnPc}>
                    <div className={Styles.pOne}>
                        <Link smooth to="#"><img src="/assets/pokemon_home.png" alt="pokemon" className={Styles.pokehome}/></Link>
                    </div>
                        <div className={Styles.pTwo}>
                            <Link smooth to="#about_me">About me</Link>
                            <Link smooth to="#technology">Technologys</Link>
                            <Link smooth to="#projects">Projects</Link>
                            <Link smooth to="#contact">Contacts</Link>
                            <a href="/assets/Ruan_Barata_Cancio_Desenvolvedor_FullStack.pdf" download className={Styles.btn_cv}>Download CV</a>
                        </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar