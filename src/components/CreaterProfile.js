import React from 'react';
import {
    Avatar,
    Box,
    Center,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

export default function CreatorProfile() {

    return (
        <Center py={6}>
            <Box
                w={'800px'} maxW={'100%'}
                m={'5%'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={{ sm: 5, md: 10, lg: 16 }}
                textAlign={'center'}>
                <Avatar
                    m={'1%'}
                    size={'xl'}
                    src={
                        '../creator.jpg'}
                    alt={'Avatar Alt'}
                    mb={4}
                    pos={'relative'}
                />
                <Text fontWeight={600} mb={4}>
                    Mayra Estrella
                </Text>
                <Text
                    textAlign={'center'}
                    color={useColorModeValue('gray.700', 'gray.400')}
                    p={3}>

                    The purpose of this app is to help you plan for the future and hopefully by doing so, a glimmer of light can become more visible through the seemingly never-ending abyss.

                    <br></br>
                    <br></br>
                    Body in Mind won't fix everything, it won't take away your problems, it won't silence the intrusive thoughts.
                    <br></br>
                    But it can help you, help yourself.
                    <br></br>
                    <br></br>
                    And remember, as a brave little hobbit once said, "It's only a passing thing, this shadow".
                    <br></br>
                </Text>

            </Box>
        </Center>
    );
}