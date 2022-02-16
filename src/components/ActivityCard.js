import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activityData } from '../data'

import {
    Box,
    Button,
    Center,
    Heading,
    Image,
    Text,
    Stack,
    useColorModeValue,
    Flex,
} from '@chakra-ui/react';

function ActivityCard(props) {
    const { activity } = props

    const dispatch = useDispatch()

    //    const selectedActivity = useSelector((state))

    return (

        <Stack

            maxW={'445px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}>
            <Box
                h={'210px'}
                bg={'gray.100'}
                mt={-6}
                mx={-6}
                mb={6}
                pos={'relative'}>
                <Image
                    src={
                        activity.image
                    }
                    alt={activity.image}
                    objectFit={'cover'}
                    boxSize={'100%'}
                />
            </Box>

            <Stack align={'center'} justify={'space-between'} flexGrow={1}>
                <Heading
                    color={useColorModeValue('gray.700', 'white')}
                    fontSize={'2xl'}
                    fontFamily={'body'}>
                    {activity.title}
                </Heading>
                <Box flexGrow={'1'}>
                    <Text flexGrow={1} color={'gray.500'}>
                        {activity.description}
                    </Text>
                </Box>
                <Flex justify={'center'} wrap={'wrap'} mt={8} direction={'row'} spacing={4}>
                    <Button m={'2'}
                    variant={'outline'}
            
                        fontSize={'sm'}
                        // rounded={'full'}
                        colorScheme='teal'
                        >
                        Add to Favorites
                    </Button>
                    <Button
                    m={'2'}
            
                        fontSize={'sm'}
                        // rounded={'full'}
                        colorScheme='teal'
                      
                        color={'white'}
                
                        >
                Add to Calendar
                        
                    </Button>
                </Flex>
                {/* <Button colorScheme='teal' size='sm'>
                </Button>
                <Button colorScheme='teal' size='sm'>
                    
                </Button> */}
            </Stack>
        </Stack>

    )
}

export default ActivityCard
