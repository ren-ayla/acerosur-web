<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentYear = new Date().getFullYear()
const showButton = ref(false)
const logoUrl = new URL('/public/favicon.webp', import.meta.url).href // Ojo: Verifica si es logo.webp o favicon.webp como pusiste en tu ejemplo

const companyData = {
  name: "Ingeniería, Estructuras y Obras David Fernando Chávez Henríquez EIRL",
  rut: "76.272.418-9"
}

const handleScroll = () => {
  showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => { window.addEventListener('scroll', handleScroll) })
onUnmounted(() => { window.removeEventListener('scroll', handleScroll) })
</script>

<template>
  <footer class="main-footer pt-5 pb-3">
    <div class="container">
      
      <div class="row gy-4">
        
        <div class="col-lg-5">
          <div class="footer-brand mb-4">
            <h5 class="company-name mb-2">{{ companyData.name }}</h5>
            <span class="company-rut">
              <i class="bi bi-card-heading me-2"></i>RUT: {{ companyData.rut }}
            </span>
          </div>

          <div class="footer-logo-box mt-4">
            <img :src="logoUrl" alt="Logo Acero Sur" class="footer-logo">
          </div>
        </div>

        <div class="col-lg-3">
          <h6 class="footer-title">ENLACES RÁPIDOS</h6>
          <ul class="footer-links list-unstyled">
            <li><a href="/">Inicio</a></li>
            <li><a href="/nosotros">Historia</a></li>
            <li><a href="/#experiencia">Experiencia</a></li>
            <li><a href="/#servicios">Servicios</a></li>
            <li><a href="/proyectos">Proyectos</a></li>
            <li><a href="/#contacto">Contacto</a></li>
            <li>
              <a href="https://acerosurchile.cl/webmail" target="_blank" class="webmail-link">
                <i class="bi bi-lock-fill me-1"></i> Webmail
              </a>
            </li>
          </ul>
        </div>

        <div class="col-lg-4">
          <h6 class="footer-title">CONTACTO</h6>
          
          <ul class="contact-list list-unstyled">
            <li class="mb-4 d-flex align-items-center">
              <i class="bi bi-envelope-fill contact-icon me-3"></i>
              <span class="text-white-50 contact-text">contacto@acerosurchile.cl</span>
            </li>
            <li class="mb-3 d-flex align-items-center">
              <i class="bi bi-telephone-fill contact-icon me-3"></i>
              <span class="text-white-50 contact-text">+569 8319 0833</span>
            </li>
          </ul>
        </div>

      </div>

      <div class="copyright-bar mt-5 pt-4 text-center">
        <p class="mb-0 text-muted fst-italic">
          &copy; {{ currentYear }} Acero Sur. Todos los derechos reservados.
        </p>
      </div>

    </div>

    <transition name="fade">
      <button 
        v-show="showButton" 
        @click="scrollToTop" 
        class="btn-scroll-top" 
        title="Subir"
      >
        <i class="bi bi-arrow-up-short"></i>
      </button>
    </transition>

  </footer>
</template>

<style scoped>
/* 1. ESTRUCTURA GENERAL */
.main-footer {
  background-color: #111111; 
  color: #adb5bd; 
  font-size: 0.95rem;
  border-top: 4px solid var(--color-acero-green, #6CAB3D);
  position: relative;
}

/* 2. TIPOGRAFÍA Y ESTILOS */
.text-highlight { color: var(--color-acero-green, #6CAB3D); }

.company-name {
  font-weight: 700;
  font-size: 1.1rem;
  line-height: 1.4;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: var(--color-acero-green, #6CAB3D); 
}

.company-rut {
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  color: #6c757d;
  background: rgba(255,255,255,0.05);
  padding: 4px 8px;
  border-radius: 4px;
  display: inline-block;
}

/* 3. LOGO FOOTER */
.footer-logo {
  width: auto;
  object-fit: contain;
  filter: brightness(1.1) contrast(1.1); 
  transition: transform 0.3s ease;
}

.footer-logo:hover {
  transform: scale(1.05); 
}

/* 4. ICONOS DE CONTACTO */
.contact-icon {
  font-size: 1.5rem; 
  color: var(--color-acero-green, #6CAB3D);
  flex-shrink: 0; 
}

.contact-text {
  font-size: 1rem; 
}

/* 5. ENLACES */
.footer-title {
  color: #ffffff;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
}

.footer-title::after {
  content: ''; position: absolute; left: 0; bottom: -5px; width: 30px; height: 2px;
  background-color: var(--color-acero-green, #6CAB3D);
}

.footer-links li { margin-bottom: 10px; }

.footer-links a {
  color: #adb5bd; text-decoration: none; transition: all 0.3s ease; display: inline-block;
}

.footer-links a:hover {
  color: var(--color-acero-green, #6CAB3D); padding-left: 5px;
}

.webmail-link { color: #6c757d !important; font-size: 0.85rem; margin-top: 10px; }
.webmail-link:hover { color: #fff !important; }

/* 6. COPYRIGHT */
.copyright-bar { border-top: 1px solid rgba(255,255,255,0.05); font-size: 0.85rem; }

/* 7. BOTÓN VOLVER ARRIBA */
.btn-scroll-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 40px; 
  height: 40px;
  background-color: var(--color-acero-green, #6CAB3D);
  border: none;
  border-radius: 8px; 
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  color: #e0e0e0;
  font-size: 1.5rem; 
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; z-index: 9999; transition: all 0.3s ease;
}

.btn-scroll-top:hover {
  background-color: #8cdd58; 
  transform: translateY(-5px);
  color: #ffffff;
  box-shadow: 0 8px 25px rgba(108, 171, 61, 0.5);
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.4s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* RESPONSIVE */
@media (max-width: 991.98px) {
  .footer-title { margin-top: 1rem; }
  .btn-scroll-top { bottom: 20px; right: 20px; width: 38px; height: 38px; }
  .container{
    width: 90%;
    margin: auto;
  }
  .footer-logo{
    height: 80px;
  }
}

@media (min-width: 992px) {
  .footer-logo{
    height: 90px;
  }
}
</style>