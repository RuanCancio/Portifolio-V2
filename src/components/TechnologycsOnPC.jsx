import { useEffect, useState } from "react"
import Styles from "../Css/TechIcon.module.css"

const TechnologycsOnPc = () => {
    const [isUsabletoday, setIsUsableToday] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const itemsPerPage = 3

    const startIndex = currentPage * itemsPerPage
    const selectedItems = isUsabletoday.slice(startIndex, startIndex + itemsPerPage)

    const nextPage = () => {
        if (startIndex + itemsPerPage < isUsabletoday.length) {
            setCurrentPage(currentPage + 1)
        }
    }

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    useEffect(() => {
        const fetchUsableToday = async () => {
            try {
                const res = await fetch("/assets/Tech.json")
                const data = await res.json()
                setIsUsableToday(data)
            } catch (error) {
                console.log({error: error.message})
            }
        }
        fetchUsableToday()
    }, [])

    return (
        <div className={Styles.TechSecTitle}>
            <h2 className={Styles.techHTi}>Technologies</h2>

            <div className={Styles.SecTechCenter}>
                <div className={Styles.TechnologycsOnPc}>
                    {selectedItems.map(item => (
                        <div key={item.id} className={Styles.TechSecComponent}>
                            <img src={item.icon} alt={item.name} />
                            <h2>{item.name}</h2>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
                <div className={Styles.CarrosselStyle}>
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 0}
                        className={Styles.NavButton}
                    >
                        &lt;
                    </button>
                    <button
                        onClick={nextPage}
                        disabled={startIndex + itemsPerPage >= isUsabletoday.length}
                        className={Styles.NavButton}
                    >
                        &gt;
                    </button>
                </div>
            </div>

        </div>
    )
}

export default TechnologycsOnPc