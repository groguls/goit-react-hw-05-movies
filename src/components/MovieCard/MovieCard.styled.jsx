import styled from 'styled-components';

export const MovieCardWrapper = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-basis: calc((100% - 4 * 25px) / 5);
`;

export const Image = styled.img`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 100%;
  overflow: hidden;
`;

export const CardTitle = styled.h2`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Paragraf = styled.p`
  color: rgba(0, 0, 0, 0.6);
`;
