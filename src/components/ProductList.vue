<template>
  <section class="product-list-section">
    <h2 class="section-title">Nuestros Cafés Premium</h2>
    <div class="product-grid">
      <ProductCard 
        v-for="product in products" 
        :key="product.id" 
        :product="product" 
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProductCard from './ProductCard.vue';

defineProps({
  products: {
    type: Array,
    required: true,
    default: () => []
  }
});
</script>

<style scoped>
.product-list-section {
  padding: 4rem 0;
  background: var(--color-background-light);
}

.section-title {
  text-align: center;
  font-size: 2.2rem;
  color: var(--color-primary);
  margin-bottom: 3rem;
  font-family: var(--font-primary);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Media Queries */
@media (max-width: 1024px) {
  .product-grid {
    gap: 1.5rem;
    padding: 0 1rem;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
  
  .product-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
  
  .product-list-section {
    padding: 2rem 0;
  }
}
</style>