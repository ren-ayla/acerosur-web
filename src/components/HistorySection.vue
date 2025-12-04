<script setup>
// No requiere lógica compleja
</script>

<template>
  <section class="history-section py-4">
    
    <div class="background-watermark">2013</div>

    <div class="container position-relative z-1 py-lg-3">
      <div class="row justify-content-center">
        <div class="col-lg-10 text-center">
          
          <h1 class="main-title mb-2">
            ACERO SUR CHILE | <span class="text-highlight">MAESTRANZA</span>
          </h1>
          
          <h2 class="sub-title mb-4">INGENIERÍA EN ESTRUCTURAS Y OBRAS</h2>

          <div class="industrial-divider mx-auto mb-5">
            <span class="dot"></span>
            <span class="line"></span>
            <span class="dot"></span>
          </div>

          <div class="history-content">
            <p class="body-text mb-4">
              Fundada en <span class="fw-bold text-dark">abril de 2013</span>, Acero Sur EIRL nació con la vocación de convertirse en un referente de la industria metalmecánica. Con más de <span class="fw-bold text-dark">14 años de trayectoria ininterrumpida</span>, nos hemos consolidado como una empresa líder en la fabricación y montaje de estructuras para la gran minería, infraestructura y obras civiles a nivel nacional.
            </p>
            <p class="body-text">
              Nuestra sello distintivo es la <span class="text-highlight fw-bold">excelencia técnica</span>. Cada proyecto que desarrollamos cumple con los más altos estándares de calidad, seguridad y precisión, reafirmando nuestro compromiso inquebrantable con las necesidades específicas de cada cliente.
            </p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.history-section {
  position: relative;
  background-color: #ffffff;
  overflow: hidden;
}

/* Marca de agua */
.background-watermark {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18rem; /* Aún más grande para imponer */
  font-weight: 900;
  color: rgba(0, 0, 0, 0.07);
  z-index: 0;
  user-select: none;
  pointer-events: none;
  font-family: Arial, sans-serif;
}

/* Tipografía */
.main-title {
  font-weight: 900;
  font-size: 3rem;
  color: #1a1a1a;
  text-transform: uppercase;
  letter-spacing: -1px;
}

.text-highlight { color: var(--color-acero-green, #6CAB3D); }

.sub-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #6c757d;
  text-transform: uppercase;
  letter-spacing: 4px;
}

.body-text {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #4a4a4a;
  font-weight: 300;
  max-width: 900px;
  margin: 0 auto;
}

/* Separador */
.industrial-divider {
  display: flex; align-items: center; justify-content: center;
  gap: 10px; width: 200px; /* Un poco más largo */
}
.industrial-divider .line {
  height: 3px; width: 100%; background-color: var(--color-acero-green, #6CAB3D); opacity: 0.8;
}
.industrial-divider .dot {
  width: 8px; height: 8px; background-color: var(--color-acero-green, #6CAB3D); border-radius: 50%;
}

@media (max-width: 768px) {
  .main-title { font-size: 2.2rem; }
  .background-watermark { font-size: 10rem; }
  .container { width: 90% !important; }
}
</style>