import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTask, deleteTask } from '../redux/reducers/calendarReducer';

import {
    Box,
    Button,
    Center,
    Heading,
    Image,
    Text,
    Stack,
    useColorModeValue,
    Flex
} from '@chakra-ui/react';


//activity or task???? 

function CalendarActivityCard(props) {
    const { activity } = props
    const { date } = props

    const dispatch = useDispatch()

    const calendar = useSelector(state => state.calendar)


    const handleCreateTask = () => {
        console.log(activity)
        dispatch(createTask(activity))
    }



    // const handleCreateTask = () => {
    //     console.log(activity)
    //     console.log(date)
    //     dispatch(createTask(activity, date))
    // }

    // const handleFavoriteRemoveActivity = () => {
    //     dispatch(favoriteRemoveActivity(activity))
    // }

    const isAlreadySaved = calendar.find((savedActivity) => {
        return savedActivity.id === activity.id
    });

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
                    {date.value} {/*day, month year*/}  
                    </Text>

                </Box>

                <Flex justify={'center'} wrap={'wrap'} mt={8} direction={'row'} spacing={4}>
                    {/* {isAlreadySaved ? (
                        <Button onClick={handleFavoriteRemoveActivity}
                            m={'2'}
                            variant={'outline'}
                            fontSize={'sm'}
                            colorScheme='teal'
                        >
                            Remove from Favorites
                        </Button>
                    ) : ( */}
                    <Button onClick={handleCreateTask}
                        m={'2'}
                        variant={'outline'}
                        fontSize={'sm'}
                        colorScheme='teal'
                    >
                        Add to Favorites
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

export default CalendarActivityCard
