import { NavLinkStyled } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <NavLinkStyled to="/login">LogIn</NavLinkStyled>
      <NavLinkStyled to="/register">Register</NavLinkStyled>
    </div>
  );
};
