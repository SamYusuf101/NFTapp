import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StyleSheet, Text, View, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme, 
  colors: {
    ...DefaultTheme.colors,
    background: "Transparent"
  }
}

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{hearderShown:'false'}} initialRouteName="Home">
        <Stack.Screen name= "Home" component={Home}/>
        <Stack.Screen name= "Details" component={Details}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


