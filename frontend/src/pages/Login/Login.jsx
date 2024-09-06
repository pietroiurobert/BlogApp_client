import style from './Login.module.css'
import { Box, Button, Card, CardBody, Heading, Input, Text, Stack, Divider, Flex, Checkbox, Icon } from '@chakra-ui/react'
import { FcGoogle, FcFaq  } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate()

    return (
        <div className={style.mainContainer}>
            <div className={style.loginContainer}>
                <div className={style.headerContainer}>
                    <Icon as={FcFaq} boxSize={20} />
                    <Heading size='lg'>Login to your account</Heading>
                    <Text>
                        Start making your dreams come true
                    </Text>
                </div>
                <div className={style.buttonsContainer}>
                    <Flex direction='column' gap='0.5rem'>
                        <Text size='sm'> Email </Text>
                        <Input placeholder='Enter your email'/>
                    </Flex>
                    <Flex direction='column' gap='0.5rem'>
                        <Text size='sm'> Password </Text>
                        <Input type='password' placeholder='******'/>
                    </Flex>
                </div>
                <Flex justify='space-between'>
                    <Checkbox size='md' colorScheme='blue'>
                        Remember me?
                    </Checkbox>
                    <Text> Forgot password </Text>
                </Flex>
                <div className={style.buttonsContainer}>
                    <Button colorScheme='blue' size={'md'} onClick={()=>navigate('/posts')}> Sign in </Button>
                    <Button size={'md'} leftIcon={<FcGoogle/>}> Sign in with google </Button>
                </div>
                <Flex gap='0.5rem'>
                    <Text size='sm'> Don't have an account? </Text>
                    <Text size='sm' color='#2B6CB0'> Sign up </Text>
                </Flex>
            </div>
        </div>
    )
}