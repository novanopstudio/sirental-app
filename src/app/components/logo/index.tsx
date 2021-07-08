import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import ImgLogo from '../../../assets/LogoSiRental.png';

interface ILogoProps {
   color?: "white" | "dark";
   className?: "col" | "row";
   theme?: "footer" | "header";
}

const LogoContainer = styled.div`
   ${tw`
      flex
      items-center
      pr-5
      md:pr-0
   `};

   ${({ className }: any) => (className === "col" ?
      tw`flex-col` :
      tw`flex-row`
   )}`;

const LogoText = styled.div`
   ${tw`
      text-2xl
      md:text-3xl
      lg:text-5xl
      font-bold
      text-black
   `};
   
   ${({ color }: any) => (color === "white" ? tw`text-white` : tw`text-black`)}

   ${({ theme }: any) => (theme === "footer" ?
      tw`mt-3` :
      tw`mt-0`
   )}
`;

const Image = styled.div`
   ${`h-5 md:h-6 lg:h-9`};

   img {
      width: 80%;
      height: 100%;
   }
`;

const Logo = (props: ILogoProps) => {
   const { color, className, theme } = props;

   return (
      <LogoContainer className={className}>
         <Image>
            <img src={ImgLogo} alt="Logo" />
         </Image>
         <LogoText theme={theme || "header"} color={color || "dark"}>SiRental</LogoText>
      </LogoContainer>
   )
}

export default Logo
