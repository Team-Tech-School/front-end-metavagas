import styled from "styled-components";

export const Container = styled.div`
   background-color: white;
   padding: 35px 11px 12px 11px;
   border-radius: 8px;
   position: absolute;
   right: 120px;
   margin-top: -32.1em;
   height: fit-content;
`;

export const TextContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: flex-start;
   flex-direction: column;
   padding: 5px;
`;

export const Underline = styled.text`
   text-decoration: underline;
   color: ${({ theme }) => theme.colors.lightPurple};
   font-weight: ${({ theme }) => theme.fontWeight.midMedium};
   margin: 0px 5px;
   cursor: pointer;
`;

export const InnerContainer = styled.div`
   margin-top: -65px;
   margin-left: 5px;
   position: absolute;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const CircleImage = styled.img`
   width: 62px;
`;

export const IconWrapper = styled.div`
   position: absolute;
   margin-left: 6px;
   margin-top: 6px;
`;

export const InfoDiv = styled.div`
   margin-bottom: 4px;
`;
