import React, { useEffect, useState } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import { API_URL, TOKEN } from "../../constants/AppConstants";
import { getUser as fetchGetUser, updateUser as fetchUpdateUser } from "../../services/MainApi";

const Profile = () => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({
    name: '',
    email: ''
  })

  useEffect(() => {
    getUser();
  }, [])

  const onChange = (e) => {
    setUser((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  async function getUser() {
    try {
      setLoading(true)
      const data = await fetchGetUser();
      setUser({ name: data?.name, email: data?.email })
      console.log(data)
    } catch (err) {
      setLoading(false)
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  async function updateUser() {
    try {
      setLoading(true)
      const data = await fetchUpdateUser(user);
      console.log(data)
    } catch (err) {
      setLoading(false)
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  function logout() {
    localStorage.removeItem(TOKEN)
  }

  return (
    <main>
    <section className="profile">
      <div className="profile__content">
        <h1 className="profile__content-hello">Привет, {user.name}!</h1>
        <form className="profile__content-user">
          <label className="profile__content-input profile__content-input-line">
            Имя
            <input
              className="profile__content-user-nama profile__content-user-info"
              name="name"
              type="text"
              onChange={onChange}
              value={user.name}
              placeholder="Имя"
              required
            />
          </label>

          <label className="profile__content-input profile__content-input-padding">
            E-mail
            <input
              className="profile__content-user-email profile__content-user-info"
              onChange={onChange}
              name="email"
              type="text"
              value={user.email}
              placeholder="E-mail"
              required
            />
          </label>
        </form>
        <div className="profile__content-btn">
          <button type="button" onClick={updateUser} className="profile-content-btn-edit-btn">
            Редактировать
          </button>
          <Link to="/"> 
            <button onClick={logout} type="button" className="profile-content-btn-exit-btn">
              Выйти из аккаунта
            </button> 
          </Link>
        </div>
      </div>
      </section>
    </main>
  );
};

export default Profile;
