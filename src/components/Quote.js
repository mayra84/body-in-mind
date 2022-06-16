import React from 'react'
import { Box, Flex, Stack, Text, useColorModeValue } from '@chakra-ui/react';

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

          </Text>
          <Box textAlign={'center'}>
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