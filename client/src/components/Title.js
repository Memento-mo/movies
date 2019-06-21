import React from 'react'
import styled from 'styled-components';


const TitleName = styled.div`
  font-size: 30px;
`;

const Wrapped = styled.div`
  margin-top: 20px;
  
  color: ${props => props.theme.colors.dark};
`;

const SubTitle = styled.div`
  font-size: 20px;
`;

const Title = ({ title, subtitle }) => {

  const name = searchRusName(title.toUpperCase())

  return (
    <Wrapped>
      <TitleName>{ name }</TitleName>
      <SubTitle>{ subtitle }</SubTitle>
    </Wrapped>
  )
}

const searchRusName = (title) => {
  switch(title) {
    case 'POPULAR':
      return 'Рекомендовано к просмотру';
    default:
      return title
  }
}

export default Title;
