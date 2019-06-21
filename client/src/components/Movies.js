import React from 'react';
import styled from 'styled-components';

import MovieCart from './MovieCart';
import Pagination from './Pagination';

// const Section = styled.section`
//   margin-bottom: 50px;
// `;

const MoviesContainer = styled.section`
  margin-bottom: 50px;
  width: 100%;
  position: relative;

  @media ${props => props.theme.mediaQueries.larger} {
    left: 2%;
  }
  @media ${props => props.theme.mediaQueries.large} {
    width: 92%;
    left: 5%;
  }
  @media ${props => props.theme.mediaQueries.medium} {
    left: 6%;
  }
  @media ${props => props.theme.mediaQueries.small} {
    left: 11%;
    width: 86%;
  }
  @media ${props => props.theme.mediaQueries.smallest} {
    left: 18%;
    width: 76%;  
  }
  @media ${props => props.theme.mediaQueries.verySmallest} {
    left: 15%;
  }
  @media ${props => props.theme.mediaQueries.mobile} {
    left: 24%;
    width: 57%;
  }
  @media ${props => props.theme.mediaQueries.minMobile} {
    left: 22%;
  }

  @media ${props => props.theme.mediaQueries.veryMobile} {
    left: 17%;
  }
`;

const Wrapped = styled.div`
  margin-top: 54px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 260px));
  grid-template-rows: repeat(auto, 470px);
  justify-items: center;
  grid-column-gap: 45px;
  grid-row-gap: 30px;

  @media ${props => props.theme.mediaQueries.larger} {
    grid-column-gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 250px));
  }
  @media ${props => props.theme.mediaQueries.large} {
    grid-column-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 260px));
  }

  @media ${props => props.theme.mediaQueries.medium} {
    grid-column-gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 250px));
  }
  @media ${props => props.theme.mediaQueries.small} {
    grid-column-gap: 46px;
  }
  @media ${props => props.theme.mediaQueries.smaller} {
    grid-column-gap: 10px;
  }
  @media ${props => props.theme.mediaQueries.smallest} {
    grid-column-gap: 50px;
  }
  @media ${props => props.theme.mediaQueries.verySmallest} {
    grid-column-gap: 10px;
  }
  @media ${props => props.theme.mediaQueries.mobile} {
    grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
  }
  @media ${props => props.theme.mediaQueries.minMobile} {
    grid-template-columns: repeat(auto-fit, minmax(200px, 260px));
  }
`;

const Movies = ({ movies, type }) => {
  const result = movies.results
  return (
    <MoviesContainer>

      <Wrapped> 
        { 
          result.map(movie => 
              <MovieCart 
                movies={movie} 
                key={movie.id}
                type={type === 'search' ? movie.media_type : type}/>
            ) 
        } 
      </Wrapped>

      <Pagination movies={movies}/>
    </MoviesContainer>
  )
}

export default Movies

