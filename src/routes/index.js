import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Logo from '../../assets/header-logo.png';
import { Image } from 'react-native';
import Closer from '../screens/Closer';
import NewCommerces from '../screens/NewCommerces';
import BestRated from '../screens/BestRated';

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
      <Stack.Screen
        name="Closer"
        component={Closer}
        options={{
          headerTitle: 'Mais próximos',
          headerTintColor: '#2b65a6'
        }}
      />
      <Stack.Screen
        name="NewCommerces"
        component={NewCommerces}
        options={{
          headerTitle: 'Novos comércios',
          headerTintColor: '#2b65a6'
        }}
      />
      <Stack.Screen
        name="BestRated"
        component={BestRated}
        options={{
          headerTitle: 'Melhores avaliados',
          headerTintColor: '#2b65a6'
        }}
      />
    </Stack.Navigator>
  );
};
