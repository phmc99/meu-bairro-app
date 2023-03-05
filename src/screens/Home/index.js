import AppCarousel from '../../components/AppCarousel';
import HomeButton from '../../components/HomeButton';
import { HomeButtonList, HomeContainer } from './style';

export default function Home() {
  return (
    <HomeContainer>
      <AppCarousel />
      <HomeButtonList>
        <HomeButton>📍 Mais próximos</HomeButton>
        <HomeButton>🆕 Novos comércios</HomeButton>
        <HomeButton>⭐️ Melhores avaliações</HomeButton>
      </HomeButtonList>
    </HomeContainer>
  );
}
