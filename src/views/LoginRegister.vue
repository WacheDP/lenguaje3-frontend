<template>
  <div class="auth-page section-padding">
    <div class="container auth-container">
      <h2>{{ isLoginMode ? 'Iniciar Sesión' : 'Crear Cuenta' }}</h2>
      <p v-if="isLoginMode">
        ¿Aún no tienes cuenta?
        <button class="link-button" @click="switchToRegister">Regístrate aquí</button>
      </p>
      <p v-else>
        ¿Ya tienes cuenta?
        <button class="link-button" @click="switchToLogin">Inicia sesión aquí</button>
      </p>

      <form v-if="isLoginMode" @submit.prevent="handleLogin" class="auth-form">
        <div class="form-group">
          <label for="login-email">Correo Electrónico:</label>
          <input type="email" id="login-email" v-model="loginForm.email" required />
        </div>
        <div class="form-group">
          <label for="login-password">Contraseña:</label>
          <input type="password" id="login-password" v-model="loginForm.password" required />
        </div>
        <button type="submit" class="cta-button">Iniciar Sesión</button>
        </form>

      <form v-else @submit.prevent="handleRegister" class="auth-form">
         <div class="form-group">
          <label for="register-name">Nombre Completo:</label>
          <input type="text" id="register-name" v-model="registerForm.name" required />
        </div>
        <div class="form-group">
          <label for="register-email">Correo Electrónico:</label>
          <input type="email" id="register-email" v-model="registerForm.email" required />
        </div>
        <div class="form-group">
          <label for="register-password">Contraseña:</label>
          <input type="password" id="register-password" v-model="registerForm.password" required />
        </div>
         <div class="form-group">
          <label for="register-confirm-password">Confirmar Contraseña:</label>
          <input type="password" id="register-confirm-password" v-model="registerForm.confirmPassword" required />
        </div>
        <button type="submit" class="cta-button">Registrarse</button>
      </form>

      <p v-if="authMessage" class="auth-message">{{ authMessage }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import AuthForm from '@/components/AuthForm.vue'; 
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Importar si necesitas redirigir después del login/registro

const router = useRouter(); // Inicializar si se va a usar

// Estado para controlar qué formulario mostrar
const isLoginMode = ref(true);

// Refs para los datos de cada formulario
const loginForm = ref({
  email: '',
  password: ''
});

const registerForm = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
});

// Mensaje para mostrar (éxito/error simulado)
const authMessage = ref('');

// Funciones para cambiar entre modos
const switchToRegister = () => {
  isLoginMode.value = false;
  authMessage.value = ''; // Limpiar mensaje al cambiar
  // Limpiar formularios si se desea
  loginForm.value = { email: '', password: '' };
  registerForm.value = { name: '', email: '', password: '', confirmPassword: ''};
};

const switchToLogin = () => {
  isLoginMode.value = true;
  authMessage.value = ''; // Limpiar mensaje al cambiar
  // Limpiar formularios si se desea
  loginForm.value = { email: '', password: '' };
  registerForm.value = { name: '', email: '', password: '', confirmPassword: ''};
};

// Manejadores de envío (simulados)
const handleLogin = () => {
  console.log('Intentando iniciar sesión con:', loginForm.value);
  // --- Lógica de Autenticación Real iría aquí ---
  // (Llamada a API backend, manejo de tokens, etc.)
  // Simulación:
  if (loginForm.value.email && loginForm.value.password) {
      authMessage.value = '¡Inicio de sesión exitoso! (Simulado)';
      // Opcional: Redirigir a otra página
      // setTimeout(() => router.push('/dashboard'), 1500); // Ejemplo de redirección
  } else {
      authMessage.value = 'Error al iniciar sesión (Simulado)';
  }
  // Limpiar contraseña por seguridad después del intento
  loginForm.value.password = '';
};

const handleRegister = () => {
  console.log('Intentando registrar con:', registerForm.value);
   // --- Lógica de Registro Real iría aquí ---
  // (Validación de contraseña, llamada a API backend, etc.)
  // Simulación:
  if (registerForm.value.password !== registerForm.value.confirmPassword) {
      authMessage.value = 'Las contraseñas no coinciden.';
      return;
  }
  if (registerForm.value.name && registerForm.value.email && registerForm.value.password) {
      authMessage.value = '¡Registro exitoso! Ahora puedes iniciar sesión. (Simulado)';
       // Cambiar a modo login automáticamente después de un registro exitoso simulado
       setTimeout(() => switchToLogin(), 2000);
  } else {
       authMessage.value = 'Error en el registro (Simulado)';
  }
   // Limpiar contraseñas por seguridad después del intento
  registerForm.value.password = '';
  registerForm.value.confirmPassword = '';
};

</script>

<style scoped>

.auth-page {
  background: linear-gradient(rgba(5,7,12,0.55), rgba(5,7,12,0.55)), url('../assets/pexels-apgpotr-683039.jpg') no-repeat center center; /* Fondo suave */
  min-height: 80vh; /* Asegura que ocupe buena parte de la pantalla */
  display: flex;
  align-items: center; /* Centra verticalmente el contenedor */
  justify-content: center; /* Centra horizontalmente el contenedor */
}

.auth-container {
  max-width: 450px;
  width: 100%;
  background-color: rgba(222, 211, 211, 0.666);
  padding: 40px 30px;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.07);
  text-align: center;
}

.auth-container h2 {
  margin-bottom: 1rem; /* Menos margen inferior para h2 aquí */
}
.auth-container p {
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
    color: #543c3c;
}


.auth-form {
  text-align: left;
  margin-top: 1.5rem;
}

.form-group {
  margin-bottom: 1.2rem;
}

.form-group label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  font-size: 0.9rem;
  color: rgb(130, 76, 49);
}

.form-group input {
  width: 100%;
  padding: 10px 12px; /* Ligeramente menos padding */
  border: 1px solid var(--color-border);
  border-radius: 4px;
  font-family: var(--font-secondary);
  font-size: 1rem;
  background-color: #fdfdfd;
  box-sizing: border-box;
}

.form-group input:focus {
  outline: none;
  border-color: var(--color-secondary);
  box-shadow: 0 0 0 2px rgba(163, 184, 153, 0.3);
}

.auth-form .cta-button {
    width: 100%;
    margin-top: 0.5rem; /* Menos margen superior */
}

.link-button {
    background: none;
    border: none;
    color: rgb(130, 76, 49);
    text-decoration: underline;
    cursor: pointer;
    font-size: 0.95rem;
    padding: 0;
}
.link-button:hover {
    color: rgb(184, 109, 71);
}

/* Estilo para mensajes de feedback */
.auth-message {
    margin-top: 1.5rem;
    padding: 10px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 0.9rem;
    color: rgb(184, 109, 71); /* Verde por defecto */
    background-color: var(--color-success-bg);
}


</style>