import styled from "styled-components";

type Props = {
   iconSrc?: string;
   iconSize?: string;
   color?: string;
   fontWeight?: string;
   fontSize?: string;
   children: React.ReactNode;
};

const StyledTitle = styled.h1<{ color?: string; fontSize?: string; fontWeight?: string }>`
   color: ${(props) => props.color || "black"};
   font-size: ${(props) => props.fontSize || "1rem"};
   font-weight: ${(props) => props.fontWeight || "normal"};
   display: flex;
   align-items: center;
   padding: 8px;
`;

const IconImage = styled.img<{ iconSize?: string }>`
   margin-right: 0.5rem;
   width: ${(props) => props.iconSize || "auto"};
`;

const IconAndTitleDiv = styled.div`
   display: flex;
   align-items: center;
   justify-content: start;
`;

const Title = ({ iconSrc, iconSize, color, fontWeight, fontSize, children }: Props) => {
   return (
      <StyledTitle color={color} fontWeight={fontWeight} fontSize={fontSize}>
         <IconAndTitleDiv>
            {iconSrc && <IconImage src={iconSrc} iconSize={iconSize} />}
            {children}
         </IconAndTitleDiv>
      </StyledTitle>
   );
};

export default Title;
