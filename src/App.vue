<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue' // 👈 Importamos el componente
</script>

<template>
  <header>
    <Navbar /> </header>

  <RouterView /> 
</template>