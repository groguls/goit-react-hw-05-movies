import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonLink = styled(NavLink)`
  height: 46px;
  display: flex;
  align-items: center;
  background-color: #fff;

  &:active {
    color: rgb(1, 180, 228);
  }
`;

export const GoBackWraper = styled.div`
  max-width: 1440px;
  padding: 0 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const MoreInfoWrapper = styled.div`
  width: 100%;
  height: 46px;
  display: flex;
  gap: 40px;
  align-items: center;
  background-color: #fff;
`;

export const MovieDetailsWrapper = styled.div`
  color: #fff;
  font-size: 18px;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Background = styled.div`
  padding: 64px 0px;
  background-image: linear-gradient(
    to right,
    rgba(144, 206, 161, 0.84) 10%,
    rgba(1, 180, 228, 0.84) 40%,
    rgba(13, 37, 63, 0.84) 100%
  );
`;

export const MovieDatailsSection = styled.div`
  color: #fff;
  padding: 0;
  max-width: initial;
`;

export const MovieInfoInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 1000px;
`;

export const OverviewInner = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Span = styled.span`
  padding: 0 20px;
  position: relative;
  top: 0;
  left: 0;

  &::before {
    content: '•';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 7px;
  }
`;

export const ReleaseYear = styled.span`
  opacity: 0.8;
  font-weight: 400;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 36px;
  margin-top: 20px;
  margin-bottom: 8px;
`;

export const TagLine = styled.h3`
  font-size: 20px;
  font-weight: 400;
  font-style: italic;
`;

export const Overview = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 8px;
`;

export const MovieDatailsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 1440px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
`;
