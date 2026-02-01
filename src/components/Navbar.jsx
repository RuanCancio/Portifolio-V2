
import { HashLink as Link } from "react-router-hash-link"
import Styles from "../Css/Layout.module.css"
import { useState } from "react"
import MenuIcon from "../assets/Menu.svg"
import MenuOpen from "../assets/OpenMenu.svg"

const Navbar = () => {

    const [menu, setMenu] = useState(false)

    const menuBurguer = () => {
        setMenu(!menu)
    }

    return (
        <nav className={Styles.navbar}>
            {menu ? (
                <>
                    <ul className={Styles.links}>
                        <li><img src={MenuOpen} alt="menuOpen" onClick={menuBurguer} /></li>
                        <li><Link smooth to="#">Home</Link></li>
                        <li><Link smooth to="#about_me">Sobre</Link></li>
                        <li><Link smooth to="#tecnologias">Tecnologias</Link></li>
                        <li><Link smooth to="/projects">Projetos</Link></li>
                        <li><Link smooth to="/contact">Contatos</Link></li>
                    </ul>
                </>
            ) : (<img src={MenuIcon} alt="menu" onClick={menuBurguer} className={Styles.MenuOpen}/>)
            }
        </nav>
    )
}

export default Navbar