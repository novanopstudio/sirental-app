import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface IButtonProps {
   theme?: "filled" | "outlined";
   text: string;
   className?: string;
}

const BaseButton = styled.button`
    ${tw`
        pl-5
        pr-5
        pt-3
        pb-3
        outline-none
        rounded-md
        text-current
        text-xs
        font-semibold
        border-transparent
        border-2
        border-solid
        focus:outline-none
        transition-all
        duration-200
        ease-in-out
        m-1
    `};
`;

const OutlinedButton = styled(BaseButton)`
    ${tw`
        bg-secondary
        text-white
        hover:bg-transparent
        hover:text-secondary
        hover:border-secondary
        uppercase
    `};
`;

const FilledButton = styled(BaseButton)`
    ${tw`
        border-secondary
        text-secondary
        bg-transparent
        hover:bg-black
        hover:text-white
        hover:border-transparent
        uppercase
    `};
`;

const Button = (props: IButtonProps) => {
   const { theme, text, className } = props;

   if (theme === "outlined")
      return <OutlinedButton className={className}>{text}</OutlinedButton>;
   else return <FilledButton className={className}>{text}</FilledButton>
}

export default Button
