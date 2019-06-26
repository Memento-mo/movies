import React, { useEffect, useState } from "react";

import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getBookMark } from "../actions/profile";
import { getUser } from "../actions/index";

import profile from '../icons/profile.svg';
import Statics from "../components/Statics";
import LoaderWrapper from './LoaderWrapper';

const axios = require("axios");

const Wrapper = styled.div``;
const Title = styled.div`
  font-size: 30px;
  text-align: center;
  margin-top: 20px;
`;
const ListFilms = styled.div``;
const ListTitle = styled.div`
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 700;
  magrin-bottom: 10px;
`;

const ListSubTitle = styled.div`
  margin-left: 5px;
  font-weight: 700;
  font-size: 14px;
`;

const Form = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;
  margin: 0 auto;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  border-radius: 50%;
  height: 250px;
`;

const ProfileButton = styled.button`
  font-size: 14px;
  font-weight: 300;
  color: white;
  background-color: black;
  display: inline-block;
  cursor: pointer;
  padding: 5px 8px;
  transition: 0.3s ease;
  border: none;

  :hover {
    background: ${props => props.theme.colors.blue};
  }
`;

const ProfileInput = styled.input`
  width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
  z-index: -1;
  
  + label {
    font-size: 14px;
    font-weight: 700;
    color: white;
    background-color: ${props => props.theme.colors.blue};
    display: inline-block;
    cursor: pointer;
    padding: 3px 8px;
    transition: 0.3s ease;
    margin-right: 5px;
  }

  :focus + label,
  + label:hover {
      background-color: black;
  }
`;

const Buttons = styled.div`
  margin-top: 10px;
  display: flex;
`;

const Profile = ({ getBookMark, movies, user: {_id, avatar}, loading }) => {
  useEffect(() => {
    getBookMark();
  }, []);

  const [file, setFile] = useState(null);
  const onFormSubmit = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("avatar", file);

    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };

    axios.post("/api/profile/avatar", formData, config);
    window.location.reload()
  };

  const onChange = event => {
    setFile(event.target.files[0]);
  };

  const onDelete = () => {
    axios.delete('/api/profile/avatar');
    window.location.reload()
  }

  const renderForm = (id, avatar) => {
    const img = `${process.env.PUBLIC_URL}/api/profile/${id}/avatar`;

    if (id && avatar) {
      return (
        <Form>
          <Img
            src={img}
          />
          <Buttons>
            <ProfileButton onClick={onDelete}>Удалить</ProfileButton>
          </Buttons>
        </Form>
      )
    }

    return (
      <Form>
        <Img src={profile} style={{ width: '200px', height: '200px', borderRadius: '0%' }}/>
        <form onSubmit={onFormSubmit}>
          <Buttons>
            <ProfileInput type="file" name="avatar" id="avatar" onChange={onChange} />
            <label htmlFor="avatar">Выберите изображение</label>
            <ProfileButton type="submit">Загрузка</ProfileButton>
          </Buttons>
        </form>
      </Form>
    )
  }
  if (loading) {
    return <LoaderWrapper />;
  } else {
    return (
      
      <Wrapper>
        <Title>Профиль</Title>
        
        { renderForm(_id, avatar) }
          
        <ListFilms>
          <ListTitle>Список фильмов:</ListTitle>
          <Statics seen={movies.length} look={20} />
          <ListSubTitle>
            <Link
              style={{ color: "rgba(55,71,79,1)", marginRight: "10px" }}
              to="/profile/bookmark"
            >
              Просмотрено ({movies.length})
            </Link>
            <Link style={{ color: "rgba(55,71,79,1)" }} to="/profile/bookmark">
              Смотрю (20)
            </Link>
          </ListSubTitle>
        </ListFilms>
      </Wrapper>
    );
  }
};

const mapStateToProps = ({ profile, auth }) => {
  return {
    movies: profile.results,
    user: auth,
    loading: profile.loading
  };
};

export default connect(
  mapStateToProps,
  { getBookMark, getUser }
)(Profile);
