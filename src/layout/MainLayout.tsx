import React from "react";
import MainHeaderContainer from "../containers/common/MainHeaderContainer";
import Footer from "../components/common/Footer";
import ModalContainer from "@containers/common/ModalContainer";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function MainLayout({ children }: Props) {
  return (
    <div>
      <MainHeaderContainer />
      {children}
      <Footer />
      <ModalContainer />
    </div>
  );
}

export default MainLayout;
