import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getMovies, clearMovies } from '../actions/movies';
import queryString from 'query-string';
import { animateScroll as scroll } from 'react-scroll';

import Title from '../components/Title';
import Movies from '../components/Movies';
import LoaderWrapper from './LoaderWrapper';

const Section = styled.section`
  width: 100%;
  text-align: center;
  margin: 0 auto;
`;


const Discover = ({ match, getMovies, movies, loading, location }) => {

  const params = queryString.parse(location.search)

  useEffect(() => {
    initDiscover(match.params.name, params.page, getMovies)
  }, [params.page, match.params.name])

  if(loading) {
    return <LoaderWrapper />
  }
  
  return (
    <Section>
      <Title title={match.params.name} subtitle={'Фильмы'} />

      <Movies movies={movies} />
    </Section>
  )
}

const initDiscover = (name, page, getMovies) => {  
  scroll.scrollToTop({
    delay: 200,
    smooth: true
  })
  getMovies(name, page)
  return () => clearMovies()
}

const mapStateToProps = ({ movies }) => {
  return {
    movies,
    loading: movies.loading
  }
}

export default connect(mapStateToProps, { getMovies })(Discover)
