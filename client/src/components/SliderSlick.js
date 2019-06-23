import React, { useEffect, useState, useRef } from 'react';
import Slider from "react-slick";
import styled from 'styled-components';

import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';

import Loader from './Loader';
import CastItem from './CastItem';

const SliderStyles = styled(Slider)`
  margin-top: 10px;

  .slick-prev:before, .slick-next:before {
    color: ${props => props.theme.colors.blue};
  }

  .slick-prev {
    right: -21px;
  }

  @media ${props => props.theme.mediaQueries.veryMobile} {
    .slick-next {
      opacity: 0;
    }

    .slick-prev {
      opacity: 0;
    }
  }
`;

const Wrapper = styled.div`
  margin-bottom: 5rem;
`;

const SliderSlick = ({ cast, baseUrl }) => {
  if(!cast) {
    return <Loader />
  }

  const [totalShow, setTotalShow] = useState(null);
  const sliderElement = useRef();

  const changeTotalShow = () => {
    let totalItems = Math.round(sliderElement.current.offsetWidth / 70);

    if(totalItems > cast.length) {
      totalItems = cast.length;
    }

    if(cast.length < 10) {
      totalItems = 5;
    }
    setTotalShow(totalItems)
  }

  const items = cast.map(person => {
    if(!person.profile_path) return null
    return <CastItem person={person} baseUrl={baseUrl} key={person.id} />
  })

  useEffect(() => {
    changeTotalShow();
    window.addEventListener('resize', changeTotalShow);
    return () => window.removeEventListener('resize', changeTotalShow);
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    swipeToSlide: true,
    speed: 600,
    slidesToShow: totalShow,
    slidesToScroll: 1,
  };
  return (
    <Wrapper ref={sliderElement}>
      <SliderStyles {...settings}> { items } </SliderStyles>  
    </Wrapper>
  );
}


export default SliderSlick
