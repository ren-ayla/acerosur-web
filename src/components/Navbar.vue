<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const logoUrl = new URL('/public/logo.webp', import.meta.url).href

const menuItems = [
  { name: 'Inicio', link: '#inicio' },
  { 
    name: 'Nosotros', 
    link: '#', 
    children: [
      { name: 'Historia', link: '#nosotros' },
      { name: 'Experiencia', link: '#nosotros-experiencia' }
    ]
  },
  { name: 'Servicios', link: '#servicios' },
  { name: 'Proyectos', link: '#proyectos' },
]

// --- LÓGICA (Ahora unificada para Móvil y Desktop) ---
const isMenuOpen = ref(false)
const activeDropdown = ref(null) 
const navbarRef = ref(null)

// Abre/Cierra el menú hamburguesa
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (!isMenuOpen.value) activeDropdown.value = null 
}

// Cierra todo
const closeMenu = () => {
  isMenuOpen.value = false
  activeDropdown.value = null
}

// Maneja el click del Dropdown (Funciona igual en Desktop y Móvil)
const toggleDropdown = (index) => {
  if (activeDropdown.value === index) {
    activeDropdown.value = null // Si ya está abierto, lo cierra
  } else {
    activeDropdown.value = index // Si no, lo abre
  }
}

// Cierra si clickeas afuera
const handleClickOutside = (event) => {
  if (navbarRef.value && !navbarRef.value.contains(event.target)) {
    // Cerramos el menú móvil si está abierto y el click fue afuera
    if (isMenuOpen.value) closeMenu()
    
    // Cerramos el dropdown (escritorio) si el click fue afuera
    if (activeDropdown.value !== null) activeDropdown.value = null
  }
}

onMounted(() => { document.addEventListener('click', handleClickOutside) })
onUnmounted(() => { document.removeEventListener('click', handleClickOutside) })
</script>

<template>
  <nav ref="navbarRef" class="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm py-3">
    <div class="container">
      
      <a class="navbar-brand p-0" href="#" @click="closeMenu">
        <img :src="logoUrl" alt="Logo Acero Sur" class="navbar-logo">
      </a>

      <button 
        class="navbar-toggler border-0" 
        type="button" 
        @click.stop="toggleMenu"
        :aria-expanded="isMenuOpen"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" :class="{ 'show': isMenuOpen }" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-center">
          
          <li 
            class="nav-item" 
            v-for="(item, index) in menuItems" 
            :key="item.name"
            :class="{ 'dropdown-container': item.children }"
          >
            <a 
              v-if="!item.children"
              class="nav-link px-3 text-uppercase" 
              :href="item.link" 
              @click="closeMenu"
            >
              {{ item.name }}
            </a>

            <div v-else class="dropdown-wrapper">
              <a 
                class="nav-link px-3 text-uppercase d-flex align-items-center gap-1 justify-content-center"
                href="#"
                role="button"
                :class="{ 'active-drop': activeDropdown === index }"
                @click.prevent.stop="toggleDropdown(index)"
              >
              
                <span class="arrow-spacer"></span>

                <span class="mx-1">{{ item.name }}</span>

                <span class="arrow-icon" :class="{ 'rotated': activeDropdown === index }">
                  &#9662; </span>
              </a>
              
              <transition name="fade">
                <ul v-if="activeDropdown === index" class="custom-dropdown-menu shadow-sm">
                  <li v-for="child in item.children" :key="child.name">
                    <a 
                      class="dropdown-item text-uppercase" 
                      :href="child.link"
                      @click="closeMenu"
                    >
                      {{ child.name }}
                    </a>
                  </li>
                </ul>
              </transition>
            </div>
          </li>

          <li class="nav-item ms-lg-4 mt-3 mt-lg-0">
            <a href="#contacto" class="nav-link contact-link text-uppercase" @click="closeMenu">
              Contacto
            </a>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* 1. LOGO */
@media (max-width: 991.98px) { .navbar-logo { height: 90px; } }
@media (min-width: 992px) { .navbar-logo { height: 120px; transition: height 0.3s ease; } }
.navbar-logo { width: auto; object-fit: contain; }

/* 2. ESTILO BASE LINKS */
.nav-link {
  color: #6c757d;
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  position: relative;
  transition: color 0.3s ease;
  cursor: pointer; /* Asegura manito en el dropdown */
}
.nav-link:hover, .active-drop { color: var(--color-acero-green); }

/* 3. BARRA DE CARGA (Arreglado el conflicto) */
/* El ::after ahora es SOLO la barra verde, porque quitamos la clase dropdown-toggle */
.nav-link::after {
  content: ''; position: absolute; width: 0; height: 3px; bottom: 5px;
  left: 50%; background-color: var(--color-acero-green);
  transition: all 0.3s ease; transform: translateX(-50%);
}
.nav-link:hover::after { width: 80%; }

/* Evitamos que la barra de carga aparezca en los items DENTRO del dropdown (opcional) */
.custom-dropdown-menu .dropdown-item::after { display: none; } 

/* 4. FLECHA DEL DROPDOWN */
.arrow-icon {
  font-size: 0.8em;
  transition: transform 0.3s ease;
  display: flex;       /* Usamos flex para centrar el carácter dentro de su caja */
  align-items: center;
  justify-content: center;
  width: 20px;         /* Ancho fijo: evita que el texto se mueva al rotar */
  height: 20px;
  flex-shrink: 0;
}
.rotated { transform: rotate(180deg); }

.arrow-spacer {
  display: none; 
}

/* El fantasma no se ve, solo ocupa espacio */
.arrow-spacer {
  visibility: hidden; 
}

/* 5. MENÚ DESPLEGABLE PERSONALIZADO */
.dropdown-wrapper { position: relative; }

.custom-dropdown-menu {
  list-style: none;
  background: white;
  padding: 0.5rem 0;
  margin: 0;
  border-radius: 4px;
  min-width: 160px;
  z-index: 1000;
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: 10px 20px;
  clear: both;
  font-weight: 500;
  color: #6c757d;
  text-align: inherit;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  font-size: 0.85rem;
  letter-spacing: 1px;
  transition: all 0.2s;
}

.dropdown-item:hover {
  background-color: #f8f9fa;
  color: var(--color-acero-green);
}

/* POSICIONAMIENTO RESPONSIVO DEL DROPDOWN */

/* Desktop: Flota absoluto debajo */
@media (min-width: 992px) {
  .custom-dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 0.5rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15); 
    
    /* 👇 DETALLE EXTRA: Borde superior verde técnico */
    border-top: 3px solid var(--color-acero-green);
  }
}

/* Móvil: Se empuja relativo */
@media (max-width: 991.98px) {
.custom-dropdown-menu {
    position: relative;
    border: none;
    box-shadow: none !important;
    background-color: #fcfcfc;
    
    /* 👇 CAMBIO 1: Quitamos la sangría que empujaba a la derecha */
    padding-left: 0; 
    
    width: 100%;
    
    /* 👇 CAMBIO 2: Forzamos la alineación al centro */
    text-align: center;
  }

  .custom-dropdown-menu .dropdown-item {
    text-align: center;
  }
}

/* 6. CONTACTO */
.contact-link { color: var(--color-acero-green) !important; font-weight: 800; }

/* 7. ANIMACIONES DE APARICIÓN (FADE) */
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(10px); }

/* Animación menú móvil (intacta) */
@media (max-width: 991.98px) {
  .navbar-collapse {
    display: block !important; max-height: 0; opacity: 0; overflow: hidden;        
    transition: max-height 0.4s ease-in-out, opacity 0.4s ease-in-out; margin-top: 10px;
  }
  .navbar-collapse.show { max-height: 600px; opacity: 1; }

  .arrow-icon, .arrow-spacer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;  /* Ancho fijo idéntico para ambos */
  height: 20px;
  flex-shrink: 0; /* Evita que se aplasten */
}

/* --- BOTÓN HAMBURGUESA INDUSTRIAL --- */

.navbar-toggler {
  /* Fondo Metálico: Un gradiente sutil de blanco a gris */
  background: linear-gradient(180deg, #ffffff 0%, #e0e0e0 100%);
  
  /* Borde acerado */
  border: 1px solid #b0b0b0;
  
  /* Sombra para darle volumen 3D */
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  
  /* Hacemos las esquinas un poco más cuadradas (Look Industrial) */
  border-radius: 4px;
  
  /* Transición suave para el efecto de presión */
  transition: all 0.2s ease;
  
  /* Hacemos que sea un poco más grande y clicable */
  padding: 0.5rem 0.8rem;
}

/* Efecto Hover (Al pasar el dedo/mouse) */
.navbar-toggler:hover {
  border-color: #909090;
  background: linear-gradient(180deg, #ffffff 0%, #d0d0d0 100%);
}

/* Efecto Active (Cuando lo presionas: se hunde) */
.navbar-toggler:active, .navbar-toggler[aria-expanded="true"] {
  transform: translateY(1px); /* Se mueve un pixel abajo */
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15); /* Sombra interna */
  background: #e0e0e0;
}

/* Oscurecer las líneas del ícono para que contrasten con el plateado */
.navbar-toggler-icon {
  /* Esto convierte el ícono gris claro de Bootstrap en gris oscuro casi negro */
  filter: brightness(0.3) contrast(1.2); 
}

.navbar-toggler:focus {
  box-shadow: 0 0 0 3px rgba(108, 171, 61, 0.0); /* Resplandor verde suave */
  outline: none;
}

}
</style>  