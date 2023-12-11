import React, { useState } from "react";
import "./Register.css";
import Form from "../Form/Form";
import useFormWithValidation from "../../utils/validation.js";

function Register({ onRegister, message }) {
  const [isMessage, setIsMessage] = useState(false);
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onRegister({
      name: values.name,
      email: values.email,
      password: values.password,
    });
    resetForm();
    setIsMessage(true);
  }

  return (
    <Form
      title="Добро пожаловать!"
      onSubmit={handleSubmit}
      btntext="Зарегистрироваться"
      text="Уже зарегистрированы?"
      path="/signin"
      pathname="Войти"
      isValid={isValid}
      disabled={isValid}
      onRegister={onRegister}
    >
      <div className="input-content">
        <p className="input-text">Имя</p>
        <input
          className={`input-element ${
            !isValid && errors.name && "input-error-activ"
          }`}
          required
          pattern="[а-яА-Яa-zA-ZёË\- ]{1,}"
          name="name"
          type="text"
          minLength="2"
          maxLength="30"
          value={values.name || ""}
          error={errors.name}
          onChange={handleChange}
        />
        <span className="input-error">{errors.name}</span>

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
          onChange={handleChange}
        />
        <span className="input-error">{errors.email}</span>

        <p className="input-text">Пароль</p>
        <input
          className={`input-element input-element-border ${
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
          onChange={handleChange}
        />
        <span className="input-error input-error-border">
          {errors.password}
        </span>
      </div>

      <p className={isMessage ? "input-error-reg-res" : ""}>{message}</p>
    </Form>
  );
}

export default Register;
