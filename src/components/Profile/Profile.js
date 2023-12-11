import React, { useEffect, useState } from "react";
import "./Profile.css";
import { CurrentUserContext } from "../../context/CurrentUserContext";

function Profile({ onSignOut, userChange, message }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isMessage, setIsMessage] = useState(false);

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  const handleChangeName = (e) => {
    const validName =
      /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u.test(
        e.target.value
      );

    if (!e.target.value.length) {
      setErrorName("Имя пользователя должно быть заполнено.");
    } else if (e.target.value.length < 2) {
      setErrorName("Имя пользователя должно быть не менее 2 символов.");
    } else if (!validName) {
      setErrorName(
        "Имя должно содержать только латиницу, кириллицу, пробел или дефис."
      );
    } else if (validName) {
      setErrorName("");
    } else if (e.target.value.length > 30) {
      setErrorName("Имя пользователя должно быть не более 30 символов.");
    } else {
      setErrorName("");
    }
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    const validEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        e.target.value
      );

    if (!e.target.value.length) {
      setErrorEmail("Электронная почта должна быть заполнена.");
    } else if (!validEmail) {
      setErrorEmail("Неверный формат электронной почты.");
    } else {
      setErrorEmail("");
    }
    setEmail(e.target.value);
  };

  const handleInputDisabled = () => {
    setIsInputDisabled(!isInputDisabled);
  };

  const handleSubmitProfileForm = (e) => {
    e.preventDefault();
    userChange({ name, email });
    handleInputDisabled();
    setIsMessage(true);
  };

  useEffect(() => {
    console.log("bo");
    if (errorName || errorEmail) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  }, [errorEmail, errorName]);

  useEffect(() => {
    if (name === currentUser.name && email === currentUser.email) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  }, [currentUser.email, currentUser.name, email, name]);



  return (
    <main>
    <section className="profile">
      <div className="profile__content">
        <h1 className="profile__content-hello">Привет, Виталий!</h1>
        <form className="profile__content-user"
        onSubmit={handleSubmitProfileForm}>
          <label className="profile__content-input profile__content-input-line">
            Имя
            <input
              className="profile__content-user-nama profile__content-user-info"
              name="name"
              type="text"
              placeholder="Имя"
              value={name || ""}
              onChange={handleChangeName}
              disabled={!isInputDisabled}
            />
          </label>
          <span className="input__error-profile">{errorName}</span>
          <label className="profile__content-input profile__content-input-padding">
            E-mail
            <input
              className="profile__content-user-email profile__content-user-info"
              name="email"
              type="text"
              placeholder="E-mail"
              value={email || ""}
              pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
              onChange={handleChangeEmail}
              disabled={!isInputDisabled}
            />
          </label>
          <span className="input__error-profile">{errorEmail}</span>
          <p className={isMessage ? "input__error-profile-res" : ""}>
            {message}
          </p>

        <div className="profile__content-btn">
          <button type="button" className="profile-content-btn-edit-btn"
            type="submit"
          disabled={!isFormValid}
          onClick={handleInputDisabled}
          >
            Редактировать
          </button>
           <button type="button" className="profile-content-btn-exit-btn"
            type="submit"
          onClick={onSignOut}
          >
            Выйти из аккаунта
          </button>
        </div>
        </form>
      </div>
      </section>
    </main>
  );
};

export default Profile;
