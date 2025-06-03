<template>
  <form @submit.prevent="handleSubmit" class="auth-form">
    <h2 class="form-title">{{ isLoginMode ? 'Iniciar Sesión' : 'Registrarse' }}</h2>
    
    <div class="form-group" v-if="!isLoginMode">
      <label for="name">Nombre Completo:</label>
      <input type="text" id="name" v-model="formData.name" required>
    </div>

    <div class="form-group">
      <label for="email">Correo Electrónico:</label>
      <input type="email" id="email" v-model="formData.email" required>
    </div>

    <div class="form-group">
      <label for="password">Contraseña:</label>
      <input type="password" id="password" v-model="formData.password" required>
    </div>

    <button type="submit" class="cta-button">
      {{ isLoginMode ? 'Ingresar' : 'Crear Cuenta' }}
    </button>

    <p class="toggle-mode">
      {{ isLoginMode ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?' }}
      <a href="#" @click.prevent="toggleMode">
        {{ isLoginMode ? 'Regístrate aquí' : 'Inicia sesión aquí' }}
      </a>
    </p>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['submit']);

const isLoginMode = ref(true);
const formData = ref({
  name: '',
  email: '',
  password: ''
});

const toggleMode = () => {
  isLoginMode.value = !isLoginMode.value;
  formData.value = { name: '', email: '', password: '' };
};

const handleSubmit = () => {
  emit('submit', {
    mode: isLoginMode.value ? 'login' : 'register',
    data: { ...formData.value }
  });
};
</script>

<style scoped>
.auth-form {
  background: var(--color-white);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px var(--shadow-color);
  max-width: 450px;
  margin: 2rem auto;
}

h2 .form-title {
  color: rgb(130, 76, 49);
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
}

.form-group {
  margin-bottom: 1.2rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: rgb(130, 76, 49);
  font-weight: 500;
}

.form-group input {
  width: 100%;
  padding: 12px;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  font-size: 1rem;
}

.cta-button {
  width: 100%;
  margin-top: 1rem;
  padding: 12px;
}

.toggle-mode {
  text-align: center;
  margin-top: 1.5rem;
  color: rgb(130, 76, 49);
}

/* Media Queries */
@media (max-width: 768px) {
  .auth-form {
    padding: 1.5rem;
    margin: 1rem auto;
  }

  .form-title {
    font-size: 1.5rem;
  }

  .form-group input {
    padding: 10px;
  }
}

@media (max-width: 480px) {
  .auth-form {
    padding: 1rem;
    margin: 0.5rem auto;
  }

  .form-title {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  .cta-button {
    padding: 10px;
    font-size: 0.9rem;
  }
}
</style>