import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkStyled = styled(NavLink)`
  color: #2a58b1;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  transition-property: color, background-color, transform;
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);
  transform: scale(0.9);
  &:hover,
  &:focus {
    color: #ffffff;
  }
  &.active {
    color: #ffffff;
    background-color: #2a58b1;
    padding: 6px 12px;
    border-radius: 4px;
    transform: scale(1);
    pointer-events: none;
  }
`;
