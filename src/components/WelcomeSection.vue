<script setup>
// No necesitamos lógica compleja aquí, es puro diseño estructural.
</script>

<template>
  <section class="welcome-section pt-5">
    
    <div class="background-watermark">2013</div>

    <div class="container position-relative z-1 py-lg-4">
      <div class="row justify-content-center">
        <div class="col-lg-9 col-xl-8 text-center">
          
          <h1 class="main-title mb-2">
            BIENVENIDO A <span class="text-highlight">ACERO SUR</span>
          </h1>
          
          <h2 class="sub-title mb-4">INGENIERÍA EN ESTRUCTURAS Y OBRAS</h2>

          <div class="industrial-divider mx-auto mb-4">
            <span class="dot"></span>
            <span class="line"></span>
            <span class="dot"></span>
          </div>

          <p class="body-text">
            <strong>Acero Sur EIRL</strong> es una empresa chilena con más de <span class="text-dark-bold">14 años de experiencia</span> en la fabricación y montaje de estructuras metálicas. 
            <br><br>
            Desde su fundación en abril de 2013, hemos participado en importantes proyectos de infraestructura, minería y obras civiles a nivel nacional, destacándonos por nuestra calidad, precisión técnica y compromiso con cada cliente.
          </p>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* VARIABLE LOCAL (Por si acaso) */
.welcome-section {
  --acero-green: #6CAB3D;
  position: relative;
  background-color: #ffffff;
  overflow: hidden; /* Para cortar el número gigante si se sale */
}

/* 1. MARCA DE AGUA (El toque sorpresa) */
.background-watermark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 15rem; /* Gigante */
  font-weight: 900;
  color: rgba(0, 0, 0, 0.07); /* Casi invisible, gris muy pálido */
  z-index: 0;
  user-select: none;
  pointer-events: none;
  font-family: Arial, sans-serif;
  line-height: 1;
  white-space: nowrap;
  font-family: sans-serif; /* O la fuente que uses para títulos */
}

/* 2. TIPOGRAFÍA */
.main-title {
  font-weight: 800;
  font-size: 2.5rem;
  color: #1a1a1a;
  text-transform: uppercase;
  letter-spacing: -1px;
}

.text-highlight {
  color: var(--acero-green);
}

.sub-title {
  font-size: 1rem;
  font-weight: 600;
  color: #6c757d;
  text-transform: uppercase;
  letter-spacing: 4px; /* Espaciado amplio estilo plano técnico */
}

.text-dark-bold {
  color: #000;
  font-weight: 600;
}

.body-text {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #4a4a4a;
  font-weight: 300;
  max-width: 90%;
  margin: 0 auto;
}

/* 3. EL SEPARADOR INDUSTRIAL */
.industrial-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 150px;
}

.industrial-divider .line {
  height: 2px;
  width: 100%;
  background-color: var(--acero-green);
  opacity: 0.5;
}

.industrial-divider .dot {
  width: 6px;
  height: 6px;
  background-color: var(--acero-green);
  border-radius: 50%; /* Círculos en los extremos */
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .main-title { font-size: 2rem; }
  .sub-title { font-size: 0.85rem; letter-spacing: 2px; }
  .background-watermark { font-size: 8rem; } /* Más chico en móvil */
  .body-text { font-size: 1rem; }
}
</style>