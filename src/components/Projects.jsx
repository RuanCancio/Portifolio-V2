import { useState, useEffect } from "react"
import Styles from "../Css/Projects.module.css"
import { Link } from "react-router-dom"

const Projects = () => {

    const [projects, setProjects] = useState([])
    const [filter, setFilter] = useState("all")

    useEffect(()=> {

        const fetchProjects = async () => {
            try {
                const response = await fetch("/assets/Projects.json")
                const data = await response.json()
                setProjects(data)
            } catch (error) {
                console.log("Não foi possivel carregar!", error)
            }
        }

        fetchProjects()
    }, [])

        const filteredProjects =
        filter === "all"
        ? projects
        : projects.filter(a => a.category === filter)
        
    return (
        <>
            <div className={Styles.btn_filters}>
                <button onClick={()=> setFilter("all")}>Todos</button>
                <button onClick={()=> setFilter("front-end")} >Front-End</button>
                <button onClick={()=> setFilter("back-end")} >Back-End</button>
                <button onClick={()=> setFilter("ui")} >UI/UX</button>
            </div>
            <section>
                {filteredProjects.map((index, key)=> (
                    <div key={index.id} className={Styles.project_sec}>
                        <Link to={index.demo}><img src={index.image} alt={index.title}/></Link>
                        <h1>{index.title}</h1>
                        <p>{index.description}</p>
                        <div className={Styles.stacks}>
                            {index.stack.map(tech => (
                                <span>{tech}</span>
                            ))}
                        </div>
                        <div className={Styles.project_sec_link}>
                            <Link to={index.github}><img src={index.icon} alt={index.title} /></Link>
                            <Link to={index.demo}><img src={index.icon_link} alt={index.icon_link} /></Link>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}

export default Projects