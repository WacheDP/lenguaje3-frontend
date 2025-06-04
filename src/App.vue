<script setup lang="ts">
// 1. Importa useRoute además de RouterView
import { RouterView, useRoute } from 'vue-router'
import StickyHeader from '@/components/StickyHeader.vue'

// 2. Obtén el objeto de la ruta actual
const route = useRoute();

// La variable 'route' ahora contiene información sobre la ruta activa,
// como route.path, route.name, route.params, route.query, route.meta, etc.
</script>

<template>
  <StickyHeader v-if="route.name !== 'auth'" />

  <main class="main-content">
    <RouterView />
  </main>

</template>

<style scoped>
/* Estilos existentes para main-content (padding-top) */
.main-content {
  padding-top: 70px; /* Ajusta este valor según sea necesario */
}

/* Si el header está oculto, quizás no necesites el padding-top.
   Podrías hacerlo condicional también, pero es más complejo.
   Por ahora, dejar el padding no molesta en la página de auth.
   Una solución más avanzada usaría clases dinámicas o layouts distintos. */
</style>