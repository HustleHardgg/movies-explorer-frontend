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
      <div className="input-content">
        <label className="input-text">Имя</label>
        <input className="input-element" required />
        <span className="input-error" />

        <label className="input-text">E-mail</label>
        <input className="input-element" required />
        <span className="input-error" />

        <label className="input-text">Пароль</label>
        <input className="input-element input-element-border" required />
        <span className="input-error" />
      </div>
    </Form>
  );
};

export default Register;
