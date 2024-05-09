import styled from "styled-components";

export const StyledTitle = styled.h1<{ color?: string; fontSize?: string; fontWeight?: string }>`
   color: ${(props) => props.color || "black"};
   font-size: ${(props) => props.fontSize || "1rem"};
   font-weight: ${(props) => props.fontWeight || "normal"};
   display: flex;
   align-items: center;
   padding: 8px;
`;

export const IconImage = styled.img<{ iconSize?: string }>`
   margin-right: 0.5rem;
   width: ${(props) => props.iconSize || "auto"};
`;

export const IconAndTitleDiv = styled.div`
   display: flex;
   align-items: center;
   justify-content: start;
`;
