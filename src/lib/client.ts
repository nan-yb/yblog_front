import axios from "axios";

const client = axios.create({
  // baseURL: "https://sub.ybyblog.com",
  timeout: 1000,
  // 해커 뉴스 API는 커스텀 헤더 넣으면 CORS걸려서 주석처리했습니다.
  // headers: {'X-Custom-Header': 'foobar'}
});

client.interceptors.request.use(
  (config : any) => {
    config.headers["Content-Type"] = "application/json; charset=utf-8";
    return config;
  },
  function (error) {
    // 요청 에러 처리를 작성합니다.
    console.log(error);
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  function (response) {
    /*
      http status가 200인 경우
      응답 바로 직전에 대해 작성합니다. 
      .then() 으로 이어집니다.
  */
    return response.data;
  },

  function (error) {
    /*
      http status가 200이 아닌 경우
      응답 에러 처리를 작성합니다.
      .catch() 으로 이어집니다.    
  */
    console.log(error);
    return Promise.reject(error);
  }
);

// 생성한 인스턴스를 익스포트 합니다.
export default client;
