import React, { useEffect } from "react";

import styled from "styled-components";
import { connect } from "react-redux";

import { getBookMark } from "../actions/profile";
import Movies from './Movies';
import LoaderWrapper from '../containers/LoaderWrapper';

const Wrapper = styled.div``;

const Title = styled.div`
  font-size: 30px;
  text-align: center;
  margin-top: 20px;
`;

const ProfileBookMark = ({ movies, loading, getBookMark }) => {
  useEffect(() => {
    getBookMark();
  }, [movies])

  if(loading) {
    return <LoaderWrapper />
  }

  return (
    <Wrapper>
      <Title>Избранное</Title>

      <Movies movies={movies} />
    </Wrapper>
  );
};

const mapStateToProps = ({ profile }) => {
  return {
    movies: profile,
    loading: profile.loading
  };
};

export default connect(mapStateToProps, { getBookMark })(ProfileBookMark);
