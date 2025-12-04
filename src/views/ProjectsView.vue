<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ContactSection from '../components/ContactSection.vue' // Reutilizamos el contacto al final

// Generamos un array de 14 proyectos simulados
// NOTA: Reemplaza estas URLs por tus imágenes reales: new URL('../assets/img/proyectos/foto1.jpg', import.meta.url).href
const projects = Array.from({ length: 14 }, (_, i) => {
  const id = i + 1 // Para que empiece en 1 y termine en 14
  
  return {
    id: id,
    code: `PRJ-${202400 + id}`, 
    title: `Proyecto Industrial ${id}`, // O puedes crear un array de nombres reales aparte
    
    // 👇 AQUÍ ESTÁ LA FÓRMULA MÁGICA
    // Vite entiende que quieres buscar en esa carpeta y permite la variable ${id}
    image: new URL(`../assets/img/proyectos/proyecto-${id}.webp`, import.meta.url).href
  }
})

// --- LÓGICA DEL LIGHTBOX (VISOR) ---
const isLightboxOpen = ref(false)
const currentImage = ref(null)

const openLightbox = (project) => {
  currentImage.value = project
  isLightboxOpen.value = true
  document.body.style.overflow = 'hidden' // Evita scroll de fondo
}

const closeLightbox = () => {
  isLightboxOpen.value = false
  currentImage.value = null
  document.body.style.overflow = 'auto' // Reactiva scroll
}

// Cerrar con tecla Escape
const handleKeydown = (e) => {
  if (e.key === 'Escape' && isLightboxOpen.value) closeLightbox()
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
</script>

<template>
  <main class="projects-page">
    
    <section class="projects-header py-5">
      <div class="container text-center pt-5 pb-4">
        <span class="header-tagline">Portafolio & Ejecución</span>
        <h1 class="header-title">GALERÍA DE <span class="text-highlight">PROYECTOS</span></h1>
        
        <div class="industrial-divider mx-auto mb-4">
          <span class="line"></span>
          <span class="nut-icon"><i class="bi bi-hexagon-fill"></i></span>
          <span class="line"></span>
        </div>

        <p class="header-desc mx-auto">
          Una muestra visual de nuestra capacidad técnica. Desde grandes montajes estructurales 
          hasta soluciones de ingeniería de detalle para la industria nacional.
        </p>
      </div>
    </section>

    <section class="gallery-section pb-5">
      <div class="container">
        
        <div class="masonry-grid">
          <div 
            v-for="project in projects" 
            :key="project.id" 
            class="masonry-item mb-4"
            @click="openLightbox(project)"
          >
            <div class="project-card">
              <img :src="project.image" :alt="project.title" class="project-img" loading="lazy">
              
              <div class="overlay">
                <div class="overlay-content">
                  <span class="project-code">{{ project.code }}</span>
                  <i class="bi bi-zoom-in zoom-icon"></i>
                  <h4 class="project-title-overlay">{{ project.title }}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <transition name="fade">
      <div v-if="isLightboxOpen" class="lightbox" @click.self="closeLightbox">
        <button class="btn-close-lightbox" @click="closeLightbox">
          <i class="bi bi-x-lg"></i>
        </button>
        
        <div class="lightbox-content">
          <img :src="currentImage.image" :alt="currentImage.title" class="lightbox-img">
          <div class="lightbox-caption">
            <span class="caption-code">{{ currentImage.code }}</span>
            <h5 class="caption-title">{{ currentImage.title }}</h5>
          </div>
        </div>
      </div>
    </transition>

    <ContactSection />

  </main>
</template>

<style scoped>
.projects-page {
  background-color: #fcfcfc;
}

/* --- CABECERA --- */
.header-tagline {
  display: block; font-size: 0.9rem; color: #6c757d; font-weight: 700;
  letter-spacing: 3px; text-transform: uppercase; margin-bottom: 10px;
}

.header-title {
  font-weight: 900; font-size: 3rem; color: #1a1a1a;
  text-transform: uppercase; letter-spacing: -1px; margin-bottom: 1.5rem;
}

.text-highlight { color: var(--color-acero-green, #6CAB3D); }

.header-desc {
  font-size: 1.1rem; color: #555; max-width: 700px; font-weight: 300; line-height: 1.6;
}

/* Separador con Tuerca */
.industrial-divider {
  display: flex; align-items: center; justify-content: center; gap: 15px; width: 100%; max-width: 300px;
}
.industrial-divider .line { height: 2px; flex-grow: 1; background-color: #e0e0e0; }
.nut-icon { color: var(--color-acero-green, #6CAB3D); font-size: 1.2rem; }

/* --- MASONRY GRID --- */
.masonry-grid {
  column-count: 3; /* 3 Columnas por defecto */
  column-gap: 1.5rem;
}

.masonry-item {
  break-inside: avoid; /* Evita que la foto se parta entre columnas */
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  cursor: pointer;
  transform: translateZ(0); /* Aceleración hardware */
}

.project-card {
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.project-img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

/* EFECTOS HOVER */
.overlay {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(16, 24, 32, 0.7); /* Oscuro azulado */
  opacity: 0;
  display: flex; align-items: center; justify-content: center;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(2px);
}

.overlay-content {
  text-align: center; color: white; transform: translateY(20px); transition: transform 0.3s ease;
}

.project-code {
  display: block; font-family: monospace; font-size: 0.9rem; color: var(--color-acero-green, #6CAB3D);
  margin-bottom: 10px; background: rgba(0,0,0,0.3); padding: 2px 8px; border-radius: 4px; display: inline-block;
}

.zoom-icon { font-size: 2.5rem; display: block; margin-bottom: 10px; }

.project-title-overlay {
  font-size: 1rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin: 0;
}

/* Animación al pasar el mouse */
.masonry-item:hover .project-card { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(0,0,0,0.15); }
.masonry-item:hover .project-img { transform: scale(1.05); }
.masonry-item:hover .overlay { opacity: 1; }
.masonry-item:hover .overlay-content { transform: translateY(0); }

/* --- LIGHTBOX (MODAL) --- */
.lightbox {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  z-index: 10000;
  display: flex; align-items: center; justify-content: center;
  padding: 20px;
}

.lightbox-content {
  max-width: 90%; max-height: 90%;
  position: relative;
}

.lightbox-img {
  max-width: 100%; max-height: 85vh;
  border-radius: 2px;
  box-shadow: 0 0 50px rgba(0,0,0,0.5);
  border: 1px solid #333;
}

.lightbox-caption {
  text-align: center; margin-top: 15px; color: white;
}

.caption-code {
  display: block; font-family: monospace; color: var(--color-acero-green, #6CAB3D); font-size: 0.9rem; margin-bottom: 5px;
}

.caption-title {
  font-weight: 300; letter-spacing: 1px; font-size: 1.1rem; text-transform: uppercase;
}

.btn-close-lightbox {
  position: absolute; top: 30px; right: 30px;
  background: none; border: none; color: white; font-size: 2.5rem; cursor: pointer;
  transition: transform 0.2s; z-index: 10001;
}
.btn-close-lightbox:hover { transform: scale(1.1); color: var(--color-acero-green, #6CAB3D); }

/* TRANSICIONES */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* --- RESPONSIVE --- */
@media (max-width: 991px) {
  .masonry-grid { column-count: 2; }
}

@media (max-width: 576px) {
  .masonry-grid { column-count: 1; }
  .header-title { font-size: 2.2rem; }
  .btn-close-lightbox { top: 20px; right: 20px; font-size: 2rem; }
}
</style>