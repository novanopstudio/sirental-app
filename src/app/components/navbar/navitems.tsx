import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../responsive';
import menuStyles from './menuStyles';
import Button from '../button';

const ListContainer = styled.ul`
   ${tw`
      flex
      list-none
   `};
`;

const ListItem = styled.li<{ menu?: any }>`
    ${tw`
        text-xs
        md:text-base
        text-black
        font-medium
        mr-1
        md:mr-5
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-secondary
        md:hover:border-b-2
        md:hover:text-primary
    `};

    ${({ menu }) => menu && css`
        ${tw`
            text-white
            text-xl
            mb-3
            active:text-primary
            hover:text-primary
        `};
    `};
`;

const AccountContainer = styled.div`
   ${tw`
      flex
      mt-14
      md:mt-0
   `};
`;

const NavItems = () => {
   const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

   if (isMobile) {
      return (
         <Menu right styles={menuStyles}>
            <ListContainer>
               <ListItem menu>
                  <a href="#">Rent</a>
               </ListItem>
               <ListItem menu>
                  <a href="#">Share</a>
               </ListItem>
               <ListItem menu>
                  <a href="#">Ride</a>
               </ListItem>
               <ListItem menu>
                  <a href="#">Service</a>
               </ListItem>
            </ListContainer>
            <AccountContainer>
               <Button theme="outlined" text="Sign Up" />
               <Button text="Sign In" />
            </AccountContainer>
         </Menu>
      )
   };

   return (
      <>
         <ListContainer>
            <ListItem>
               <a href="#">Rent</a>
            </ListItem>
            <ListItem>
               <a href="#">Share</a>
            </ListItem>
            <ListItem>
               <a href="#">Ride</a>
            </ListItem>
            <ListItem>
               <a href="#">Service</a>
            </ListItem>
         </ListContainer>
         <AccountContainer>
            <Button theme="outlined" text="Sign Up" />
            <Button text="Sign In" />
         </AccountContainer>
      </>

   );
}

export default NavItems
