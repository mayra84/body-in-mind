import ContactForm from './ContactForm';
import React from 'react';
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from '@chakra-ui/react';



export default function CreatorProfile() {

    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px)'
        />
    )

    const OverlayTwo = () => (
        <ModalOverlay
            bg='none'
            backdropFilter='auto'
            backdropInvert='80%'
            backdropBlur='2px'
        />
    )
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)


    return (
        <Center py={6}>
            <Box
// marginTop={'10'}
w={'800px'} maxW={'100%'}
m={'5%'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}>
                <Avatar
                    size={'xl'}
                    src={
                        '../creator.jpg'}
                    alt={'Avatar Alt'}
                    mb={4}
                    pos={'relative'}
                // _after={{
                //     content: '""',
                //     w: 4,
                //     h: 4,
                //     bg: 'green.300',
                //     border: '2px solid white',
                //     rounded: 'full',
                //     pos: 'absolute',
                //     bottom: 0,
                //     right: 3,
                // }}
                />
                {/* <Heading fontSize={'2xl'} fontFamily={'body'}>
                    Mayra Estrella
                </Heading> */}
                <Text fontWeight={600} mb={4}>
                    Mayra Estrella
                </Text>
                <Text
                    textAlign={'center'}
                    color={useColorModeValue('gray.700', 'gray.400')}
                    px={3}>

                    The purpose of this app is to help you plan for the future and hopefully by doing so, a glimmer of light can become more visible through the seemingly never-ending abyss. 
                    {/* you can remember to look past the seemingly never-ending abyss and see a glimmer of light. */}
<br></br>
                    <br></br>
                    Body in Mind won't fix everything, it won't take away your problems, it won't silence the intrusive thoughts. 
                    <br></br>
                    But it can help you, help yourself.
                    <br></br>
                    <br></br>


                   And remember, as a brave little hobbit once said, "It's only a passing thing, this shadow".

                    {/* My inspiration for this app comes from a desire to help. Help people with mental illnesses find a bit of motivation to complete tasks and activities that will get them.... Help people support their loved ones who suffer with mental illnesses. */}

                    {/* With a bit of humor, because we could all use a chuckle. */}
                    <br></br>


                </Text>

                {/* <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                    <Badge
                        px={2}
                        py={1}
                        bg={useColorModeValue('gray.50', 'gray.800')}
                        fontWeight={'400'}>
                        #art
                    </Badge>
                    <Badge
                        px={2}
                        py={1}
                        bg={useColorModeValue('gray.50', 'gray.800')}
                        fontWeight={'400'}>
                        #photography
                    </Badge>
                    <Badge
                        px={2}
                        py={1}
                        bg={useColorModeValue('gray.50', 'gray.800')}
                        fontWeight={'400'}>
                        #music
                    </Badge>
                </Stack> */}

                <Stack mt={8} direction={'row'} spacing={4} m={'12'}>
                    {/* <Button
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        _focus={{
                            bg: 'gray.200',
                        }}>
                        Message
                    </Button> */}
                    <Button
                        onClick={() => {
                            setOverlay(<OverlayOne />)
                            onOpen()
                        }}
                        m={'0 auto'}
                        justifySelf={'center'}
                        maxWidth={'200'}
                        flex={1}
                        fontSize={'sm'}
                        r
                        bg={'teal.400'}
                        color={'white'}
                        boxShadow={
                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                        }
                        _hover={{
                            bg: 'teal',
                        }}
                        _focus={{
                            bg: 'teal',
                        }}>
                        Contact Me
                    </Button>




                    <Modal margin={'5%'} isOpen={isOpen} onClose={onClose}
                        size={'5xl'}>
                        {overlay}
                        <ModalOverlay />
                        <ModalContent>
                            {/* <ModalHeader>Modal Title</ModalHeader> */}
                            <ModalCloseButton />
                            <ModalBody>
                                <ContactForm />
                            </ModalBody>

                            {/* <ModalFooter>
                                <Button colorScheme='teal.500' mr={3} onClick={onClose}>
                                    Close
                                </Button>
                                {/* <Button variant='ghost'>Secondary Action</Button> */}
                            {/* </ModalFooter> */}
                        </ModalContent>
                    </Modal>



                </Stack>
            </Box>
        </Center>
    );
}