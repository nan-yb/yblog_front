
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
  auth: string;
}

export interface MyInfo {
  userName: string;
  authYn: string;
}

export interface ArticleInfo { 
  author : string;
  title : string;
  content : string;
  thumbImageUrl : string; 
  viewCount : number;
  thumbUpCount : number;
  commentCount : number;
}

export interface ModalInfo { 
  show: boolean;
  login : boolean;
  register : boolean;
}

export interface CodeGroup {
  groupCode: string;
  groupName: string;
  regDate: string;
}

export interface CodeDetailKey { 
  groupCode : string ; 
  codeValue : string;
}

export interface CodeDetail {
  groupCode : string ; 
  codeValue : string ; 
  codeName : string ; 
  sortSeq : number;
  regDate : string ;
}

export interface CodeValue { 
  label : string ; 
  value : string ; 
}
