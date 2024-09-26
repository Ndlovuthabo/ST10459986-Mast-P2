import React, { useState } from 'react'; 

import { View, Text, TextInput, Button } from 'react-native'; 

 

export default function HomeScreen({ navigation }) { 

  Const [inputs, setInputs] = useState({ 

    Name: '', 

    Animal: '', 

    Place: '', 

  }); 

 

  const handleChange = (name, value) => { 

    setInputs({ 

    YourNameinputs, 

      [name]: value, 

    }); 

  }; 

 

  const handlePress = () => { 

    Navigation.navigate('Story', { inputs }); 

  }; 

 

  Return ( 

    <View style={{ padding: 20 }}> 

      <Text>Enter a name:</Text> 

      <TextInput  

        Style={{ borderWidth: 1, marginBottom: 10 }}  

        onChangeText={(value) => handleChange('name', value)}  

      /> 

      <Text>Enter an animal:</Text> 

      <TextInput  

        Style={{ borderWidth: 1, marginBottom: 10 }}  

        onChangeText={(value) => handleChange('animal', value)}  

      /> 

      <Text>Enter a place:</Text> 

      <TextInput  

        Style={{ borderWidth: 1, marginBottom: 10 }}  

        onChangeText={(value) => handleChange('place', value)}  

      /> 

      <Button title="See Story" onPress={handlePress} /> 

    </View> 

  )}; 