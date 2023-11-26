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
      <div className="input-content">
        <label className="input-text">E-mail</label>
        <input className="input-element" required />
        <span className="input-error" />

        <label className="input-text">Пароль</label>
        <input className="input-element input-element-border-one" required />
        <span className="input-error" />
      </div>
    </Form>
  );
};

export default Login;
