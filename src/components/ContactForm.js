import {
  Container,
  Flex,
  Box,
  Heading,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';

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
            <Box bg="white" borderRadius="lg" p={4}>
              <Box m={8} color="#0B0E3F">
                <VStack spacing={5}>
                  <Heading paddingBottom={5} textAlign={'center'}>Contact Me!</Heading>
                  <FormControl id="name">
                    <FormLabel>Your Name</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                      <InputLeftElement
                        pointerEvents="none"
                        children={'👤'}
                      />
                      <Input type="text" size="md" />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="name">
                    <FormLabel>Email</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                      <InputLeftElement
                        pointerEvents="none"
                        children={'✉️'}
                      />
                      <Input type="text" size="md" />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="name">
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      borderColor="gray.300"
                      _hover={{
                        borderRadius: 'gray.300',
                      }}
                      placeholder="message"
                    />
                  </FormControl>
                  <FormControl id="name" float="right">
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
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}