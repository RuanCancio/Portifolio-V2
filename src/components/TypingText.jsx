import { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Styles from "../Css/TypingText.module.css"

const TypingText = (props)=> {

    const [done, setDone] = useState(false)

    const [text] = useTypewriter({
        words: [props.text],
        loop: props.loop,
        typeSpeed: props.speed,
        onLoopDone: ()=> setDone(true)
    })

    return (
        <div className={Styles.TypingText}>
            <h2>
                {done ? props.text : text}
                {!done && <Cursor cursorStyle="|"/>}
            </h2>
        </div>
    )

}

export default TypingText