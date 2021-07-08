import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import Button from '../button';
import { ICar } from '../../../typings/car';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faFillDrip, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

interface ICarProps extends ICar {

}

const CarContainer = styled.div`
   width: 16.5em;
   min-height: 23em;
   max-height: 23em;
   box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);

   ${tw`
      flex
      flex-col
      items-center
      p-3
      pb-4
      bg-white
      rounded-md
      m-1
      sm:m-3
      md:m-6
   `};
`;

const CarThumbnail = styled.div`
   width: 100%;
   height: auto;

   img {
      width: 100%;
      height: 100%;
   }
`;

const CarName = styled.h3`
   ${tw`
      text-base
      font-bold
      text-black
      mt-1
      mb-1
   `};
`;

const PricesContainer = styled.div`
   ${tw`
      w-full
      flex
      mt-3

   `};
`;

const SmallText = styled.p`
   ${tw`
      inline-flex
      text-xs
      font-thin
   `};
`;

const DailyPrice = styled.h5`
   ${tw`
      text-primary
      font-bold
      text-sm
      mr-3
   `};
`;

const MonthlyPrice = styled.h5`
   ${tw`
      text-gray-500
      font-bold
      text-sm
   `};
`;


const Separator = styled.div`
   min-width: 100%;
   min-height: 1px;

   ${tw`
      flex
      bg-gray-300
      mt-2
      mb-2
   `};
`;


const CarDetailsContainer = styled.div`
   ${tw`
      flex
      w-full
      justify-between
   `};
`;

const CarDetail = styled.h3`
   ${tw`
      flex
      items-center
   `};
`;

const SmallIcon = styled.h3`
   ${tw`
      text-gray-400
      text-sm
      mr-1
   `};
`;

const CarInfo = styled.h3`
   ${tw`
      text-gray-400
      text-xs
   `};
`;

const RentButton = styled(Button)`
   ${tw`
      min-w-full
      mt-5
   `};
`;

const Car = (props: ICarProps) => {
   const { name, thumbnailSrc, dailyPrice, monthlyPrice, mileage, gearType, gas } = props;

   return (
      <CarContainer>
         <CarThumbnail>
            <img src={thumbnailSrc} alt="Car Thumbnail" />
         </CarThumbnail>
         <CarName>{name}</CarName>
         <PricesContainer>
            <DailyPrice>{dailyPrice}<SmallText>/day</SmallText></DailyPrice>
            <MonthlyPrice>{monthlyPrice}<SmallText>/month</SmallText></MonthlyPrice>
         </PricesContainer>
         <Separator />
         <CarDetailsContainer>

            <CarDetail>
               <SmallIcon>
                  <FontAwesomeIcon icon={faTachometerAlt} />
               </SmallIcon>
               <CarInfo>{mileage}</CarInfo>
            </CarDetail>

            <CarDetail>
               <SmallIcon>
                  <FontAwesomeIcon icon={faEllipsisH} />
               </SmallIcon>
               <CarInfo>{gearType}</CarInfo>
            </CarDetail>

            <CarDetail>
               <SmallIcon>
                  <FontAwesomeIcon icon={faFillDrip} />
               </SmallIcon>
               <CarInfo>{gas}</CarInfo>
            </CarDetail>

         </CarDetailsContainer>
         <RentButton theme="outlined" text="Rent Now" />
      </CarContainer>
   )
}

export default Car
