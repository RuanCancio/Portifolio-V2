import { NavLink } from "react-router-dom"
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
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">Sobre</NavLink></li>
                        <li><NavLink to="/projects">Projetos</NavLink></li>
                        <li><NavLink to="/contact">Contatos</NavLink></li>
                    </ul>
                </>
            ) : (<img src={MenuIcon} alt="menu" onClick={menuBurguer} className={Styles.MenuOpen}/>)
            }
        </nav>
    )
}

export default Navbar