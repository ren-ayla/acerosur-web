<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const logoUrl = new URL('/public/logo.webp', import.meta.url).href

// 👇 AQUÍ ESTÁN LAS RUTAS CORREGIDAS
const menuItems = [
  { name: 'Inicio', link: '/' }, // Lleva a la raíz (Home)
  { 
    name: 'Nosotros', 
    link: '#', 
    children: [
      { name: 'Historia', link: '/nosotros' }, // Lleva a la vista Nosotros
      // 👇 OJO: Asegúrate de que ExperienceSection tenga id="experiencia"
      { name: 'Experiencia', link: '/#experiencia' } 
    ]
  },
  { name: 'Servicios', link: '/#servicios' }, // Home + ID Servicios
  { name: 'Proyectos', link: '/proyectos' },  // Vista Proyectos (Futura)
]

// --- LÓGICA (Intacta) ---
const isMenuOpen = ref(false)
const activeDropdown = ref(null) 
const navbarRef = ref(null)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (!isMenuOpen.value) activeDropdown.value = null 
}

const closeMenu = () => {
  isMenuOpen.value = false
  activeDropdown.value = null
}

const toggleDropdown = (index) => {
  if (activeDropdown.value === index) {
    activeDropdown.value = null 
  } else {
    activeDropdown.value = index 
  }
}

const handleClickOutside = (event) => {
  if (navbarRef.value && !navbarRef.value.contains(event.target)) {
    if (isMenuOpen.value) closeMenu()
    if (activeDropdown.value !== null) activeDropdown.value = null
  }
}

onMounted(() => { document.addEventListener('click', handleClickOutside) })
onUnmounted(() => { document.removeEventListener('click', handleClickOutside) })
</script>

<template>
  <nav ref="navbarRef" class="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm py-3">
    <div class="container">
      
      <RouterLink class="navbar-brand p-0" href="/" @click="closeMenu">
        <img :src="logoUrl" alt="Logo Acero Sur" class="navbar-logo">
      </RouterLink>

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
<RouterLink 
  v-if="!item.children"
  class="nav-link px-3 text-uppercase" 
  :to="item.link" 
  @click="closeMenu"
>
  {{ item.name }}
</RouterLink>

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
                  &#9662; 
                </span>
              </a>
              
              <transition name="fade">
                <ul v-if="activeDropdown === index" class="custom-dropdown-menu shadow-sm">
                  <li v-for="child in item.children" :key="child.name">
<RouterLink 
  class="dropdown-item text-uppercase" 
  :to="child.link"
  @click="closeMenu"
>
  {{ child.name }}
</RouterLink>
                  </li>
                </ul>
              </transition>
            </div>
          </li>

          <li class="nav-item ms-lg-4 mt-3 mt-lg-0">
            <RouterLink href="/#contacto" class="nav-link contact-link text-uppercase" @click="closeMenu">
              Contacto
            </RouterLink>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* ... TUS ESTILOS SE MANTIENEN IGUALES ... */
/* 1. LOGO */
@media (max-width: 991.98px) { .navbar-logo { height: 90px; } }
@media (min-width: 992px) { .navbar-logo { height: 130px; transition: height 0.3s ease; } }
.navbar-logo { width: auto; object-fit: contain; }

/* 2. ESTILO BASE LINKS */
.nav-link {
  color: #6c757d; font-weight: 500; font-size: 0.95rem; letter-spacing: 0.5px;
  position: relative; transition: color 0.3s ease; cursor: pointer;
}
.nav-link:hover, .active-drop { color: var(--color-acero-green); }

/* 3. BARRA DE CARGA */
.nav-link::after {
  content: ''; position: absolute; width: 0; height: 3px; bottom: 5px;
  left: 50%; background-color: var(--color-acero-green);
  transition: all 0.3s ease; transform: translateX(-50%);
}
.nav-link:hover::after { width: 80%; }

.custom-dropdown-menu .dropdown-item::after { display: none; } 

/* 4. FLECHA DROPDOWN */
.arrow-icon {
  font-size: 0.8em; transition: transform 0.3s ease; display: flex;
  align-items: center; justify-content: center; width: 20px; height: 20px; flex-shrink: 0;
}
.rotated { transform: rotate(180deg); }
.arrow-spacer { display: none; }
.arrow-spacer { visibility: hidden; }

/* 5. MENU DESPLEGABLE */
.dropdown-wrapper { position: relative; }
.custom-dropdown-menu {
  list-style: none; background: white; padding: 0.5rem 0; margin: 0;
  border-radius: 4px; min-width: 160px; z-index: 1000;
}

.dropdown-item {
  display: block; width: 100%; padding: 10px 20px; clear: both;
  font-weight: 500; color: #6c757d; text-align: inherit; text-decoration: none;
  white-space: nowrap; background-color: transparent; border: 0;
  font-size: 0.85rem; letter-spacing: 1px; transition: all 0.2s;
}
.dropdown-item:hover { background-color: #f8f9fa; color: var(--color-acero-green); }

@media (min-width: 992px) {
  .custom-dropdown-menu {
    position: absolute; top: 100%; left: 0; margin-top: 0.5rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15); border-top: 3px solid var(--color-acero-green);
  }
}

@media (max-width: 991.98px) {
  .custom-dropdown-menu {
    position: relative; border: none; box-shadow: none !important;
    background-color: #fcfcfc; padding-left: 0; width: 100%; text-align: center;
  }
  .custom-dropdown-menu .dropdown-item { text-align: center; }
}

/* 6. CONTACTO */
.contact-link { color: var(--color-acero-green) !important; font-weight: 800; }

/* 7. ANIMACIONES */
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(10px); }

@media (max-width: 991.98px) {
  .navbar-collapse {
    display: block !important; max-height: 0; opacity: 0; overflow: hidden;        
    transition: max-height 0.4s ease-in-out, opacity 0.4s ease-in-out; margin-top: 10px;
  }
  .navbar-collapse.show { max-height: 600px; opacity: 1; }
  .arrow-icon, .arrow-spacer { display: flex; align-items: center; justify-content: center; width: 20px; height: 20px; flex-shrink: 0; }
  
  .navbar-toggler {
    background: linear-gradient(180deg, #ffffff 0%, #e0e0e0 100%);
    border: 1px solid #b0b0b0; box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    border-radius: 4px; transition: all 0.2s ease; padding: 0.5rem 0.8rem;
  }
  .navbar-toggler:hover { border-color: #909090; background: linear-gradient(180deg, #ffffff 0%, #d0d0d0 100%); }
  .navbar-toggler:active, .navbar-toggler[aria-expanded="true"] {
    transform: translateY(1px); box-shadow: inset 0 2px 4px rgba(0,0,0,0.15); background: #e0e0e0;
  }
  .navbar-toggler-icon { filter: brightness(0.3) contrast(1.2); }
  .navbar-toggler:focus { box-shadow: 0 0 0 3px rgba(108, 171, 61, 0.0); outline: none; }
}
</style>