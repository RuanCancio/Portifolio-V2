import { useState, useEffect } from "react"
import Styles from "../Css/Projects.module.css"
import { Link } from "react-router-dom"

const Projects = () => {

    const [projects, setProjects] = useState([])
    const [filter, setFilter] = useState("all")
    const [position, setPosition] = useState(0)
    const [prevAnimation, setPrevAnimation] = useState(false)
    const [nextAnimation, setNextAnimation] = useState(false)

    useEffect(() => {

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

    useEffect(() => {
        setPosition(0)
    }, [filter])

    const filteredProjects =
        filter === "all"
            ? projects
            : projects.filter(a => a.category === filter)

    const prevButton = () => {
        setPrevAnimation(true)
        let i = position
        setPosition(i === 0 ? i = filteredProjects.length - 1 : i - 1)

        setTimeout(() => {
            setPrevAnimation(false)
        }, 1000)


    }

    const nextButton = () => {
        setNextAnimation(true)
        let i = position
        setPosition(i === filteredProjects.length - 1 ? 0 : i + 1)

        setTimeout(() => {
            setNextAnimation(false)
        }, 1000);

    }

    return (
        <>
            <div className={Styles.btn_filters}>
                <button onClick={() => setFilter("all")}>Todos</button>
                <button onClick={() => setFilter("front-end")} >Front-End</button>
                <button onClick={() => setFilter("back-end")} >Back-End</button>
                <button onClick={() => setFilter("ui")} >UI/UX</button>
            </div>
            <section className={`${Styles.projects_order} ${prevAnimation ? Styles.fade_prev : ""} ${nextAnimation ? Styles.fade_next : ""}`}>
                <div className={Styles.project_sec}>
                    <Link to={filteredProjects[position]?.demo}><img src={filteredProjects[position]?.image} alt={filteredProjects[position]?.title}  className={Styles.imageProject}/></Link>
                    <h1>{filteredProjects[position]?.title}</h1>
                    <p>{filteredProjects[position]?.description}</p>
                    <div className={Styles.stacks}>
                        {filteredProjects[position]?.stack?.map(tech => (
                            <span key={tech}>{tech}</span>
                        ))}
                    </div>
                    <div className={Styles.project_sec_link}>
                        <Link to={filteredProjects[position]?.github}><img src={filteredProjects[position]?.icon} alt={filteredProjects[position]?.title} /></Link>
                        <Link to={filteredProjects[position]?.demo}><img src={filteredProjects[position]?.icon_link} alt={filteredProjects[position]?.icon_link} /></Link>
                    </div>
                </div>
            </section>
            <section className={Styles.btn_pn}>
                <button type="button" aria-label="Projeto anterior" onClick={prevButton} disabled={!filteredProjects.length} >&lt;-</button>
                <button type="button" aria-label="Próximo projeto" onClick={nextButton} disabled={!filteredProjects.length} >-&gt;</button>
            </section>
        </>
    )
}

export default Projects