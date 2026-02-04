import Styles from '../Css/ContactForm.module.css'
import { useForm, ValidationError } from '@formspree/react';
import TypingText from './TypingText';

function ContactForm() {
  const [state, handleSubmit] = useForm("mbdknzvy");
  if (state.succeeded) {
      return <p className={Styles.submitForm}>Obrigado por Enviar!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className={Styles.form}>
      <label htmlFor="email">
        <TypingText
        text="Escreva para mim:"
        loop={1}
        speed={90}
        />
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Email@gmail.com'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder='Escreva...'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <p>
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </p>
    </form>
  );
}

export default ContactForm;