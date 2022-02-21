import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  Link,
  SimpleGrid,
} from '@chakra-ui/react';

const Testimonial = ({ children } ) => {
  return <Box display={'flex'} flexDirection={'column'}>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
    flexGrow={'1'}
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
    //   alignItems={'stretch'}
      p={8}
      rounded={'xl'}
      align={'stretch'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
    // alignItems={'stretch'}
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'} flexBasis={'120px'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box >
        <SimpleGrid >
      <Container  maxW={'70%'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Helpful Resources</Heading>
          {/* <Text>We have been working with clients around the world</Text> */}
        </Stack>
        <Stack
        // alignItems={'stretch'}
        
        
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
            <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Recommended Activities</TestimonialHeading>
              <TestimonialText >
              "Mental health is vital to overall personal wellness. MentalHealth.gov describes mental health as our emotional psychological and social well-being. Here are some activities that can help to improve your overall psychological well-being."
              <br></br>
              <br></br>
              <Link fontWeight={'bold'} href="https://www.reidhealth.org/blog/mental-health">Mental Health: 9 Daily Activities to Maintain It</Link>
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar bg={'#FFFFFF'}
              src={
                '../Reid_Healthh.png'
              }
            //   name={'Jane Cooper'}
              title={'Reid Health'}
            />
          </Testimonial>
          <Testimonial >
            <TestimonialContent >
              <TestimonialHeading >Statistics</TestimonialHeading>
              <TestimonialText >
              "Overall, in a cohort aged between 55 and 96, there was an increase in the proportion of people with mild depressive symptoms from 13.2% in 2019 to 19% in 2020 and an increase in the proportion of people with mild anxiety symptoms (from 9.3% to 12.6%). The proportions of people with moderate-to-severe symptoms were comparable. Both loneliness and decreased physical activity were associated with worse mental health in 2020 compared to previous years."
              <br></br>
              <br></br>
              <Link fontWeight={'bold'} href="https://www.cambridge.org/core/journals/international-psychogeriatrics/article/loneliness-physical-activity-and-mental-health-during-covid19-a-longitudinal-analysis-of-depression-and-anxiety-in-adults-over-50-between-2015-and-2020/3ABF68EC662FA64D8B638362B24A740A">Loneliness, physical activity, and mental health during COVID-19</Link>
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                '../Cambridge_Uni_Press.jpeg'
              }
              name={'B.C., Z.K., W.H., S.O., A.C., M.V., K.M., N.W., I.T., D.A., C.B.'}
              title={'Cambridge University Press'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>How to Support a Loved One</TestimonialHeading>
              <TestimonialText >
              "If you are a caregiver of someone with a mental illness, it is normal to feel unprepared or confused on how to help them. Feelings of inadequacy are common but remember, you are not alone and there is always professional help available."
              <br></br>
              <br></br>
              <Link fontWeight={'bold'} href="https://www.mhanational.org/being-effective-caregiver">Being an Effective Caregiver</Link>
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={ 

                '../Mental_Health_America.png'
              }
            //   name={'Jane Cooper'}
              title={'CEO at ABC Corporation'}
            />
          </Testimonial>
          
        </Stack>
      </Container>
      </SimpleGrid>
    </Box>
  );
}