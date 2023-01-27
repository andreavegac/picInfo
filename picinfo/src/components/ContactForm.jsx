import React, { useState } from "react";
import { useNavigate} from 'react-router-dom'
import styles from "./ContactForm.module.css";
import Title from "./Title";
import Label from "./Label";
import Input from "./Input";
import Button from "./Button";

const ContactForm = () => {
  const [passwordError, setPasswordError] = useState(true);
  const [messageError, setMessageError] = useState(true);
  const [errorStatus, setErrorStatus] = useState(true);

  function handleChangePassword(value) {
    if (
      value === undefined ||
      (value.length >= 0 && value !== "picInfo-kudos")
    ) {
      setPasswordError(true);
      setErrorStatus(true);
    } else {
      setPasswordError(false);
      if (messageError === false) {
        setErrorStatus(false);
      }
    }
  }
  function handleChangeMessage(value) {
    if (value === undefined || value.length <= 0) {
      setMessageError(true);
      setErrorStatus(true);
    } else {
      setMessageError(false);
      if (passwordError === false) {
        setErrorStatus(false);
      }
    }
  }

  const navigate = useNavigate();
  
  const handleSubmit = event => {
    event.preventDefault();

    navigate('/thanks');
  };
   

  return (
    <>
      <Title small>Envíanos un mensaje</Title>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <Label text="Mensaje" />
        <Input
          attribute={{
            id: "usuario",
            name: "usuario",
            type: "text",
            placeholder: "",
          }}
          handleChange={handleChangeMessage}
          param={messageError}
        />
        <Label text='Introduce "picInfo-kudos" para validar que no eres un robot.' />
        <Input
          attribute={{
            id: "password",
            name: "password",
            type: "password",
            placeholder: "picInfo-kudos",
          }}
          handleChange={handleChangePassword}
          param={passwordError}
        />
        <Button type="isButton" disabled={errorStatus}>Enviar</Button>
      </form>
    </>
  );
};

export default ContactForm;