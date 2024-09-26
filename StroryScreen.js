import React from 'react'; 

import { View, Text } from 'react-native'; 

 

export default function StoryScreen({ route }) { 

  const { inputs } = route.params; 

 

  const story = `Once upon a time, there was a person named ${inputs.name}.  

  ${inputs.name} had a pet ${inputs.animal}.  

  One day, they decided to visit the beautiful place called ${inputs.place}.  

  They had a lot of fun together!`; 

 

  Return ( 

    <View style={{ padding: 20 }}> 

      <Text>{story}</Text> 

    </View> 

  ); 

} 