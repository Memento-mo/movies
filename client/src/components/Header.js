import React, { Fragment } from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import MenuMobile from './MenuMobile';
import MenuCat from './MenuCategory';

const Home = styled.div`
  font-weight: 600;
  margin-right: 10px;
  padding: 7px 8px;
  border-radius: 4px;
  position: relative;
  top: -1px;
  transition: 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);  
  }

  @media ${props => props.theme.mediaQueries.minMobile} {
    font-size: 12px;
    margin-right: 5px;
  }
`;

const Mobile = styled.div`
  display: none;

  @media ${props => props.theme.mediaQueries.smallest} {
    display: block;
  }
`;

const Pc = styled.div`
  display: flex;
  align-items: center;

  @media ${props => props.theme.mediaQueries.smallest} {
    display: none;
  }
`;

const Header = ({ movies, tv }) => {
  return (
    <Fragment>
      <Mobile>
        <MenuMobile movies={movies} tv={tv}/>
      </Mobile>
      <Pc>
        <Home>
          <NavLink to='/'>Главная</NavLink>
        </Home>
        
        <MenuCat genres={movies} type={'movie'} title={'Фильмы'}/>
        <MenuCat genres={tv} type={'tv'} title={'Сериалы'}/>
      </Pc>
    </Fragment>
  )
}

const mapStateToProps = ({ geral: { movie, tv } }) => {
  return {
    movies: movie.genres,
    tv: tv.genres
  }
}


export default connect(mapStateToProps)(Header);
