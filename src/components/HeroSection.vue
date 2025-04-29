<template>
  <header class="hero-section">
    <div class="container hero-content">
      <img src="" alt="Logo Don Belén" class="hero-logo" />
      <h1 class="hero-title">Café Don Belén</h1>
      <p class="hero-subtitle">El aroma y sabor de nuestra tierra, directo a tu taza.</p>
      <p class="hero-description">Descubre la pasión y tradición del auténtico café venezolano, cultivado con esmero en las montañas andinas.</p>
      <button class="cta-button" @click="$emit('scrollTo', 'productos')">Explora Nuestros Cafés</button>
    </div>
    <div class="hero-bg"></div>
  </header>
</template>

<script setup lang="ts">
// Emitirá un evento 'scrollTo' cuando se haga clic en el botón
defineEmits(['scrollTo']);
</script>

<style scoped>
/* Estilos específicos del Hero Section (usando variables globales) */
.hero-section {
  position: relative;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 0;
  color: var(--color-text-light);
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(78, 68, 62, 0.6), rgba(78, 68, 62, 0.8)), url('');
  background-size: cover;
  background-position: center;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 700px;
}

.hero-logo {
    max-width: 150px;
    margin-bottom: 1rem;
}

.hero-title {
  font-size: 3.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-white);
  font-weight: 700;
}

.hero-subtitle {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: var(--color-text-light);
  font-family: var(--font-secondary);
  font-weight: 300;
}
.hero-description {
   font-size: 1.1rem;
   margin-bottom: 2rem;
   color: rgba(255, 255, 255, 0.85);
   font-weight: 300;
}

/* Responsive (ajustes específicos del hero si son necesarios) */
@media (max-width: 768px) {
    .hero-title {
        font-size: 2.8rem;
    }
    .hero-subtitle {
        font-size: 1.2rem;
    }
}
</style>
