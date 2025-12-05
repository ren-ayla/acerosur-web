<script setup>
const contactInfo = [
  {
    id: 2,
    icon: 'bi-envelope-fill',
    title: 'CORREO',
    text: 'contacto@acerosurchile.cl',
    link: null, 
    action: null,
    isLink: false
  },
  {
    id: 3,
    icon: 'bi-telephone-fill',
    title: 'TELÉFONO',
    text: '+569 8319 0833',
    link: null,
    action: null,
    isLink: false
  },
    {
    id: 1,
    icon: 'bi-geo-alt-fill', 
    title: 'UBICACIÓN',
    text: 'Lago Parinacota 2 #141, San Pedro de la Paz, Concepción.',
    link: 'https://maps.google.com/?q=Lago+Parinacota+2+141+San+Pedro+de+la+Paz',
    action: 'VER EN MAPA',
    isLink: true
  },
]
</script>

<template>
  <section id="contacto" class="contact-section py-5">
    <div class="container py-lg-5">
      
      <div class="row mb-5 text-center">
        <div class="col-lg-8 mx-auto">
          <span class="section-tagline">Contáctanos</span>
          <h2 class="section-title">
            ¿LISTO PARA <span class="text-highlight">CONSTRUIR?</span>
          </h2>
          <p class="section-desc mt-3 mx-auto">
            Estamos disponibles para responder sus dudas y cotizar sus proyectos de infraestructura.
          </p>
        </div>
      </div>

      <div class="row g-4 justify-content-center">
        <div 
          v-for="(item, index) in contactInfo" 
          :key="index" 
          class="col-md-6 col-lg-4"
        >
          
          <a v-if="item.isLink" :href="item.link" target="_blank" class="card-wrapper-link" rel="noopener noreferrer">
            <div class="contact-card h-100">
              <div class="icon-box mb-3">
                <i :class="item.icon"></i>
              </div>
              <h3 class="card-title">{{ item.title }}</h3>
              <p class="card-text">{{ item.text }}</p>
              <span class="action-text">
                {{ item.action }} <i class="bi bi-arrow-right-short"></i>
              </span>
            </div>
          </a>

          <div v-else class="contact-card h-100 static-card">
            <div class="icon-box mb-3">
              <i :class="item.icon"></i>
            </div>
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-text selectable">{{ item.text }}</p>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* 1. SECCIÓN OSCURA */
.contact-section {
  background-color: #1b262c; 
  position: relative;
  overflow: hidden;
}

.contact-section::before {
  content: '';
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background-image: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 30px 30px; 
  pointer-events: none;
}

/* 2. TEXTOS CABECERA */
.section-tagline {
  display: block; font-size: 0.9rem; color: var(--color-acero-green, #6CAB3D);
  font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 5px;
}

.section-title {
  font-weight: 900; font-size: 2.5rem; color: #ffffff;
  text-transform: uppercase; line-height: 1.1;
}

.text-highlight { color: var(--color-acero-green, #6CAB3D); }

.section-desc {
  color: #adb5bd; font-weight: 300; font-size: 1.1rem; max-width: 600px;
}

/* 3. TARJETAS (ESTILO UNIFICADO) */
.card-wrapper-link { text-decoration: none; display: block; height: 100%; }

.contact-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2.5rem 1.5rem;
  border-radius: 4px;
  text-align: center;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  /* Transición suave para TODOS */
  transition: all 0.3s ease;
}

/* EFECTO HOVER PARA TODOS (LINKS Y TEXTO) */
/* Ya sea que esté dentro de un <a> o sea un div suelto, al pasar el mouse se activa */
.card-wrapper-link:hover .contact-card,
.contact-card.static-card:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-5px); /* El "saltito" */
  border-color: var(--color-acero-green, #6CAB3D);
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

/* Efecto Zoom en el ícono para todos */
.card-wrapper-link:hover .icon-box,
.contact-card.static-card:hover .icon-box {
  transform: scale(1.1);
}

/* Estilos internos */
.icon-box {
  font-size: 2.5rem; color: var(--color-acero-green, #6CAB3D);
  margin-bottom: 1rem; transition: transform 0.3s;
}

.card-title {
  color: #ffffff; font-size: 1.1rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.5rem;
}

.card-text {
  color: #ced4da; font-size: 1.05rem; line-height: 1.6; margin-bottom: 0;
}

.action-text {
  margin-top: 1.5rem; display: block;
  color: var(--color-acero-green, #6CAB3D); font-size: 0.85rem; font-weight: 800;
  text-transform: uppercase; letter-spacing: 0.5px;
}

/* Cursores específicos */
.contact-card.static-card {
  cursor: default; /* Flecha normal, no manito */
}

.selectable {
  user-select: text; /* Permite seleccionar el texto */
  font-weight: 500;
  color: #e9ecef;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .section-title { font-size: 2rem; }
  .container { max-width: 90% !important; width: 90% !important; margin: 0 auto; padding: 0; }
}
</style>