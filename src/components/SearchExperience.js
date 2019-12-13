
import React from 'react';

import { Search, Header, Card, Label, Icon } from 'semantic-ui-react'


class SearchExperience extends React.Component {
  render() {
    return <div className='SearchExperience'>
      <Header as='p'>Search Experience</Header>
      <TagSearch classname="pull-left" />
      <ExperienceCards classname="pull-right" />
    </div>
  }
}

class Tag extends React.Component {
  constructor(props) {
    super(props)
    this.name = props.name
    this.color = props.color
  }

  render() {
    return <Label
      style={{ backgroundColor: this.color }}>
      {this.name}
      <Icon
        name='delete'></Icon>
    </Label>
  }
}

class TagSearch extends React.Component {
  render() {
    return <div className="TagSearch">
      <Search />
      <h2>Filter by technology</h2>
      <div className='LabelArea'>
        <Tag
          name='Python'
          color='#00cc55'
        />
        <Tag
          name='Javascript'
          color='#ff2288'
        />
      </div>
    </div>
  }
}

// should be a function
class ExperienceCards extends React.Component {
  render() {
    return <div className='ExperienceCards'>
      <Card.Group centered>
        <Card>
          <Card.Content>
            <Card.Header>Markov Chain Typo Generator</Card.Header>
            <Card.Meta>Machine Learning with Python</Card.Meta>
            <Card.Description>
              Typo generator uses a markov chain written in python to produce funny and weird typos - much like a drunk human would make. It demonstrates usage of data structures like markov chains and histograms. Developing it I learned a lot about writing more efficient code since I initially optimized it for generating text. This project shows some of my best code quality and documentation.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Tag
              name='Python'
              color='#00cc55'
            />
            <Tag
              name='Javascript'
              color='#ff2288'
            />
          </Card.Content>
        </Card>


        <Card>
          <Card.Content>
            <Card.Header>Troll Mode</Card.Header>
            <Card.Meta>Abusing cURL and Bash for Mischief</Card.Meta>
            <Card.Description>
              Troll mode was initially intended - and written - to be a command line utility for bash. Three days into the project I learned more about the language and environment, realized this made no sense, and deleted the vast majority of code I’d written. The final version was refactored down to a single 23 line file. Since this project is essentially malware (of the harmless prank variety), I learned a lot about linux security.            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Tag
              name='Python'
              color='#00cc55'
            />
          </Card.Content>
        </Card>



        <Card>
          <Card.Content>
            <Card.Header>Computer Science 1.1</Card.Header>
            <Card.Meta>Intro to Programming</Card.Meta>
            <Card.Description>
              Alan Davis' intro to computer science in Python. I learned a lot about the inner workings of Python and got a lot of practice writing it in this demanding course.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Tag
              name='Javascript'
              color='#ff2288'
            />
          </Card.Content>
        </Card>




        <Card>
          <Card.Content>
            <Card.Header>Markov Chain Typo Generator</Card.Header>
            <Card.Meta>Machine Learning with Python</Card.Meta>
            <Card.Description>
              Typo generator uses a markov chain written in python to produce funny and weird typos - much like a drunk human would make. It demonstrates usage of data structures like markov chains and histograms. Developing it I learned a lot about writing more efficient code since I initially optimized it for generating text. This project shows some of my best code quality and documentation.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Tag
              name='Python'
              color='#00cc55'
            />
            <Tag
              name='Javascript'
              color='#ff2288'
            />
          </Card.Content>
        </Card>


        <Card>
          <Card.Content>
            <Card.Header>Troll Mode</Card.Header>
            <Card.Meta>Abusing cURL and Bash for Mischief</Card.Meta>
            <Card.Description>
              Troll mode was initially intended - and written - to be a command line utility for bash. Three days into the project I learned more about the language and environment, realized this made no sense, and deleted the vast majority of code I’d written. The final version was refactored down to a single 23 line file. Since this project is essentially malware (of the harmless prank variety), I learned a lot about linux security.            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Tag
              name='Python'
              color='#00cc55'
            />
          </Card.Content>
        </Card>



        <Card>
          <Card.Content>
            <Card.Header>Pokemon Go Spawn Tracker</Card.Header>
            <Card.Meta>Django and Google Maps API</Card.Meta>
            <Card.Description>
              I was lucky to be part of the Pokemon Go beta during which I tried to make this spawn tracker in time for the release. It uses Django on the backend with the Google Maps API to crowdsource where people have seen certain pokemon out in the world. It is designed to be used on a phone browser.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Tag
              name='Javascript'
              color='#ff2288'
            />
          </Card.Content>
        </Card>


        <Card>
          <Card.Content>
            <Card.Header>Computer Science 1.1</Card.Header>
            <Card.Meta>Intro to Programming</Card.Meta>
            <Card.Description>
              Alan Davis' intro to computer science in Python. I learned a lot about the inner workings of Python and got a lot of practice writing it in this demanding course.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Tag
              name='Javascript'
              color='#ff2288'
            />
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <Card.Header>Troll Mode</Card.Header>
            <Card.Meta>Abusing cURL and Bash for Mischief</Card.Meta>
            <Card.Description>
              Troll mode was initially intended - and written - to be a command line utility for bash. Three days into the project I learned more about the language and environment, realized this made no sense, and deleted the vast majority of code I’d written. The final version was refactored down to a single 23 line file. Since this project is essentially malware (of the harmless prank variety), I learned a lot about linux security.            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Tag
              name='Python'
              color='#00cc55'
            />
          </Card.Content>
        </Card>



        <Card>
          <Card.Content>
            <Card.Header>Pokemon Go Spawn Tracker</Card.Header>
            <Card.Meta>Django and Google Maps API</Card.Meta>
            <Card.Description>
              I was lucky to be part of the Pokemon Go beta during which I tried to make this spawn tracker in time for the release. It uses Django on the backend with the Google Maps API to crowdsource where people have seen certain pokemon out in the world. It is designed to be used on a phone browser.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Tag
              name='Javascript'
              color='#ff2288'
            />
          </Card.Content>
        </Card>


        <Card>
          <Card.Content>
            <Card.Header>Computer Science 1.1</Card.Header>
            <Card.Meta>Intro to Programming</Card.Meta>
            <Card.Description>
              Alan Davis' intro to computer science in Python. I learned a lot about the inner workings of Python and got a lot of practice writing it in this demanding course.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Tag
              name='Javascript'
              color='#ff2288'
            />
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <Card.Header>Computer Science 1.1</Card.Header>
            <Card.Meta>Intro to Programming</Card.Meta>
            <Card.Description>
              Alan Davis' intro to computer science in Python. I learned a lot about the inner workings of Python and got a lot of practice writing it in this demanding course.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Tag
              name='Javascript'
              color='#ff2288'
            />
          </Card.Content>
        </Card>




        <Card>
          <Card.Content>
            <Card.Header>Markov Chain Typo Generator</Card.Header>
            <Card.Meta>Machine Learning with Python</Card.Meta>
            <Card.Description>
              Typo generator uses a markov chain written in python to produce funny and weird typos - much like a drunk human would make. It demonstrates usage of data structures like markov chains and histograms. Developing it I learned a lot about writing more efficient code since I initially optimized it for generating text. This project shows some of my best code quality and documentation.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Tag
              name='Python'
              color='#00cc55'
            />
            <Tag
              name='Javascript'
              color='#ff2288'
            />
          </Card.Content>
        </Card>


        <Card>
          <Card.Content>
            <Card.Header>Troll Mode</Card.Header>
            <Card.Meta>Abusing cURL and Bash for Mischief</Card.Meta>
            <Card.Description>
              Troll mode was initially intended - and written - to be a command line utility for bash. Three days into the project I learned more about the language and environment, realized this made no sense, and deleted the vast majority of code I’d written. The final version was refactored down to a single 23 line file. Since this project is essentially malware (of the harmless prank variety), I learned a lot about linux security.            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Tag
              name='Python'
              color='#00cc55'
            />
          </Card.Content>
        </Card>



        <Card>
          <Card.Content>
            <Card.Header>Pokemon Go Spawn Tracker</Card.Header>
            <Card.Meta>Django and Google Maps API</Card.Meta>
            <Card.Description>
              I was lucky to be part of the Pokemon Go beta during which I tried to make this spawn tracker in time for the release. It uses Django on the backend with the Google Maps API to crowdsource where people have seen certain pokemon out in the world. It is designed to be used on a phone browser.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Tag
              name='Javascript'
              color='#ff2288'
            />
          </Card.Content>
        </Card>


        <Card>
          <Card.Content>
            <Card.Header>Computer Science 1.1</Card.Header>
            <Card.Meta>Intro to Programming</Card.Meta>
            <Card.Description>
              Alan Davis' intro to computer science in Python. I learned a lot about the inner workings of Python and got a lot of practice writing it in this demanding course.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Tag
              name='Javascript'
              color='#ff2288'
            />
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <Card.Header>Troll Mode</Card.Header>
            <Card.Meta>Abusing cURL and Bash for Mischief</Card.Meta>
            <Card.Description>
              Troll mode was initially intended - and written - to be a command line utility for bash. Three days into the project I learned more about the language and environment, realized this made no sense, and deleted the vast majority of code I’d written. The final version was refactored down to a single 23 line file. Since this project is essentially malware (of the harmless prank variety), I learned a lot about linux security.            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Tag
              name='Python'
              color='#00cc55'
            />
          </Card.Content>
        </Card>



        <Card>
          <Card.Content>
            <Card.Header>Pokemon Go Spawn Tracker</Card.Header>
            <Card.Meta>Django and Google Maps API</Card.Meta>
            <Card.Description>
              I was lucky to be part of the Pokemon Go beta during which I tried to make this spawn tracker in time for the release. It uses Django on the backend with the Google Maps API to crowdsource where people have seen certain pokemon out in the world. It is designed to be used on a phone browser.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Tag
              name='Javascript'
              color='#ff2288'
            />
          </Card.Content>
        </Card>


        <Card>
          <Card.Content>
            <Card.Header>Computer Science 1.1</Card.Header>
            <Card.Meta>Intro to Programming</Card.Meta>
            <Card.Description>
              Alan Davis' intro to computer science in Python. I learned a lot about the inner workings of Python and got a lot of practice writing it in this demanding course.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Tag
              name='Javascript'
              color='#ff2288'
            />
          </Card.Content>
        </Card>


      </Card.Group>

    </div >
  }
}

export default SearchExperience;
