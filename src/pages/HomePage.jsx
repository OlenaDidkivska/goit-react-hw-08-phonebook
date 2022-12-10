import { HomePageInfo } from 'components/App.styled';
import { NavLinkStyled } from 'components/AuthNav/AuthNav.styled';

const HomePage = () => {
  return (
    <HomePageInfo>
      <h1>
        PhoneBook welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
      <div>
        Go to <NavLinkStyled to="/login">LogIn</NavLinkStyled>
      </div>
    </HomePageInfo>
  );
};

export default HomePage;
