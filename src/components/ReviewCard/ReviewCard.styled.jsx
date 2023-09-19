import styled from 'styled-components';

export const StyledReviewCard = styled.li`
  display: flex;
  width: 100%;
  padding: 20px;
  border: 1px solid rgba(227, 227, 227, 1);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const InfoDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  gap: 15px;
  margin-bottom: 20px;
`;

export const Avatar = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 16px;
`;

export const InfoTitle = styled.h3`
  margin-bottom: 8px;

  font-size: 21px;
  line-height: 16px;
  font-weight: 700;
`;

export const InfoCaption = styled.h5`
  font-weight: 300;
  font-size: 15px;
`;

export const Span = styled.span`
  font-weight: 400;
  font-size: 15px;
`;
