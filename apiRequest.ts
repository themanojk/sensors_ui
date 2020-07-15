import {BASE_URL, AUTH_TOKEN} from './utils/appConfig';

const API_URL = BASE_URL;

export const get = async (url: string) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  headers['Authorization'] = `Bearer ${AUTH_TOKEN}`;

  return fetch(`${API_URL}/${url}`, {
    method: 'get',
    headers,
  });
};

export const post = async (url: string, data: any = []): any => {
  const headers = {
    'Content-Type': 'application/json',
  };

  headers['Authorization'] = `Bearer ${AUTH_TOKEN}`;

  const response = await fetch(`${API_URL}/${url}`, {
    method: 'post',
    body: JSON.stringify(data),
    headers,
  });
  const responseJson = await response.json();

  console.log('response came');

  return responseJson;
};

export const put = (url: string, data: any = {}) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  return fetch(`${API_URL}/${url}`, {
    method: 'put',
    body: JSON.stringify(data),
    headers,
  });
};
