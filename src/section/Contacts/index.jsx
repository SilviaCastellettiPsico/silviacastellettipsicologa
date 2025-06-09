import React, { useState } from "react";
import useCheckSmallScreen from "../../hook/useCheckSmallScreen";
import { useLocalDataSource } from "./data";
import { toast } from "react-toastify";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import "./style.css";

export function Contacts({ sectionId }) {
  const isSmallScreen = useCheckSmallScreen();
  const data = useLocalDataSource();
  const contacts = data.allContactsJson.nodes[0];
  const { html } = data.markdownRemark;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [body, setBody] = useState("");
  const [isNameCorrect, setIsNameCorrect] = useState(true);
  const [isEmailCorrect, setIsEmailCorrect] = useState(true);
  const [isBodyCorrect, setIsBodyCorrect] = useState(true);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const postData = async () => {
    const apiBaseUrl =
      "https://silviacastellettipsicoemailsender.azurewebsites.net/api/send-email";
    // "http://localhost:7065/api/send-email";
    const promise = toast.promise(
      fetch(apiBaseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: name,
          Email: email,
          Phone: phone,
          Body: body,
        }),
      }).then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      }),
      {
        pending: "Invio in corso...",
        success: "Email inviata con successo!",
        error: "Errore durante l'invio della email. Riprova.",
      }
    );

    return promise;
  };

  const sendContactInfo = async () => {
    let warning = false;
    if (name.length === 0) {
      setIsNameCorrect(false);
      warning = true;
    }
    if (!validateEmail(email)) {
      setIsEmailCorrect(false);
      warning = true;
    }
    if (body.length === 0) {
      setIsBodyCorrect(false);
      warning = true;
    }
    if (warning) return;

    await postData()
      .then(() => console.log("Success"))
      .catch(() => console.log("Errore"));
  };

  function openTelephoneClient(telephoneNumber) {
    window.location.href = "tel:" + telephoneNumber;
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
    if (event.target.value.length > 0) setIsNameCorrect(true);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (validateEmail(event.target.value)) setIsEmailCorrect(true);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
    if (event.target.value.length > 0) setIsBodyCorrect(true);
  };

  return (
    <section className="section-contacts">
      <div id={sectionId} className="section-container">
        <div className="section-title">{contacts.title}</div>
        <div
          className="section-description"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        {isSmallScreen ? (
          <button
            type="button"
            className="btn btn-info"
            style={{ marginBottom: "30px" }}
            onClick={() => openTelephoneClient(contacts.ctaButton1.phoneNumber)}
          >
            {contacts.ctaButton1.label}
          </button>
        ) : null}
        <div
          style={
            isSmallScreen
              ? {
                  display: "flex",
                  width: "100%",
                  flexDirection: "column",
                }
              : { display: "flex", width: "100%" }
          }
        >
          <Input
            text={name}
            textError={isNameCorrect ? undefined : "* Inserisci il tuo nome."}
            styleContainer={{ marginRight: "14px" }}
            placeholder="Nome"
            label="Inserisci il tuo nome"
            handleChange={handleNameChange}
          />
          <Input
            text={email}
            textError={
              isEmailCorrect
                ? undefined
                : "* Inserisci la tua email nel formato corretto."
            }
            styleContainer={{ marginRight: "14px" }}
            placeholder="info@email.com"
            label="Inserisci la tua email"
            handleChange={handleEmailChange}
          />
          <Input
            text={phone}
            placeholder="3332255789"
            label="Inserisci il tuo numero (facoltativo)"
            handleChange={handlePhoneChange}
          />
        </div>
        <TextArea
          text={body}
          textError={isBodyCorrect ? undefined : "* Inserisci una richiesta."}
          placeholder="Inserisci il tuo messaggio"
          title="Inserisci il tuo messaggio"
          handleChange={handleBodyChange}
        />
        <button
          type="button"
          className="btn btn-success"
          onClick={sendContactInfo}
        >
          {contacts.ctaButton2.label}
        </button>
      </div>
    </section>
  );
}
