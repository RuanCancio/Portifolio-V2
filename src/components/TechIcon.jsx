import { useState, useEffect } from "react"
import Styles from "../Css/TechIcon.module.css"
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper ,SwiperSlide } from "swiper/react"


const TechIcon = () => {

    const [iconsSet, setIconSet] = useState([])

    useEffect(() => {
        const fetchIcons = async () => {
            try {
                const response = await fetch("/assets/Tech.json")
                const data = await response.json()
                setIconSet(data)
            } catch (error) {
                console.error("Erro ao carregar os ícones:", error);
            }
        }

        fetchIcons()
    }, [])
    
    if (iconsSet === 0) return <p>Carregando...</p>

    return (
        <Swiper 
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
            }}
        >
            {iconsSet.map((item, key) => (
                <SwiperSlide key={key}>
                    <div className={Styles.icon}>
                        <img src={item.icon} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>{item.desc}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )

}

export default TechIcon