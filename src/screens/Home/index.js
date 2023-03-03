import { Text, SafeAreaView } from 'react-native';
import AppCarousel from '../../components/AppCarousel';
import HomeButton from '../../components/HomeButton';
import { HomeContainer } from './style';

export default function Home() {
  return (
    <HomeContainer>
      <AppCarousel />
      <HomeButton />
      <HomeButton />
      <HomeButton />
    </HomeContainer>
  );
}
