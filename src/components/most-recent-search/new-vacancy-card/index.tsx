// NewCard.tsx
import styled from 'styled-components';

const Card = styled.div`
  width: 72px;
  height: 30px;
  margin-top: 24px; /* Espaçamento superior */
  margin-left: 24px; /* Espaçamento à esquerda */
  border-radius: 8px;
  padding: 11px 24px 10px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #6950A1;
  color: #FFFFFF; 
  font-family: Poppins, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 19.6px;
  text-align: center;
`;

export const NewCard = () => {
  return (
    <Card>
      Nova
    </Card>
  );
};


