import Nav from "./Nav"
import Footer from "./Footer"
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({children}: LayoutProps) {
  return (
    <>
      <Nav/>
      {children}
      <Footer/>
    </>
  )
}
