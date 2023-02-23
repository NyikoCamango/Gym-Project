import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
} from 'native-base';

const Login = ({navigation}) => {

  const [email, setEmail ] = useState('')
  const [password, setPassword ] = useState('')
  const [isLoading, setLoading] = useState(false)

  const fnlogin = async () => {
    setLoading(true)
    let url = `https://fetch-your-body.herokuapp.com/public/login`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const {user} = await response.json()
    setLoading(false)
    if( user ) {
      try {
        const jsonValue = JSON.stringify(user)
        await AsyncStorage.setItem('user', jsonValue)
        await AsyncStorage.setItem('backup', jsonValue)
      } catch (e) {
      }
      if(user.role === "TRAINER") {
        navigation.navigate("Trainer")
      } else {
        navigation.navigate('User');
      }
    }
  };

  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}>
          Welcome
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: 'warmGray.200',
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input onChangeText={text => setEmail(text)}/>
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" onChangeText={text => setPassword(text)}/>
            <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }} alignSelf="flex-end" mt="1">
              {/* incorrect credentials */}
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={fnlogin} isLoading={isLoading}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}>
              I'm a new user.{' '}
            </Text>
            <Link
              onPress={() => navigation.navigate('Register')}
              _text={{
                color: 'indigo.500',
                fontWeight: 'medium',
                fontSize: 'sm',
              }}>
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default Login;
