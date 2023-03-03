import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Logo from '../../assets/header-logo.png';
import { Image } from 'react-native';

const Stack = createNativeStackNavigator();
export const Routes = () => {
  const headerImage = () => (
    <Image style={{ height: 50, resizeMode: 'center' }} source={Logo} />
  );

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: headerImage,
          headerTitleAlign: 'center',
          navigationBarColor: '#f3f3f3'
        }}
      />
    </Stack.Navigator>
  );
};
