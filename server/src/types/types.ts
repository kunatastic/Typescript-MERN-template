import { Request } from 'express';

/**
 *
 *
 * TYPES
 *
 */
export type IHelloMessage = {
  msg: string;
};

export type IUser = {
  email: string;
  username: string;
  password: string;
  role: string;
};

/**
 *
 * INTERFACES
 *
 */
export interface IGetUserAuthInfoRequest extends Request {
  user: string;
}
