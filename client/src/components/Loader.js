import React from 'react'
import styled from 'styled-components';

const SkDoubleBounce = styled.div`
  width: 6rem;
  height: 6rem;
  position: relative;
  margin: auto;
  
  .sk-child {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.blue};
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-animation: sk-double-bounce 2.0s infinite ease-in-out;
            animation: sk-double-bounce 2.0s infinite ease-in-out;
  }

  .sk-double-bounce-2 {
    -webkit-animation-delay: -1.0s;
            animation-delay: -1.0s;
  }

  @-webkit-keyframes sk-double-bounce {
    0%, 100% {
      -webkit-transform: scale(0);
              transform: scale(0);
    }
    50% {
      -webkit-transform: scale(1);
              transform: scale(1);
    }
  }
  
  @keyframes sk-double-bounce {
    0%, 100% {
      -webkit-transform: scale(0);
              transform: scale(0);
    }
    50% {
      -webkit-transform: scale(1);
              transform: scale(1);
    }
  }
`;


const Loader = () => {
  return (
    <SkDoubleBounce>
      <div className='sk-child sk-double-bounce-1'></div>
      <div className='sk-child sk-double-bounce-2'></div>
    </SkDoubleBounce>
  )
}

export default Loader
