import React from 'react'
import { Avatar, Box, Flex, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';


function WhyBIM() {
    return (

        <Flex justify={'center'} m={''} w={'50%'} >
            <Stack borderRightStyle={'groove'} borderColor={'brand.600'} maxW={'800'} borderRadius={'5'}
                m={''}
                marginLeft={'450'}
                boxShadow={'lg'}
                bg={useColorModeValue('gray.50', 'gray.800')}

                color={useColorModeValue('gray.700', 'gray.200')}
                py={16}
                px={8}
                spacing={{ base: 8, md: 10 }}
                align={'center'}
                direction={'column'}>

                <Text
                    // overflowWrap={'normal'}
                    // color={'black'}
                    fontSize={{ base: 's', md: 'l' }}
                    textAlign={'center'}
                    maxW={'3xl'}
                    minWidth={'600'}
                >
                    <Heading>Why Body in Mind?</Heading>
                    <br></br>
                    <br></br>
                    It may come as no surprise mental illnesses are on the rise during a pandemic which leaves isolation and disconnection in its wake. For people with mental illnesses, even the smallest task can feel like a mountain impossible to climb.
                    <br></br>
                    <br></br>
                    Keeping active has been shown to help improve mental health. Moreover, Body in Mind is a simple app designed to support you in conquering from the smallest hill to the tallest mountain.
                    <br></br>
                    <br></br>
                    By scheduling small activities for yourself in advance, you can have time to mentally prepare and maybe even look forward to them, all while keeping your Body in Mind.
                </Text>
                {/* <Box textAlign={'center'}> */}
                {/* <Avatar
          src={
            'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
          }
          alt={'Jenny Wilson'}
          mb={2}
        /> */}

                {/* <Text color={'black'} fontWeight={600}>-Samwise Gamgee</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
        Lord of the Rings
        </Text> */}
                {/* </Box> */}
            </Stack>
        </Flex>


    )
}

export default WhyBIM