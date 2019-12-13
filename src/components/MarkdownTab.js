import React, { useEffect, useState } from 'react';
import MDReactComponent from 'markdown-react-js';
import { Tab } from 'semantic-ui-react'

const MarkdownTab = ({ markdownPath }) => {
  const [ text, setText ] = useState('')
  
  // fetch markdown files
  useEffect(() => {
    fetch(markdownPath)
    .then(response => response.text())
    .then(result => {
      setText(result)
    })
  }, [])

  return (
    <Tab.Pane attached={false} className="MarkdownElement">
      <MDReactComponent text={text} />
    </Tab.Pane>
  )
}

export default MarkdownTab;