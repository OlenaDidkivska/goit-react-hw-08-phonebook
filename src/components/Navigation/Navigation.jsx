import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { NavLinkStyled } from 'components/AuthNav/AuthNav.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

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
        <NavLinkStyled to="/">Home</NavLinkStyled>
      </Grid>
      <Grid item xs>
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      </Grid>
    </Grid>
  );
};
