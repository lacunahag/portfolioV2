import React from 'react';
import logo from './logo.svg';
import './App.css';

import SearchExperience from './SearchExperience.js';

import { Container, Header} from 'semantic-ui-react'

const PARAMS = new URLSearchParams(window.location.search);
// use like this
// PARAMS.get('name')

function App() {

  return (
    <div className="App">
      <Container text style={{ margin: '2em' }}>
        <Header as='h1'>Jasmine Humbert</Header>
      </Container>

      <SearchExperience></SearchExperience>
    </div>
  );
}

export default App;
