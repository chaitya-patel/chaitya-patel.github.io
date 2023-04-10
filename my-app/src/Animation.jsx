import { Box, Container, HStack, chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import React from 'react';


const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function Animation() {
  return (
    <Container h="100vh" w="100vw" display="flex" alignItems="center" justifyContent="center">
        <Container
        centerContent
        width='138px'
        height='200px'
        >
            <HStack>
                <Box>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 0,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="20px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#fcd97d'
                        marginLeft='4px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 0.075,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="34px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#ffd571'
                        marginLeft='0px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 0.15,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="48px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#faae7a'
                        marginLeft='4px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 0.225,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="62px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#fac29f'
                        marginLeft='8px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 0.3,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="74px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#f9a58d'
                        marginLeft='14px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 0.375,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="82px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#f8b4b5'
                        marginLeft='16px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 0.45,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="86px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#f8bbc3'
                        marginLeft='20px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 0.525,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="92px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#f7acc0'
                        marginLeft='24px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 0.6,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="94px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#f9ced7'
                        marginLeft='28px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 0.675,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="102px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#f4a4c1'
                        marginLeft='26px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 0.75,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="60px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#f09abf'
                        marginLeft='60px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 0.825,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="78px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#f0b1d0'
                        marginLeft='50px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 0.9,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="94px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#efbad6'
                        marginLeft='38px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 0.975,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="98px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#e3cae0'
                        marginLeft='32px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 1.05,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="98px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#c6a1cc'
                        marginLeft='30px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 1.125,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="94px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#ded1e5'
                        marginLeft='32px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 1.2,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="84px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#b3b7dd'
                        marginLeft='38px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 1.275,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="74px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#cbd2ec'
                        marginLeft='44px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 1.35,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="58px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#adc5e7'
                        marginLeft='54px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 1.425,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="32px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#8cc6ec'
                        marginLeft='74px'
                        >
                    </ChakraBox>
                </Box>
                <Box>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 0,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="20px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#fcd97d'
                        marginLeft='118px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 0.075,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="34px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#ffd571'
                        marginLeft='104px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 0.15,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="48px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#faae7a'
                        marginLeft='86px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 0.225,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="62px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#fac29f'
                        marginLeft='68px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 0.3,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="74px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#f9a58d'
                        marginLeft='50px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 0.375,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="82px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#f8b4b5'
                        marginLeft='40px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 0.45,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="86px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#f8bbc3'
                        marginLeft='32px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 0.525,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="92px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#f7acc0'
                        marginLeft='22px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 0.6,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="94px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#f9ced7'
                        marginLeft='16px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 0.675,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="102px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#f4a4c1'
                        marginLeft='10px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 0.75,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="60px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#f09abf'
                        marginLeft='18px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 0.825,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="78px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#f0b1d0'
                        marginLeft='10px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 0.9,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="94px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#efbad6'
                        marginLeft='6px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 0.975,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="98px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#e3cae0'
                        marginLeft='8px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 1.05,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="98px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#c6a1cc'
                        marginLeft='10px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 1.125,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="94px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#ded1e5'
                        marginLeft='12px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 1.2,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="84px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#b3b7dd'
                        marginLeft='16px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 1.275,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="74px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#cbd2ec'
                        marginLeft='20px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 1.35,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="58px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#adc5e7'
                        marginLeft='26px'
                        >
                    </ChakraBox>
                    <ChakraBox
                        animate={{
                            opacity: [10,15,100],
                            rotateX: [90,360,360]
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 4,
                        delay: 1.425,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}
                        display="block"
                        width="32px"
                        height="10px"
                        borderRadius='20em'
                        boxShadow='dark-lg'
                        background='#8cc6ec'
                        marginLeft='32px'
                        >
                    </ChakraBox>
                </Box>
            </HStack>
            
            
            
        </Container>
      
    </Container>
  )
}   