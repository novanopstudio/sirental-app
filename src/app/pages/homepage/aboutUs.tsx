import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { SCREENS } from '../../components/responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import RRImage from '../../../assets/images/range-rover1.png';
import { faHeadset, faTag, faWallet } from '@fortawesome/free-solid-svg-icons';

const AboutContainer = styled.div`
   ${tw`
      w-full
      flex
      flex-col
      md:flex-row
      items-center
      2xl:justify-center
      pt-4
      pb-4
      pl-7
      pr-7
      md:pl-6
      md:pr-6
      bg-white
   `};
`;

const CarContainer = styled.div`
   width: auto;
   height: 15em;
   margin-left: -50px;

   img {
      width: auto;
      height: 100%;
   }

   @media (min-width: ${SCREENS.md}) {
      height: 20em;
   }

   @media (min-width: ${SCREENS.lg}) {
      height: 27em;
   }
   @media (min-width: ${SCREENS["2xl"]}) {
      height: 35em;
   }

`;

const InfoContainer = styled.div`
   ${tw`
      md:w-1/2
      flex
      flex-col
      md:ml-5
      2xl:ml-16
   `};
`;


const Title = styled.h1`
   ${tw`
      text-black
      text-2xl
      lg:text-4xl
      xl:text-5xl
      font-extrabold
      lg:font-black
      lg:leading-normal
   `};
`;

const InfoTextContainer = styled.div`
   ${tw`
      flex
      items-start
      mt-10
   `};
`;
const IconContainer = styled.div`
   box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);  
   ${tw`
      flex
      rounded-xl
      p-5
      mr-7
   `};
`;
const Icon = styled.div`
   ${tw`
      text-base
      text-primary
   `};
`;
const DetailContainer = styled.div`
   ${tw`
      flex
      flex-col
   `};
`;
const DetailTitle = styled.h3`
   ${tw`
      text-base
      font-extrabold
      mb-1
   `};
`;
const DetailDesc = styled.p`
   ${tw`
      text-sm
      text-gray-500
      leading-normal
   `};
`;

const AboutUs = () => {
   return (
      <AboutContainer>
         <CarContainer>
            <img src={RRImage} alt="Range Rover" />
         </CarContainer>
         <InfoContainer>
            <Title>Feel The Best Experience With Our Rental Deals</Title>
            <InfoTextContainer>
               <IconContainer>
                  <Icon>
                     <FontAwesomeIcon icon={faTag} />
                  </Icon>
               </IconContainer>
               <DetailContainer>
                  <DetailTitle>Deals For Every Budget</DetailTitle>
                  <DetailDesc>
                     Incredible prices cars and packages worldwide
                  </DetailDesc>
               </DetailContainer>
            </InfoTextContainer>

            <InfoTextContainer>
               <IconContainer>
                  <Icon>
                     <FontAwesomeIcon icon={faWallet} />
                  </Icon>
               </IconContainer>
               <DetailContainer>
                  <DetailTitle>Best price guaranteed</DetailTitle>
                  <DetailDesc>
                     Find a lower price? We'll refund you 100% difference.
                  </DetailDesc>
               </DetailContainer>
            </InfoTextContainer>

            <InfoTextContainer>
               <IconContainer>
                  <Icon>
                     <FontAwesomeIcon icon={faHeadset} />
                  </Icon>
               </IconContainer>
               <DetailContainer>
                  <DetailTitle>Support 24/7</DetailTitle>
                  <DetailDesc>
                     Don't worry about support. We'll provide 24/7 support.
                  </DetailDesc>
               </DetailContainer>
            </InfoTextContainer>
         </InfoContainer>
      </AboutContainer>
   )
}

export default AboutUs
