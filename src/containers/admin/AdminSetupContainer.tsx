import React from "react";
import AdminSetupForm from "@components/admin/AdminSetupForm";
import * as api from "@libs/auth";
import { withRouter, RouteComponentProps } from "react-router-dom";

const AdminSetupContainer = ({ history }: RouteComponentProps) => {
  const onRegister = async (email: string, nickname: string, password: string , authYn : boolean) => {
    try {
      await api.adminSetup(email, nickname, password , authYn);

      alert("등록이 완료되었습니다.");

      history.push("/");
    } catch (e: any) {
      alert(e.response.data);
    }
  };

  return <AdminSetupForm onRegister={onRegister} />;
};

export default withRouter(AdminSetupContainer);
