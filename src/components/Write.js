import { useEffect, useRef, useState } from "react";
import { Editor } from "@toast-ui/react-editor";

import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";

import "tui-color-picker/dist/tui-color-picker.css";
import Confirm from "./modal/Confirm";

import axios from "../api";
import { useNavigate } from "react-router-dom";

import { RadioGroup } from "@headlessui/react";
import CustomButton from "./common/CustomButton";
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

const Write = () => {
  const [totalBoard, setTotalBoard] = useState([]);
  const [selected, setSelected] = useState();
  const [thumbImageUrl, setThumbImageUrl] = useState();
  const [imageArr, setImageArr] = useState([]);

  const [inputs, setInputs] = useState({
    title: "",
    content: "",
    board: "",
  });

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const editorRef = useRef();

  if (editorRef.current) {
    editorRef.current
      .getInstance()
      .addHook("addImageBlobHook", (blob, callback) => {
        (async () => {
          let formData = new FormData();
          formData.append("file", blob);

          const data = await axios({
            headers: { "content-type": "multipart/formdata" },
            data: formData,
            url: "/upload/file",
            method: "post",
          });

          // console.log(data.data);
          const imageUrl = data.data.filename;
          setImageArr([...imageArr, imageUrl]);
          // 처음 등록한 이미지를 thumbNailUrl로..
          // Todo 처음 등록한 이미지가 아닌 썸네일 등록할 수 있는 페이지 구현 예정
          if (!thumbImageUrl) {
            setThumbImageUrl(imageUrl);
          }
          // Image 를 가져올 수 있는 URL 을 callback 메서드에 넣어주면 자동으로 이미지를 가져온다.
          callback(imageUrl, "alt text");
        })();

        return false;
      });
  }
  const fetchHotels = async () => {
    try {
      // 요청 처음에 초기화
      setTotalBoard([]);

      const data = await axios({
        url: "/board/list",
        method: "get",
      });

      setTotalBoard(data);
    } catch (e) {}
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  let navigate = useNavigate();

  const uploadArticle = async () => {
    const html = editorRef.current.getInstance().getHtml();

    inputs.content = html;
    inputs.board = selected;

    if (!inputs.content || !inputs.title || !inputs.board) {
      alert("제목 및 내용을 입력해주세요.");
      return;
    }

    const data = await axios({
      url: "/article/create",
      method: "post",
      data: {
        content: inputs.content,
        board: inputs.board,
        title: inputs.title,
        thumbImageUrl: thumbImageUrl,
      },
    });

    if (!data) {
      return;
    }

    navigate(`/article/${data.key}`);
  };

  const cancleArticle = async () => {
    if (imageArr.length !== 0) {
      await axios({
        url: "/upload/cancel",
        method: "post",
        data: {
          imageArr: imageArr,
        },
      });
    }

    navigate("/");
    // location.href = "/";
  };

  function CheckIcon(props) {
    return (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
        <path
          d="M7 13l3 3 7-7"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <div>
      <div className="mx-auto max-w-6xl py-10 h-full">
        <div className="py-4">
          <button className="flex">
            <span></span>
          </button>

          <div className="md:flex md:items-center mb-6">
            <div className="">
              <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">
                제목
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                onChange={onChange}
                type="text"
                name="title"
                className="p-4 w-80 h-10 rounded text-sm focus:outline-none border border-gray-200 focus:border-sky-900 "
                placeholder="제목을 입력해주세요."
              />
            </div>
          </div>

          <input type="hidden" name="board" onChange={onChange} />
          <input type="hidden" name="content" onChange={onChange} />
          <input
            type="hidden"
            name="thumbImageUrl"
            onChange={onChange}
            value={thumbImageUrl}
          />
        </div>

        <div className="min-h-30 h-30 ">
          <div className="overflow-auto	border-b-1 border-b-solid border-b-sky ">
            {totalBoard.map((board) => (
              <div key={board._id} className="w-full px-4 pb-12">
                <div className="w-full max-w-xs">
                  <RadioGroup value={selected} onChange={setSelected}>
                    <RadioGroup.Label className="sr-only"></RadioGroup.Label>
                    <div className="space-y-2">
                      {totalBoard.map((board) => (
                        <RadioGroup.Option
                          key={board._id}
                          value={board._id}
                          className={({ active, checked }) =>
                            `${
                              active
                                ? "ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60"
                                : ""
                            }
                              ${
                                checked
                                  ? "bg-sky-900 bg-opacity-75 text-white"
                                  : "bg-white"
                              }
                                relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <div className="flex items-center justify-between w-full">
                                <div className="flex items-center">
                                  <div className="text-sm">
                                    <RadioGroup.Label
                                      as="p"
                                      className={`font-medium  ${
                                        checked ? "text-white" : "text-gray-900"
                                      }`}
                                    >
                                      {board.title}
                                    </RadioGroup.Label>
                                  </div>
                                </div>
                                {checked && (
                                  <div className="flex-shrink-0 text-white">
                                    <CheckIcon className="w-6 h-6" />
                                  </div>
                                )}
                              </div>
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Editor
          previewStyle="vertical"
          height="500px"
          initialEditType="wysiwyg"
          initialValue="hello"
          hideModeSwitch="false"
          ref={editorRef}
          minHeight="500px"
        />

        <div className="mx-auto x-full py-10 justify-end flex">
          <CustomButton
            clickFn={cancleArticle}
            div="red"
            title="취소"
          ></CustomButton>

          <CustomButton
            clickFn={uploadArticle}
            div="blue"
            title="작성"
          ></CustomButton>
        </div>
      </div>
      <Confirm title={"asd"} />
    </div>
  );
};

export default Write;
