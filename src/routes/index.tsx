import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { customTheme } from './styles';

import { RootStackParamList } from '../global/types/rootStackParamList.types';

import Home from '../screens/Home';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = (): JSX.Element => {
  return (
    <NavigationContainer theme={customTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
