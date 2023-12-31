import { Box, Flex, Heading, HStack, Stack, Button, Image, Text } from '@chakra-ui/react';
import React, { lazy, Suspense } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import ContactIcon from '../sourced-icons/contact.png';
import FreeDeliveryIcon from '../sourced-icons/free-delivery.png';
import ReturnIcon from '../sourced-icons/30days.png';
import CategoriesSection from '../components/homepage/CategoriesSection';

const VideoSection = lazy(() => import('../components/homepage/VideoSection'));
const ContactForm = lazy(() => import('../components/homepage/ContactForm'));

const HomeScreen = () => {
  const StoreBenefits = ({ iconSrc, title, description }) => (
    <Stack
      direction={{ base: 'column', lg: 'row' }}
      align='center'
      gap={{ base: '0', lg: '5' }}
      maxW={{ base: '190px', md: '300px' }}
    >
      <Image src={iconSrc} alt={title} w={['45px', '60px']} h='auto' />
      <Stack mt={1}>
        <Text fontSize={{ base: 'sm', md: 'md' }} color='brand.100'>
          {title}
        </Text>
        <Text fontSize='sm' fontWeight='light' color='brand.100' display={{ base: 'none', md: 'initial' }}>
          {description}
        </Text>
      </Stack>
    </Stack>
  );

  return (
    <>
      <Box id='homepage' maxW='12xl' mx='auto' minH='12xl'>
        <Box as='section' px={{ base: '0', lg: '12' }}>
          <Box
            w='full'
            h={['md', 'lg']}
            bgPos='center'
            bgSize='cover'
            alt='HeroImage'
            backgroundImage={{
              base: `url(https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
              sm: `url(https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
              md: `url(https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            }}
          >
            <Stack
              pos='relative'
              boxSize='full'
              justify='center'
              textAlign={{ base: 'center', lg: 'left' }}
              mx='auto'
              px={3}
            >
              <Stack spacing={5} ml={{ lg: '8%' }} justify='center' textAlign={{ base: 'center', lg: 'left' }}>
                <Heading
                  as='h1'
                  size={{ base: '2xl', sm: '3xl', lg: '4xl' }}
                  color='brand.100'
                  textTransform='uppercase'
                  letterSpacing='wide'
                  maxW={{ base: 'full', lg: '2xl' }}
                  fontWeight='bold'
                >
                  HEY! JEWELRY
                </Heading>
                <Text
                  fontSize={['md', 'lg', 'xl']}
                  color='brand.100'
                  maxW='2xl'
                  px={{ base: '8', md: '0' }}
                  fontWeight='thin'
                  display={{ base: 'none', lg: 'initial' }}
                >

                 Uncover the grace and allure of Hey Jewelry's exquisite collection, 
                 elevating your style with a touch of opulence and refinement today. 
                </Text>
                <Button
                  as={ReactLink}
                  to='/products'
                  _hover={{ color: 'brand.100', backgroundColor: 'brand.500' }}
                  textTransform='uppercase'
                  size='md'
                  rounded='2px'
                  color='brand.500'
                  backgroundColor='brand.100'
                  alignSelf={{ base: 'center', lg: 'start' }}
                >
                  Our Collections
                </Button>
              </Stack>
            </Stack>
          </Box>

          <HStack
            backgroundColor='brand.5001'
            justify='space-around'
            textAlign={{ base: 'center', lg: 'left' }}
            p={[3, 5]}
          >
            <StoreBenefits iconSrc={FreeDeliveryIcon} title='Free Shipping' description='For orders over $300' />
            <StoreBenefits iconSrc={ReturnIcon} title='30 Days Guarantee' description='Quality ensured or money back' />
            <StoreBenefits iconSrc={ContactIcon} title='24/7 Support' description='Always Here to Assist You' />
          </HStack>
        </Box>

        <CategoriesSection />
        <Suspense fallback={<div>loading...</div>}>
          <VideoSection />
          <Flex justifyContent='center' pb={10} id='contact-form' px={{ base: '0', md: '10', lg: '12' }}>
            <ContactForm />
          </Flex>
        </Suspense>
      </Box>
    </>
  );
};

export default HomeScreen;
