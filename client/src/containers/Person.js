import React, { useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getPerson } from '../actions/movies';
import queryString from 'query-string';

import PersonItem from '../components/PersonItem';
import Movies from '../components/Movies';
import Title from '../components/Title';
import LoaderWrapper from './LoaderWrapper';
import { animateScroll as scroll } from 'react-scroll';

const Section = styled.section`
  width: 100%;
  text-align: center;
  margin: 0 auto;
`;

const Person = ({ match, loading, person, getPerson, geral, location }) => {
  const params = queryString.parse(location.search)

  useEffect(() => {
    getPersonDetails(match.params.id, params.page, getPerson)
  }, [match.params.id, params.page])

  const { secure_base_url } = geral.base.images;

  return loading ? 
      <LoaderWrapper />
    : 
      <Fragment>
        <PersonItem person={person} baseUrl={ secure_base_url }/>

        <Section>
          <Title title={"Фильмы с актером"} subtitle={'Фильмы'} />

          <Movies movies={person} />
        </Section>
      </Fragment>
}

const getPersonDetails = (id, page, getPerson) => {
  scroll.scrollToTop({
    smooth: true,
    delay: 500
  })
  getPerson(id, page)
}

const mapStateToProps = ({ person, geral }) => {
  return {
    loading: person.loading,
    person,
    geral
  }
}

export default connect(mapStateToProps, { getPerson })(Person);
