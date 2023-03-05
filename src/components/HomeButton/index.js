import { HomeButtonContainer, HomeButtonText } from './style';

const HomeButton = ({children, rest}) => {
  return (
    <HomeButtonContainer {...rest}>
      <HomeButtonText>{children}</HomeButtonText>
    </HomeButtonContainer>
  );
};

export default HomeButton;
