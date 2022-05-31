import React from "react";
import MainHeaderContainer from "@containers/common/MainHeaderContainer";
import Footer from "@components/common/Footer";
import AdminMenuBarContainer from "@containers/common/AdminMenuBarContainer";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function AdminLayout({ children }: Props) {
  return (
    <div>
      <MainHeaderContainer />
      <AdminMenuBarContainer />
      {children}
      <Footer />
    </div>
  );
}

export default AdminLayout;
