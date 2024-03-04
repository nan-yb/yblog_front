
import CustomButton from "@components/custom/CustomButton";
import Spin from "@components/custom/Spin";
import OpenAI from "openai";
import React, { useState } from "react";
import openAIUtils from "src/utils/OpenApiUtil";


interface Props {
}

const AdminOpenAi = ({ }: Props) => {

  const [value, setInputValue] = useState<string>();
  const [result, setResult] = useState<string>();
  const [loading , setLoading] = useState(false);

  const onChange = (e: any) => {
    setInputValue(e.target.value)
  }

  const handleCustomButton = () => {
    if (!value) {
      alert("질문을 입력해주세요!");
      return;
    }

    setResult("");

    const result = openAIUtils.main(value);
    setLoading(true);

    result.then((res: any) => {
      setResult(res.choices[0].message.content)
      setLoading(false)
    })
  }

  return (

    <>
      <div className="w-screen h-screen ">

        <div className="mb-10">
          <textarea
            onChange={onChange}
            placeholder="질문을 입력해주세요"
            className="textarea textarea-bordered textarea-lg w-full  " >
          </textarea>

          <button className="btn btn-outline btn-primary" onClick={handleCustomButton}>질문하기</button>
        </div>

        <Spin spinning={loading}>
          {
            result ? (
              <textarea
                onChange={onChange}
                placeholder="질문을 입력해주세요"
                className="textarea textarea-bordered textarea-lg w-full h-1/2  " >
                {result}
              </textarea>
            ) : <></>
          }
        </Spin>
      </div>

    </>
  )
}

export default AdminOpenAi; 