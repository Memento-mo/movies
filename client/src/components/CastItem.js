import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ImgWrapper = styled.div``;

const Img = styled.img`
  border-radius: 5px;
  height: 90px;
  width: auto;

  @media ${props => props.theme.mediaQueries.veryMobile} {
    height: 80px;
  }
`;


const CastItem = ({ person, baseUrl }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <NavLink 
      loaded={loaded ? 1 : 0}
      to={`${process.env.PUBLIC_URL}/person/${person.id}`} 
      key={person.id}
      >
      <ImgWrapper>
        <Img 
          src={`${baseUrl}original${person.profile_path}`} 
          alt={person.character}
          onLoad={() => setLoaded(true)}/>
      </ImgWrapper>
    </NavLink>
  )
}

export default CastItem