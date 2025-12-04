<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue' // 👈 Importamos el componente
import Footer from './components/Footer.vue';
</script>

<template>
  <header>
    <Navbar /> 
  </header>

  <body>
    <RouterView />
    <Footer />
  </body>
</template>