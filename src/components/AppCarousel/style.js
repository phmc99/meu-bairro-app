import styled from 'styled-components/native';

export const CarouselContainer = styled.SafeAreaView`
  flex: 1;
`;

export const CarouselView = styled.View`
  width: ${props => props.width};
  height: ${props => props.height * 0.5};
`;

export const CarouselScrollView = styled.ScrollView`
  width: ${props => props.width};
  height: ${props => props.height * 0.5};
`;

export const DotView = styled.View`
  position: absolute;
  bottom: 0;
  flex-direction: row;
  align-self: center;
`;

export const Dot = styled.Text`
  color: ${props => (props.active ? '#2B65A6' : 'rgba(50, 50, 50, 0.55)')};
  margin: 3px;
  font-size: 20px;
`;
