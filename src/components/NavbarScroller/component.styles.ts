import styled from 'styled-components'

export const Navbar = styled.nav`
  background: ${({ theme }) => theme?.colors?.navbar.background};
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
  }
  ${({ theme }) => theme?.breakpoints?.tablet} {
   background: red;
  }
  ${({ theme }) => theme?.breakpoints?.mobile} {
    background: blue;
   }
`;