<script setup>
const values = [
  { name: 'Honestidad', icon: 'bi-shield-check' },
  { name: 'Compromiso', icon: 'bi-hand-thumbs-up' },
  { name: 'Responsabilidad', icon: 'bi-clipboard-check' },
  { name: 'Transparencia', icon: 'bi-eye' }
]
</script>

<template>
  <section class="mv-section py-5">
    <div class="container py-lg-4">
      
      <div class="row g-4 mb-5">
        
        <div class="col-md-6 d-flex">
          <div class="mv-card h-100">
            <div class="card-header-icon">
              <i class="bi bi-crosshair"></i> </div>
            <h3 class="mv-title">Nuestra Misión</h3>
            <p class="mv-text">
              En Acero Sur, nos dedicamos a diseñar, fabricar y entregar estructuras metálicas de alta calidad, adaptadas a las necesidades específicas de cada cliente. Nuestra misión es aportar solidez, innovación y eficiencia a los proyectos de construcción e infraestructura del sur de Chile y el país, garantizando soluciones seguras, sostenibles y a tiempo.
            </p>
          </div>
        </div>

        <div class="col-md-6 d-flex">
          <div class="mv-card h-100">
            <div class="card-header-icon">
              <i class="bi bi-eye-fill"></i> </div>
            <h3 class="mv-title">Nuestra Visión</h3>
            <p class="mv-text">
              Ser la empresa líder en soluciones estructurales metálicas del sur de Chile y país, reconocida por nuestra excelencia técnica, compromiso con la calidad, responsabilidad, seguridad y relaciones duraderas con nuestros clientes, aportando al desarrollo sostenible de la región y el País.
            </p>
          </div>
        </div>

      </div>

      <div class="values-container mt-5">
        <div class="text-center mb-4">
          <h4 class="values-title">NUESTROS VALORES</h4>
          <div class="values-line mx-auto"></div>
        </div>

        <div class="row justify-content-center g-4">
          <div 
            v-for="(val, index) in values" 
            :key="index" 
            class="col-6 col-md-3 text-center"
          >
            <div class="value-item">
              <div class="value-icon-box mb-3">
                <i :class="val.icon"></i>
              </div>
              <h5 class="value-name">{{ val.name }}</h5>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.mv-section {
  background-color: #f8f9fa; /* Gris muy suave para diferenciar */
}

/* TARJETAS MISIÓN/VISIÓN */
.mv-card {
  background: white;
  padding: 3rem 2rem;
  border-radius: 4px;
  border-top: 5px solid var(--color-acero-green, #6CAB3D); /* Techo verde */
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
  position: relative;
}

.mv-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.08);
}

.card-header-icon {
  font-size: 2.5rem;
  color: var(--color-acero-green, #6CAB3D);
  margin-bottom: 1.5rem;
}

.mv-title {
  font-weight: 800;
  text-transform: uppercase;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  letter-spacing: 1px;
}

.mv-text {
  color: #555;
  line-height: 1.8;
  font-size: 1.05rem;
  font-weight: 400;
}

/* VALORES */
.values-title {
  font-weight: 700;
  color: #6c757d;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.values-line {
  width: 50px;
  height: 3px;
  background-color: var(--color-acero-green, #6CAB3D);
}

.value-item {
  padding: 1rem;
}

.value-icon-box {
  width: 70px; height: 70px;
  margin: 0 auto;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.8rem;
  color: var(--color-acero-green, #6CAB3D);
  transition: all 0.3s;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.value-item:hover .value-icon-box {
  background: var(--color-acero-green, #6CAB3D);
  color: white;
  transform: rotateY(180deg); /* Pequeño giro divertido */
}

.value-name {
  font-weight: 700;
  color: #333;
  text-transform: uppercase;
  font-size: 0.95rem;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .container { width: 90% !important; margin: 0 auto; }
  .mv-card { padding: 2rem; }
}
</style>