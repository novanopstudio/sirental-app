import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import Navbar from '../../components/navbar';
import TopSection from './topSection';
import BookCard from '../../components/bookCard';
import BookingSteps from './bookingSteps';
import AboutUs from './aboutUs';
import TopCars from './topCars';
import Footer from '../../components/footer';
import { Marginer } from '../../components/marginer';

const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `};
`;

const HomePage = () => {
   return (
      <PageContainer>
         <Navbar />
         <TopSection />
         <BookCard />
         <Marginer direction="vertical" margin="2em" />
         <BookingSteps />
         <Marginer direction="vertical" margin="5em" />
         <AboutUs />
         <Marginer direction="vertical" margin="5em" />
         <TopCars />
         <Marginer direction="vertical" margin="3em" />
         <Footer />
      </PageContainer>
   )
}

export default HomePage
