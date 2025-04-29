<template>
  <form @submit.prevent="submitForm" class="contact-form">
    <div class="form-group">
      <label for="name">Nombre:</label>
      <input type="text" id="name" v-model="formData.name" required />
    </div>
    <div class="form-group">
      <label for="email">Correo Electrónico:</label>
      <input type="email" id="email" v-model="formData.email" required />
    </div>
    <div class="form-group">
      <label for="message">Mensaje:</label>
      <textarea id="message" rows="5" v-model="formData.message" required></textarea>
    </div>
    <button type="submit" class="cta-button">Enviar Mensaje</button>
    <p v-if="submitted" class="success-message">¡Gracias por tu mensaje! Nos pondremos en contacto pronto.</p>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['formSubmit']);

const formData = ref({
  name: '',
  email: '',
  message: ''
});
const submitted = ref(false);

const submitForm = () => {
  // Aquí iría la validación si se necesita más que 'required'
  console.log('Enviando formulario desde componente:', formData.value);
  // Emitir los datos al componente padre
  emit('formSubmit', { ...formData.value });

  // Lógica de UI (mostrar mensaje, resetear)
  submitted.value = true;
  formData.value = { name: '', email: '', message: '' }; // Resetear

  setTimeout(() => {
    submitted.value = false; // Ocultar mensaje después de un tiempo
  }, 5000);
};
</script>

<style scoped>
.contact-form {
  background-color: var(--color-white);
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 15px var(--shadow-color);
  text-align: left;
  margin-top: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: var(--color-primary);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  font-family: var(--font-secondary);
  font-size: 1rem;
  background-color: #fdfdfd;
  box-sizing: border-box;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-secondary);
  box-shadow: 0 0 0 2px rgba(163, 184, 153, 0.3);
}

.contact-form button {
  display: block;
  width: 100%;
  margin-top: 1rem;
}

.success-message {
    margin-top: 1.5rem;
    color: var(--color-success);
    font-weight: bold;
    background-color: var(--color-success-bg);
    padding: 10px;
    border-radius: 4px;
    text-align: center;
}
</style>