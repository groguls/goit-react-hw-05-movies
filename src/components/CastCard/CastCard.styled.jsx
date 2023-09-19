import styled from 'styled-components';

export const CastCardWrapper = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc((100% - 6 * 15px) / 7);
  border: 1px solid rgba(227, 227, 227, 1);
  padding-bottom: 8px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.img`
  width: 100%;
`;

export const CardTitle = styled.h2`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 5px;
`;

export const ReleaseDate = styled.p`
  color: rgba(0, 0, 0, 0.6);
`;
