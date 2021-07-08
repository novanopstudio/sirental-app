import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import NavItems from './navitems';
import Logo from '../logo';

const NavbarContainer = styled.div`
background-color: #EEEFF1;
min-height: 80px;
   ${tw`
      w-full
      flex
      flex-row
      items-center
      justify-between
      lg:pl-12
      lg:pr-12
      fixed
      z-50
      md:p-5
      xl:p-5
   `};
`;

const LogoContainer = styled.div``;



const Navbar = () => {
   return (
      <NavbarContainer>
         <LogoContainer>
            <Logo />
         </LogoContainer>
         <NavItems />
      </NavbarContainer>
   )
}

export default Navbar
