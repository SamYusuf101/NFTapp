import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StyleSheet, Text, View, } from 'react-native';
import { useFonts, Usefonts } from 'expo-font';
import Home from './Screens/Home';
import Details from './Screens/Details';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white"
  }
}

const App = () => {

  // const [loaded] = useFonts({
    
  //   InterSemiBold: require ("./assets/fonts/Inter-SemiBold.ttf"),
  //   InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
  //   InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
  //   InterLight: require("./assets/fonts/Inter-Light.ttf"),

  // });

  // if (!loaded) return null;


  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ hearderShown: 'false' }} initialRouteName="Home">
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


