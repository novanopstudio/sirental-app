import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import { faCalendarAlt, faCarSide, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
   ${tw`
      w-full
      flex
      flex-col
      items-center
      pt-3
      pb-3
      lg:pt-6
      lg:pb-6
   `};
`;

const Title = styled.h2`
   ${tw`
      text-xl
      lg:text-4xl
      text-black
      font-extrabold
   `};
`;

const StepsContainer = styled.div`
   ${tw`
      flex
      flex-col
      md:flex-row
      justify-evenly
      md:max-w-2xl
      xl:max-w-none
      mt-7
      md:mt-0
      lg:mt-16
   `};
`;

const StepContainer = styled.div`
   ${tw`
      flex
      flex-col
      md:w-96
      items-center
      transition-colors
      hover:text-primary
      m-3
   `};
`;

const Step = styled.div`
   box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
   ${tw`
      flex
      rounded-xl
      items-center
      justify-center
      p-10
   `};
`;

const StepIcon = styled.span`
   ${tw`
      text-primary
      text-5xl
   `};
`;

const StepTitle = styled.div`
   ${tw`
      text-black
      text-lg
      font-semibold
      mt-4
   `};
`;
const StepDescription = styled.div`
   ${tw`
      w-10/12
      text-xs
      md:text-sm
      text-center
      text-gray-500
   `};
`;

const BookingSteps = () => {
   return (
      <Container>
         <Title>Our Working Steps</Title>
         <StepsContainer>
            <StepContainer>
               <Step>
                  <StepIcon>
                     <FontAwesomeIcon icon={faMapMarkedAlt} />
                  </StepIcon>
               </Step>
               <StepTitle>Choose Location</StepTitle>
               <StepDescription>See 3 popular car at heavily discounted price</StepDescription>
            </StepContainer>

            <StepContainer>
               <Step>
                  <StepIcon>
                     <FontAwesomeIcon icon={faCalendarAlt} />
                  </StepIcon>
               </Step>
               <StepTitle>Pickup Date</StepTitle>
               <StepDescription>Click choose and we'll pick one of the car.</StepDescription>
            </StepContainer>

            <StepContainer>
               <Step>
                  <StepIcon>
                     <FontAwesomeIcon icon={faCarSide} />
                  </StepIcon>
               </Step>
               <StepTitle>Book Your Car</StepTitle>
               <StepDescription>See which car right after you book!</StepDescription>
            </StepContainer>
         </StepsContainer>
      </Container>
   )
}

export default BookingSteps
