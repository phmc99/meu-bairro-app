import { Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import AppCarouselItem from '../AppCarouselItem';
import { CarouselContainer } from './style';

const WIDTH = Dimensions.get('window').width;

export default function AppCarousel() {
  const images = [
    { imgUrl: 'https://picsum.photos/600' },
    { imgUrl: 'https://picsum.photos/570' },
    { imgUrl: 'https://picsum.photos/550' }
  ];

  return (
    <CarouselContainer>
      <Carousel
        loop
        width={WIDTH}
        height={WIDTH}
        data={images}
        scrollAnimationDuration={1000}
        autoPlay={true}
        renderItem={({ item, index }) => (
          <AppCarouselItem item={item} index={index} />
        )}
      />
    </CarouselContainer>
  );
}
