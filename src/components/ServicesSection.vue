<script setup>
import { RouterLink } from 'vue-router';

const services = [
  {
    id: 1,
    title: "FABRICACIÓN ESTRUCTURAL",
    text: "Manufactura de estructuras metálicas semipesadas y livianas. Incluye barandas, parrillas industriales, plataformas, escaleras, vigas dimensionadas, piping y portones de acceso. Entre otros.",
    icon: "bi-hammer", // Ícono de mazo/fabricación
    linkUrl: "/#contacto",
    linkText: "COTIZAR"
  },
  {
    id: 2,
    title: "COMPONENTES INDUSTRIALES",
    text: "Contamos con especialización en enrejados técnicos, áreas de calderas, chutes de traspaso y armado de componentes estructurales complejos para la minería e industria.",
    icon: "bi-grid-3x3", // Ícono de rejilla
    linkUrl: "/#contacto",
    linkText: "CONTACTO"
  },
  {
    id: 3,
    title: "MONTAJE INDUSTRIAL",
    text: "Ejecución de ensamblajes en terreno con equipos especializados. Garantizamos seguridad y eficiencia en la instalación de obras de gran envergadura.",
    icon: "bi-gear-wide-connected", // Ícono de engranajes/montaje
    linkUrl: "/#contacto",
    linkText: "CONSULTAR"
  },
  {
    id: 4,
    title: "INGENIERÍA Y PROYECTOS",
    text: "Diseño integral de planos y desarrollo de proyectos. Aportamos precisión técnica desde la conceptualización hasta la ejecución final de la obra.",
    icon: "bi-compass", // Ícono de diseño/planos
    linkUrl: "/#contacto",
    linkText: "HABLEMOS"
  }
]
</script>

<template>
  <section id="servicios" class="services-section py-3">
    <div class="container py-lg-3">
      
      <div class="row mb-5 justify-content-end">
        <div class="col-lg-8 text-end">
          <span class="section-tagline">Soluciones Integrales</span>
          <h2 class="section-title">
            NUESTROS <span class="text-highlight">SERVICIOS</span>
          </h2>
          <div class="tech-line ms-auto"></div>
        </div>  
      </div>

      <div class="row g-4">
        <div 
          v-for="item in services" 
          :key="item.id" 
          class="col-md-6 col-lg-6 d-flex"
        >
          <div class="service-card h-100 card-action">
            
            <span class="bg-number">0{{ item.id }}</span>
            
            <div class="card-content">
              <div class="icon-box mb-3">
                <i :class="item.icon"></i>
              </div>

              <h3 class="card-title">{{ item.title }}</h3>
              <p class="card-text">{{ item.text }}</p>

              <div class="mt-auto pt-3 border-top-dashed">
                <RouterLink :to="item.linkUrl" class="btn-contact">
                  {{ item.linkText }} <i class="bi bi-arrow-right-short icon-arrow"></i>
                </RouterLink>
              </div>
            </div>
            
            <div class="bottom-bar"></div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* 1. SECCIÓN */
.services-section {
  background-color: #ffffff; /* BLANCO para alternar ritmo */
  position: relative;
}

/* 2. CABECERA */
.section-tagline {
  display: block; font-size: 0.9rem; color: #6c757d; font-weight: 700;
  letter-spacing: 2px; text-transform: uppercase; margin-bottom: 5px;
}

.section-title {
  font-weight: 900; font-size: 2.8rem; color: #1a1a1a;
  text-transform: uppercase; line-height: 1; margin-bottom: 20px;
}

.text-highlight { color: var(--color-acero-green, #6CAB3D); }

.tech-line {
  width: 100px; height: 6px;
  background: repeating-linear-gradient(45deg, #6CAB3D, #6CAB3D 10px, #5a9132 10px, #5a9132 20px);
  margin-top: 10px;
}

/* 3. CARDS */
.service-card {
  background: white; padding: 2.5rem; border-radius: 4px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05); position: relative; overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease; border: 1px solid rgba(0,0,0,0.08); /* Borde un poco más visible en fondo blanco */
  display: flex; flex-direction: column;
}

.service-card:hover {
  transform: translateY(-5px); box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  border-color: transparent;
}

/* Estilo del Ícono Principal */
.icon-box {
  font-size: 2.5rem;
  color: var(--color-acero-green, #6CAB3D);
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.25rem; font-weight: 800; color: #2c3e50;
  margin-bottom: 1rem; text-transform: uppercase; position: relative; z-index: 2;
}

.card-text {
  font-size: 0.95rem; line-height: 1.7; color: #555; font-weight: 400;
  position: relative; z-index: 2; flex-grow: 1; margin-bottom: 1.5rem;
}

/* Línea punteada antes del botón */
.border-top-dashed {
  border-top: 1px dashed #e0e0e0;
  padding-top: 1rem;
  width: 100%;
}

/* 4. DETALLES VISUALES */
.bg-number {
  position: absolute; top: -10px; right: -10px; font-size: 6rem;
  font-weight: 900; color: #ededed; /* Muy clarito sobre blanco */
  z-index: 1; line-height: 1; font-family: monospace; transition: color 0.3s;
}

.service-card:hover .bg-number { color: #dee1e5; }

.bottom-bar {
  position: absolute; bottom: 0; left: 0; width: 100%; height: 4px;
  background-color: var(--color-acero-green, #6CAB3D); transform: scaleX(0);
  transform-origin: right; /* Crece desde la derecha para variar */
  transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.service-card:hover .bottom-bar { transform: scaleX(1); }

/* 5. BOTÓN DE CONTACTO */
.btn-contact {
  display: flex; align-items: center; justify-content: space-between;
  color: #1a1a1a; font-weight: 800; text-decoration: none; font-size: 0.9rem;
  text-transform: uppercase; letter-spacing: 0.5px; transition: color 0.3s;
}

.icon-arrow { font-size: 1.2rem; transition: transform 0.3s; }

.btn-contact:hover { color: var(--color-acero-green, #6CAB3D); }
.btn-contact:hover .icon-arrow { transform: translateX(5px); }

/* --- RESPONSIVE 90% RULE --- */
@media (max-width: 768px) {
  .container {
    max-width: 90% !important; width: 90% !important;
    margin-left: auto; margin-right: auto; padding-left: 0; padding-right: 0;
  }
  
  .section-title { font-size: 2rem; }
  .service-card { padding: 2rem; margin-bottom: 1rem; }
  
  /* En móvil, quizás quieras alinear el título a la izquierda o centro de nuevo, 
     pero para mantener la asimetría lo dejamos a la derecha o lo forzamos al centro.
     Lo dejaré a la derecha para respetar la decisión de escritorio, 
     pero si se ve raro me avisas. */
}
</style>