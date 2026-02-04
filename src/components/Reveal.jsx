import Styles from '../Css/Reveal.module.css'
import { useEffect, useRef, useState } from 'react'

const Reveal = ({children}) => {
 const ref = useRef(null)
 const [visible, setVisible] = useState(false)

 useEffect(()=> {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true)
                observer.unobserve(ref.current)
            }
        },
        { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)

        return () => observer.disconnect()
 }, [])

    return (
        <div
        ref={ref}
        className={`${Styles.reveal} ${visible ? Styles.active : ""}`}
        >
            {children}
        </div>
    )

}

export default Reveal