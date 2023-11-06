import React from "react";
import "./Register.css";
import Form from "../Form/Form";

const Register = () => {
  return (
    <Form
      title="Добро пожаловать!"
      btntext="Зарегистрироваться"
      text="Уже зарегистрированы?"
      path="/signin"
      pathname="Войти"
    >
      <div className="input__content">
        <p className="input__text">Имя</p>
        <input className="input__element" required />
        <span className="input__error" />

        <p className="input__text">E-mail</p>
        <input className="input__element" required />
        <span className="input__error" />

        <p className="input__text">Пароль</p>
        <input className="input__element input__element-border" required />
        <span className="input__error" />
      </div>
    </Form>
  );
};

export default Register;
