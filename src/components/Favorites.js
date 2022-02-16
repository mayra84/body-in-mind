import React from 'react'
import ActivityCard from './ActivityCard'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { useSelector } from 'react-redux'


function Favorites() {
    const favorites = useSelector((state) => state.favorites)
  return (
    <div>
        <Box>
                <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} alignItems='stretch' spacing={10} m={20}>
                    
                    { favorites.map(activity => {
                        return <ActivityCard key={activity.id} activity={activity}/>
                    })}
                </SimpleGrid>
            
               
            </Box>
    </div>
  )
}

export default Favorites
