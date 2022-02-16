import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
} from '@chakra-ui/react';



export default function CreatorProfile() {
    return (
        <Center py={6}>
            <Box
                maxW={'1000px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}>
                <Avatar
                    size={'xl'}
                    src={
                        '../creator.jpg'}
                    alt={'Avatar Alt'}
                    mb={4}
                    pos={'relative'}
                    // _after={{
                    //     content: '""',
                    //     w: 4,
                    //     h: 4,
                    //     bg: 'green.300',
                    //     border: '2px solid white',
                    //     rounded: 'full',
                    //     pos: 'absolute',
                    //     bottom: 0,
                    //     right: 3,
                    // }}
                />
                {/* <Heading fontSize={'2xl'} fontFamily={'body'}>
                    Mayra Estrella
                </Heading> */}
                <Text fontWeight={600} color={'gray.500'} mb={4}>
                    Mayra Estrella
                </Text>
                <Text
                    textAlign={'center'}
                    color={useColorModeValue('gray.700', 'gray.400')}
                    px={3}>
                     I realized one sad Sunday evening, the world doesn't stop for anyone. One of my closest friends had just gotten engaged and although we had talked about it over text, I didn't feel I had given this important in my loved one's life the proper time and attention it deserved-- if at least through an actual phone call. As you might have guessed, I was in the middle of a depressive episode. I decided to message her and schedule a time for a phone call. That is when I was inspired to make this app.
          <br></br>
          <br></br>
          Body in Mind won't fix everything, it won't take away your problems, it won't silence the intrusive thoughts. But it can help you, help yourself. By setting small activities throughout the week in advance, you can have time to mentally prepare and maybe even look forward to them, all while keeping your Body in Mind.

                </Text>

                <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                    <Badge
                        px={2}
                        py={1}
                        bg={useColorModeValue('gray.50', 'gray.800')}
                        fontWeight={'400'}>
                        #art
                    </Badge>
                    <Badge
                        px={2}
                        py={1}
                        bg={useColorModeValue('gray.50', 'gray.800')}
                        fontWeight={'400'}>
                        #photography
                    </Badge>
                    <Badge
                        px={2}
                        py={1}
                        bg={useColorModeValue('gray.50', 'gray.800')}
                        fontWeight={'400'}>
                        #music
                    </Badge>
                </Stack>

                <Stack mt={8} direction={'row'} spacing={4}>
                    <Button
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        _focus={{
                            bg: 'gray.200',
                        }}>
                        Message
                    </Button>
                    <Button
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        bg={'blue.400'}
                        color={'white'}
                        boxShadow={
                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                        }
                        _hover={{
                            bg: 'blue.500',
                        }}
                        _focus={{
                            bg: 'blue.500',
                        }}>
                        Follow
                    </Button>
                </Stack>
            </Box>
        </Center>
    );
}