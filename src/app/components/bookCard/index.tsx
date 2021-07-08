import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faCaretDown, faCaretUp, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Select from 'react-select';

import Button from '../button';
import { SCREENS } from '../responsive';



const CardContainer = styled.div`
   min-width: 250px;
   min-height: 15em;
   box-shadow: 0 2.3px 20px -7px rgba(0, 0, 0, 0.2);
   position: relative;

   ${tw`
      flex
      flex-col
      justify-between
      items-center
      md:items-center
      rounded-lg
      bg-white
      pt-5
      pb-5
      pr-10
      pl-10
      md:p-4
      lg:pt-5
      lg:pb-5
      lg:pl-6
      lg:pr-6
      z-10
   `};

   @media (min-width: ${SCREENS.xs}) {
      top: -15px;
   }
   
   @media (min-width: ${SCREENS.md}) {
      flex-direction: row;
      min-height: auto;
      top: -5px;
   }

   @media (min-width: ${SCREENS.lg}) {
      top: -15px;
   }

   @media (min-width: ${SCREENS.xl}) {
      min-width: 1000px;
      top: -30px;
      left: -220px;
   }
`;

const ItemContainer = styled.div`
   min-width: 150px;
   ${tw`
      flex
      relative
      justify-between
      items-center
      p-2
      md:p-1
      mb-3
      md:mb-0
      cursor-pointer
   `};

   @media (min-width: ${SCREENS.md}) {
      min-width: 100px;
   }

   @media (min-width: ${SCREENS.xl}) {
      min-width: 300px;
   }
`;

const SelectOptions = styled(Select)`
   min-width: 150px;

   @media (min-width: ${SCREENS.md}) {
      min-width: 100px;
   }

   @media (min-width: ${SCREENS.xl}) {
      min-width: 300px;
   }
`;

const Icon = styled.span`
   ${tw`
      text-primary
      fill-current
      text-xs
      lg:text-2xl
      mr-1
      md:mr-3
   `};
`;

const Name = styled.span`
   ${tw`
      text-black
      text-xs
      lg:text-xl
      select-none
      text-left
   `};
`;

const LineSeparator = styled.span`
   width: 1px;
   height: 45%;
   ${tw`
      bg-gray-200
      mr-2
      ml-2
      md:mr-5
      md:ml-5
   `};
`;

const SmallIcon = styled.span`
   ${tw`
      text-black
      fill-current
      text-xs
      md:text-base
      ml-1
      md:ml-3
      md:mr-3
   `};
`;

const DateCalendar = styled(Calendar)`
   position: absolute;
   max-width: fit-content;
   user-select: none;
   top: 6em;
   left: -3em;

   @media (min-width: ${SCREENS.md}) {
      top: 3.5em;
      left: -2em;
   }
`;

const options = [
   { value: 'jakarta', label: 'Jakarta' },
   { value: 'munich', label: 'Munich' },
   { value: 'san fransisco', label: 'San Fransisco' },
   { value: 'roma', label: 'Roma' }
]

const BookCard = () => {
   const [startDate, setStartDate] = useState(new Date());
   const [returnDate, setReturnDate] = useState(startDate);
   const [startCalendarOpen, setStartCalendarOpen] = useState(false);
   const [returnCalendarOpen, setReturnCalendarOpen] = useState(false);

   const toggleStartCal = () => {
      setStartCalendarOpen(!startCalendarOpen);
      if (returnCalendarOpen) setReturnCalendarOpen(false);
   }

   const toggleReturnCal = () => {
      setReturnCalendarOpen(!returnCalendarOpen);
      if (startCalendarOpen) setStartCalendarOpen(false);
   }

   const startOnChange = (value: any) => {
      setStartCalendarOpen(false);
      setStartDate(value);
   }

   const returnOnChange = (value: any) => {
      setReturnCalendarOpen(false);
      setReturnDate(value);
   }

   const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

   const selectStyles = {
      control: (base: any) => ({
         ...base,
         border: 0,
         boxShadow: "none"
      })
   };

   return (
      <CardContainer>
         <ItemContainer>
            <Icon>
               <FontAwesomeIcon icon={faMapMarkerAlt} />
            </Icon>
            <SelectOptions
               defaultValue={options[0]}
               i
               className="basic-single"
               options={options}
               classNamePrefix="react-select"
               theme={(theme: { colors: any; }) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                     ...theme.colors,
                     primary25: '#e1e1e1',
                     primary: '#FE5B3E',
                     primary50: '#FE5B3E',
                  },
               })}
               styles={selectStyles}
               components={{
                  IndicatorSeparator: () => null,
                  DropdownIndicator: () => <FontAwesomeIcon icon={faCaretDown} />
               }}
            />
         </ItemContainer>
         <LineSeparator />
         <ItemContainer>
            <Icon onClick={toggleStartCal}>
               <FontAwesomeIcon icon={faCalendarAlt} />
            </Icon>
            <Name onClick={toggleStartCal}>
               {`${startDate.getDate()} ${monthNames[startDate.getMonth()]} ${startDate.getFullYear()}`}
            </Name>
            <SmallIcon onClick={toggleStartCal}>
               <FontAwesomeIcon icon={startCalendarOpen ? faCaretUp : faCaretDown} />
            </SmallIcon>
            {startCalendarOpen &&
               <DateCalendar value={startDate} onChange={(value) => startOnChange(value)} minDate={new Date()} />
            }
         </ItemContainer>
         <LineSeparator />
         <ItemContainer>
            <Icon onClick={toggleReturnCal}>
               <FontAwesomeIcon icon={faCalendarAlt} />
            </Icon>
            <Name onClick={toggleReturnCal}>
               {`${returnDate.getDate()} ${monthNames[returnDate.getMonth()]} ${returnDate.getFullYear()}`}
            </Name>
            <SmallIcon onClick={toggleReturnCal}>
               <FontAwesomeIcon icon={returnCalendarOpen ? faCaretUp : faCaretDown} />
            </SmallIcon>
            {returnCalendarOpen &&
               <DateCalendar value={returnDate} onChange={(value) => returnOnChange(value)} minDate={startDate} />
            }
         </ItemContainer>
         <Button text="Book Your Ride" theme="outlined" />
      </CardContainer>
   )
}

export default BookCard
