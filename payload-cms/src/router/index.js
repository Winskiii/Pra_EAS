import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../components/Homepage.vue';
import SignIn from '../components/SignIn.vue';
import SignUp from '../components/SignUp.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Homepage },
    { path: '/signin', component: SignIn },
    { path: '/signup', component: SignUp },
    // Add other routes as needed
  ],
});

export default router;
