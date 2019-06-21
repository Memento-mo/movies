import React from 'react'
import styled from 'styled-components';

import tmdb from '../icons/logo.svg';

const Wrapped = styled.div`
  height: 200px;
  background: ${props => props.theme.colors.blue};
`;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media ${props => props.theme.mediaQueries.small} {
    max-width: 900px;
  }
  @media ${props => props.theme.mediaQueries.smallest} {
    max-width: 600px;
  }
  @media ${props => props.theme.mediaQueries.mobile} {
    max-width: 400px;
  }
  @media ${props => props.theme.mediaQueries.minMobile} {
    max-width: 300px;
  }
`;

const Logo = styled.div`
  padding-top: 20px;
`;

const Image = styled.img`
  width: 200px;
  height: 150px;
`;

const Link = styled.a``;

const Footer = () => {
  return (
    <Wrapped>
      <Content>
        <Logo>
          <Link href="https://www.themoviedb.org" target="_blank">
            <Image src={tmdb} alt="tmdb"/>
          </Link>
        </Logo>
      </Content>
    </Wrapped>
  )
}

export default Footer
