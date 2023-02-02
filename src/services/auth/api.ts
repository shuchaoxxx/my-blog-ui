import { request } from '@/.umi/plugin-request';

export async function register() {
  return request('http://localhost:3000/api/register', {
    method: 'POST',
    data: {
      name: 'test3',
      password: 'test2',
      password_confirm: 'test2',
    },
  });
}

export async function login(data: any) {
  debugger;
  return request('http://localhost:3000/api/login', {
    method: 'POST',
    data: data,
  });
}
