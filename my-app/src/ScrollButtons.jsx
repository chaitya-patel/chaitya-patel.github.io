import React from "react";
import { Button, IconButton } from "@chakra-ui/react";
import { ChevronDownIcon, ExternalLinkIcon } from '@chakra-ui/icons';

export function ScrollExperience() {
    const handleClickScroll = () => {
      const element = document.getElementById('experience');
      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <>
        <IconButton aria-label='Sroll Down' icon={<ChevronDownIcon />} onClick={handleClickScroll} />
      </>
    );
  }

export function ScrollAboutMe() {
    const handleClickScroll = () => {
      const element = document.getElementById('about');
      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <>
        <IconButton aria-label='Sroll Down' icon={<ChevronDownIcon />} onClick={handleClickScroll} />
      </>
    );
  }

  export function ScrollBottom() {
    const handleClickScroll = () => {
      const element = document.getElementById('contact');
      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <>
        <Button aria-label='Sroll Down' icon={<ChevronDownIcon />} onClick={handleClickScroll}>Connect with Me</Button>
      </>
    );
  }
  