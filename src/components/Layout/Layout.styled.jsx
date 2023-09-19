import styled from 'styled-components';

export const StyledLayout = styled.div`
  position: relative;
  top: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(13, 37, 63);
  height: 64px;
  color: #fff;
  font-weight: 600;
  z-index: 10;
  padding: 0 120px;
`;

export const Container = styled.div`
  max-width: 1440px;
  padding: 0 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 64px;
`;

export const Section = styled.div`
  margin-top: 64px;
  margin-bottom: 15px;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;
  width: 100%;
  padding: 0 100px;
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0px;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: rgb(13, 37, 63);
  height: 32px;
  color: #fff;
  font-weight: 600;
  padding: 0 120px;
`;
