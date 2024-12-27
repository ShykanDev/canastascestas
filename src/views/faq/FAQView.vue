<template>
  <MainLayout>
    <template #main>
      <div class="max-w-4xl p-6 mx-auto">
        <h1 class="mb-6 text-3xl font-bold text-center">Preguntas frecuentes</h1>
        <div class="space-y-6">
          <div class="flex items-center justify-between">
            <h2 class="w-1/2 pr-4 text-lg font-semibold text-right">¿Qué tipo de canastas vendes?</h2>
            <p class="w-1/2 pl-4 mt-2">Vendemos canastas de hierro forjado directamente de la India. Ofrecemos modelos
              circulares, ovalados y cuadrados, todos disponibles en tamaños chico, mediano y grande. Para más
              información sobre los tamaños, visite nuestra página de inicio. Nota: Los tamaños pueden variar
              ligeramente.</p>
          </div>
          <hr class="border-t border-gray-300">
          <div class="flex items-center justify-between">
            <h2 class="w-1/2 pr-4 text-lg font-semibold text-right">¿Cuál es la calidad de las canastas?</h2>
            <p class="w-1/2 pl-4 mt-2">Nuestras canastas son de la más alta calidad. Cada pieza es cuidadosamente
              seleccionada y manufacturada para asegurar durabilidad y un acabado impecable. Estamos comprometidos con
              ofrecer productos que no solo sean funcionales, sino también bellos y duraderos.</p>
          </div>
          <hr class="border-t border-gray-300">
          <div class="flex items-center justify-between">
            <h2 class="w-1/2 pr-4 text-lg font-semibold text-right">¿Ofrecen envío gratis?</h2>
            <p class="w-1/2 pl-4 mt-2">Contamos con envío gratis para nuestros productos por mayoreo (3 o más). Además,
              ofrecemos un
              descuento del 30% a partir de 6 conjuntos para mayoristas. Estamos aquí para hacer que su experiencia de
              compra sea lo más conveniente y económica posible.</p>
          </div>
          <hr class="border-t border-gray-300">
          <div class="flex items-center justify-between">
            <h2 class="w-1/2 pr-4 text-lg font-semibold text-right">¿Puedo ver más información sobre los tamaños de las
              canastas?</h2>
            <p class="w-1/2 pl-4 mt-2">Por supuesto, para más información sobre los tamaños de nuestras canastas, visite
              nuestra página de inicio. Allí encontrará detalles específicos sobre las dimensiones de cada modelo y
              tamaño disponible. Recuerde que los tamaños pueden variar ligeramente, si necesita aún mas información no
              dude en <RouterLink class="italic font-bold text-purple-800 underline" :to="{ name: 'contact' }">
                contactarnos.
              </RouterLink>
            </p>
          </div>
          <hr class="border-t border-gray-300">
          <div class="flex items-center justify-between">
            <h2 class="w-1/2 pr-4 text-lg font-semibold text-right">¿Qué tipo de descuentos ofrecen?</h2>
            <p class="w-1/2 pl-4 mt-2">Ofrecemos un descuento del 30% a partir de 6 conjuntos para mayoristas. Este
              descuento está diseñado para ayudar a nuestros clientes mayoristas a obtener los mejores precios posibles
              cuando compran en grandes cantidades. Para más información sobre nuestros descuentos y promociones, no
              dude en contactarnos.</p>
          </div>
        </div>
      </div>

    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';


</script>

<style scoped></style>
