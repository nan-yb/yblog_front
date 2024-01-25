import CustomButton from '@components/custom/CustomButton';
import React, { useCallback,  useState } from 'react';


function ExcelUpload (){ 

  const [ file , setFile ] = useState<File>();
  // const [previewURL, setPreviewURL] = useState('');
  // const [preview,setPreview] = useState(null);
  // const fileRef= useRef();

  const handleChangeFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    
    if(!fileList) return ;

    setFile(fileList[0]);
  }, []);

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();

    console.log(file)
  }

  return ( 
    <div className="container mx-auto">
      <div className="w-2/3">
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
          {/* <img className="w-24 h-24 rounded-full mx-auto" src="" alt="" width="384" height="512"/> */}
          <div className="pt-6 space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
                1. 엑셀 데이터 업로드 
              </p>
              <p className="text-lg font-medium">
                2. tempDB , 기본데이터 검증 ( 타입 검증 , 크기 검증 , )
              </p>
              <p className="text-lg font-medium">
                3. INSERT SELECT DB
              </p>
            </blockquote>
          </div>
        </figure>
      </div>

      <div className="py-20">
        <form action="/upload/excel" onSubmit={handleSubmit}>
          <input type="file" name="excelFile" onChange={handleChangeFile}/>
          <br/>
        </form>
      </div>

      <div className="flex justify-center">
        <CustomButton title="확인" div="red" type="button"/>
      </div>
    </div> 
  ) 
};

export default ExcelUpload;