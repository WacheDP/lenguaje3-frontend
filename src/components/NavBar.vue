<template>
  <nav class="main-nav">
    <ul class="nav-list">
      <li><RouterLink to="/" class="nav-link">Inicio</RouterLink></li>
      <li><RouterLink to="/" class="nav-link">Nuestros Cafés</RouterLink></li>
      <li><RouterLink to="/" class="nav-link">Sobre Nosotros</RouterLink></li>
      <li><RouterLink to="/" class="nav-link">Contacto</RouterLink></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.main-nav {
  background: var(--color-background-light);
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.nav-list {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: var(--color-primary);
  text-decoration: none;
  font-family: var(--font-secondary);
  font-weight: 500;
  transition: color 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--color-white);
  background-color: var(--color-secondary);
}

/* Media Queries */
@media (max-width: 768px) {
  .nav-list {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
  
  .nav-link {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
}

@media (max-width: 480px) {
  .nav-list {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
  
  .nav-link {
    display: block;
    width: 100%;
    padding: 0.8rem;
  }
}
</style>