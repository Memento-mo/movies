import React from 'react';
import styled from 'styled-components';

import Loader from '../components/Loader';

const Wrapper = styled.div`
  position: absolute;
  top: 45%;
  left: 47.5%;

  @media ${props => props.theme.mediaQueries.smaller} {
    left: 45.5%;
  }
  @media ${props => props.theme.mediaQueries.mobile} {
    left: 43%;
  }
  @media ${props => props.theme.mediaQueries.middleMobile} {
    left: 42%;
  }
  @media ${props => props.theme.mediaQueries.minMobile} {
    left: 39%;
  }
`;

const LoaderWrapper = () => {
  return (
    <Wrapper>
      <Loader/>
    </Wrapper> 
  )
}

export default LoaderWrapper
