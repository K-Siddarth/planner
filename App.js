import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
// import Home from './pages/Home'; // import your Home component (Home.js)
import Home from './pages/Home'
// import Day from './pages/Day'; // import your Day component
import Day from './pages/Day.js';
// import NextPage from './NextPage'; // another screen (optional)
// import { StyleSheet, View } from 'react-native'; // Import StyleSheet and View
import { StyleSheet, View} from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/*<Stack.Navigator 
        initialRouteName="Home" // Ensure this points to "Day"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#00bfff', // Light blue background for header
          },
          headerTitleStyle: {
            color: '#fff', // White text for the header title
            fontWeight: 'bold', // Optional: Make the header text bold
            fontSize: 24, // Optional: Adjust the font size
          },
        }}
      >*/}
      <Stack.Navigator 
        initialRouteName="Home" // Ensure this points to "Day"
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* Registering the Home screen */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Day" component={Day} />

        {/* Registering the Day screen first so it's set as the initial screen */}

        {/* Optional NextPage screen 
          * <Stack.Screen name="NextPage" component={NextPage} />
          */}
      </Stack.Navigator>
    </NavigationContainer>
  );
  // return (<Home/>);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6', // Light blue color for the app background
  },
});

export default App;

