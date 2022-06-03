import { useCallback, useEffect, useRef, useState } from "react";


import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";


import "tui-color-picker/dist/tui-color-picker.css";

import ToastEditor from "../custom/ToastEditor";
import HandlessUiRadioGroup from "../custom/HandlessUiRadioGroup";
import CustomButton from "@components/custom/CustomButton";
import ConfirmModal from "@components/custom/modal/ConfirmModal";
import client from "@libs/client";

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
  readonly uploadArticle : (title : string , thumbImageUrl : string, board : string  , content  : string  ) => void;
}

const ArticleRegister = ( { uploadArticle } : Props) => {
  
  const editorRef : any = useRef();
  const initialValue = ""

  const [title, setTitle] = useState("");
  const [thumbImageUrl, setThumbImageUrl] = useState("");

  const [board  , setBoard] = useState("");

  const [boards, setBoards] = useState([]);

  const handleChangeTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);


  const handleChangeThumbImageUrl = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setThumbImageUrl(e.target.value);
  }, []);

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const content = editorRef.current.getInstance().getHTML();

    uploadArticle(title , thumbImageUrl , board , content);
  }

  const fetchBoards = async () => {
    try {
      // 요청 처음에 초기화
      setBoards([]);

      const data : any = await client({
        url: "/board/list",
        method: "get",
      });

      setBoards(data);
    } catch (e) {}
  };

  useEffect(() => {
    fetchBoards();
  }, []);

  return (
    <>
      <div className="mx-auto max-w-6xl py-10 h-full">
        <form onSubmit={handleSubmit}>
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

            <input
              type="hidden"
              name="thumbImageUrl"
              onChange={handleChangeThumbImageUrl}
              value={thumbImageUrl}
              />
          </div>

          <div className="min-h-30 h-30">
            <div className="overflow-auto	border-b-1 border-b-solid border-b-sky ">
                <HandlessUiRadioGroup datas={ boards } groupValue={board} setGroupValue={setBoard} />
            </div>
          </div>

          <ToastEditor editorRef={editorRef} initialValue={initialValue} />

          <div className="mx-auto x-full py-10 justify-end flex">
            <CustomButton
              clickFn = {null}
              div="red"
              title="취소"
              type="button"
            ></CustomButton>

            <CustomButton
              clickFn = {null}
              div="blue"
              title="작성"
              type="submit"
            ></CustomButton>
          </div>
          
          <ConfirmModal show={false} title={"글을 작성하시겠습니까?"} />
        </form>
      </div>
    </>
  );
};

export default ArticleRegister;


  // if (editorRef.current) {
  //   editorRef.current
  //     .getInstance()
  //     .addHook("addImageBlobHook", (blob : any, callback : any) => {
  //       (async () => {
  //         let formData = new FormData();
  //         formData.append("file", blob);

  //         const data = await client({
  //           headers: { "content-type": "multipart/formdata" },
  //           data: formData,
  //           url: "/upload/file",
  //           method: "post",
  //         });

  //         // console.log(data.data);
  //         const imageUrl = data.data.filename;
  //         // setImageArr([...imageArr, imageUrl]);
  //         // 처음 등록한 이미지를 thumbNailUrl로..
  //         // Todo 처음 등록한 이미지가 아닌 썸네일 등록할 수 있는 페이지 구현 예정
  //         if (!thumbImageUrl) {
  //           setThumbImageUrl(imageUrl);
  //         }
  //         // Image 를 가져올 수 있는 URL 을 callback 메서드에 넣어주면 자동으로 이미지를 가져온다.
  //         callback(imageUrl, "alt text");
  //       })();

  //       return false;
  //     });
  // }

  // const cancleArticle = async () => {
  //   if (imageArr.length !== 0) {
  //     await axios({
  //       url: "/upload/cancel",
  //       method: "post",
  //       data: {
  //         imageArr: imageArr,
  //       },
  //     });
  //   }

  //   navigate("/");
  //   // location.href = "/";
  // };

  