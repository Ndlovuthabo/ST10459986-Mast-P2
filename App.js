import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import HomeScreen from './screens/HomeScreen';
import StoryScreen from './screens/SoryScreen';

const Stack = createStackNavigator(); 

 

export default function App() { 

  Return ( 

    <NavigationContainer> 

      <Stack.Navigator initialRouteName="Home"> 

        <Stack.Screen name="Home" component={HomeScreen} /> 

        <Stack.Screen name="Story" component={StoryScreen} /> 

      </Stack.Navigator> 

    </NavigationContainer> 

  )};