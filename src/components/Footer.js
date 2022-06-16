import { Link as RouterLink } from 'react-router-dom'

import {
    Box,
    chakra,
    Container,
    Image,
    Link,
    Stack,
    useColorMode,
    useColorModeValue,
    VisuallyHidden,
    Spacer,
} from '@chakra-ui/react';

import ThemeToggle from './ThemeToggle';



const Logo = (props) => {
    return (
        <Image
            className='body-logo'
            borderRadius={'75'}
            boxSize='125'
            objectFit='fill'
            src='../Minimal_Mountain_Logo_4.png'
            alt='Body in Mind' />
    );
};

const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function SmallCentered() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box
            boxShadow={'lg'}
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                py={4}
                spacing={'0'}
                flexDirection={'row'}
                align={'center'}
            >
                <Logo alignSelf={'left'} />

                <Stack direction={{ base: 'row', sm: 'row' }} justify={'space-between'} p={5}>
                    <Link as={RouterLink} to="/"> Home</Link>
                    <Link as={RouterLink} to="/activities"> Activities</Link>
                    <Link as={RouterLink} to="/myfavorites"> My Favorites</Link>
                    <Link as={RouterLink} to="/myactivities"> My Activities</Link>
                    <Link as={RouterLink} to="/aboutcreator"> About the Creator</Link>
                </Stack>
                <Spacer />
                <ThemeToggle alignSelf={'flex-end'} />
            </Container>
        </Box>
    );
}