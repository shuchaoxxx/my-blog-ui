import { defineConfig } from 'umi';

export default defineConfig({
  plugins: ['@umijs/plugins/dist/request', '@umijs/plugins/dist/dva'],
  request: {},
  dva: {},
  routes: [
    // { path: "/", component: "index" },
    // { path: "/docs", component: "docs" },
    { path: '/', component: 'index' },
    { path: '/posts/create', component: 'posts/create' },
    { path: '/login', component: 'login' },
    { path: '/posts/:postId', component: 'posts/post' },
  ],
  npmClient: 'pnpm',
});
