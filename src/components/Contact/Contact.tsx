import { FC } from 'react';
import {
    Container,
    VStack,
    Heading,
    Link,
    Flex,
    Badge,
    Text,
    Spacer,
    Box,
    useColorModeValue
} from '@chakra-ui/react';
import { Element } from 'react-scroll';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

const Contact: FC = () => {
    return (
        <Element name='contact'>
            <Container maxW={'8xl'} p={6.75} mt={10}>
                <VStack spacing={8}>
                    <Fade>
                        <Heading as='h2'>Contact me</Heading>
                    </Fade>
                    <Flip bottom>
                        <Box
                            maxW={'85vw'}
                            w={'xl'}
                            bg={useColorModeValue('white', 'gray.900')}
                            boxShadow={'xl'}
                            rounded={'md'}
                            p={6}
                            pb={8}
                            overflow={'hidden'}
                        >
                            <Flex textAlign={'center'}>
                                <Container w='50%'>
                                    <Link href="mailto:jason@jasonfyw.com">
                                        <Badge colorScheme='green'>Personal</Badge>
                                        <Text textDecoration={'underline'}>jason@jasonfyw.com</Text>
                                    </Link>
                                </Container>
                                <Spacer />
                                <Container w='50%'>
                                    <Link href="mailto:jsn.wang@mail.utoronto.ca">
                                        <Badge colorScheme='orange'>Academic</Badge>
                                        <Text textDecoration={'underline'}>jsn.wang@mail.utoronto.ca</Text>
                                    </Link>
                                </Container>
                            </Flex>
                        </Box>
                    </Flip>
                </VStack>
            </Container>
        </Element>
    );
};

export default Contact;