import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Rating from './Rating';
import Modal from './Modal';
import Info from './Info';

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

const Content = styled.div`
  display: flex;
  margin-top: 60px;

  @media ${props => props.theme.mediaQueries.smaller} {
    flex-direction: column;
    align-items: center;
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
    margin-top: 75px;
  }

  @media ${props => props.theme.mediaQueries.verySmallest} {
    width: 650px;
  }
  @media ${props => props.theme.mediaQueries.mobile} {
    width: 500px;
  }
  @media ${props => props.theme.mediaQueries.middleMobile} {
    width: 400px;
    margin-top: 30px;
  }
  @media ${props => props.theme.mediaQueries.minMobile} {
    width: 300px;
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

const Companies = styled.div`
  max-width: 400px;
  height: auto;
`;

const Year = styled.div`
  margin-right: 4px;
`;

const RatingInfo = styled.div`
  margin-bottom: 8px;
`;

const RatingsWrapper = styled.div`
  align-items: center;
  display: flex;
`;

const RatingNumber = styled.div`
  font-size: 12px;
  margin-left: 10px;
  position: relative;
  top: -1px;
`;

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

const Subdescr = styled.div`
  margin-left: 10px;

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 12px;
  }
`;


const Link = styled(NavLink)`
  color: rgba(55,71,79,1);
  transition: 0.2s ease;

  &:hover {
    color: rgba(55,71,79, .6);
  }
`; 

const TVItem = ({ tv, baseUrl }) => {
  const genres = getGenres(tv.genres);

  return (
    <Wrapped>
      <Title>{tv.name} ({tv.original_name})</Title>
      <Content>
        <Img>
          <Image src={`${baseUrl}w500${tv.poster_path}`} alt="poster"/>
          <Modal infoEpisode={tv.last_episode_to_air} baseUrl={baseUrl}/>
        </Img>

        <Description>
        <InfoHeader>
              <Companies>
                { companies(tv.production_companies) } 
              </Companies>

              <Year>
                { tv.languages.map(lang => lang + ' ') } / {tv.episode_run_time} мин / {years(tv.first_air_date)} 
              </Year>
          </InfoHeader>

          <RatingInfo>
            <SubTitle>Рейтинг:</SubTitle>
            <Subdescr>
              <RatingsWrapper>
                <Rating 
                  number={tv.vote_average}/>
                <RatingNumber>
                  { tv.vote_average }
                </RatingNumber>
              </RatingsWrapper>
            </Subdescr>
          </RatingInfo>

          <Info title={"Жанры:"} descr={genres}/>

          <Info title={"Количество сезонов/эпизодов:"} descr={`${tv.number_of_seasons}/${tv.number_of_episodes}`}/>

          <Info title={"Дата выхода первой серии:"} descr={tv.first_air_date}/>
        
          <Info title={"Дата выхода следующей серии:"} descr={tv.next_episode_to_air ? tv.next_episode_to_air.air_date : null}/>

          <Info title={"Описание:"} descr={tv.overview}/>
          
        </Description>

      </Content>

    </Wrapped>
  )
}

const getGenres = items => {
  return items.map(item => 
    <Link 
      to={`${process.env.PUBLIC_URL}/genre/tv/${item.name}`}
      key={item.id}>
        {item.name + ' '}
    </Link>
  )
}

const companies = (items = []) => {
  return items.map(item => item.name + ' ')
}

const years = (year = []) => {
  return year.split('-')[0]
}


export default TVItem
