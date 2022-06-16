import { Flex, Image } from '@chakra-ui/react'
import React from 'react'

function QuoteImage() {
    return (
        <Flex justify={'center'}>
            <Image src='../Quote.png' alt='Oh_Sam' borderRadius={'8'} boxShadow={'2xl'} w={'600px'} maxW={'100%'}
            />
        </Flex>

    )
}

export default QuoteImage
