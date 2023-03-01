import { AppCarouselImage, AppCarouselItemContainer } from './style';

export default function AppCarouselItem({ item, index }) {
  return (
    <AppCarouselItemContainer key={index}>
      <AppCarouselImage source={{ uri: item.imgUrl }} />
    </AppCarouselItemContainer>
  );
}
