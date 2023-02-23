import React from 'react'
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center } from "native-base";

const FullBtn = ({iconName, content, extraContent, navigation, dest, info}) => {


  return (
    <>
    <Button colorScheme="indigo" onPress={() => dest ? navigation.navigate(dest, {
        ...extraContent
      }) : null}>
      {content}
    </Button>
      <Text style={{paddingLeft: 15, fontWeight: 'bold', paddingBottom: 8}}>{info}</Text>
  </>
  )
}

export default FullBtn