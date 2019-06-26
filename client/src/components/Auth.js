import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import styled from "styled-components";

import profileWhite from "../icons/profile-white.png";
import profileBlue from "../icons/profile-blue.png";
import profile from "../icons/profile.svg";

const AuthWrapper = styled.div`
  width: 50px;
  height: 50px;
  background: url(${profileWhite}) no-repeat center;
  transition: 0.2s ease;
  cursor: pointer;
  margin-left: 20px;
  position: relative;

  :hover {
    background: url(${profileBlue}) no-repeat center;
  }

  .block-reg {
    padding: 10px;
    position: absolute;
    width: 260px;
    height: 120px;
    box-shadow: 0px 0px 10px 2px rgba(97, 97, 97, 0.5);
    right: 10%;
    top: 35px;
    z-index: 999;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translate(0px, 20px);
    transition: 0.4s ease;
    opacity: 0;
    visibility: hidden;
    justify-content: space-between;
  }

  .block-reg__profile__img {
    height: 40px;
    width: 40px;
  }

  .block-reg__auth {
    display: flex;
    justify-content: space-between;
  }

  .block-reg__button {
    font-size: 12px;
    color: #fff;
    padding: 5px 10px;
    background: #283593;
    font-weight: 600;
    transition: 0.4s ease;
    margin-right: 10px;
  }

  .block-reg__button:hover {
    color: #fff;
    background: #000;
  }

  .black {
    background: #000;
  }

  .black:hover {
    background: #283593;
  }

  .block-reg:before,
  .block-reg:after {
    content: "";
    position: absolute;
    z-index: 2;
    top: -9px;
    right: 10px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent #fff #fff transparent;
    background: #fff;
    transform: rotate(45deg);
  }

  :hover > .block-reg {
    opacity: 1;
    visibility: visible;
  }

  .block-reg__profile-edit {
    font-size: 14px;
    color: #000;
    font-weight: 600;
    transition: 0.3s ease;
  }

  .quit {
    text-align: center;
    width: 100%;
  }
`;

const Profile = ({ auth }) => {
  const renderAuth = auth => {
    if (auth) {
      return (
        <div className="block-reg__auth">
          <Link className="block-reg__button" to={`${process.env.PUBLIC_URL}/profile`}>
            Профиль
          </Link>
          <a className="block-reg__button black" href="/api/logout">
            Выход
          </a>
        </div>
      );
    }

    return (
      <div className="block-reg__auth">
        <a className="block-reg__button" href="/auth/google">
          Авторизация
        </a>
      </div>
    );
  };
  return (
    <AuthWrapper className="icons-img-two">
      <div className="block-reg">
        <div className="block-reg__profile">
          <img src={profile} className="block-reg__profile__img" />
        </div>
        {renderAuth(auth)}
      </div>
    </AuthWrapper>
  );
};

const Auth = ({ auth }) => {
  const renderContent = () => {
    switch (auth) {
      case null:
        return "Загрузка...";
      case false:
        return <Profile auth={auth} />;
      default:
        return <Profile auth={auth} />;
    }
  };

  return <div>{renderContent()}</div>;
};

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(Auth);
