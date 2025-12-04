import { createRouter, createWebHistory } from 'vue-router'
// Crearemos este componente en el paso 3
import HomeView from '../views/HomeView.vue' 
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { 
        title: 'Maestranza Acero Sur Chile - Home' // Para SEO básico después
      }
    },
    {
      path: '/nosotros',
      name: 'nosotros',
      component: AboutView,
      meta: { 
        title: 'Maestranza Acero Sur Chile - Nosotros' // Para SEO básico después
      }
    },
    {
      path: '/proyectos',
      name: 'proyectos',
      component: ProjectsView,
      meta: { 
        title: 'Maestranza Acero Sur Chile - Galería de Proyectos' // Para SEO básico después
      }
    },
  ],
  // Esto es para que al cambiar de página, el scroll vuelva arriba siempre
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
        return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  }
})

// Guard global para cambiar el título de la pestaña (SEO Básico)
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Acero Sur Chile';
  next();
});

export default router