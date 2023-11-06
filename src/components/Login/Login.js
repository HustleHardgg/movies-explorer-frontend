import React from "react";
import "./Login.css";
import Form from "../Form/Form";

const Login = () => {
  return (
    <Form
      title="Рады видеть!"
      btntext="Войти"
      text="Ещё не зарегистрированы?"
      path="/signup"
      pathname="Регистрация"
    >
      <div className="input__content">
        <p className="input__text">E-mail</p>
        <input className="input__element" required />
        <span className="input__error" />

        <p className="input__text">Пароль</p>
        <input className="input__element input__element-border-one" required />
        <span className="input__error" />
      </div>
    </Form>
  );
};

export default Login;
