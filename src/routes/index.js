/*
 * @Author: your name
 * @Date: 2021-01-17 21:20:55
 * @LastEditTime: 2021-02-20 21:03:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal\src\routes\index.js
 */
import VueRouter from "vue-router";
import Vue from "vue";

const About = () => import("../views/About");
const ArticleDetail = () => import("../views/ArticalDetail/index.vue");
const Layout = () => import("../layout/Layout.vue");
const ArticleList = () => import("../views/ArticalList/index.vue");

Vue.use(VueRouter);

// 解决重复点击导航路由报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        component: ArticleList,
      },
      {
        path: "/about",
        component: About,
      },
      {
        path: "/detail/:id",
        component: ArticleDetail,
      },
    ],
  },
];
const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
