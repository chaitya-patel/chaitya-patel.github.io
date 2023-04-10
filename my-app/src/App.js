import React from 'react';
import {
  ChakraProvider,
  Container,
  Box,
  Text,
  Heading,
  SimpleGrid,
  VStack,
  Grid,
  theme,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  IconButton,
  Tabs, 
  TabList, 
  TabPanels, 
  Tab, 
  TabPanel,
  Divider,
  Icon,
  Link,
  Flex,
  Spacer,
  DarkMode,
  LightMode,
  background,
  Image,
  Stack,
  HStack,
  GridItem,
  UnorderedList,
  ListItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  AspectRatio,
  Spinner,
  chakra,
  shouldForwardProp,
} from '@chakra-ui/react';
import { MyTheme } from './theme';
import { ChevronDownIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { AiTwotoneMail, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import CommunityCard from './PassionCards/Community';
import ExpressionCard from './PassionCards/Expression';
import HealthCard from './PassionCards/Health';
import LearningCard from './PassionCards/Learning';
import NatureCard from './PassionCards/Nature';
import SpeakingCard from './PassionCards/Speaking';
import TeachingCard from './PassionCards/Teaching';
import Animation from './Animation';
import { ScrollExperience, ScrollAboutMe, ScrollBottom } from './ScrollButtons';
import "@fontsource/lexend"; 


function App() {
  
  return (
    <ChakraProvider theme={MyTheme}>
      <DarkMode>
      <Box textAlign="center" fontSize="xl" bgGradient="linear(to-r, cyan.200, purple.500)" >
        <Grid minH="100vh" p={3} >
        <section>
        <Flex>
        <Box></Box>
        <Spacer/>
        <Box>
        <Flex direction='column'>
        <Container h='100vh' w='100vw' centerContent>
              <Box padding={10}>
                <Heading >
                  Hey, I'm Chaitya!
                </Heading>
                
              </Box>
              <Spacer/>
              <Box>
              <Text>
                  I'm a Systems Design Engineering student at the University of Waterloo with a passion for Product Management and Design. 
                </Text>
              </Box>
              <Animation />
              <Spacer/>
              <Box>
              <Text>
                  Empathize. Design. Build. Product Management
                </Text>
              </Box>
              <Spacer/>
              <Box padding={10}> 
                <ScrollExperience/>
              </Box>
         </Container>
         </Flex>
         </Box>
         <Spacer/>
         <Box></Box>
         </Flex>
        </section>

        <section>
        <Flex>
        <Box></Box>
        <Spacer/>
        <Box>
        <Flex direction='column'>
        <Container h='100vh' centerContent id='experience'>
            <Box padding={5}>
            <Heading fontSize={'xl'}>
                My Experiences
              </Heading>
            </Box>
            <Spacer/>
            <Box>
              <MiddleTab/>
            </Box>
            <Spacer/>
            <Box padding={5}>
              <ScrollAboutMe/>
            </Box>
         </Container>
         </Flex>
         </Box>
         <Spacer/>
         </Flex>
        </section>    

        <section>
        <Flex>
        <Box></Box>
        <Spacer/>
        <Box>
        <Flex direction='column'>
        <Container h='100vh'centerContent id='about' >
            <Box paddingTop={5}>
              <Heading fontSize={'xl'}>
                My Passions
              </Heading>
              <Text as='i' fontSize='sm'>
                Click on a card to read more
              </Text>
            </Box>
            <Spacer/>
            <Box>
              <FourCardRow1/>
            </Box>
            <Spacer/>
            <Box>
              <FourCardRow2/>
            </Box>
            <Box padding={5}>
              <ScrollBottom/>
            </Box>
         </Container>
         </Flex>
         </Box>
         <Spacer/>
         <Box></Box>
         </Flex>
        </section> 
        
        <Divider/>

        <section>
        <Flex>
        <Box></Box>
        <Spacer/>
        <Box>
        <Flex direction='column'>
        <Container h='10vh' id='contact'>
            <PageFooter />
         </Container>
         </Flex>
         </Box>
         <Spacer/>
         <Box></Box>
         </Flex>
        </section>

        </Grid>
      </Box>
      </DarkMode>
    </ChakraProvider>
    
  );
}

function MyButton() {
  return (
    <Button>
      I'm a button
    </Button>
  );
}


function MiddleTab() {
  return (
    <Tabs size='sm' variant='soft-rounded' colorScheme='gray'>
  <TabList>
    <Tab>SAP</Tab>
    <Tab>ThoughtWire</Tab>
    <Tab>Wind River: PM</Tab>
    <Tab>Wind River: UX</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <TabBox1/>
    </TabPanel>
    <TabPanel>
      <TabBox2/>
    </TabPanel>
    <TabPanel>
      <TabBox3/>
    </TabPanel>
    <TabPanel>
      <TabBox4/>
    </TabPanel>
  </TabPanels>
</Tabs>
  )
}

function TabBox1() {
  return (
    <Card h='calc(75vh)' w='calc(85vw)' >
      <CardHeader height='20%'>
      <Flex>
          <Box p='5'>
            <Heading paddingTop='5' size='md'> PM @ SAP </Heading>
          </Box>
          <Spacer/>
          <Box p='5'>
            <Image
                src='https://www.sap.com/dam/application/shared/logos/sap_logo_rgb_onwhite_0300_0300.png.adapt.png/1656382976488.png'
                boxSize='100px'
                objectFit='cover'
                />
          </Box>
        </Flex>
      </CardHeader>
      <CardBody height='70%'>
        <HStack>
          <Box width='60%' >
            <Text fontSize='sm' align='left' noOfLines={[20, 23]} >
          Over the course of the term, I worked on a project to internally adopt Application Insights (Microsoft Azure Monitor) as the  primary source of data collection and analytics for SAP HANA Cloud. With a fellow intern, 
          I defined data requirements based on business needs and presented the capabilities of the tool through pilot testing and creating reports and dashboards, which we presented to leadership for approval of the tool. 
          Additionally,  I partnered with a colleague to conduct market research on Cloud Database Intelligent Optimization to aid the global SAP HANA Cloud Product Management team in planning for new features.
          <br/> <br/> I also directly interacted with customers by responding to their feature requests, as well as publishing multiple tutorials and  demoing several features internally and externally to over 300 customers. 
          <br/> <br/>Features I demoed and wrote tutorials for include: <br/>
              <UnorderedList>
                <ListItem>SAP HANA database explorer Visual Studio Code extension</ListItem>
                <ListItem>Go Driver for SAP HANA Cloud, data lake</ListItem>
                <ListItem>.NET Entity Framework Core for SAP HANA</ListItem>
                <ListItem>Typescript support for SAP HANA</ListItem>
              </UnorderedList> <br/>

           Through this, SAP taught me about the importance of providing teaching materials to ease feature adoption as well as how vital it is to maintain company culture especially with such an expansive impact. 
        </Text>
          </Box>
          <Spacer/>
          <Box h='400px'>
            <Divider orientation='vertical'/>
          </Box>
          <Spacer/>
          <Box width='40%'>
            <VStack>
            <Text fontSize='lg' as='b' >
              Published Tutorials and Demos
            </Text>
            <Link fontSize='sm' href='https://developers.sap.com/tutorials/hana-cloud-dl-clients-golang.html' isExternal>
            Connect to Data Lake Relational Engine Using the Go Driver <ExternalLinkIcon mx='2px' />
            </Link>
            <Link fontSize='sm' href='https://developers.sap.com/tutorials/hana-dbx-extension.html' isExternal>
            Use the SAP HANA Database Explorer Extension <ExternalLinkIcon mx='2px' />
            </Link>
            <Link fontSize='sm' href='https://blogs.sap.com/2023/03/30/whats-new-in-sap-hana-cloud-march-2023/#:~:text=ADD%20column-,SAP%20HANA%20Database%20Clients,-Next%20on%20the' isExternal>
            What’s New in SAP HANA Cloud: SAP HANA Client Demos  <ExternalLinkIcon mx='2px' />
            </Link>
            <br/>
            <Image 

              src='images/SAP Developer Center.png'
              border='1px'
              objectFit={'cover'}
              borderColor='gray.500'
            
            />
            </VStack>

          </Box>
        </HStack>
      </CardBody>
      <CardFooter>
      </CardFooter>
  </Card>
  )
}

function TabBox2() {
  return (
    <Card h='calc(75vh)' w='calc(85vw)'>
      <CardHeader height='20%'>
        <Flex>
          <Box p='5'>
            <Heading paddingTop='5' size='md'> PM @ ThoughtWire </Heading>
          </Box>
          <Spacer/>
          <Box p='5'>
            <Image
            src='https://media.licdn.com/dms/image/C4E0BAQF-7tN8xbYS2g/company-logo_200_200/0/1627584351264?e=2147483647&v=beta&t=m9OUedxw6NLxCEHhgpViM_tmc5mY22akBwHimKIb9Ws'
            objectFit='contain'
            boxSize='80px'
            />
          </Box>
        </Flex>
      </CardHeader>
      <CardBody height='70%'>
        <HStack>
          <Box width='60%'>
            <Text fontSize='sm' align='left' noOfLines={[20, 23]} >ThoughtWire uses Digital Twin technology to operationalize data from built spaces such as office buildings and hospitals to ease interaction between building administrators, users and the building itself with mobile and web applications. <br/>

              <br/>Features I defined included:
              <UnorderedList>
                <ListItem>A building health module that allows building administrators to visualize system status on a digitized floor map with the ability to take suggested actions to resolve these issues as well as real-time insights into the utilization of the building such as occupancy levels, comfort levels, sustainability levels and productivity levels in different zones of the building.</ListItem>
                <ListItem>Setting building automations</ListItem>
                <ListItem>Triggering emergency notifications from the web app to the mobile app</ListItem>
                <ListItem>Submitting work orders through the mobile app and managing them through the web app</ListItem>
              </UnorderedList>
              <br/>

             Being at a smaller company, my responsibilities went beyond product management and expanded into other areas including project and program management. As a side project, I set up the process to capture product improvement requests from internal and external stakeholders in a way that made them more actionable. By defining a process and adding automation to parts of the planning process, I helped increase efficiency of the product pipeline and reduced variation in the quality of product requirements and documentation created.  
            </Text>
          </Box>
          <Spacer/>
          <Box h='400px'>
            <Divider orientation='vertical'/>
          </Box>
          <Spacer/>
          <Box width='40%'>
            <VStack>
            <Text fontSize='lg' as='b' >
              ThoughtWire Product Process
            </Text>
              <TWModal/>
            </VStack>

          </Box>
        </HStack>
      </CardBody>

      <CardFooter>
      </CardFooter>
  </Card>
  )
}
function TabBox3() {
  return (
    <Card h='calc(75vh)' w='calc(85vw)'>
      <CardHeader height='20%'>
      <Flex>
          <Box p='5'>
            <Heading paddingTop='5' size='md'> PM @ Wind River</Heading>
          </Box>
          <Spacer/>
          <Box p='5'>
            <Image
            src='https://media.licdn.com/dms/image/C4E0BAQGLmgBBcRhoSw/company-logo_200_200/0/1611721946459?e=2147483647&v=beta&t=1uXJNkQKBykICd1kh25Wvi-zXvLo9PGL0hQZQrbkq00'
            boxSize='80px'
            objectFit='cover'
            />
          </Box>
        </Flex>
      </CardHeader>
      <CardBody height='70%'>
        <HStack>
          <Box width='60%'>
            <Text fontSize='sm' align='left' noOfLines={[20, 23]} > This being my second co-op term at Wind River, I had a good working knowledge of the product to the extent that I was able to become productive right away. 
            
            <br/> <br/> Products and features that I defined included: <br/>

              <UnorderedList>
                <ListItem>Creating and managing user groups, roles, and permission (Identity and Access Management)</ListItem>
                <ListItem>Command Line Interface Tool for Wind River Studio</ListItem>
                <ListItem>System Configurator: A tool that allows the user to graphically define a system project with components including a board, OS, virtual machines, containers hypervisors, etc. An example would be assembling a Linux with third-party, and Wind River supplied packages , policies, and actions.</ListItem>
              </UnorderedList>
              <br/>
              Having previously worked with the UX Design team gave me an extremely valuable and unique perspective on product management and how it interacts with different teams. I am grateful that this was my first product management experience because it gave me a foundation that is hard to replicate, from what I value about product management to seeing what skills a great product management team must possess. 
             
            </Text>
          </Box>
          <Spacer/>
          <Box h='400px'>
            <Divider orientation='vertical'/>
          </Box>
          <Spacer/>
          <Box width='40%'>
            <VStack>
            <Text fontSize='lg' as='b' >
              Related Content
            </Text>
            <WRPMModal/>
            </VStack>

          </Box>
        </HStack>
      </CardBody>
 
      <CardFooter>
      </CardFooter>
  </Card>
  )
}

function TabBox4() {
  return (
    <Card h='calc(75vh)' w='calc(85vw)'>
      <CardHeader height='20%'>
      <Flex>
          <Box p='5'>
            <Heading paddingTop='5' size='md'> UX Design @ Wind River </Heading>
          </Box>
          <Spacer/>
          <Box p='5'>
            <Image
            src='https://media.licdn.com/dms/image/C4E0BAQGLmgBBcRhoSw/company-logo_200_200/0/1611721946459?e=2147483647&v=beta&t=1uXJNkQKBykICd1kh25Wvi-zXvLo9PGL0hQZQrbkq00'
            boxSize='80px'
            objectFit='cover'
            />
          </Box>
        </Flex>
      </CardHeader>
      <CardBody height='70%'>
        <HStack>
          <Box width='60%'>
            <Text fontSize='sm' align='left' noOfLines={[20, 23]} >
            Working as a user experience designer was a fun and impactful experience. I enjoyed the role that creativity played and how every feature I was assigned to design felt like a puzzle, but with many possible right answers. I got to witness iterative design firsthand, and it was amazing to see how designs would evolve after rounds of giving, receiving, and applying feedback. 
            <br/> <br/> As part of Wind River Studio, I particularly worked on a tool called Pipeline Manager which allows users to build and run pipelines using blocks (e.g., code, Linux images, VxWorks projects, QA tests etc.). 
            <br/> <br/> Some features that I designed and improved included: <br/>

              <UnorderedList>
                <ListItem>Editing pipeline block configuration</ListItem>
                <ListItem>Rearranging pipeline blocks</ListItem>
                <ListItem>Versioning</ListItem>
                <ListItem>Running pipelines and viewing status</ListItem>
              </UnorderedList>
              <br/> Take a look at the presentation if you'd like to see some of these. 

            </Text>
          </Box>
          <Spacer/>
          <Box h='400px'>
            <Divider orientation='vertical'/>
          </Box>
          <Spacer/>
          <Box width='40%'>
            <VStack >
            <Text fontSize='md' as='b' >
              Related Content
            </Text>
            <Link fontSize='sm' href='https://www.forbes.com/sites/windriver/2022/07/12/wind-river-technology-helps-the-nasa-james-webb-space-telescope-brave-extremes-to-bring-home-treasure/?sh=3407ea8feff7' isExternal>
            Wind River Technology on NASA James Webb Telescope  <ExternalLinkIcon mx='2px' />
            </Link>
            <Link fontSize='sm' href='https://www.windriver.com/inspace' isExternal>
            Read about Wind River in Space  <ExternalLinkIcon mx='2px' />
            </Link>
            <WRUXModal/>
            </VStack>

          </Box>
        </HStack>
      </CardBody>
      <CardFooter>
      </CardFooter>
  </Card>
  )
}


function FourCardRow1() {
  return (
    <HStack spacing={5}>
      <LearningCard/>
      <HealthCard/>
      <SpeakingCard/>
      <NatureCard/>
    </HStack>
  )
}

function FourCardRow2() {
  return (
    <HStack spacing={5} >
      <ExpressionCard/>
      <CommunityCard/>
      <TeachingCard/>
  </HStack>
  )
}

function Github() {
  return (
  <Link href='https://github.com/chaitya-patel' isExternal>
    <AiFillGithub />
  </Link>
  )
}

function LinkedIn() {
  return (
  <Link href='https://www.linkedin.com/in/chaitya-patel/' isExternal>
    <AiFillLinkedin />
  </Link>
  )
}

function Outlook() {
  return (
    <Link href='mailto:chaitya.patel@uwaterloo.ca' >
      <AiTwotoneMail/>
    </Link>
  )
}

function PageFooter() {
  return (
    <Container w='200px' padding={10}>
      <Flex>
        <Outlook/>
        <Spacer />
        <LinkedIn/>
        <Spacer />
        <Github/>
  </Flex>
    </Container>
  )
}

function TWModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Image onClick={onOpen} cursor='pointer'

        src='images/TWProductProcess.png'
        border='1px'
        objectFit={'cover'}
        borderColor='gray.500'
      
      />

      <Modal isOpen={isOpen} onClose={onClose} size='full' isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>ThoughtWire Product Process</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Image

            src='images/TWProductProcess.png'
            border='1px'
            objectFit={'cover'}
            borderColor='gray.500'

            />
          </ModalBody>

          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

function WRPMModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Image onClick={onOpen} cursor='pointer'

        src='images/Wind River PM Project.png'
        border='1px'
        objectFit={'cover'}
        borderColor='gray.500'
      
      />

      <Button onClick={onOpen} cursor='pointer'> View Presentation </Button>

      <Modal isOpen={isOpen} onClose={onClose} size='full' isCentered >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <iframe  src="https://docs.google.com/presentation/d/e/2PACX-1vTCXwIJNHkX9BHQZh2-uAYgi7tLaJTg1janxgb0dhIzOF-EJ-b5LYaHlAP9sBdK-A/embed?start=false&loop=false&delayms=3000" 
          frameborder="0" width="1280" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true">
            
          </iframe>
          </ModalBody>

          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

function WRUXModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Image onClick={onOpen} cursor='pointer'

        src='images/Wind River UX Pipeline Manager.png'
        border='1px'
        objectFit={'cover'}
        borderColor='gray.500'
      
      />

      <Button onClick={onOpen} cursor='pointer'> View Presentation </Button>

      <Modal isOpen={isOpen} onClose={onClose} size='full' isCentered >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSiQ1WwODp-AaTD4QLiEFiL_Aw9nc7Aift-sMLk6aqT25s0jABLb1LAAZQ_k2T20A/embed?start=false&loop=false&delayms=3000" 
            frameborder="0" width="1280" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true">
          </iframe>
          </ModalBody>

          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}



export default App;