import React from 'react';

import SearchExperience from './components/SearchExperience.js';
import MarkdownTab from './components/MarkdownTab.js';

import { Container, Header, Tab } from 'semantic-ui-react'

// const PARAMS = new URLSearchParams(window.location.search);
// use like this
// PARAMS.get('name')

function App() {
  const panes = [
    {
      menuItem: 'Contact',
      render: () => <div><MarkdownTab markdownPath="markdown/OtherLinks.md" /></div>,
    },
    {
      menuItem: 'Search My Experience',
      render: () => <Tab.Pane attached={false}> <SearchExperience /> </Tab.Pane>,
    },
    {
      menuItem: 'More About Me',
      render: () => <MarkdownTab markdownPath="/markdown/AboutMe.md" />,
    },
  ]

  return (
    <div className="App">
      <div className="bodyContent">
        <Container text style={{ margin: '2em' }}>
          <Header as='h1'>Jasmine Humbert</Header>
        </Container>
        <Tab menu={{ text: true }} panes={panes} />
      </div>
      <div className="footer">
        <br></br>
        <hr></hr>
        <br></br>
        <p>View the code for this site <a href="https://github.com/lacunahag/portfolioV2">on Github</a>.</p>
        <br></br>
      </div>
    </div>
  );
}

export default App;
