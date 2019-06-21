import React from 'react'
import styled from 'styled-components';

const Icon = styled.img`
  width: 15px;
  height: 15px;
`;
const ButtonWrapped = styled.button`
  font-family: 'Open Sans', sans-serif;
  border: 1px solid transparent;
  padding: 10px 23px;
  outline: none;
  background: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.text};
  transition: 0.2s ease;
  cursor: pointer;
  border-radius: 15px;
  font-weight: 800;
  display: flex;
  align-items: center;

  &:hover {
    background: rgba(26,35,126, 1);
  }

  @media ${props => props.theme.mediaQueries.mobile} {
    font-size: 10px;
    padding: 8px 20px;
  }
`;

const Title = styled.div`
  margin: 0 5px;
`;

const Button = ({ title, icon, direction }) => {
  return direction === "right" ? 
      <ButtonWrapped>
        <Icon src={icon} alt="icon"/>
        <Title>{ title }</Title>
      </ButtonWrapped>
    :
      <ButtonWrapped>
        <Title>{ title }</Title>
        <Icon src={icon} alt="icon"/>
      </ButtonWrapped>
}

export default Button
