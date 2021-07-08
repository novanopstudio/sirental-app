import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

import Logo from '../logo';

const FooterContainer = styled.div`
   background-color: #1d2124;

   ${tw`
      flex
      flex-col
      min-w-full
      pt-4
      md:pt-12
      pb-1
      items-center
      justify-center
   `};
`;

const InnerContainer = styled.div`
   ${tw`
      flex
      w-full
      h-full
      max-w-screen-2xl
      flex-wrap
      md:flex-nowrap
      pb-4
   `};
`;

const AboutContainer = styled.div`
   ${tw`
      flex
      flex-col
      items-start
      mr-2
      md:mr-3
      lg:mr-16
      pl-10
      pr-10
      md:pl-3
      md:pr-3
   `};
`;

const AboutText = styled.p`
   ${tw`
      text-white
      text-sm
      font-normal
      max-w-xs
      leading-5
      mt-3
   `};
`;

const SectionContainer = styled.div`
   ${tw`
      w-full
      md:w-auto
      flex
      flex-col
      mr-2
      md:mr-3
      lg:mr-16
      pl-10
      pr-10
      md:pl-2
      md:pr-2
      mt-7
      md:mt-0
   `};
`;

const HeaderTitle = styled.h3`
   ${tw`
      text-white
      font-bold
      text-2xl
      md:text-xl
      lg:text-2xl
      mb-3
      mt-5
   `};
`;

const LinksList = styled.ul`
   ${tw`
      outline-none
      list-none
      flex
      flex-col
   `};
`;

const ListItem = styled.li`
   ${tw`
      mb-3
   `};

   & > a {
      ${tw`
         text-xs
         text-white
         transition-all
         hover:text-primary
      `};
   }
`;

const HorizontalContainer = styled.div`
   ${tw`
      flex
      items-center
   `};
`;

const RedIcon = styled.span`
   ${tw`
      w-9
      h-9
      rounded-full
      bg-primary
      flex
      items-center
      justify-center
      text-white
      text-base
      mr-2
   `};
`;

const SmallText = styled.h6`
   ${tw`
      text-white
      text-sm
   `};
`;

const BottomContainer = styled.div`
   ${tw`
      w-full
      flex
      max-w-screen-2xl
      justify-center
      md:justify-end
      mt-7
      md:mt-1
      p-1
      md:p-4
   `};
`;


const CopyrightText = styled.small`
   font-size: 12px;
   ${tw`
      text-gray-300
   `};

   span {
      color: #FE5B3E;
      font-weight: bold;
   }
`;


const Footer = () => {
   return (
      <FooterContainer>
         <InnerContainer>
            <AboutContainer>
               <Logo theme="footer" color="white" className="col" />
               <AboutText>
                  SiRental is a Car renting and selling company located in many countries across the world which has high quality cars and topservices
               </AboutText>
            </AboutContainer>
            <SectionContainer>
               <HeaderTitle>Our Links</HeaderTitle>
               <LinksList>
                  {/* eslint-disable-next-line */}
                  <ListItem><a href="#">Home</a></ListItem>
                  {/* eslint-disable-next-line */}
                  <ListItem><a href="#">About Us</a></ListItem>
                  {/* eslint-disable-next-line */}
                  <ListItem><a href="#">Services</a></ListItem>
                  {/* eslint-disable-next-line */}
                  <ListItem><a href="#">Models</a></ListItem>
                  {/* eslint-disable-next-line */}
                  <ListItem><a href="#">Blogs</a></ListItem>
               </LinksList>
            </SectionContainer>
            <SectionContainer>
               <HeaderTitle>Other Links</HeaderTitle>
               <LinksList>
                  {/* eslint-disable-next-line */}
                  <ListItem><a href="#">Contact Us</a></ListItem>
                  {/* eslint-disable-next-line */}
                  <ListItem><a href="#">FAQ</a></ListItem>
                  {/* eslint-disable-next-line */}
                  <ListItem><a href="#">Privacy Polycy</a></ListItem>
                  {/* eslint-disable-next-line */}
                  <ListItem><a href="#">Term of Service</a></ListItem>
                  {/* eslint-disable-next-line */}
                  <ListItem><a href="#">Payment</a></ListItem>
               </LinksList>
            </SectionContainer>
            <SectionContainer>
               <HeaderTitle>Call Now</HeaderTitle>
               <HorizontalContainer>
                  <RedIcon>
                     <FontAwesomeIcon icon={faPhoneAlt} />
                  </RedIcon>
                  <SmallText>+62 896 8311 6161</SmallText>
               </HorizontalContainer>
               <HeaderTitle>Mail</HeaderTitle>
               <HorizontalContainer>
                  <RedIcon>
                     <FontAwesomeIcon icon={faEnvelope} />
                  </RedIcon>
                  <SmallText>info@sirental.com</SmallText>
               </HorizontalContainer>
            </SectionContainer>
         </InnerContainer>
         <BottomContainer>
            <CopyrightText>
               Copyright &copy; {new Date().getFullYear()} SiRental By <a href="https://novanop.com"><span>novanop.com</span></a> All rights
            </CopyrightText>
         </BottomContainer>
      </FooterContainer>
   )
}

export default Footer
