import React from 'react'
import { Box, Center, Divider, Flex, SimpleGrid, Stack } from '@chakra-ui/react'
import Footer from '../components/Footer'
import Quote from '../components/Quote'
import WhyBIM from '../components/WhyBIM'
import QuoteImage from '../components/QuoteImage'
import Testimonials from '../components/Testimonials'
// import Carousel from '../components/Carousel'

//at bottom of page, provide national su**ide national hotline 



function Home() {
    return (
        <div>
{/* <Flex> */}
            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                {/* <Flex justify={'center'}  m={''}> */}
                {/* <SimpleGrid  columns={{ sm: 1, lg: 2}} alignItems='stretch' spacing={''} marginTop={"5%"}> */}
                {/* <Center height={'50%'} > */}
                <Stack direction={{base: 'column', lg: 'row'}} m={'5%'} justifyContent={'center'}>
                <QuoteImage />
                <Divider lineHeight={'200'} m={''} orientation='vertical' borderColor={'brand.600'}/>
                    {/* <Divider  m={'0 auto'}  orientation='vertical' borderColor={'brand.600'}  /> */}
                <WhyBIM marginLeft={'20'}/>
                
                {/* </Center> */}
                </Stack>
                {/* </SimpleGrid> */}
                {/* </Flex> */}
            </Box>
            <Box m={'0px auto'} >
            <Divider m={'0 auto'} orientation='horizontal' borderColor={'brand.600'} boxShadow={'xl'}  maxWidth={'75%'}/>
            <Testimonials />

            </Box>
            {/* </Flex> */}


        </div>

    )
}

export default Home
