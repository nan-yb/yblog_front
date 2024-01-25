
export interface LoginInput {
  userId: string;
  password: string;
}

export interface RegisterInput { 
  email : string ; 
  password : string ;   
  nickName : string ;  
  company : string ;
}

export interface AuthInfo {
  authYn: string;
  email : string ; 
  nickname : string ; 
}

export interface MyInfo {
  userName: string;
  authYn: string;
}

export interface ArticleInfo { 
  _id   : string;
  title : string;
  content : string;
  viewCount : number;
  thumbupCount : number;
  commentCount : number;
  board : BoardInfo | null;
  author : AuthInfo | null;
}

export interface BoardInfo {
  _id : string;
  title : string;
  slug : string; 
  content : ArticleInfo[] | null;
}

export interface ModalInfo { 
  show: boolean;
  login : boolean;
  register : boolean;
}
