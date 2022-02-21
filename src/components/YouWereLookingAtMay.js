import { AspectRatio, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'


function YouWereLookingAtMay(props) {
    // const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div><Modal size={'xl'} isOpen={props.isOpen} onClose={props.onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader></ModalHeader>
                <ModalCloseButton />
                <ModalBody>

                    <AspectRatio maxW='560px' ratio={16 / 9}>
                        <iframe
                            title='you were looking at may'
                            src='https://www.youtube.com/embed/0rA1jXU7Jds?autoplay=1'
                            allowFullScreen
                        />
                    </AspectRatio>

                </ModalBody>

                <ModalFooter>
                   
                </ModalFooter>
            </ModalContent>
        </Modal>


        </div>
    )
}

export default YouWereLookingAtMay