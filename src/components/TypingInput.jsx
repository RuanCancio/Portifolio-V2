import { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Styles from "../Css/Layout.module.css"

const TypingInput = () => {
  const [done, setDone] = useState(false)
  const [pronto, setPronto] = useState(false)

  const [name] = useTypewriter({
    words: ["Software Engineer"],
    loop: 1,
    typeSpeed: 80,
    onLoopDone: () => setDone(true)
  });

  const [desc] = useTypewriter({
    words: ["Turning your ideas into code!"],
    loop: 1,
    typeSpeed: 90,
    onLoopDone: () => setPronto(true)
  })

  return (
    <div className={Styles.typing_input}>
    <h1>
      {done ? "Software Engineer" : name}
      {!done && <Cursor cursorStyle="|" />}
    </h1>
    <br />
    <h2>
        {pronto ? "Turning your ideas into code!" : desc}
        {!pronto && <Cursor cursorStyle="|" />}
    </h2>
    </div>
  );
};

export default TypingInput;
