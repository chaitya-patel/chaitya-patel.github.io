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
import { GiPublicSpeaker } from 'react-icons/gi';

class SpeakingCard extends React.Component {
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
            <Heading color={'gray.700'} size='md'> Speaking </Heading>
            </CardHeader>
            <CardBody alignContent={'center'} >
                <Container centerContent padding={10} >
                    <GiPublicSpeaker color='#2D3748' size={100} />
                </Container>
            </CardBody>
            <CardFooter>
            </CardFooter>
        </Card>

        <Card h='calc(38vh)' w='calc(19vw)' onClick={this.handleClick} >
            <CardHeader>
            <Heading size='md'> Speaking </Heading>
            </CardHeader>
            <CardBody>
              <Text fontSize='md' >When I was in elementary school, I got the chance every year to host a school assembly or concert. Ever since, I haven’t forgotten the thrill of presenting and speaking into a microphone.</Text>
            </CardBody>
            <CardFooter>
            </CardFooter>
        </Card>
      </ReactCardFlip>
    );
  }
}

export default SpeakingCard;