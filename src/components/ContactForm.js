import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
  } from '@chakra-ui/react';
//   import {
//     MdPhone,
//     MdEmail,
//     MdLocationOn,
//     MdFacebook,
//     MdOutlineEmail,
//   } from 'react-icons/md';
//   import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
  
  export default function ContactForm() {
    return (
      <Container maxW="full" mt={0} centerContent overflow="hidden">
        <Flex justify={'center'}>
          <Box
            bg="brand.400"
            color="black"
            borderRadius="md"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Box p={4} >
            
              {/* <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}> */}
                {/* <WrapItem> */}
                  {/* <Box >
                    <Heading alignSelf={'center'}>Contact</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} >
                      Fill out the form below to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          // color="gray.500"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={'📞'}>
                          (956)534-4436
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          // color="gray.500"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={'✉️'}>
                          mayraestrella08@gmail.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          // color="gray.500"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={'📍'}>
                          Houston, TX
                        </Button>
                      </VStack>
                    </Box> */}
                    {/* <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start">
                      <IconButton
                        aria-label="facebook"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<MdFacebook size="28px" />}
                      />
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsGithub size="28px" />}
                      />
                      <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsDiscord size="28px" />}
                      />
                    </HStack> */}
                  {/* </Box> */}
                {/* </WrapItem> */}
                {/* <WrapItem> */}
                  
                  <Box bg="white" borderRadius="lg" p={4}>
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                      <Heading paddingBottom={5} textAlign={'center'}>Contact Me!</Heading>
                        <FormControl id="name" netlify>
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={'👤'}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl netlify id="name">
                          <FormLabel>Email</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={'✉️'}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl netlify id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="message"
                          />
                        </FormControl>
                        <FormControl netlify id="name" float="right">
                          <Button
                            variant="solid"
                            bg="teal"
                            color="white"
                            _hover={{}}>
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                {/* </WrapItem> */}
              {/* </Wrap> */}
            </Box>
          </Box>
        </Flex>
      </Container>
    );
  }