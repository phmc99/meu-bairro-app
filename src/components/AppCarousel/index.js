import { useState } from 'react';
import { Image } from 'react-native';
import { Dimensions } from 'react-native';
import {
  CarouselContainer,
  CarouselScrollView,
  CarouselView,
  Dot,
  DotView
} from './style';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function AppCarousel() {
  const [imgActive, setImgActive] = useState(0);

  const images = [
    { imgUrl: 'https://picsum.photos/2560' },
    { imgUrl: 'https://picsum.photos/1280' },
    { imgUrl: 'https://picsum.photos/1920' }
  ];

  const change = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );

      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
  };

  return (
    <CarouselContainer>
      <CarouselView width={WIDTH} height={HEIGHT}>
        <CarouselScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={({ nativeEvent }) => change(nativeEvent)}
          width={WIDTH}
          height={HEIGHT}
        >
          {images.map((item, index) => (
            <Image
              source={{ uri: item.imgUrl }}
              key={index}
              resizeMode="stretch"
              style={{ width: WIDTH, height: HEIGHT * 0.5 }}
            />
          ))}
        </CarouselScrollView>
        <DotView>
          {images.map((item, index) => (
            <Dot key={item.imgUrl} active={imgActive === index ? true : false}>
              ●
            </Dot>
          ))}
        </DotView>
      </CarouselView>
    </CarouselContainer>
  );
}
