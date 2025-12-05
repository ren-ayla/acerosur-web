<script setup>
const experiences = [
  {
    id: 1,
    title: "EDYCE METALURGICA S.A.",
    text: "Durante más de una década, hemos sido la contratista número uno en fabricación para la empresa Edyce Metalúrgica, colaborando estrechamente en obras de alta complejidad y exigencia técnica, lo que demuestra la confianza sostenida y la solidez de nuestro trabajo.",
    hasLink: false
  },
  {
    id: 2,
    title: "NEUMANN EQUIPOS INDUSTRIALES",
    text: "Somos contratistas permanentes de Neuman Equipos Industriales, aportando en la fabricación y montaje de estructuras para plantas térmicas, plantas de secado de madera, instalaciones para la industria de la celulosa y aserraderos. Nuestra participación ha sido clave para el desarrollo de proyectos nacionales e internacionales.",
    hasLink: false
  },
  {
    id: 3,
    title: "INDUSTRIA PRIVADA",
    text: "Ejecutamos proyectos independientes de gran envergadura, como la fabricación e instalación de galpones industriales de gran magnitud y obras estructurales complejas. La experiencia acumulada y nuestro equipo altamente capacitado nos posicionan como un aliado estratégico en Chile.",
    hasLink: true, 
    linkUrl: "/#servicios",
    linkText: "Nuestros Servicios"
  }
]
</script>

<template>
  <section class="experience-section pb-3" id="experiencia">
    <div class="container py-lg-4">
      
      <div class="row mb-5">
        <div class="col-lg-8">
          <span class="section-tagline">Nuestros Aliados</span>
          <h2 class="section-title">
            EXPERIENCIA Y <span class="text-highlight">TRAYECTORIA</span>
          </h2>
          <div class="tech-line"></div>
        </div>
      </div>

      <div class="row g-4">
        <div 
          v-for="item in experiences" 
          :key="item.id" 
          class="col-md-6 col-lg-4 d-flex"
        >
          <div class="exp-card h-100" :class="{ 'card-action': item.hasLink }">
            <span class="bg-number">0{{ item.id }}</span>
            
            <div class="card-content">
              <h3 class="card-title">{{ item.title }}</h3>
              <p class="card-text">{{ item.text }}</p>

              <div v-if="item.hasLink" class="mt-auto pt-3">
                <RouterLink :to="item.linkUrl" class="btn-more">
                  {{ item.linkText }} <span class="icon-arrow">→</span>
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
.experience-section {
  background-color: #f4f6f8; 
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
.exp-card {
  background: white; padding: 2.5rem; border-radius: 4px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05); position: relative; overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease; border: 1px solid rgba(0,0,0,0.03);
  display: flex; flex-direction: column;
}

.exp-card:hover {
  transform: translateY(-5px); box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

.card-title {
  font-size: 1.25rem; font-weight: 800; color: #2c3e50;
  margin-bottom: 1rem; text-transform: uppercase; position: relative; z-index: 2;
}

.card-text {
  font-size: 0.95rem; line-height: 1.7; color: #555; font-weight: 400;
  position: relative; z-index: 2; flex-grow: 1;
}

/* 4. DETALLES VISUALES */
.bg-number {
  position: absolute; top: -10px; right: -10px; font-size: 6rem;
  font-weight: 900; color: #ededed; z-index: 1; line-height: 1;
  font-family: monospace; transition: color 0.3s;
}

.exp-card:hover .bg-number { color: #dee1e5; }

.bottom-bar {
  position: absolute; bottom: 0; left: 0; width: 100%; height: 4px;
  background-color: var(--color-acero-green, #6CAB3D); transform: scaleX(0);
  transform-origin: left; transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.exp-card:hover .bottom-bar { transform: scaleX(1); }

/* 5. BOTÓN */
.btn-more {
  display: inline-block; color: var(--color-acero-green, #6CAB3D);
  font-weight: 700; text-decoration: none; font-size: 0.9rem;
  text-transform: uppercase; letter-spacing: 0.5px; transition: color 0.3s;
}

.icon-arrow { display: inline-block; transition: transform 0.3s; }

.btn-more:hover { color: #4a7c2a; }
.btn-more:hover .icon-arrow { transform: translateX(5px); }

/* --- RESPONSIVE 90% RULE --- */
@media (max-width: 768px) {
  /* Forzamos al contenedor a usar el 90% del ancho y centrarse */
  .container {
    max-width: 90% !important;
    width: 90% !important;
    margin-left: auto;
    margin-right: auto;
    padding-left: 0; /* Quitamos padding interno para aprovechar el 90% real */
    padding-right: 0;
  }
  
  .section-title { font-size: 2rem; }
  .exp-card { padding: 2rem; margin-bottom: 1rem; }
  .experience-section{
    padding-top: 3rem;
  }
}
</style>