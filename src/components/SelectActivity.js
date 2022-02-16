import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ActivityCard from './ActivityCard'
import { activityData } from '../data'
import { Box, SimpleGrid } from '@chakra-ui/react'


function SelectActivity() {

    console.log(activityData)
    // const { activity } = useSelector(state => state)
    return (
        <div>
            <Box>
                <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} alignItems='stretch' spacing={10} m={20}>
                    
                    { activityData.map(activity => {
                        return <ActivityCard key={activity.id} activity={activity}/>
                    })}
                </SimpleGrid>
            
               
            </Box>
        </div>
    )
}

export default SelectActivity
