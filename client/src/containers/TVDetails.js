import React, { useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { getSeries, clearTv } from '../actions/tv';
import queryString from 'query-string';
import { animateScroll as scroll } from 'react-scroll';
import { connect } from 'react-redux';

import LoaderWrapper from './LoaderWrapper';
import TVItem from '../components/TVItem';
import Title from '../components/Title';
import Movies from '../components/Movies';

const Section = styled.section`
  width: 100%;
  text-align: center;
  margin: 0 auto;
`;

const TVDetails = ({ match, getSeries, clearTv, tv, loading, geral, location }) => {

  const params = queryString.parse(location.search);

  useEffect(() => {
    getTvDetails(match.params.id, params.page, getSeries);
  }, [match.params.id, params.page])

  const { secure_base_url } = geral.base.images;
  return loading ?
      <LoaderWrapper />
    :
      <Fragment>
        <TVItem tv={tv} baseUrl={secure_base_url}/>

        <Section>
          <Title title={`Рекомендации`} subtitle={`Сериалы`}/>

          <Movies movies={tv} type="tv"/>
        </Section>
      </Fragment>
}

const getTvDetails = (id, page, getSeries) => {
  scroll.scrollToTop({
    smooth: true,
    delay: 500
  })

  getSeries(id, page);

  return () => clearTv()
}

const mapStateToProps = ({ tv, geral }) => {
  return {
    tv,
    loading: tv.loading,
    geral
  }
}

export default connect(mapStateToProps, { getSeries, clearTv })(TVDetails);
