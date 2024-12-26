<template>
  <MainLayout>
    <template #main>
      <div class="w-full p-8 bg-white rounded-lg shadow-lg fade-in md:bg-white">
        <div class="mb-6 text-center">
          <h1 class="text-5xl font-bold text-purple-800 ">Sobre Nosotros</h1>
        </div>
        <div class="mb-6">
          <p class="text-lg text-gray-700">
            Contamos con más de 30 años de experiencia en el mercado, ofreciendo cestas importadas de la India de la más
            alta calidad de hierro forjado a precios accesibles. Nuestro objetivo es que usted esté satisfecho con cada
            producto o servicio que le ofrecemos. A lo largo de los años, hemos perfeccionado nuestras técnicas de
            importación y selección de materiales para asegurar que cada cesta que llega a sus manos sea una obra
            maestra de artesanía y durabilidad.
          </p>
        </div>
        <div class="mb-6">
          <p class="text-lg text-gray-700">
            Además, brindamos apoyo social a través de nuestras distintas páginas web, asegurando que nuestros clientes
            reciban la mejor atención y soporte posible. Creemos firmemente en la importancia de construir una comunidad
            fuerte y solidaria, y por eso nos esforzamos por ofrecer no solo productos de calidad, sino también un
            servicio al cliente excepcional. Nuestro equipo está siempre disponible para ayudarlo con cualquier consulta
            o necesidad que pueda tener, garantizando que su experiencia con nosotros sea siempre positiva y
            satisfactoria.
          </p>
        </div>
        <div class="mb-6">
          <p class="text-lg text-gray-700">
            Nuestra dedicación y compromiso con la calidad y el servicio al cliente nos han permitido mantenernos como
            líderes en el mercado durante más de tres décadas. Cada cesta que ofrecemos es el resultado de un proceso
            meticuloso de selección y manufactura, donde cada detalle cuenta. Desde la elección de los mejores
            materiales hasta el acabado final, nos aseguramos de que cada pieza cumpla con los más altos estándares de
            calidad. Además, nuestro compromiso con la innovación nos lleva a estar siempre al tanto de las últimas
            tendencias y tecnologías en el mundo de la artesanía y el diseño.
          </p>
        </div>
        <div class="mb-6">
          <p class="text-lg text-gray-700">
            Si tienes alguna duda, no dudes en contactarnos a través del correo electrónico
            <a class="text-blue-500 transition duration-300 hover:text-blue-700" href="mailto:informes@parasadam.mx">
              informes@parasadam.mx
            </a>.
            Estamos aquí para ayudarte con cualquier consulta que puedas tener, desde preguntas sobre nuestros productos
            hasta asistencia con tu pedido. Tu satisfacción es nuestra prioridad, y nos esforzamos por ofrecerte un
            servicio rápido y eficiente en todo momento.
          </p>
        </div>
        <div class="text-center">
          <!-- router link to contact -->
          <router-link class="inline-block px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600" to="/contact">
            Contáctanos
          </router-link>
        </div>
      </div>

    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<style scoped></style>
