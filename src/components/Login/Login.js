import React, { useState } from "react";
import "./Login.css";
import Form from "../Form/Form";
import useFormWithValidation from "../../utils/validation.js";

function Login({ onLogin, message }) {
  const [isMessage, setIsMessage] = useState(false);
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({
      email: values.email,
      password: values.password,
    });
    resetForm();
    setIsMessage(true);
  }
  return (
    <Form
      title="Рады видеть!"
      btntext="Войти"
      text="Ещё не зарегистрированы?"
      path="/signup"
      pathname="Регистрация"
      isValid={isValid}
      disabled={isValid}
      onSubmit={handleSubmit}
    >
      <div className="input-content">
        <p className="input-text">E-mail</p>
        <input
          className={`input-element ${
            !isValid && errors.name && "input-error-activ"
          }`}
          required
          pattern="^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$"
          autoComplete="on"
          name="email"
          text="email"
          value={values.email || ""}
          error={errors.email}
          onInput={handleChange}
        />
        <span className="input-error">{errors.email}</span>

        <p className="input-text">Пароль</p>
        <input
          className={`input-element ${
            !isValid && errors.name && "input-error-activ"
          }`}
          required
          name="password"
          text="пароль"
          type="password"
          minLength="4"
          maxLength="30"
          value={values.password || ""}
          error={errors.password}
          onInput={handleChange}
        />
        <span className="input-error">{errors.password}</span>
      </div>

      <p className={isMessage ? "input-error-log-res" : ""}>{message}</p>
    </Form>
  );
}

export default Login;
