import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <main className="profile">
      <div className="profile__content">
        <h3 className="profile__content-hello">Привет, Виталий!</h3>
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
          <button className="profile__content-btn__edit-btn">
            Редактировать
          </button>
          <button className="profile__content-btn__exit-btn">
            Выйти из аккаунта
          </button>
        </div>
      </div>
    </main>
  );
};

export default Profile;
