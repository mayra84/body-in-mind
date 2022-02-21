import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { personalData } from '../personalFavs'
import ActivityCard from '../components/ActivityCard';
import CreatorProfile from '../components/CreaterProfile';
import ContactForm from '../components/ContactForm';

import {
    Box,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    SimpleGrid,
    Text,
    Stack,
    useColorModeValue,
    Divider,
} from '@chakra-ui/react';


//hard code personal favorite activities

function AboutCreator(props) {
  const { activity } = props

  return (
    <div>
      <CreatorProfile />
      <Divider m={'0 auto'} orientation='horizontal' borderColor={'brand.600'} boxShadow={'xl'}  maxWidth={'75%'} marginBottom={'10'} marginTop={'20'}/>
      <Heading>Mayra's Personal Favorites!</Heading>
   
      
        <SimpleGrid justifyContent={'center'} columns={{ sm: 2, md: 3, lg: 4 }} alignItems='stretch' spacing={10} m={'0 auto'} marginTop={'10'} marginBottom={'10'} maxWidth={'70%'}>
                    
                    { personalData.map(activity => {
                        return <ActivityCard key={activity.id} activity={activity}/>
                    })}
                </SimpleGrid>
      
    </div>
  )
}

export default AboutCreator
