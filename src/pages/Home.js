import React from 'react'
import { Box, Divider, Stack } from '@chakra-ui/react'
import WhyBIM from '../components/WhyBIM'
import QuoteImage from '../components/QuoteImage'
import Testimonials from '../components/Testimonials'

//at bottom of page, provide national su**ide national hotline 


function Home() {
    return (
        <div>
            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                <Stack direction={{ base: 'column', lg: 'row' }} m={'5%'} justifyContent={'center'}>
                    <QuoteImage />
                    <Divider lineHeight={'200'} m={''} orientation='vertical' borderColor={'brand.600'} />
                    <WhyBIM marginLeft={'20'} />
                </Stack>
            </Box>
            <Box m={'0px auto'} >
                <Divider m={'0 auto'} orientation='horizontal' borderColor={'brand.600'} boxShadow={'xl'} maxWidth={'75%'} />
                <Testimonials />
            </Box>
        </div>

    )
}

export default Home
