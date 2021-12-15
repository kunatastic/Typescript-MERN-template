export interface IHelloMessage {
  msg: string;
}

export interface ILoggedInResponse {
  value: boolean;
  msg: string;
  status: number;
}

export interface ISignInFormData {
  email: string;
  password: string;
}

export interface ISignUpFormData {
  email: string;
  password: string;
  username: string;
}
