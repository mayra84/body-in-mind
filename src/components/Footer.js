import { Link as RouterLink } from 'react-router-dom'

import {
    Box,
    Button,
    chakra,
    Container,
    Flex,
    HamburgerIcon,
    Image,
    Link,
    MoonIcon,
    SunIcon,
    Stack,
    Text,
    useColorMode,
    useColorModeValue,
    VisuallyHidden,
    Spacer,
} from '@chakra-ui/react';

// import {
//     HamburgerIcon,
//     CloseIcon,
//     ChevronDownIcon,
//     ChevronRightIcon,
//   } from '@chakra-ui/icons';
//   import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';
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
        // <Flex justifyContent={'space-between'}>
            <Box
                boxShadow={'lg'}
                bg={useColorModeValue('gray.50', 'gray.900')}
                color={useColorModeValue('gray.700', 'gray.200')}>
                <Container
                    // minH={'500px'}
                    // margin={'0px'}
                    // as={Stack}

                    py={4}
                    spacing={'0'}
                    flexDirection={'row'}
                    // justify={'space-between'}
                    // justify={'center'}
                    align={'center'}
                >
                    <Logo alignSelf={'left'} />
                    {/* <Flex  flexDirection={{base: 'row', sm: 'column'}}> */}
                    <Stack direction={{ base: 'row', sm: 'row' }} justify={'space-between'} p={5}>

                        <Link as={RouterLink} to="/"> Home</Link>
                        <Link as={RouterLink} to="/activities"> Activities</Link>
                        <Link as={RouterLink} to="/myfavorites"> My Favorites</Link>
                        <Link as={RouterLink} to="/myactivities"> My Activities</Link>
                        <Link as={RouterLink} to="/aboutcreator"> About the Creator</Link>
                        {/* <Button justifyItems={'left'} onClick={toggleColorMode}>
                            {colorMode === 'light' ? '🌙' : '☀️'}
                        </Button> */}
                    </Stack>
                    {/* </Flex> */}
                    <Spacer />
                    <ThemeToggle alignSelf={'flex-end'} />

                </Container>

                {/* <Box
                borderTopWidth={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>
                    <Text>© 2020 Chakra Templates. All rights reserved</Text>
                    <Stack direction={'row'} spacing={6}>
                        <SocialButton label={'Twitter'} href={'#'}>
                            {/* <FaTwitter /> */}
                {/* </SocialButton> */}
                {/* <SocialButton label={'YouTube'} href={'#'}> */}
                {/* <FaYoutube /> */}
                {/* </SocialButton>
                        <SocialButton label={'Instagram'} href={'#'}> */}
                {/* <FaInstagram /> */}
                {/* </SocialButton> */}
                {/* </Stack> */}
                {/* </Container> */}
                {/* </Box> */}

            </Box>
        // </Flex>
    );
}