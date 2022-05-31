import React from "react";
import { connect } from "react-redux";
import AdminMenuBar from "@components/common/AdminMenuBar";
import { getAuthorized, isAdmin } from "@modules/selector";
import { RootState } from "../../modules";

interface Props {
  readonly isAuthorized: boolean;
  readonly isAdmin: boolean;
}

const AdminMenuBarContainer = ({ isAuthorized, isAdmin }: Props) => {
  return (
    <AdminMenuBar
      isAuthorized={isAuthorized}
      isAdmin={isAdmin}
    />
  ); 
};

export default connect((state: RootState) => {
  return {
    isAuthorized: getAuthorized(state),
    isAdmin: isAdmin(state),
  };
})(AdminMenuBarContainer);
