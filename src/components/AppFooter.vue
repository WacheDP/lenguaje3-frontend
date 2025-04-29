<template>
  <footer class="footer">
    <div class="container footer-content">
      <div class="footer-info"> <p>&copy; {{ currentYear }} Café Don Belén. Todos los derechos reservados. San Cristobal, Táchira, Venezuela.</p>

          </div>
      <div class="social-links">
         <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
        <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
        <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
// --- IMPORTAR RouterLink ---
// import { RouterLink } from 'vue-router';
// ---------------------------

const currentYear = computed(() => new Date().getFullYear());

// Recuerda tener Font Awesome instalado y configurado para los íconos
</script>

<style scoped>
.footer {
  background-color: var(--color-text);
  color: var(--color-text-lighter);
  padding: 30px 0;
  margin-top: 40px; /* O ajusta según sea necesario */
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center; /* Centra verticalmente por defecto */
    flex-wrap: wrap;
    gap: 15px;
}
.footer-info {
    text-align: left; /* Alinea el texto a la izquierda */
}
.footer-info p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.4; /* Ajusta interlineado si es necesario */
}
/* Estilo para el nuevo enlace de autenticación */
.auth-link {
    margin-top: 5px !important; /* Añade un pequeño espacio arriba, !important si es necesario */
}
.auth-link a {
    color: var(--color-white); /* Color blanco para el enlace */
    text-decoration: underline;
}
.auth-link a:hover {
    color: var(--color-secondary); /* Verde suave al pasar el mouse */
}
/* ------------------------------------------- */

.social-links {
     margin-left: auto; /* Empuja los iconos sociales a la derecha */
}

.social-links a {
    color: var(--color-text-lighter);
    font-size: 1.3rem;
    margin-left: 15px;
    transition: color 0.3s ease;
}
.social-links a:hover {
    color: var(--color-white);
}

@media (max-width: 768px) {
    .footer-content {
        flex-direction: column;
        text-align: center;
         align-items: center; /* Centra todo en pantallas pequeñas */
    }
     .footer-info {
        text-align: center; /* Centra el texto en pantallas pequeñas */
        margin-bottom: 15px; /* Espacio antes de los iconos sociales */
    }
    .social-links {
        margin-left: 0; /* Quita el margen auto */
    }
     .social-links a {
        margin: 0 8px;
    }
}
</style>