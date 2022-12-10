import { NavLinkStyled } from './AuthNav.styled';
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';

export const AuthNav = () => {
  const Grid = styled(MuiGrid)(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& [role="separator"]': {
      margin: theme.spacing(0, 2),
    },
  }));

  return (
    <Grid container>
      <Grid item xs>
        <NavLinkStyled to="/login">LogIn</NavLinkStyled>
      </Grid>
      <Grid item xs>
        <NavLinkStyled to="/register">Register</NavLinkStyled>
      </Grid>
    </Grid>
  );
};
