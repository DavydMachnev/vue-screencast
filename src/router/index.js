import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import VideoWatch from '../views/VideoWatch.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/video/:id',
    name: 'video-watch',
    props: true,
    component: VideoWatch,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
