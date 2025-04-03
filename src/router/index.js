import gamedata from '@/page/gamedata/gamedata.vue';
import HelloWorld from '@/components/HelloWorld.vue';

import { createMemoryHistory, createWebHashHistory, createRouter } from 'vue-router'


const routes = [
  { path: '/', component: HelloWorld },
  { path: '/gamedata', component: gamedata },
  { path: '/pagination', component: () => import('@/components/Pagination.vue') },

]

const router = createRouter({
  // history: createMemoryHistory(),
  history: createWebHashHistory(),
  routes,
})

export default router;