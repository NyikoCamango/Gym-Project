import React ,{useState} from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center } from "native-base";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = ({navigation}) => {

  const [email, setEmail ] = useState('')
  const [password, setPassword ] = useState('')
  const [fname, setFname ] = useState('')
  const [surname, setSurname ] = useState('')
  const [loading, setLoading] = useState(false)

  const fnRegister = async () => {
    setLoading(true)
    
    let url = `https://fetch-your-body.herokuapp.com/public/register`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
           email, password, fname, surname, role: "USER", confirm: password
        })
    });

    const {user} = await response.json()
    setLoading(false)
    if( user ) {
      try {
        const jsonValue = JSON.stringify(user)
        await AsyncStorage.setItem('user', jsonValue)
        navigation.navigate("Login")
      } catch (e) {
      }
    }
    console.log(response)
  }

    return (
        <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading size="lg" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="semibold">
          Welcome
        </Heading>
        <Heading mt="1" color="coolGray.600" _dark={{
        color: "warmGray.200"
      }} fontWeight="medium" size="xs">
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>First Name</FormControl.Label>
            <Input onChangeText={text => setFname(text)}/>
          </FormControl>
          <FormControl>
            <FormControl.Label>Last Name</FormControl.Label>
            <Input  onChangeText={text => setSurname(text)}/>
          </FormControl>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input  onChangeText={text => setEmail(text)}/>
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input  onChangeText={text => setPassword(text)} type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={fnRegister} isLoading={loading}>
            Sign up
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              Already a user?{" "}
            </Text>
            <Link 
             onPress={()=> navigation.navigate("Login")}
            _text={{
            color: "indigo.500",
            fontWeight: "medium",
            fontSize: "sm"
          }}>
              Login
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
    )
}

export default Register