<template>
  <div class="product-card">
    <img src="../assets/coffee-shop-background-02x9a49rdcr5c18i.jpg" :alt="product.name" class="product-image" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.description }}</p>
  </div>
</template>

<script setup lang="ts">
// Recibe la información del producto como prop
defineProps({
  product: {
    type: Object,
    required: true
    // Se espera un objeto como: { id: number, name: string, description: string, imageUrl: string }
  }
});
</script>

<style scoped>
.product-card {
  background-color: rgba(255, 255, 255, 0.577);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px var(--shadow-color);
  text-align: center;
  padding-bottom: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 1rem;
}

.product-card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: var(--color-primary);
}
.product-card p {
    font-size: 0.95rem;
    padding: 0 1.5rem;
    color: #666;
}
</style>
