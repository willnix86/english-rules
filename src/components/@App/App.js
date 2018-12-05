import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {NavigationBar} from '../NavigationBar/NavigationBar';
import {LandingPage} from '../LandingPage/LandingPage';
import {Home} from '../Home/Home';
import Conjunctions from '../@Conjunctions/Conjunctions';
import WordTypes from '../@WordTypes/WordTypes';
import {Footer} from '../Footer/Footer';
import './App.css';

const HomeRoute = (props) => (
  <Route path="/home" render={() => (
    props.loggedIn ? 
      ( <Home {...props} /> ) 
    :
      ( <Redirect to="/" />)
  )} 
  />
);

export function App(props){

  return (
    <Router>
      <div className="App">
        <NavigationBar loggedIn={props.loggedIn} />
        <main>
          <Route exact path="/" 
            component={LandingPage} 
          />
          <HomeRoute {...props} />
          <Route exact path="/conjunctions" component={Conjunctions} />
          <Route exact path="/wordtypes" component={WordTypes} />
        </main>
        <Footer />
      </div>
    </Router>
  );

}

const mapStateToProps = state => ({
  title: state.user.title,
  lastName: state.user.lastName,
  games: state.user.games,
  loggedIn: state.user.loggedIn
});

export default connect(mapStateToProps)(App);