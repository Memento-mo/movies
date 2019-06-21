import React, { useEffect } from 'react';
import styled from 'styled-components';
import  { getMoviesSearch } from '../actions/movies';
import { connect } from 'react-redux';
import queryString from 'query-string';

import Loader from '../components/Loader';
import Title from '../components/Title';
import Movies from '../components/Movies';

import '../css/search.css';

const Section = styled.section`
  width: 100%;
  text-align: center;
  margin: 0 auto;
`;


const LoaderWrapper = styled.div`
  position: absolute;
  top: 45%;
  left: 47.5%;
`;

const Search = ({ location, match, search, getMoviesSearch, loading }) => {
  const params = queryString.parse(location.search)

  useEffect(() => {
    getMoviesSearch(params.page, match.params.query)
  }, [params.page, match.params.query])

  if(loading) {
    return <LoaderWrapper><Loader /></LoaderWrapper>
  }

  return (
  <Section>
    <Title title={match.params.query} />

    <Movies movies={search} type={'search'}/>
  </Section>
  )
}

const mapStateProps = ({ search }) => {
  return {
    search,
    loading: search.loading
  }
}

export default connect(mapStateProps, { getMoviesSearch })(Search)
