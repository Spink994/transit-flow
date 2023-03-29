import { ReactNode } from 'react';
import NavBar from '../navBar';

type LayoutType = { children: ReactNode };

function Layout({ children }: LayoutType) {
  return (
    <main className="grid min-h-screen max-w-[1920px] mx-auto">
      <nav className="fixed w-full max-w-[1920px]">
        <NavBar />
      </nav>
      <section className="mt-[80px] lg:mt-[160px]">{children}</section>
      <footer>Footer</footer>
    </main>
  );
}

export default Layout;
