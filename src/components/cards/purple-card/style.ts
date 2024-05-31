import styled from "styled-components";

export const ContentDiv = styled.div`
   width: fit-content;
   padding: 2.06em 1.38em;
   background-color: ${({ theme }) => theme.colors.lightPurple};
   border-radius: 0.94em;
   margin: 0.94em;
`;

export const TitlesDiv = styled.div`
   margin-bottom: 0.31em;
`;

export const Number = styled.div`
   color: ${({ theme }) => theme.colors.white};
   margin-bottom: 0.63em;
   font-weight: 400;
   font-size: 1.13em;
`;

export const Title = styled.div`
   font-weight: 400;
   color: ${({ theme }) => theme.colors.orange};
   font-size: 1.06em;
   margin-bottom: 0.88em;
`;
