import React from 'react'
import { Avatar, Box, Flex, Stack, Text, useColorModeValue } from '@chakra-ui/react';

function Quote() {

  return (
    <div>
        <Flex justify={'center'}>
    <Stack borderRightStyle={'groove'} borderColor={'brand.600'} maxW={'1000'} borderRadius={'10'}
      m={'10'}
      boxShadow={'lg'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text
      color={'black'}
        fontSize={{ base: 'md', md: 'xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
        "But in the end, it's only a passing thing, this shadow. Even darkness must pass. A new day will come. And when the sun shines it will shine out the clearer."

        {/* “Happiness can be found even in the darkest of times, if one only remembers to turn on the light.” — Albus Dumbledore */}
      </Text>
      <Box textAlign={'center'}>
        {/* <Avatar
          src={
            'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
          }
          alt={'Jenny Wilson'}
          mb={2}
        /> */}

        <Text color={'black'} fontWeight={600}>-Samwise Gamgee</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
        Lord of the Rings
        </Text>
      </Box>
    </Stack>
    </Flex>
    </div>
  );
}


export default Quote