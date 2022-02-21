import React from 'react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    // AlertDescription,
} from '@chakra-ui/react'


function SuccessAlert() {
    return (
        <div>
            <Alert
            borderRadius={'5'}
                status='success'
                variant='subtle'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
                height='200px'
            >
                <AlertIcon boxSize='40px' mr={0} />
                <AlertTitle mt={4} mb={1} fontSize='lg'>
                    Activity Scheduled!
                </AlertTitle>
                {/* <AlertDescription maxWidth='sm'>
                    Keep up the good work!
                </AlertDescription> */}
            </Alert>
        </div>
    )
}

export default SuccessAlert

