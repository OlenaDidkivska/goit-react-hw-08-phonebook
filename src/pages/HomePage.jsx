import { NavLinkStyled } from 'components/AuthNav/AuthNav.styled';

const HomePage = () => {
  return (
    <main>
      <h1>You must be logged in to view your contact list</h1>
      <div>
        Go to <NavLinkStyled to="/login">LogIn</NavLinkStyled> page
      </div>
    </main>
  );
};

export default HomePage;
