import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 10px 0;
  position: relative;
  max-width: 500px;
  width: 100%;
  background: #eee;
  height: 20px;
  border-radius: 3px;
  color: #fff;
  font-size: 14px;
  display: flex;
`;

const Common = styled.div`
  text-align: center;
  height: 100%;
`;

const Seen = styled(Common)`
  width: ${props => props.seen}%;
  background: ${props => props.theme.colors.blue};
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
`;

const Look = styled(Common)`
  width: ${props => props.look}%;
  background: ${props => props.theme.colors.lightBlue};
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
`;

const Statics = ({ seen, look }) => {

  const numbers = logicPercent(seen, look);

  return (
    <Wrapper>
      <Seen seen={numbers.totalSeen}>{seen}</Seen>
      <Look look={numbers.totalLook}>{look}</Look>
    </Wrapper>
  )
}

const logicPercent = (seen, look) => {
  const sum = seen + look;

  const totalSeen = 100 / sum * seen;
  const totalLook = 100 / sum * look;

  return {
    totalSeen,
    totalLook
  }
}

export default Statics
