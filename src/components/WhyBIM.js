import React from 'react'
import { Flex, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';


function WhyBIM() {
    return (

        <Flex justify={'center'} >
            <Stack borderRightStyle={'groove'} borderColor={'brand.600'} maxW={'800px'} minW={'200px'} borderRadius={'5'}
                padding={5}
                m={''}
                boxShadow={'lg'}
                bg={useColorModeValue('gray.50', 'gray.800')}
                color={useColorModeValue('gray.700', 'gray.200')}
                spacing={{ base: 8, md: 10 }}
                align={'center'}
                justifyContent={'center'}
                direction={'column'}>
                    <Heading>Why Body in Mind?</Heading>
                <Text
                    fontSize={{ base: 's', md: 'l' }}
                    textAlign={'center'}
                    maxW={'600px'}
                >
                    It may come as no surprise mental illnesses are on the rise during a pandemic which leaves isolation and disconnection in its wake. For people with mental illnesses, even the smallest task can feel like a mountain impossible to climb.
                    <br></br>
                    <br></br>
                    Keeping active has been shown to help improve mental health. Moreover, Body in Mind is a simple app designed to support you in conquering from the smallest hill to the tallest mountain.
                    <br></br>
                    <br></br>
                    By scheduling small activities for yourself in advance, you can have time to mentally prepare and maybe even look forward to them, all while keeping your Body in Mind.
                </Text>
            </Stack>
        </Flex>


    )
}

export default WhyBIM