import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import Car from '../../components/car';
import { SCREENS } from '../../components/responsive';
import { useMediaQuery } from 'react-responsive';
import carService from '../../services/carService';
import { createSelector, Dispatch } from '@reduxjs/toolkit';
import { GetCars_cars } from '../../services/carService/__generated__/GetCars';
import { setTopCars } from './slice';
import { useDispatch, useSelector } from 'react-redux';
import { makeSelectTopCars } from './selector';
import { MoonLoader } from 'react-spinners';

const TopCarsContainer = styled.div`
   ${tw`
      max-w-screen-lg
      w-full
      flex
      flex-col
      items-center
      justify-center
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

const CarsContainer = styled.div`
   ${tw`
      w-full
      flex
      flex-wrap
      justify-center
      mt-7
      md:mt-10
   `};
`;

const EmptyCar = styled.div`
   ${tw`
      w-full
      mt-9
      flex
      justify-center
      items-center
      text-base
      text-gray-500
   `};
`;

const LoadingContainer = styled.div`
   ${tw`
      w-full
      mt-9
      flex
      justify-center
      items-center
      text-base
      text-black
   `};
`;

const actionDispatch = (dispatch: Dispatch) => ({
   setTopCars: (cars: GetCars_cars[]) => dispatch(setTopCars(cars)),
});

const stateSelector = createSelector(makeSelectTopCars, (topCars) => ({
   topCars,
}));


const TopCars = () => {
   const [current, setCurrent] = useState(0);
   const [isLoading, setIsLoading] = useState(false);

   const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

   const { topCars } = useSelector(stateSelector);
   const { setTopCars } = actionDispatch(useDispatch());

   const fetchTopCars = async () => {
      setIsLoading(true);
      const cars = await carService.getCars().catch((err) => {
         console.log("Error: ", err);
      });

      if (cars) setTopCars(cars);
      setIsLoading(false)
   }

   useEffect(() => {
      fetchTopCars();
   }, []);

   const isEmptyTopCars = !topCars || topCars.length === 0;

   const cars = !isEmptyTopCars && topCars.map((car) => <Car {...car} thumbnailSrc={car.thumbnailURL} />) || [];

   const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);

   return (
      <TopCarsContainer>
         <Title>Explore Our Top Deals</Title>
         {isLoading && <LoadingContainer><MoonLoader loading /></LoadingContainer>}
         {isEmptyTopCars && !isLoading && <EmptyCar>No Cars to Show</EmptyCar>}
         {!isEmptyTopCars && !isLoading && <CarsContainer>
            <Carousel
               value={current}
               onChange={setCurrent}
               slides={cars}
               plugins={[
                  {
                     resolve: slidesToShowPlugin,
                     options: {
                        numberOfSlides: 3,
                     }
                  }
               ]}
               breakpoints={{
                  640: {
                     plugins: [
                        {
                           resolve: slidesToShowPlugin,
                           options: {
                              numberOfSlides: 1,
                           }
                        }
                     ]
                  },
                  900: {
                     plugins: [
                        {
                           resolve: slidesToShowPlugin,
                           options: {
                              numberOfSlides: 2,
                           }
                        }
                     ]
                  }
               }}
            />
            <Dots value={current} onChange={setCurrent} number={numberOfDots} />
         </CarsContainer>}
      </TopCarsContainer>
   )
}

export default TopCars
