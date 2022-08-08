//import { Route } from 'next/dist/server/router';
import React from 'react';
import { Route , Routes } from 'react-router-dom';
import AllMeetupPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavouritesPage from './pages/Favourites';
//import { Component } from 'react';
import Layout from './components/layout/Layout';

function App() {

  return (
    <div>
      <Layout>
      <Routes> 
      <Route path='/' element = {<AllMeetupPage/>} exact></Route>
      <Route path='/new-meet-up' element = {<NewMeetupPage/>}></Route> 
      <Route path='/favourite' element = {<FavouritesPage/>}></Route>  
      </Routes>
      </Layout>
        
    </div>
  );
}

export default App;
