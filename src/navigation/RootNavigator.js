import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import screens


import Data from "../screens/Data";
import AddNew from "../screens/AddNew";
import Update from "../screens/Update"
const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Data">
    
        <Stack.Screen
          name="Data"
          component={Data}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddNew"
          component={AddNew}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Update"
          component={Update}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
