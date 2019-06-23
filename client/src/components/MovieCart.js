import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { filmBookmark } from "../actions/index";

import "../css/movie.css";

const Img = styled.img``;
const CardBody = styled.div``;
const CardName = styled.h3``;
const CardBio = styled.p``;
const CardLike = styled.div``;
const CardImage = styled.figure``;
const Card = styled.div``;
const Wrapped = styled.div``;
const CardLikeImg = styled.button``;

const MovieCart = ({ movies, type = "movie", filmBookmark }) => {
  const { poster_path, overview, original_title, id, name } = movies;

  return (
    <Wrapped className="container-cart">
      <Card className="card" data-effect="zoom">
        <Link to={`${process.env.PUBLIC_URL}/${type}/${id}`}>
          <CardImage className="card__image">
            <Img
              src={`https://image.tmdb.org/t/p/w342${poster_path}`}
              alt="short"
            />
          </CardImage>
        </Link>

        <CardLike>
          <CardLikeImg
            className="card__heart"
            onClick={() => filmBookmark(movies)}
          />
        </CardLike>

        <Link to={`${process.env.PUBLIC_URL}/${type}/${id}`}>
          <CardBody className="card__body">
            <CardBio className="card__bio">
              {overview ? overview : "Описание отсутствует..."}
            </CardBio>
          </CardBody>
        </Link>
      </Card>
      <CardName className="card__name">
        {original_title ? original_title : name}
      </CardName>
    </Wrapped>
  );
};

export default connect(
  null,
  { filmBookmark }
)(MovieCart);
