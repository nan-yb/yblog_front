import React, { ReactEventHandler } from "react";
import tw from "tailwind-styled-components";

const BlueButton = tw.button`
  flex justify-end text-sky-700 hover:text-white border border-sky-900 hover:bg-sky-900 focus:ring-4 focus:ring-sky-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3 dark:border-sky-900 dark:text-sky-900 dark:hover:text-white dark:hover:bg-sky-900 dark:focus:ring-sky-900
`;

const RedButton = tw.button`
  flex text-red-900 hover:text-white border border-red-900 hover:bg-red-900 focus:ring-4 focus:ring-red-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3 dark:border-red-900 dark:text-red-900 dark:hover:text-white dark:hover:bg-red-900 dark:focus:ring-red-900
`;

type props = {
  title : string, 
  div : string, 
  type? : "button" | "submit" | "reset"
  clickFn? : React.ReactEventHandler ,
}

function CustomButton({ title, div, type = "button"  , clickFn} : props) {
  return (
    <div>
      {div === "red" ? (
        <RedButton onClick={clickFn} type={type}>
          {title}
        </RedButton>
      ) : (
        <BlueButton onClick={clickFn} type={type}>
          {title}
        </BlueButton>
      )}
    </div>
  );
}

export default CustomButton;
