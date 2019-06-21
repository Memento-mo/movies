import React from 'react';
import styled from 'styled-components';

const InfoItem = styled.div`
  margin-top: 10px;
`;

const Title = styled.div`
  font-size: 22px;

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 18px;
  }
  @media ${props => props.theme.mediaQueries.minMobile} {
    font-size: 14px;
  }
`;

const Descr = styled.div`
  margin-left: 10px;
  color: rgba(55,71,79,1);

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 12px;
  }
`;

const Info = ({ title, descr }) => {
  return !descr ? 
        null
      :
        <InfoItem>
          <Title>{title}</Title>
          <Descr>{descr}</Descr>
        </InfoItem>
}

export default Info;