import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Auth from '../components/Auth';

const WrappedSection = styled.div`
  height: 70px;
  background: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${props => props.theme.mediaQueries.medium} {
    max-width: 1060px;
  }
  @media ${props => props.theme.mediaQueries.small} {
    max-width: 900px;
  }
  @media ${props => props.theme.mediaQueries.smaller} {
    max-width: 700px;
  }
  @media ${props => props.theme.mediaQueries.smallest} {
    max-width: 600px;
  }
  @media ${props => props.theme.mediaQueries.mobile} {
    max-width: 430px;
  }
  @media only screen and (max-width: 430px) {
    max-width: 370px;
  }
  @media ${props => props.theme.mediaQueries.minMobile} {
    max-width: 280px;
  }
`;

const BlockAuth = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Search = styled.div`
  margin-right: 20px;
`;

const TopSection = () => {
  return (
    <WrappedSection>
      <Container>

        <Header />
        
        <BlockAuth>
          <Search>
            <SearchBar />
          </Search>
          <Auth />
        </BlockAuth>
      </Container>
    </WrappedSection>
  )
}

export default TopSection;
