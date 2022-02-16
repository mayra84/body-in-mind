import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { personalData } from '../personalFavs'
import ActivityCard from '../components/ActivityCard';
import CreatorProfile from '../components/CreaterProfile';

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
} from '@chakra-ui/react';


//hard code personal favorite activities

function AboutCreator(props) {
  const { activity } = props

  return (
    <div>
      <CreatorProfile />
      
        <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} alignItems='stretch' spacing={10} m={20}>
                    
                    { personalData.map(activity => {
                        return <ActivityCard key={activity.id} activity={activity}/>
                    })}
                </SimpleGrid>
      
    </div>
  )
}

export default AboutCreator
