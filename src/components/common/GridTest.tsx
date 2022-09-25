import ToastGrid from "@components/custom/ToastGrid";
import React from "react";

interface Props {
  data: any;
}

function GridTest({ data }: Props) {
  return (
    <>
      <div className="container">
        <p className="pt-20">그리드 테스트입니다.</p>
        <div className="mx-auto py-3">
          <ToastGrid data={null} />
        </div>
      </div>
    </>
  );
}

export default GridTest;
