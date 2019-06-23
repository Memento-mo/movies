import React, { useState, Fragment } from 'react';
import styled from 'styled-components';

import { slide as Burger } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';

const Home = styled.div`
  font-weight: 600;
  margin-right: 10px;
  padding: 7px 8px;
  border-radius: 4px;
  position: relative;
  top: -1px;
  transition: 0.3s ease;
  max-width: 90px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);  
  }

  @media ${props => props.theme.mediaQueries.minMobile} {
    font-size: 12px;
    margin-right: 5px;
  }
`;

var styles = {
  bmBurgerButton: {
    display: 'none',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
    marginRight: '1rem',
  },
  bmCross: {
    background: '#fafafa',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    top: 0,
    left: 0,
  },
  bmMenu: {
    background: '#283593',
    padding: '2.5em 1.5em',
  },
  bmItemList: {
    color: '#fafafa',
    padding: '0.8rem',
  },
  bmItem: {
    outline: 'none',
  },
  bmOverlay: {
    top: 0,
    left: 0,
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

const Hamburguer = styled.div`
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-around;
  width: 25px;
  line-height: 1;
  height: auto;
  background-color: transparent;
  cursor: pointer;
`;

const Bar = styled.span`
  transition: all 0.3s;
  border-radius: 10px;
  margin: 2px 0;
  height: 4px;
  width: 100%;
  display: inline-block;
  background-color: #fff;
`;

const Block = styled.div`
  margin: 10px 0;
  display: block;
`;

const MenuMobile = ({ movies, tv }) => {
  const [isOpened, setisOpened] = useState(false);

  const isMenuOpen = ({ isOpened }) => {
    setisOpened(isOpened);
  };
  return (
    <Fragment>
      <Hamburguer onClick={() => setisOpened(true)}>
        <Bar />
        <Bar />
        <Bar />
      </Hamburguer>
      <Burger isOpen={isOpened} onStateChange={isMenuOpen} styles={styles}>
        <Home>
          <NavLink onClick={() => setisOpened(false)} to='/'>Главная</NavLink>
        </Home>
        <Block>
          Фильмы:<br />
          {
            movies.map(item => <div key={item.id}>{item.name}</div>)
          }
        </Block>
        {/* <RenderPropsMenu burger={() => setisOpened(false)} genres={tv} type={'tv'} title={'Сериалы'}/> */}
      </Burger>
    </Fragment>
  )
}

export default MenuMobile
