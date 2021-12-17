import axios, { AxiosError } from 'axios';
import { IHelloMessage, ILoggedInResponse, ISignInFormData, ISignUpFormData } from '../types/types';

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:5000';

axios.defaults.withCredentials = true;

/**
 *
 * @returns {Promise<IHelloMessage>}
 * @description This function returns a promise that resolves to a hello message
 * @purpose just to demonstrate the server is connected and running fine.
 */
export const getHelloMessage = async (): Promise<IHelloMessage> => {
  const data = await axios.get(`${API_BASE}`);
  return data.data;
};

/**
 *
 * @returns {Promise<ILoggedInResponse>}
 * @description This function returns a promise that resolves to a logged in status
 * @purpose find the cookie and check if it is valid
 */
export const getLoggedInStatus = async (): Promise<ILoggedInResponse> => {
  try {
    const data = await axios.get(`${API_BASE}/auth/isLoggedIn`);
    return data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        return {
          status: axiosError.response?.status,
          msg: axiosError.response?.data.msg,
          value: false,
        };
      }
    }
    return { status: 500, msg: 'Server Error', value: false };
  }
};

/**
 *
 * @param formData {ISignInFormData}
 * @returns {Promise<ILoggedInStatus>}
 * @description This function returns a promise that resolves to a logged in status
 * @purpose set the cookies if the credentials are valid and logs the user
 * @purpose if the credentials are invalid, return an error
 */
export const postLogin = async (formData: ISignInFormData): Promise<any> => {
  try {
    const data = await axios.post(`${API_BASE}/auth/login`, formData);
    return data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      return axiosError.response?.data;
    }
  }
};

/**
 * @returns {Promise<ILoggedInStatus>}
 * @description This function returns a promise that resolves to a register in status
 * @purpose set the cookies if the credentials are valid and register the user
 * @purpose if the credentials are invalid, return an error
 */

export const postRegister = async (formData: ISignUpFormData): Promise<any> => {
  try {
    const data = await axios.post(`${API_BASE}/auth/register`, formData);
    return data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      return axiosError.response?.data;
    }
  }
};

/**
 *
 */
export const getLogout = async (): Promise<any> => {
  const data = await axios.get(`${API_BASE}/auth/logout`);
  return data.data;
};
