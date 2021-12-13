import axios from 'axios';
import { IHelloMessage } from '../types/types';

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:5000';

const getHelloMessage = async (): Promise<IHelloMessage> => {
  const data = await axios.get(`${API_BASE}/api`);
  return data.data;
};

export { getHelloMessage };
