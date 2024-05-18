import styled from "styled-components";

export const ContentDiv = styled.div`
   width: fit-content;
   padding: 33px 22px;
   background-color: ${({ theme }) => theme.colors.lightPurple};
   border-radius: 15px;
   margin: 15px;
`;

export const TitlesDiv = styled.div`
   margin-bottom: 5px;
`;

export const Number = styled.div`
   color: ${({ theme }) => theme.colors.white};
   margin-bottom: 10px;
   font-weight: 400;
   font-size: 18px;
`;

export const Title = styled.div`
   font-weight: 400;
   color: ${({ theme }) => theme.colors.orange};
   font-size: 17px;
   margin-bottom: 14px;
`;
