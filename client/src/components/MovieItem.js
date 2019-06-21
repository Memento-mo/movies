import React, { useState, } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Rating from './Rating';
import SliderSlick from './SliderSlick';
import ModalVideo from 'react-modal-video';
import Button from './Button';
import Info from './Info';

import trailer from '../icons/trailer.svg';
import site from '../icons/site.svg';

import '../../node_modules/react-modal-video/scss/modal-video.scss';

const Wrapped = styled.div`
  width: 1100px;
  margin: 40px auto 80px auto;
  font-weight: 700;

  @media ${props => props.theme.mediaQueries.small} {
    width: 1060px;
  }

  @media ${props => props.theme.mediaQueries.smaller} {
    width: 900px;
  }
  @media ${props => props.theme.mediaQueries.smallest} {
    width: 800px;
  }
  @media ${props => props.theme.mediaQueries.verySmallest} {
    width: 650px;
  }
  @media ${props => props.theme.mediaQueries.mobile} {
    width: 500px;
  }
  @media ${props => props.theme.mediaQueries.middleMobile} {
    width: 400px;
  }
  @media ${props => props.theme.mediaQueries.minMobile} {
    width: 300px;
  }
`;

const Img = styled.div`
  margin-right: 40px;
  height: 550px;

  @media ${props => props.theme.mediaQueries.mobile} {
    margin-right: 0;
  }

  @media ${props => props.theme.mediaQueries.middleMobile} {
    height: 420px;
  }
`;

const Image = styled.img`
  border-radius: 15px;
  box-shadow: 0 2px 25px 10px rgba(48,63,159, .2);
  height: 100%;

  @media ${props => props.theme.mediaQueries.small} {
    height: 85%;
  }

  @media ${props => props.theme.mediaQueries.smaller} {
    height: 100%;
  }

  @media ${props => props.theme.mediaQueries.middleMobile} {
    height: 80%;
  }
  @media ${props => props.theme.mediaQueries.middleMobile} {
    height: 90%;
  }
`;
const Description = styled.div`
  color: rgba(55,71,79,1);
  margin-top: 10px;
  width: 850px;

  @media ${props => props.theme.mediaQueries.large} {
    width: 750px;
  }
  @media ${props => props.theme.mediaQueries.small} {
    width: 700px;
  }

  @media ${props => props.theme.mediaQueries.smaller} {
    margin-top: 50px;
  }

  @media ${props => props.theme.mediaQueries.verySmallest} {
    width: 650px;
  }
  @media ${props => props.theme.mediaQueries.mobile} {
    width: 500px;
  }
  @media ${props => props.theme.mediaQueries.middleMobile} {
    width: 400px;
    margin-top: 0;
  }
  @media ${props => props.theme.mediaQueries.minMobile} {
    width: 300px;
  }
`;
const Content = styled.div`
  display: flex;
  margin-top: 60px;

  @media ${props => props.theme.mediaQueries.smaller} {
    flex-direction: column;
    align-items: center;
  }
`;
const Title = styled.div`
  text-align: center;
  font-size: 40px;

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 35px;
  }
  @media ${props => props.theme.mediaQueries.mobile} {
    font-size: 20px;
  }
  @media ${props => props.theme.mediaQueries.minMobile} {
    font-size: 16px;
  }
`;

const InfoHeader = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  @media ${props => props.theme.mediaQueries.minMobile} {
    font-size: 10px;
  }
`;

const Year = styled.div`
  margin-right: 4px;
`;
const Countries = styled.div``;

const SubTitle = styled.div`
  font-size: 22px;
  color: black;

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 18px;
  }
  @media ${props => props.theme.mediaQueries.minMobile} {
    font-size: 14px;
  }
`;

const RatingsWrapper = styled.div`
  align-items: center;
  display: flex;
`;

const RatingInfo = styled.div`
  margin-bottom: 8px;
`;

const Subdescr = styled.div`
  margin-left: 10px;

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 12px;
  }
`;

const RatingNumber = styled.div`
  font-size: 12px;
  margin-left: 10px;
  position: relative;
  top: -1px;
`;

const Link = styled(NavLink)`
  color: rgba(55,71,79,1);
  transition: 0.2s ease;

  &:hover {
    color: rgba(55,71,79, .6);
  }
`; 

const SliderWrapper = styled.div`
  width: 85%;
  margin-bottom: 20px;
  text-align: center;
  margin: 0 auto
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 5px;
`;

const WrappedLink = styled.a`
  display: block;
  margin-left: 10px;
`;

const MovieItem = ({ baseUrl, movie }) => {
  const [isOpen, setOpen] = useState(false)

  const genres = getGenres(movie.genres);

  return (
    <Wrapped>
      <Title>{movie.title} ({movie.original_title})</Title>
      <Content>
        <Img>
          <Image src={`${baseUrl}w500${movie.poster_path}`} alt="poster"/>
        </Img>

        <Description>
          <InfoHeader>
              <Countries>
                { countries(movie.production_countries) } 
              </Countries>

              <Year>
                { countries(movie.spoken_languages) } / {movie.runtime} мин / {years(movie.release_date)} 
              </Year>
          </InfoHeader>

          <RatingInfo>
            <SubTitle>Рейтинг:</SubTitle>
            <Subdescr>
              <RatingsWrapper>
                <Rating 
                  number={movie.vote_average}/>
                <RatingNumber>
                  { movie.vote_average }
                </RatingNumber>
              </RatingsWrapper>
            </Subdescr>
          </RatingInfo>

          <Info title={"Бюджет:"} descr={`${movie.budget}$`}/>

          <Info title={"Жанры:"} descr={genres}/>
          
          <Info title={"Описание:"} descr={`${movie.overview}`}/>

          <SliderWrapper>
            <Info title={"Актеры:"}/>
            <SliderSlick cast={movie.cast} baseUrl={baseUrl}/>
          </SliderWrapper>

          <Buttons>
            { renderVideo(movie.videos.results, isOpen, setOpen) }

            { movie.homepage === '' ? 
                null 
              : <WrappedLink target="_blank" rel="noopener noreferrer" href={movie.homepage} >
                  <Button title="Сайт фильма" icon={site}/>
                </WrappedLink>
            }
            
          </Buttons>
        </Description>
      </Content>
    
    </Wrapped>
  )
}

const renderVideo = (videos, isOpen, setOpen) => {
  if(videos.length === 0) {
    return;
  }
  const { key } = videos.find(video => video.type === 'Trailer' && video.site === 'YouTube')

  return (
    <React.Fragment>
      <div onClick={() => setOpen(true)}>
        <Button title="Трейлер" icon={trailer} />
      </div>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={key}
        onClose={() => setOpen(false)}
      />
  </React.Fragment>
  )
}

const countries = (items = [])=> {
  return items.map(item => item.name + ' ')
}

const getGenres = (items = []) => {
  return items.map(item => 
    <Link 
      to={`${process.env.PUBLIC_URL}/genre/movie/${item.name}`}
      key={item.id}>
        {item.name + ' '}
    </Link>
  )
}

const years = year => {
  return year.split('-')[0]
}



export default MovieItem