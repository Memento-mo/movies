import React from 'react';
import styled from 'styled-components';

import error from '../icons/404.svg';

const Image = styled.img`
  max-width: 100px;
  height: auto;
  position: relative;
  top: -80px;
`;

const Title = styled.h1`
  position: relative;
  top: -100px;
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Error = () => {
  return (
    <Wrapper>
      <Title>Страничка не найдена...</Title>
      <Image src={error} alt="error"/>
    </Wrapper>
  )
}

export default Error
