import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import welcomePage from './pages/welcomePage'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={welcomePage} options={{title: 'Welcome'}}/>
      </Stack.Navigator>
      
  );
};

export default App;
