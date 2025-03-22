import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomePage from './pages/WelcomePage'


const Stack = createNativeStackNavigator()

const App = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomePage} options={{title: 'Welcome'}}/>
      </Stack.Navigator>
      
  );
};

export default App;
