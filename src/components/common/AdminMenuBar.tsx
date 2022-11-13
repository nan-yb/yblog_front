import React from "react";
import { Link } from "react-router-dom";

interface Props {
  readonly isAuthorized: boolean;
  readonly isAdmin: boolean;
}

function AdminMenuBar({ isAuthorized, isAdmin }: Props) {
  return (
    <div className={""}>
      <table>
        <tbody>
          <tr>
            {isAuthorized && isAdmin && (
              <>
                <td width="120">
                  <Link to="/">홈</Link>
                </td>
                <td width="120">
                  <Link to="/admin/excel">엑셀 데이터</Link>
                </td>
                <td width="120">
                  <Link to="/admin/board">
                    게시판관리
                  </Link>
                </td>
                <td width="120">
                  <Link to="/codedetail">코드관리</Link>
                </td>
                <td width="120">
                  <Link to="/admin/grid">그리드</Link>
                </td>
              </>
            )}
            {isAuthorized && !isAdmin && (
              <>
                <td width="120">
                  <Link to="/">홈</Link>
                </td>
              </>
            )}
            {!isAuthorized && (
              <>
                <td width="120">
                  <Link to="/">홈</Link>
                </td>
              </>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AdminMenuBar;
