import Styles from '../Css/ContactForm.module.css'
import { useForm, ValidationError } from '@formspree/react';
import TypingText from './TypingText';

function ContactForm() {
  const [state, handleSubmit] = useForm("mbdknzvy");
  if (state.succeeded) {
      return <div className={Styles.submitForm}>
        <p>Thanks for Submitting!</p>
        <img src="../src/assets/Mew_Submit.png" alt="Mew" />
      </div>;
  }
  return (
    <form onSubmit={handleSubmit} className={Styles.form}>
      <label htmlFor="email">
        <TypingText
        text="Write for me:"
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
        placeholder='Write...'
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