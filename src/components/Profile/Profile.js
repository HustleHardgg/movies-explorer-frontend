import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <main>
    <section className="profile">
      <div className="profile__content">
        <h1 className="profile__content-hello">Привет, Виталий!</h1>
        <form className="profile__content-user">
          <label className="profile__content-input profile__content-input-line">
            Имя
            <input
              className="profile__content-user-nama profile__content-user-info"
              name="name"
              type="text"
              defaultValue="Виталий"
              placeholder="Имя"
              required
            />
          </label>

          <label className="profile__content-input profile__content-input-padding">
            E-mail
            <input
              className="profile__content-user-email profile__content-user-info"
              name="email"
              type="text"
              defaultValue="pochta@yandex.ru"
              placeholder="E-mail"
              required
            />
          </label>
        </form>
        <div className="profile__content-btn">
          <button type="button" className="profile-content-btn-edit-btn">
            Редактировать
          </button>
          <Link to="/"> <button type="button" className="profile-content-btn-exit-btn">
            Выйти из аккаунта
          </button> </Link>
        </div>
      </div>
      </section>
    </main>
  );
};

export default Profile;