import React from 'react'
import ActivityCard from './ActivityCard'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import ActionHero from './ActivityHero'


function Favorites() {
  const favorites = useSelector((state) => state.favorites)
  return (
    <div>
      <Box>
        {favorites.length === 0 ? (
          <ActionHero />
        ) : (
        <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} alignItems='stretch' spacing={10} m={20}>
          {favorites.map(activity => {
            return <ActivityCard key={activity.id} activity={activity} />
          })}
        </SimpleGrid>
        )}


      </Box>
    </div>
  )
}

export default Favorites
