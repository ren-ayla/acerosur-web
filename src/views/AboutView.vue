<script setup>
import HistorySection from '../components/HistorySection.vue'
import MissionVisionSection from '../components/MissionVisionSection.vue'
import ContactSection from '../components/ContactSection.vue' // Reutilizamos el contacto
import ExperienceSection from '../components/ExperienceSection.vue';
import WelcomeGallery from '../components/WelcomeGallery.vue';
</script>

<template>
  <main>
    <div class="page-spacer"></div>
    
    <HistorySection />
    <MissionVisionSection />
    <ExperienceSection/>
    <WelcomeGallery/>
    <ContactSection />
  </main>
</template>

<style scoped>
/* Espaciador opcional por si sientes que empieza muy pegado arriba */
.page-spacer {
  height: 20px;
  background: white;
}
</style>