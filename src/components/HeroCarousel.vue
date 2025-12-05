<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const slides = [
  {
    id: 1,
    type: 'standard',
    tagline: "DESDE EL BÍOBÍO PARA CHILE", 
    title: "MAESTRANZA ACERO SUR",
    subtitle: "14 años de trayectoria ininterrumpida. Líderes en soluciones de fabricación industrial, excelencia técnica y compromiso sólido.",
    // 👇 AQUÍ ESTÁ EL CAMBIO MÁGICO
    image: new URL('../assets/img/carousel/hero-1.webp', import.meta.url).href, 
    linkText: "Conoce nuestra Historia",
    linkUrl: "/nosotros"
  },
  {
    id: 2,
    type: 'standard',
    tagline: "SOLUCIONES INTEGRALES",
    title: "INFRAESTRUCTURA INDUSTRIAL",
    subtitle: "Especialistas en montaje de galpones de gran envergadura y obras complejas. Eficiencia, seguridad y durabilidad garantizada.",
    // 👇 FOTO LOCAL 2
    image: new URL('../assets/img/carousel/hero-2.webp', import.meta.url).href,
    linkText: "Nuestros Servicios",
    linkUrl: "#servicios"
  },
  {
    id: 3,
    type: 'collage',
    tagline: "EXPERIENCIA COMPROBADA",
    title: "PORTAFOLIO DE PROYECTOS",
    subtitle: "Visualice la solidez de nuestras obras realizadas para la gran minería e industria privada.",
    // 👇 ARRAY DE FOTOS LOCALES PARA EL COLLAGE
    images: [
      new URL('../assets/img/carousel/collage-1.webp', import.meta.url).href,
      new URL('../assets/img/carousel/collage-2.webp', import.meta.url).href,
      new URL('../assets/img/carousel/collage-3.webp', import.meta.url).href
    ],
    linkText: "Ver Galería",
    linkUrl: "/proyectos"
  }
]

// --- LÓGICA DEL SLIDER (INTACTA) ---
const currentSlide = ref(0)
const autoPlayInterval = ref(null)
const touchStartX = ref(0)
const touchEndX = ref(0)

const nextSlide = () => { currentSlide.value = (currentSlide.value + 1) % slides.length }
const prevSlide = () => { currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length }
const goToSlide = (index) => { currentSlide.value = index }

const startAutoPlay = () => {
  stopAutoPlay()
  autoPlayInterval.value = setInterval(nextSlide, 10000)
}
const stopAutoPlay = () => { if (autoPlayInterval.value) clearInterval(autoPlayInterval.value) }

const handleTouchStart = (e) => { stopAutoPlay(); touchStartX.value = e.changedTouches[0].screenX }
const handleTouchEnd = (e) => {
  touchEndX.value = e.changedTouches[0].screenX
  if (touchEndX.value < touchStartX.value - 50) nextSlide()
  if (touchEndX.value > touchStartX.value + 50) prevSlide()
  startAutoPlay()
}

onMounted(() => { startAutoPlay() })
onUnmounted(() => { stopAutoPlay() })
</script>

<template>
  <div 
    class="hero-carousel" 
    @mouseenter="stopAutoPlay" 
    @mouseleave="startAutoPlay"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
  >
    <div class="slides-wrapper" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      
      <div v-for="slide in slides" :key="slide.id" class="slide">
        
        <template v-if="slide.type === 'standard'">
          <img :src="slide.image" :alt="slide.title" class="slide-image">
          <div class="overlay standard-overlay"></div>
        </template>

        <template v-else-if="slide.type === 'collage'">
          <div class="collage-grid">
            <div class="collage-item item-1" :style="{ backgroundImage: `url(${slide.images[0]})` }"></div>
            <div class="collage-item item-2" :style="{ backgroundImage: `url(${slide.images[1]})` }"></div>
            <div class="collage-item item-3" :style="{ backgroundImage: `url(${slide.images[2]})` }"></div>
          </div>
          <div class="overlay collage-overlay"></div>
        </template>
        
        <div class="container h-100 d-flex align-items-center hero-content-layer">
          <div class="content-wrapper animate-up">
            
            <div class="architectural-line"></div>

            <div class="text-block">
              <span class="tagline">{{ slide.tagline }}</span>
              
              <h1 class="hero-title text-white mb-3">
                {{ slide.title }}
              </h1>
              
              <p class="hero-desc text-white text-opacity-90 mb-4 delay-1">
                {{ slide.subtitle }}
              </p>
              
              <RouterLink :to="slide.linkUrl" class="hero-link delay-2">
                {{ slide.linkText }}
              </RouterLink>
            </div>

          </div>
        </div>

      </div>
    </div>

    <button class="nav-btn prev" @click="prevSlide">&#10094;</button>
    <button class="nav-btn next" @click="nextSlide">&#10095;</button>

    <div class="indicators">
      <span v-for="(slide, index) in slides" :key="slide.id" class="dot" :class="{ active: currentSlide === index }" @click="goToSlide(index)"></span>
    </div>

  </div>
</template>

<style scoped>
/* 1. ESTRUCTURA */
.hero-carousel {
  position: relative;
  width: 100%;
  height: 80vh;
  overflow: hidden;
  background-color: #2E8B57;
}

.slides-wrapper {
  display: flex;
  height: 100%;
  transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
}

.slide {
  min-width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

/* 2. LAYOUT ARQUITECTÓNICO (La clave del cambio) */
.content-wrapper {
  display: flex;
  align-items: flex-start; /* Alineado arriba, no al centro */
  position: relative;
  max-width: 800px;
  z-index: 10;
  padding-left: 1rem; /* Espacio para respirar en container */
}

/* La Línea Verde Vibrante */
.architectural-line {
  width: 6px; /* Grosor de la línea */
  height: 100%; /* Se estira con el contenido */
  min-height: 150px;
  background-color: #6CAB3D; /* Tu verde brillante */
  margin-right: 25px; /* Separación con el texto */
  box-shadow: 0 0 15px rgba(108, 171, 61, 0.6); /* Glow sutil */
  flex-shrink: 0;
}

.text-block {
  text-align: left; /* Alineación Izquierda PROFESIONAL */
}

/* 3. TIPOGRAFÍA REFINADA */
.tagline {
  display: block;
  color: #6CAB3D; /* Verde brillante */
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 3px; /* Espaciado elegante */
  margin-bottom: 10px;
  text-transform: uppercase;
}

.hero-title {
  font-weight: 800;
  font-size: 3.5rem; /* Título grande */
  line-height: 1.1;
  letter-spacing: -1px; /* Letras juntitas (Moderno) */
  text-transform: uppercase;
}

.hero-desc {
  font-size: 1.15rem;
  line-height: 1.6;
  max-width: 600px; /* Evita líneas infinitas */
  font-weight: 300;
}

/* 4. LINK ESTILO "TECH" */
.hero-link {
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  position: relative;
  display: inline-block;
  margin-top: 10px;
}

.hero-link::after {
  content: '';
  position: absolute;
  width: 40px; /* Línea inicial corta */
  height: 2px;
  bottom: -5px;
  left: 0; /* Nace desde la izquierda */
  background-color: #6CAB3D;
  transition: width 0.3s ease;
}

.hero-link:hover::after {
  width: 100%; /* Crece a la derecha */
}

/* 5. ESTILOS DE FONDO (Iguales) */
.slide-image {
  width: 100%; height: 100%; object-fit: cover;
  animation: zoomSlow 20s infinite alternate;
}
@keyframes zoomSlow { from { transform: scale(1); } to { transform: scale(1.1); } }

.collage-grid {
  display: grid; width: 100%; height: 100%;
  grid-template-columns: 1.5fr 1fr; grid-template-rows: 1fr 1fr;
  animation: zoomSlow 20s infinite alternate;
}
.collage-item { background-size: cover; background-position: center; }
.item-1 { grid-column: 1 / 2; grid-row: 1 / 3; border-right: 2px solid rgba(255,255,255,0.2); }
.item-2 { grid-column: 2 / 3; grid-row: 1 / 2; border-bottom: 2px solid rgba(255,255,255,0.2); }
.item-3 { grid-column: 2 / 3; grid-row: 2 / 3; }

.overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; }
.standard-overlay { background: linear-gradient(90deg, rgba(16, 48, 28, 0.95) 0%, rgba(20, 60, 35, 0.6) 100%); }
.collage-overlay { background: linear-gradient(90deg, rgba(16, 48, 28, 0.95) 0%, rgba(20, 60, 35, 0.7) 100%); }

/* 6. UI CONTROLS */
.nav-btn {
  position: absolute; top: 50%; transform: translateY(-50%);
  background: transparent; border: none; color: white;
  font-size: 2.5rem; padding: 20px; cursor: pointer; z-index: 20; opacity: 0.5; transition: opacity 0.3s;
}
.nav-btn:hover { opacity: 1; }
.prev { left: 10px; }
.next { right: 10px; }

.indicators {
  position: absolute; bottom: 40px; left: 100px; /* Alineado a la izq con el contenido */
  display: flex; gap: 12px; z-index: 20;
}
.dot {
  width: 40px; /* Líneas en vez de puntos */
  height: 4px; background-color: rgba(255,255,255,0.3);
  cursor: pointer; transition: all 0.3s;
}
.dot.active { background-color: #6CAB3D; }

/* 7. ANIMACIONES */
.animate-up .text-block > * { opacity: 0; transform: translateX(-20px); animation: fadeRight 0.8s forwards; }
.architectural-line { opacity: 0; height: 0; animation: growDown 1s forwards 0.3s; }

.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.4s; }

@keyframes fadeRight { to { opacity: 1; transform: translateX(0); } }
@keyframes growDown { to { opacity: 1; height: 100%; } }

/* 8. RESPONSIVE */
@media (max-width: 768px) {
  .hero-carousel { height: 100vh; }
  .hero-title { font-size: 2.2rem; }
  .content-wrapper { padding-left: 0; max-width: 100%; }
  .indicators { left: 50%; transform: translateX(-50%); } /* Centrado en móvil */
  
  /* Ajuste collage móvil */
  .collage-grid { grid-template-columns: 1fr; grid-template-rows: 1fr 1fr 1fr; }
  .item-1 { grid-column: 1; grid-row: 1; border-right: none; }
  .item-2 { grid-column: 1; grid-row: 2; }
  .item-3 { grid-column: 1; grid-row: 3; }
  .nav-btn {
    display: none;
  }
}

/* Agrega esto a tu CSS */
.hero-content-layer {
  position: absolute; /* Saca el div del flujo normal y lo hace flotar */
  top: 0;
  left: 0;
  right: 0; /* Importante para que el margin: auto de Bootstrap funcione */
  margin: auto; /* Mantiene el contenedor centrado */
  height: 100%;
  z-index: 10; /* Asegura que esté por encima de la imagen y el overlay */
  pointer-events: none; /* Permite clicks en la imagen si fuera necesario */
}

/* Reactivamos los clicks para los textos y botones */
.hero-content-layer > * {
  pointer-events: auto;
}
</style>