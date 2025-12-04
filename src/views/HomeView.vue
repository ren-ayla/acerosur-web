<script setup>
// Importamos los componentes que construimos con tanto cariño
import ContactSection from '../components/ContactSection.vue';
import ExperienceSection from '../components/ExperienceSection.vue';
import HeroCarousel from '../components/HeroCarousel.vue'
import ServicesSection from '../components/ServicesSection.vue';
import WelcomeGallery from '../components/WelcomeGallery.vue';
import WelcomeSection from '../components/WelcomeSection.vue'
</script>

<template>
  <main>
    <HeroCarousel />
    <WelcomeSection />
    <ExperienceSection />
    <ServicesSection/>
    <WelcomeGallery/>
    <ContactSection/>
  </main>
</template>