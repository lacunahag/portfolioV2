import React from 'react'

import { Input, Card, Label, Grid, Dropdown } from 'semantic-ui-react'

// TODO: summary of my experience with each at the top
const CATEGORIES = ['All', 'Python', 'Javascript', 'Bash', 'Linux', 'React']

class SearchExperience extends React.Component {
  constructor () {
    super()
    this.state = {
      experiences: [],
      category: 'All',
      search_query: ''
    }
  }

  componentDidMount () {
    fetch('experiences.json')
      .then(response => response.json())
      .then(json => {
        this.setState({ experiences: json })
      })
  }

  handleChangeSearch = (event, data) => {
    console.log('change search fired')
    this.setState({ search_query: event.target.value })
  }

  handleChangeCategory = (event, data) => {
    this.setState({ category: data.value })
  }

  // move outside as own function
  search (params) {
    console.log('search fired')
    let results = params.experiences
    const category = params.category
    const search_query = params.search_query

    if (category !== 'All') {
      results = results.filter(
        result => result.tags.includes(category)
      )
    }

    if (search_query) {
      results = results.filter(result => {
        const amalgam = Object.values(result)
          .join(' ')
          .toLowerCase()
        const found = amalgam.includes(search_query)
        if (found) {
          return result
        }
      })
    }

    console.log(results)
    return results
  }

  render () {
    console.log('render fired')
    const searchResults = this.search(this.state)

    const categoriesDropdown = CATEGORIES.map(category => {
      return {
        key: category,
        text: category,
        value: category
      }
    })

    return (
      <div className='SearchExperience'>
        {/* SEARCH BAR */}
        <Grid columns={2}>
          <Grid.Row stretched>
            <Grid.Column>
              <Input fluid label='Search' onChange={this.handleChangeSearch} />
            </Grid.Column>
            <Grid.Column>
              <Dropdown
                placeholder='Filter'
                fluid
                selection
                options={categoriesDropdown}
                onChange={this.handleChangeCategory}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <ExperienceCards cardData={searchResults} classname='pull-right' />
      </div>
    )
  }
}

// renders
function ExperienceCards (props) {
  // Props should pass an array of experience objects that looks like:

  const { cardData } = props

  const cards = cardData.map(card => {
    const tags = card.tags.map(tag => {
      return (
        <Label key={tag} name={tag} className={tag}>
          {tag}
        </Label>
      )
    })

    return (
      <Card key={card.header}>
        <Card.Content>
          <Card.Header>{card.header}</Card.Header>
          <Card.Meta>{card.meta}</Card.Meta>
          <Card.Description>{card.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>{tags}</Card.Content>
      </Card>
    )
  })

  return (
    <div className='ExperienceCards'>
      <Card.Group centered>{cards}</Card.Group>
    </div>
  )
}

export default SearchExperience
