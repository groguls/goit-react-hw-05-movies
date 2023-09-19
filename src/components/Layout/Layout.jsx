import { Suspense } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import {
  Footer,
  Header,
  HeaderContainer,
  Navigation,
  StyledLayout,
} from './Layout.styled';
import { ReactComponent as Logo } from '../../images/logo.svg';

export default function Layout() {
  return (
    <StyledLayout>
      <Header>
        <HeaderContainer>
          <Link to="/">
            <Logo />
          </Link>
          <Navigation>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
          </Navigation>
        </HeaderContainer>
      </Header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <Footer>тут може бути Ваша реклама 😀</Footer>
    </StyledLayout>
  );
}
