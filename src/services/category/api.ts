import { request } from '@/.umi/plugin-request';

export async function getCategoryList() {
  return request('http://localhost:3000/api/category');
}
