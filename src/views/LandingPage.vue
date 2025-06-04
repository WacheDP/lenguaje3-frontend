<template>
  <div class="landing-page-view">
    <HeroSection @scrollTo="scrollToSection" />

    <section id="historia" class="section-padding bg-light">
      <div class="container">
        <h2>Nuestra Historia</h2>
        <p>En el corazón de las montañas de Táchira, Don Belén comenzó como un sueño familiar: compartir el café excepcional de nuestra región con el mundo. Cada grano cuenta una historia de dedicación, respeto por la tierra y amor por el café.</p>
        <p>Desde la siembra cuidadosa hasta el tostado artesanal, controlamos cada paso para garantizar una taza perfecta, llena de matices y carácter.</p>
      </div>
    </section>

    <section id="productos" class="section-padding">
      <div class="container">
        <h2>Cafés Destacados</h2>
        <div class="product-grid">
          <ProductCard
            v-for="product in featuredProducts"
            :key="product.id"
            :product="product"
          />
        </div>
        <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
    <br>
        <div style="text-align: center; margin-top: 2rem;">
             <button class="cta-button secondary" @click="verMasProductos">Ver Toda la Variedad</button>
        </div>
      </div>
    </section>

    <section id="porque-elegirnos" class="section-padding bg-light">
       <div class="container">
         <h2>¿Por Qué Elegir Don Belén?</h2>
         <div class="features-grid">
           <div class="feature-item">
             <i class="fas fa-leaf feature-icon"></i>
             <h3>Cultivo Sostenible</h3>
             <p>Prácticas agrícolas que cuidan nuestro entorno y aseguran el futuro.</p>
           </div>
           <div class="feature-item">
              <i class="fas fa-fire-alt feature-icon"></i>
             <h3>Tostado Artesanal</h3>
             <p>Pequeños lotes tostados a la perfección para resaltar los mejores sabores.</p>
           </div>
           <div class="feature-item">
              <i class="fas fa-hand-holding-heart feature-icon"></i>
             <h3>Comercio Justo</h3>
             <p>Apoyamos a nuestros caficultores locales con precios justos y relaciones duraderas.</p>
           </div>
           </div>
       </div>
     </section>

    <section id="contacto" class="section-padding">
      <div class="container contact-container">
        <h2>Contáctanos</h2>
        <p>¿Tienes preguntas, comentarios o deseas hacer un pedido especial? ¡Nos encantaría escucharte!</p>
        <ContactForm @formSubmit="handleContactFormSubmit" />
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
import { ref } from 'vue';
// Importar los nuevos componentes
import NavBar from '@/components/NavBar.vue'; 
import ProductList from '@/components/ProductList.vue';
import HeroSection from '@/components/HeroSection.vue';
import ProductCard from '@/components/ProductCard.vue';
import ContactForm from '@/components/ContactForm.vue';
import AppFooter from '@/components/AppFooter.vue';
// import FeatureItem from '@/components/FeatureItem.vue'; // Si lo creaste

// Datos de ejemplo para productos destacados (normalmente vendrían de una API)
const featuredProducts = ref([
  { id: 1, name: 'Blend Premium Don Belén', description: 'Una mezcla equilibrada con notas achocolatadas y acidez media. Ideal para empezar el día.', imageUrl: '/cafe-premium.jpg' },
  { id: 2, name: 'Origen Único Táchira', description: 'Experimenta el terroir de nuestros Andes. Café de altura con notas frutales y cuerpo sedoso.', imageUrl: '/cafe-origen.jpg' },
  { id: 3, name: 'Selección Orgánica', description: 'Cultivado en armonía con la naturaleza, libre de químicos. Sabor puro y consciente.', imageUrl: '/cafe-organico.jpg' }
]);

// Datos de ejemplo para características (si usas FeatureItem component)
// const features = ref([...]);

// Manejador para el evento emitido por ContactForm
const handleContactFormSubmit = (formData: ContactFormData) => { // <-- ¡Tipo añadido!
  console.log('Datos recibidos en LandingPage desde ContactForm:', formData);
  // Ahora TypeScript sabe que formData tiene .name, .email, .message
  // y te dará errores si intentas acceder a algo que no existe.
  alert('Formulario procesado en la página principal!');
};

// Función para scroll suave (manejador del evento emitido por HeroSection)
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Placeholder para la función del botón "Ver más productos"
const verMasProductos = () => {
  alert('Aquí navegarías a la página completa de productos.');
  // Si tienes Vue Router, usarías: router.push('/productos');
};
</script>

<style scoped>
/* Los estilos específicos de LA PÁGINA (si los hay), no de los componentes */
.landing-page-view
  /* Podría tener estilos generales para el layout de esta vista específica */


.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    text-align: center; /* Mantenido aquí si no se usa FeatureItem */
}
.feature-item h3 { /* Mantenido aquí si no se usa FeatureItem */
    font-size: 1.2rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    color: var(--color-secondary);
}
.feature-icon { /* Mantenido aquí si no se usa FeatureItem */
    font-size: 2.5rem;
    color: var(--color-accent);
}

.contact-container {
    max-width: 700px;
    text-align: center;
    margin: 0 auto; /* Centra el contenedor del formulario */
}

.pagination {
  display: flex;
  justify-content: center; /* Centra los elementos horizontalmente */
  align-items: center; /* Alinea los elementos verticalmente */
  gap: 10px; /* Espacio uniforme entre los botones */
  list-style: none; /* Elimina los estilos de lista */
  padding: 0;
}

.page-item {
  display: inline-block;
}

.page-link {
  padding: 8px 12px;
  text-decoration: none;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #333;
  transition: 0.3s;
}

.page-link:hover {
  background-color: #f0f0f0;
}

</style>