<script setup>
// Usamos una de las fotos del collage para el fondo, ya que representa "Obras"
// Puedes cambiar 'collage-1.png' por la que más te guste
const bgImage = new URL('../assets/img/carousel/collage-1.webp', import.meta.url).href
</script>

<template>
  <section class="gallery-teaser" :style="{ backgroundImage: `url(${bgImage})` }">
    
    <div class="overlay"></div>

    <div class="container position-relative z-1 h-100">
      <div class="row h-100 align-items-center justify-content-center text-center">
        <div class="col-lg-10">
          
          <span class="teaser-tagline">Nuestra Huella</span>
          
          <h2 class="teaser-title text-white mb-3">
            VISUALICE LA SOLIDEZ DE <br>
            NUESTRAS <span class="fw-light fst-italic">OBRAS</span>
          </h2>
          
          <p class="teaser-desc text-white-50 mb-4">
            Desde montajes de alta precisión hasta grandes infraestructuras. 
            Recorra nuestra galería y vea lo que podemos construir juntos.
          </p>

        <RouterLink to="/proyectos" class="btn-gallery">
            VER PORTAFOLIO <i class="bi bi-arrow-right ms-2"></i>
        </RouterLink>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery-teaser {
  position: relative;
  width: 100%;
  min-height: 350px; /* Altura controlada, ni muy alta ni muy baja */
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* EFECTO PARALLAX: La imagen se queda quieta al hacer scroll */
  display: flex;
  align-items: center;
  overflow: hidden;
}

/* El "Color Medio": Un gradiente que fusiona el acero con el verde */
.overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  /* Gradiente diagonal: Del gris acero oscuro al verde corporativo */
  background: linear-gradient(135deg, rgba(33, 37, 41, 0.9) 0%, rgba(27, 38, 44, 0.85) 40%, rgba(108, 171, 61, 0.75) 100%);
  z-index: 0;
}

/* Tipografía */
.teaser-tagline {
  display: block;
  color: var(--color-acero-green, #6CAB3D);
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-size: 0.85rem;
  margin-bottom: 10px;
}

.teaser-title {
  font-weight: 800;
  font-size: 2.5rem;
  letter-spacing: 1px;
}

.teaser-desc {
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  font-weight: 300;
}

/* Botón Ghost (Transparente con borde) */
.btn-gallery {
  display: inline-flex;
  align-items: center;
  padding: 12px 35px;
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.3);
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  border-radius: 4px; /* Un poco cuadrado, estilo técnico */
  backdrop-filter: blur(5px);
}

.btn-gallery:hover {
  background-color: #ffffff;
  color: var(--color-acero-green, #6CAB3D);
  border-color: #ffffff;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .gallery-teaser {
    min-height: 400px; /* Un poco más alto en móvil para que quepa el texto verticalmente */
    background-attachment: scroll; /* En móviles desactivamos el parallax por rendimiento */
  }
  
  .teaser-title { font-size: 1.8rem; }
  
  /* Regla del 90% */
  .container {
    width: 90% !important;
  }
}
</style>