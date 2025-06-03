<template>
  <header class="sticky-header">
    <div class="container header-content">
      <div class="brand">
        <RouterLink to="/" class="brand-link">Café Don Belén</RouterLink>
      </div>
      <nav class="header-nav">
        <RouterLink to="/auth" class="auth-button">
          <i class="fas fa-user"></i> <span>Acceder / Registrarse</span>
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
// Asegúrate de tener Font Awesome si usas el icono <i class="fas fa-user"></i>
</script>

<style scoped>
body, header{
  margin: 0;
  padding: 0;
}

.sticky-header {
  position: absolute; /* Fija la barra en la ventana */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Asegura que esté sobre otro contenido */
  background-color: rgba(23, 23, 23, 0.87); /* Color fondo suave casi opaco */
  /* Alternativa: var(--color-white) o var(--color-background-light) */
  backdrop-filter: blur(5px); /* Efecto blur si el fondo es semi-transparente */
  -webkit-backdrop-filter: blur(5px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08); /* Sombra suave */
  padding: 10px 0; /* Padding vertical */
}

.header-content {
  display: flex;
  justify-content: space-between; /* Espacia el logo/nombre y el botón */
  align-items: center;
}

.brand-link {
  font-family: var(--font-primary);
  font-size: 1.4rem;
  font-weight: bold;
  color: rgba(248, 201, 166, 0.96);
  text-decoration: none;
}
.brand-link:hover {
    color: var(--color-primary-darker);
}

.auth-button {
  /* Estilo tipo botón, similar a cta-button pero adaptado */
  display: inline-flex; /* Para alinear icono y texto */
  align-items: center;
  gap: 8px; /* Espacio entre icono y texto */
  background-color: #537445; /* Usamos el color secundario (verde suave) */
  color: var(--color-white);
  border: none;
  padding: 8px 18px; /* Ligeramente más pequeño que cta-button */
  font-size: 0.9rem;
  font-family: var(--font-secondary);
  border-radius: 20px; /* Bordes redondeados */
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
  text-decoration: none; /* Quita subrayado de RouterLink */
}

.auth-button:hover {
  background-color: #92cc7a; /* Verde un poco más oscuro */
  transform: translateY(-1px);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
}

.auth-button i {
    font-size: 1rem; /* Tamaño del icono */
}

/* Ajustes para pantallas pequeñas */
@media (max-width: 768px) {
    .brand-link {
        font-size: 1.2rem;
    }
    .auth-button {
        padding: 7px 14px;
        font-size: 0.8rem;
    }
    /* Ocultar el texto y dejar solo el icono en pantallas muy pequeñas */
    @media (max-width: 480px) {
        .auth-button span {
           display: none;
        }
         .auth-button {
            padding: 8px 10px; /* Ajustar padding para solo icono */
        }
         .auth-button i {
            font-size: 1.1rem; /* Icono un poco más grande */
        }
    }
}
</style>