import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useDispatch, useSelector } from 'react-redux'
import { favoriteAddActivity, favoriteRemoveActivity } from '../redux/reducers/favoritesReducer';
import { createTask, completeTask } from '../redux/reducers/calendarReducer';
import SuccessAlert from './SuccessAlert'
import {
    Box, Button, Center, Heading, Image, Text, Stack, useColorModeValue, Flex, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure
} from '@chakra-ui/react';
import YouWereLookingAtMay from './YouWereLookingAtMay';


function ActivityCard(props) {
    const { activity } = props

    const handleModalOnClick = () => {
        onOpen()
        setOverlay(<OverlayOne />)
    }


    const dispatch = useDispatch()

    //favorites
    const favorites = useSelector(state => state.favorites)


    const handleFavoriteAddActivity = () => {
        console.log(activity)
        dispatch(favoriteAddActivity(activity))
    }

    const handleFavoriteRemoveActivity = () => {
        dispatch(favoriteRemoveActivity(activity))
    }

    const isAlreadySaved = favorites.find((savedActivity) => {
        return savedActivity.id === activity.id
    });

    //calendar
    const calendar = useSelector(state => state.calendar)

    const [displayAlert, setDisplayAlert] = useState(false)

    // useEffect(() => {
    const timer = setTimeout(() => {
        setDisplayAlert(false);
    }, 7000)
    // return () => clearTimeout(timer);
    // }, []);


    const handleCreateTask = () => {
        console.log(activity)
        dispatch(createTask(activity, date))
        onClose()
        setDisplayAlert(true)
    }

    const handleCompleteTask = () => {
        dispatch(completeTask(props.uuid))
    }

    const handleOnClickMonth = (date) => {

        console.log(date.getMonth())
        if (date.getMonth() === 4) {

            mayOnOpen()
        }
        setDate()

    }

    const [date, setDate] = useState(new Date());
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen: mayIsOpen, onOpen: mayOnOpen, onClose: mayOnClose } = useDisclosure()

    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px)'
        />
    )

    const [overlay, setOverlay] = React.useState(<OverlayOne />)

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
            {displayAlert && (
                <SuccessAlert />
            )}

            <Stack align={'center'} justify={'space-between'} flexGrow={1}>
                <Heading
                    color={useColorModeValue('gray.700', 'white')}
                    fontSize={'2xl'}
                    fontFamily={'body'}>
                    {activity.title}
                </Heading>
                <Box flexGrow={'1'}>
                    <Text flexGrow={1} color={'gray.500'}>

                        {props.date ? (
                            props.date.toLocaleDateString()
                        ) : (
                            activity.description
                        )}
                    </Text>
                </Box>
                <Flex justify={'center'} wrap={'wrap'} mt={8} direction={'row'} spacing={4}>
                    {isAlreadySaved ? (
                        <Button onClick={handleFavoriteRemoveActivity}
                            m={'2'}
                            variant={'outline'}
                            fontSize={'sm'}
                            colorScheme='teal'
                        >
                            Remove from Favorites
                        </Button>
                    ) : (
                        <Button onClick={handleFavoriteAddActivity}
                            m={'2'}
                            variant={'outline'}
                            fontSize={'sm'}
                            colorScheme='teal'
                        >
                            Add to Favorites
                        </Button>
                    )}


                    {props.date ? (
                        <Button onClick={handleCompleteTask}

                            m={'2'}
                            fontSize={'sm'}
                            colorScheme='teal'
                            color={'white'}

                        >Complete</Button>
                    ) : (
                        <Button
                            m={'2'}
                            fontSize={'sm'}
                            colorScheme='teal'
                            color={'white'}
                            onClick={handleModalOnClick}
                        >Add to Calendar</Button>
                    )}


                    <Modal isOpen={isOpen} onClose={onClose}>
                        {overlay}
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader color='black' m={'auto'}>Pick a date!</ModalHeader>
                            <ModalCloseButton color={'black'} />
                            <ModalBody>
                                <div className="Sample">

                                    <Box color={'black'} bg={'white'} maxW={'700'} p={'10'} justify={'center'}>
                                        <Center>
                                            <Flex justify={'center'} alignContent={'center'} alignItems={'center'}>


                                                <Calendar

                                                    calendarType='US'
                                                    onChange={setDate} value={date} p={'10'} showFixedNumberOfWeeks
                                                    onClickMonth={handleOnClickMonth}


                                                />
                                                <YouWereLookingAtMay isOpen={mayIsOpen} onClose={mayOnClose} />
                                            </Flex>
                                        </Center>
                                    </Box>
                                </div>
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={handleCreateTask} >
                                    Add
                                </Button>



                                {/* <Button variant='ghost'>Secondary Action</Button> */}
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
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
