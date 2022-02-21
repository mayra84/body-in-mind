import React from 'react'
import ActivityCard from './ActivityCard'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import CalendarHero from './CalendarHero'


function ScheduledActivities() {
    const calendar = useSelector((state) => state.calendar)
  return (
    <div>
        <Box>
                <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} alignItems='stretch' spacing={10} m={20}>
                    
                    { calendar.activities.map((activity) => {
                        return <ActivityCard key={activity.uuid} date={activity.date} uuid={activity.uuid} activity={activity.activity}/>
                    })}
                    
                </SimpleGrid>
            
               
            </Box>
    </div>
  )
}

export default ScheduledActivities
