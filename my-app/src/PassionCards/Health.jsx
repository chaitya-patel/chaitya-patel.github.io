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

import ReactCardFlip from 'react-card-flip';
import { GiHeartInside } from 'react-icons/gi';

class HealthCard extends React.Component {
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
            <Heading color={'gray.700'} size='md'> Health </Heading>
            </CardHeader>
            <CardBody alignContent={'center'} >
                <Container centerContent padding={10} >
                    <GiHeartInside color='#2D3748' size={100} />
                </Container>
            </CardBody>
            <CardFooter>
            </CardFooter>
        </Card>

        <Card h='calc(38vh)' w='calc(19vw)' onClick={this.handleClick} >
            <CardHeader>
            <Heading size='md'> Health </Heading>
            </CardHeader>
            <CardBody>
              <Text fontSize='md' >Some things I love learning about include design, business, psychology, philosophy, and physics (especially astrophysics and quantum physics).</Text>
            </CardBody>
            <CardFooter>
            </CardFooter>
        </Card>
      </ReactCardFlip>
    );
  }
}

export default HealthCard;