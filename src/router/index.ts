import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contact/ContactView.vue'),
    },
    {
      path: '/signUp',
      name: 'signup',
      component: import('../views/login/SignInView.vue'),
    },
    {
      path: '/signIn',
      name: 'signin',
      component: import('../views/login/SignUpView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/faq/FAQView.vue'),
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('../views/privacy/PrivacyView.vue'),
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('../views/terms/TermsView.vue'),
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: () => import('../views/about/AboutUsView.vue'),
    },
    {
      path: '/comments',
      name: 'comments',
      component: () => import('../views/comments/CommentsView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
