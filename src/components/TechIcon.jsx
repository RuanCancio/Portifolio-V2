import { useState, useEffect } from "react"
import Styles from "../Css/TechIcon.module.css"

const TechIcon = ()=> {

    const [iconsSet, setIconSet] = useState([])

    useEffect(()=> {
        const fetchIcons = async ()=> {
            try {
                const response = await fetch("../../public/assets/Tech.json")
                const data = await response.json()
                setIconSet(data)
            } catch(error) {
                console.error("Erro ao carregar os ícones:", error);
            }
        }

        fetchIcons()
    }, [])

    return (
        <div className={Styles.carousel}>
            {iconsSet.map((index, key)=> (
                <div key={key} className={Styles.icon}>
                    <img src={index.icon} alt={index.name} />
                    <h3>{index.name}</h3>
                    <p>{index.desc}</p>
                </div>
            ))}
        </div>
    )

}

export default TechIcon