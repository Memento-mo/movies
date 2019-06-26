import React, { useEffect, Fragment } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';

import { 
  Router,
  Switch, 
  Route, 
  Redirect } from 'react-router-dom';
import { init } from '../actions/index';
import history from '../history';

import TopSection from './TopSection';
import Loader from '../components/Loader';
import Error from '../components/Error';

import Discover from './Discover';
import Genre from './Genre';
import MovieDetails from './MovieDetails';
import TVDetails from './TVDetails';
import Person from './Person';
import Search from './Search';
import Footer from './Footer';
import Profile from './Profile';
import ProfileBookMark from '../components/ProfileBookMark';

const Wrapped = styled.div`
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  min-height: calc(100vh - 70px);
  @media ${props => props.theme.mediaQueries.larger} {
    width: 95%;
  }

`;

const LoaderWrapper = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
`;

const App = ({ init, isLoading }) => {
  useEffect(() => {
    init()
  }, [])
  return isLoading ? 
    (
      <LoaderWrapper>
        <Loader/>
      </LoaderWrapper>
    ) : (
      <Router history={history}>
        <TopSection/>  

        <Wrapped>
          <Switch>
            <Route path="/" render={() => (
              <Redirect to={`${process.env.PUBLIC_URL}/discover/Popular`}/>
            )} exact/>

            <Route path={`${process.env.PUBLIC_URL}/discover/:name`} component={Discover} exact/>

            <Route path={`${process.env.PUBLIC_URL}/genre/:type/:name`} component={Genre} exact/>

            <Route path={`${process.env.PUBLIC_URL}/movie/:id`} component={MovieDetails} exact/>

            <Route path={`${process.env.PUBLIC_URL}/tv/:id`} component={TVDetails} exact/>

            <Route path={`${process.env.PUBLIC_URL}/person/:id`} component={Person} exact/>

            <Route path={`${process.env.PUBLIC_URL}/search/:query`} component={Search} exact/>

            <ProfileRoutes />

            <Route path={`${process.env.PUBLIC_URL}/404`} component={Error} exact/>

            <Redirect to={`${process.env.PUBLIC_URL}/404`} />
          </Switch>
        </Wrapped>

        <Footer />
      </Router>
    )
}

const ProfileRoutes = () => {
  return (
    <Fragment>
      <Route path={`${process.env.PUBLIC_URL}/profile`} component={Profile} exact/>
      <Route path={`${process.env.PUBLIC_URL}/profile/bookmark`} component={ProfileBookMark} exact/>
    </Fragment>
  )
}

const mapStateToProps = ({ geral }) => {
  return { isLoading: geral.loading }
}

export default connect(mapStateToProps, { init })(App)
