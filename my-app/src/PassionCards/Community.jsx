import React from 'react';
import {
    theme,
    Heading,
    Text,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    bgGradient,
    size,
    Box,
    Container,
  } from '@chakra-ui/react';
  import { MyTheme } from '../theme';

import ReactCardFlip from 'react-card-flip';
import { GiWorld } from 'react-icons/gi';

class CommunityCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip
        isFlipped={this.state.isFlipped}
        flipSpeedBackToFront={2}
        flipSpeedFrontToBack={2}
      >
        <Card h='calc(38vh)' w='calc(19vw)' bgGradient="linear(to-br, cyan.200, purple.500)" onClick={this.handleClick} cursor='pointer' >
            <CardHeader>
            <Heading color={'gray.700'} size='md'> Community </Heading>
            </CardHeader>
            <CardBody alignContent={'center'} >
                <Container centerContent padding={10} >
                    <GiWorld color='#2D3748' size={100} />
                </Container>
            </CardBody>
            <CardFooter>
            </CardFooter>
        </Card>

        <Card h='calc(38vh)' w='calc(19vw)' onClick={this.handleClick} >
            <CardHeader>
            <Heading size='md'> Community </Heading>
            </CardHeader>
            <CardBody>
              <Text fontSize='md' >Quality education, gender and racial equity, access to healthcare, sustainability in communities, and conservation of habitats are some causes I care about. </Text>
            </CardBody>
            <CardFooter>
            </CardFooter>
        </Card>
      </ReactCardFlip>
    );
  }
}

export default CommunityCard;