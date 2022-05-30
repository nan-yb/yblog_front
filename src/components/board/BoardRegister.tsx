import { useCallback, useRef, useState } from "react";


import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";


import "tui-color-picker/dist/tui-color-picker.css";

// import axios from "../../lib/client";
// import { useHistory } from "react-router-dom";
import ToastEditor from "../custom/ToastEditor";
import HandlessUiRadioGroup from "../custom/HandlessUiRadioGroup";
import CustomButton from "@components/custom/CustomButton";
import ConfirmModal from "@components/custom/modal/ConfirmModal";

// const S3_BUCKET = "nanyb-bucket";
// const REGION = "ap-northeast-2";

// AWS.config.update({
//   accessKeyId: "AKIA5EITWKEV6X6JNGFO",
//   secretAccessKey: "9EGk8bW2p4kNQkHBW8OWkuGicP3N36cbB13H",
// });

// const myBucket = new AWS.S3({
//   params: { Bucket: S3_BUCKET },
//   region: REGION,
// });

interface Props {
  readonly uploadArticle : () => void;
}

const BoardRegister = ( {uploadArticle } : Props) => {
  const [title, setTitle] = useState("");
  const [thumbImageUrl, setThumbImageUrl] = useState("");

  const [board, setBoard] = useState("");
  const [content, setContent] = useState("");

  const handleChangeTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const handleChangeBoard = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setBoard(e.target.value);
  }, []);

  const handleChangeContent = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  }, []);

  const handleChangeThumbImageUrl = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setThumbImageUrl(e.target.value);
  }, []);

  const editorRef = useRef();
  const initialValue = ""
  
  return (
    <>
      <div className="mx-auto max-w-6xl py-10 h-full">
        <div className="py-4">
          <div className="md:flex md:items-center mb-6">
            <div className="">
              <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">
                제목
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                onChange={handleChangeTitle}
                type="text"
                name="title"
                className="p-4 w-80 h-10 rounded text-sm focus:outline-none border border-gray-200 focus:border-sky-900 "
                placeholder="제목을 입력해주세요."
                value={title}
              />
            </div>
          </div>

          <input type="hidden" name="board"  onChange={handleChangeBoard} />
          <input type="hidden" name="content" onChange={handleChangeContent} />
          <input
            type="hidden"
            name="thumbImageUrl"
            onChange={handleChangeThumbImageUrl}
            value={thumbImageUrl}
          />
        </div>

        <div className="min-h-30 h-30 ">
          <div className="overflow-auto	border-b-1 border-b-solid border-b-sky ">
              <HandlessUiRadioGroup />
          </div>
        </div>

        <ToastEditor editorRef={editorRef} initialValue={initialValue} />

        <div className="mx-auto x-full py-10 justify-end flex">
          <CustomButton
            // clickFn={cancleArticle}
            clickFn = {null}
            div="red"
            title="취소"
          ></CustomButton>

          <CustomButton
            clickFn = {uploadArticle}
            div="blue"
            title="작성"
          ></CustomButton>
        </div>
        
        <ConfirmModal show={false} title={"글을 작성하시겠습니까?"} />
      </div>

    </>
  );
};



export default BoardRegister;

// {totalBoard.map((board) => (
//   <div key={board._id} className="w-full px-4 pb-12">
//     <div className="w-full max-w-xs">
//       <RadioGroup value={selected} onChange={setSelected}>
//         <RadioGroup.Label className="sr-only"></RadioGroup.Label>
//         <div className="space-y-2">
//           {totalBoard.map((board) => (
//             <RadioGroup.Option
//               key={board._id}
//               value={board._id}
//               className={({ active, checked }) =>
//                 `${
//                   active
//                     ? "ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60"
//                     : ""
//                 }
//                   ${
//                     checked
//                       ? "bg-sky-900 bg-opacity-75 text-white"
//                       : "bg-white"
//                   }
//                     relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
//               }
//             >
//               {({ active, checked }) => (
//                 <>
//                   <div className="flex items-center justify-between w-full">
//                     <div className="flex items-center">
//                       <div className="text-sm">
//                         <RadioGroup.Label
//                           as="p"
//                           className={`font-medium  ${
//                             checked ? "text-white" : "text-gray-900"
//                           }`}
//                         >
//                           {board.title}
//                         </RadioGroup.Label>
//                       </div>
//                     </div>
//                     {checked && (
//                       <div className="flex-shrink-0 text-white">
//                         <CheckIcon className="w-6 h-6" />
//                       </div>
//                     )}
//                   </div>
//                 </>
//               )}
//             </RadioGroup.Option>
//           ))}
//         </div>
//       </RadioGroup>
//     </div>
//   </div>
// ))}