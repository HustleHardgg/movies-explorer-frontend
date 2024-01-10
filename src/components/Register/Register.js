import React, { useState } from "react";
import "./Register.css";
import Form from "../Form/Form";
import { API_URL, TOKEN } from "../../constants/AppConstants";
import { singUp as fetchSignUp, signIn as fetchSignIn } from "../../services/MainApi";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const signUp = async (e) => {
    e.preventDefault();

    try {
      setLoading(true)
      // register
      await fetchSignUp(formData);
      // sign in and get the token 
      const data = await fetchSignIn({
        email: formData.email,
        password: formData.password
      });
      // save the token in local storage
      localStorage.setItem(TOKEN, data.token)
      navigate('/movies');
    } catch (err) {
      setLoading(false)
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const onChange = (e) => {
    setFormData((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  return (
    <Form
      onSubmit={signUp}
      title="Добро пожаловать!"
      btntext="Зарегистрироваться"
      text="Уже зарегистрированы?"
      path="/signin"
      pathname="Войти"
    >
      <div className="input-content">
        <label className="input-text">Имя</label>
        <input className="input-element" required onChange={onChange} value={formData.name} name='name' />
        <span className="input-error" />

        <label className="input-text">E-mail</label>
        <input className="input-element" required onChange={onChange} value={formData.email} name='email' />
        <span className="input-error" />

        <label className="input-text">Пароль</label>
        <input className="input-element input-element-border" required onChange={onChange} value={formData.password} name='password' />
        <span className="input-error" />
      </div>
    </Form>
  );
};

export default Register;
