import React from 'react'
import ActivityCard from './ActivityCard'
import { activityData } from '../data'
import { Box, SimpleGrid } from '@chakra-ui/react'


function SelectActivity() {

    // console.log(activityData)
    // const { activity } = useSelector(state => state)
    return (
        <div>
            <Box justifyContent={'center'}>
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
