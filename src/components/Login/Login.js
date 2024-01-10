import React, { useState } from "react";
import "./Login.css";
import Form from "../Form/Form";
import { API_URL, TOKEN } from "../../constants/AppConstants";
import { useNavigate } from "react-router-dom";
import { signIn as fetchSignIn } from "../../services/MainApi";


const Login = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const signIn = async (e) => {
    e.preventDefault();

    try {
      setLoading(true)
      const data = await fetchSignIn(formData);
      localStorage.setItem(TOKEN, data.token)
      navigate('/movies');
    } catch (err) {
      setLoading(false)
      console.error("ERROR")
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
      onSubmit={signIn}
      title="Рады видеть!"
      btntext="Войти"
      text="Ещё не зарегистрированы?"
      path="/signup"
      pathname="Регистрация"
    >
      <div className="input-content">
        <label className="input-text">E-mail</label>
        <input className="input-element" required onChange={onChange} value={formData.email} name='email' />
        <span className="input-error" />

        <label className="input-text">Пароль</label>
        <input className="input-element input-element-border-one" required
        text="пароль"
        type="password"
        minLength="4"
        maxLength="30" onChange={onChange} value={formData.password} name='password' />
        <span className="input-error" />
      </div>
    </Form>
  );
};

export default Login;
