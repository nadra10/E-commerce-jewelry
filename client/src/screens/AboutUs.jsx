import { Box, Flex, Heading, Stack, Image, Text } from '@chakra-ui/react';

const AboutUs = () => {
  return (
    <Box maxW='12xl' mx='auto' px={{ base: '0', lg: '12' }} minH='8xl' id='main-content-about'>
      <Flex
        as='section'
        w='full'
        h={['md', 'lg']}
        bgPos='center'
        bgSize='cover'
        backgroundImage={{
          base: `url(https://images.unsplash.com/photo-1656427743666-d6507c12b04e?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2942)`,
          md: `url(https://images.unsplash.com/photo-1656427743666-d6507c12b04e?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2942)`,
        }}
      >
        <Heading
          color='brand.100'
          fontSize={['2xl', '4xl', '5xl']}
          alignSelf='center'
          mx='auto'
          w={['85%', '75%']}
          textAlign='center'
        >
          At Hey Jewelry, we blend traditional craftsmanship with modern design..
        </Heading>
      </Flex>

      {/* Section One  */}
      <Flex direction='column' minH='full' as='section'>
        <Text
          fontFamily='heading'
          color='brand.500'
          fontSize={['1.2em', '1.5em', '1.8em']}
          fontWeight='bold'
          textAlign='center'
          mx='auto'
          w={['80%', '70%', '65%']}
          my={12}
        >
Enter the realm of Hey Jewelry, where we fashion pieces that marry beauty and purpose, enhancing your everyday moments.
        </Text>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          justify='space-between'
          gap={5}
          px={{ base: '3', lg: '0' }}
          mb={12}
        >
          <Box mx='auto' rounded='2px' overflow='hidden' flex={1} as='section'>
            <Image
              fit='cover'
              src='https://images.unsplash.com/photo-1659727640714-7e9a1d8b31cb?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2824'
              alt='Handing shaping pottery'
              minH='250px'
            />
          </Box>

          <Box textAlign={{ base: 'center', md: 'left' }} mx='auto' alignSelf='center' flex={1} as='section'>
            <Text
              color='brand.500'
              fontSize={{ base: '2xl', lg: '3xl' }}
              fontWeight='bold'
              fontFamily='heading'
              maxW='2xl'
              mx='auto'
              mb={3}
            >
              We cherish meaningful beauty in everyday piece.
            </Text>
            <Text color='brand.500' fontSize={{ base: 'md', lg: 'xl' }} maxW='2xl' mx='auto'>
            At Hey Jewelry, we pour love and purpose into every creation, 
            using only the finest materials and time-honored techniques. Our crafted pieces are meant to inspire and bring joy, 
            each one bearing the distinct character of handmade artistry.
            </Text>
          </Box>
        </Stack>
      </Flex>

      {/* Section Two  */}
      <Flex
        as='section'
        w='full'
        py={12}
        h={{ base: 'md', lg: '2xl' }}
        bgPos='center'
        bgSize='cover'
        backgroundImage='url(https://images.unsplash.com/photo-1600788453744-0f88acf43e52?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&w=800)'
        pos='relative'
      >
        <Box
          backgroundColor='brand.5001'
          py={8}
          px={10}
          rounded={2}
          pos='absolute'
          maxW='500px'
          left='30%'
          transform='translate(-50%, -50%)'
          top='60%'
          zIndex='1'
          display={{ base: 'none', lg: 'initial' }}
        >
          <Text color='brand.100' fontFamily='heading' fontSize={{ base: '2xl', lg: '3xl' }} fontWeight='bold' mb={3}>
          Beauty is our unwavering commitment, reflected in every exquisite creation.
          </Text>
          <Text color='brand.100' fontSize={{ base: 'md', lg: 'xl' }}>
          Our commitment to beauty is woven into every facet of Hey Jewelry, 
          from the design process to the finished piece, as we strive to capture and enhance the inherent allure of each gem and metal we work with.
          </Text>
        </Box>
      </Flex>
      <Box display={{ base: 'initial', lg: 'none' }} textAlign='center' as='section'>
        <Text
          color='brand.500'
          pt={6}
          fontFamily='heading'
          fontSize={{ base: '2xl', lg: '3xl' }}
          px={5}
          mb={3}
          fontWeight='bold'
        >
          Commitment is the driving force behind every creation, infusing each piece with care and passion..
        </Text>
        <Text color='brand.500' fontSize={{ base: 'md', lg: 'xl' }} px={8}>
        Commitment is the unwavering promise we make to ourselves and to others, 
        a steadfast dedication that drives us to go above and beyond. It's the pledge to persevere through challenges, to uphold our values, 
        and to relentlessly pursue our goals. In the realm of craftsmanship, commitment is the heartbeat that fuels the creation of something truly extraordinary, 
        ensuring that each piece is imbued with care, passion, and attention to detail. At Hey Jewelry, commitment is the cornerstone of our craft, a promise to deliver not just jewelry, but wearable art infused with love, purpose, and a touch of magic.
        </Text>
      </Box>

      {/* Section Three  */}
      <Flex direction='column' minH='full' my={12} px={{ base: '3', lg: '0' }} as='section'>
        <Stack direction={{ base: 'column-reverse', md: 'row' }} justify='space-between' gap={5}>
          <Box textAlign={{ base: 'center', md: 'left' }} mx='auto' alignSelf='center' flex={1} as='section'>
            <Text
              color='brand.500'
              fontSize={{ base: '2xl', lg: '3xl' }}
              fontWeight='bold'
              fontFamily='heading'
              maxW='2xl'
              mx='auto'
              mb={3}
            >
              Crafting Treasures for Memorable Journeys.
            </Text>
            <Text color='brand.500' fontSize={{ base: 'md', lg: 'xl' }} maxW='2xl' mx='auto'>

            Thank you for choosing Hey Jewelry, where beauty, craftsmanship, 
            and commitment come together to enhance your everyday moments. We're delighted to be a part of your journey, and we look forward to seeing how our pieces bring sparkle, joy, 
            and significance to your life.
            </Text>
          </Box>
          <Box mx='auto' rounded='2px' overflow='hidden' flex={1} as='section'>
            <Image
              fit='cover'
              src='https://images.unsplash.com/photo-1677466893979-56601ff2075a?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&w=800'
              alt='Cutting the clay into pieces'
              minH='250px'
              ml='auto'
            />
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

export default AboutUs;
