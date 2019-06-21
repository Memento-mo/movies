import React, { useEffect } from 'react'
import styled from 'styled-components';
import { getMovies, clearMovies } from '../actions/movies';
import { getTv } from '../actions/tv';
import { connect } from 'react-redux';
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


const Genre = ({ match, getMovies, getTv, movies, loading, location, clearMovies }) => {

  const params = queryString.parse(location.search)
  
  useEffect(() => {
    updateMovies(match.params.name, params.page, clearMovies, getMovies, getTv, match.params.type)
    
  }, [match.params.name, params.page])

  if(loading) {
    return <LoaderWrapper />
  }

  return (
    <Section>
      <Title title={match.params.name} subtitle={'Фильмы'}/>

      <Movies movies={movies} type={match.params.type}/>
    </Section>
  )
}

const updateMovies = (name, page, clearMovies, getMovies, getTv, type) => {
  scroll.scrollToTop({
    delay: 200,
    smooth: true
  })

  if(type === 'tv') {
    getTv(name, page);
  } else {
    getMovies(name, page);
  }
  
  return () => clearMovies()
}

const mapStateToProps = ({geral, movies}) => {
  return { 
    geral, 
    movies,
    loading: movies.loading
  };
};

export default connect(
  mapStateToProps,
  { getMovies, clearMovies, getTv }
)(Genre);