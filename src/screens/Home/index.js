import AppCarousel from '../../components/AppCarousel';
import HomeButton from '../../components/HomeButton';
import { HomeButtonList, HomeContainer } from './style';

export default function Home({ navigation }) {
  const navigate = screen => navigation.navigate(screen);
  return (
    <HomeContainer>
      <AppCarousel />
      <HomeButtonList>
        <HomeButton onPress={() => navigate('Closer')}>
          📍 Mais próximos
        </HomeButton>
        <HomeButton onPress={() => navigate('NewCommerces')}>🆕 Novos comércios</HomeButton>
        <HomeButton onPress={() => navigate('BestRated')}>⭐️ Melhores avaliações</HomeButton>
      </HomeButtonList>
    </HomeContainer>
  );
}
