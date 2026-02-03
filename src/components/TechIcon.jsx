import { useState, useEffect } from "react"
import Styles from "../Css/TechIcon.module.css"
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import TypingText from "./TypingText"


const TechIcon = () => {

    const [Languages, setLanguages] = useState([])
    const [framework, setFramework] = useState([])

    useEffect(() => {
        const fetchTech = async () => {
            try {
                const response = await fetch("/assets/Tech.json")
                const data = await response.json()
                setLanguages(data)
            } catch (error) {
                console.error("Erro ao carregar os ícones:", error);
            }
        }
        const fetchFrameworks = async () => {
            try {
                const response = await fetch("/assets/Frameworks.json")
                const data = await response.json()
                setFramework(data)
            } catch (error) {
                console.error("Erro ao carregar os ícones:", error);
            }
        }
        fetchFrameworks()
        fetchTech()
    }, [])

    if (Languages === 0 || framework === 0) return <p>Carregando...</p>

    return (
        <div className={Styles.swiper_icons}>

            <div>
                <TypingText
                    text="Core Stack"
                    loop={1}
                    speed={90} />
                <p>Utilizadas no dia a dia:</p>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    speed={3000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1080: {slidesPerView: 3},
                    }}
                >
                    {Languages.map((item, key) => (
                        <SwiperSlide key={key}>
                            <div className={Styles.icon}>
                                <img src={item.icon} alt={item.name} />
                                <h3>{item.name}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>



            <div>
                <TypingText
                    text="Complemento"
                    loop={1}
                    speed={90} />
                <p>Em desenvolvimento:</p>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    speed={3000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1080: {slidesPerView: 3},
                    }}
                >
                    {framework.map((item, key) => (
                        <SwiperSlide key={key}>
                            <div className={Styles.icon}>
                                <img src={item.icon} alt={item.name} />
                                <h3>{item.name}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    )

}

export default TechIcon