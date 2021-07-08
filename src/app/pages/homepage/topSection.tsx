import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import Button from '../../components/button';
import { SCREENS } from '../../components/responsive';
import JeepImage from '../../../assets/images/jeep-hero.png';

const TopSectionContainer = styled.div`
   background-color: #EEEFF1;
   ${tw`
      w-full
      flex
      justify-between
      pl-3
      pr-3
      lg:pl-12
      lg:pr-12
   `};

   @media (max-width: ${SCREENS.sm}) {
      max-height: 500px;
   }

   @media (min-width: ${SCREENS.md}) {
      min-height: calc(100vh - 350px);
   }

   @media (min-width: ${SCREENS.lg}) {
      min-height: calc(100vh - 550px);
   }

   @media (min-width: ${SCREENS.xl}) {
      min-height: calc(100vh - 100px);
   }
   
`;

const LeftContainer = styled.div`
   ${tw`
        w-1/2
        flex
        flex-col
        mt-20
        pt-10
        pb-10
        md:pt-52
        pl-2
        md:pl-20
    `};
`;

const RightContainer = styled.div`
   ${tw`
      w-1/2
      flex
      flex-col
      relative
      mt-20
   `};
`;

const Slogan = styled.h1`
   ${tw`
      font-bold
      text-2xl
      sm:text-3xl
      md:text-5xl
      xl:text-6xl
      text-black
      md:font-extrabold
      lg:font-black
      mb-4
      sm:leading-snug
      lg:leading-normal
      xl:leading-relaxed
   `};
`;

const Description = styled.p`
   ${tw`
      text-xs
      lg:text-sm
      xl:text-lg
      sm:max-h-full
      overflow-hidden
      max-h-12
   `};
`;

const ButtonContainer = styled.div`
   ${tw`
      flex
      flex-wrap
      mt-4
   `};
`;

const OrnamentContainer = styled.div`
   width: 10em;
   height: 22em;
   border-radius: 1em;
   position: absolute;
   background-image: linear-gradient(to bottom right, #FE5B3D 10%, #FD6933 80%);
   right: -2em;
   top: 5em;
   z-index: 0;

   @media (min-width: ${SCREENS.md}) {
      width: 18em;
      height: 33em;
      right: 1em;
      border-radius: 1,5em;
      top: 7em;
      z-index: 0;  
   }

   @media (min-width: ${SCREENS.lg}) {
      width: 22em;
      height: 40em;
      right: -1em;
      border-radius: 1,5em;
      top: 9em;
      z-index: 0;  
   }

   @media (min-width: ${SCREENS.xl}) {
   width: 40em;
   height: 50em;
   right: 5em;
   border-radius: 1, 5em;
   top: 3em;
   z-index: 0;
}
`;

const StandaloneCar = styled.div`
width: auto;
height: 10em;
position: absolute;
right: -6em;
top: 6em;

img {
   width: auto;
   height: 100%;
   max-width: fit - content;
}

@media(min-width: ${SCREENS.xs}) {
   height: 10em;
   right: -5em;
   top: 7em;
}

@media(min-width: ${SCREENS.sm}) {
   height: 16em;
   right: -5em;
   top: 7em;
}

@media(min-width: ${SCREENS.md}) {
   height: 18em;
   right: -6em;
   top: 18em;
}

@media(min-width: ${SCREENS.xl
   }) {
   height: 40em;
   right: -10em;
   top: 6em;
}
`;

const TopSection = () => {
   return (
      <TopSectionContainer>
         <LeftContainer>
            <Slogan>
               Looking to Save more on your rental car?
            </Slogan>
            <Description>
               Discover SiRental car Rental options in USA with Rent a Car
               Select from a range of car options and local specials
            </Description>
            <ButtonContainer>
               <Button theme='outlined' text='Book Your Car' />
               <Button theme='filled' text='Sell Your Car' />
            </ButtonContainer>
         </LeftContainer>
         <RightContainer>
            <OrnamentContainer />
            <StandaloneCar>
               <img src={JeepImage} alt="Jeep" />
            </StandaloneCar>
         </RightContainer>
      </TopSectionContainer>
   )
}

export default TopSection
