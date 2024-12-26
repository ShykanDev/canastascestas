<template>
  <MainLayout>
    <template #main>
      <h1 class="text-6xl font-bold text-center text-purple-900 font-Poppins">Comentarios</h1>
      <section class="flex flex-wrap justify-between gap-4 my-2">
        <CommentCard v-for="comment in comments" :key="comment.id" :comment="comment.comment" :rating="comment.rating"
          :titleCard="comment.titleCard" :userName="comment.userName" />
      </section>
      <section class="p-6 mx-auto mt-10 rounded-lg shadow-md bg-slate-100 font-Poppins">
        <h2 class="mb-4 text-2xl font-bold text-purple-900">Dejar un Comentario</h2>
        <form id="commentForm" @submit.prevent="submitComment">
          <div class="mb-4">
            <label for="comment" class="block mb-2 font-bold text-gray-700">Su Comentario:</label>
            <textarea id="comment" v-model="comment" rows="4"
              class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
              placeholder="Escribe tu comentario aquí..."></textarea>
          </div>
          <div class="mb-4">
            <label for="rating" class="block mb-2 font-bold text-gray-700">Su Calificación:</label>
            <div id="rating" class="flex space-x-2">
              <i v-for="n in 5" :key="n"
                :class="['text-gray-300 cursor-pointer fas fa-star', { 'text-yellow-500': n <= rating }]"
                @click="setRating(n)"></i>
            </div>
          </div>
          <div>
            <button type="submit"
              class="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline">Enviar</button>
          </div>
        </form>
      </section>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import CommentCard from '@/components/comments/CommentCard.vue';
import MainLayout from '@/layouts/MainLayout.vue';

const comment = ref('');
const rating = ref(0);

const setRating = (value: number) => {
  rating.value = value;
};

const submitComment = () => {
  comment.value = '';
  rating.value = 0;
};

const comments = ref([
  {
    id: 1,
    titleCard: 'Compra de Canasta Circular',
    comment: 'Compré una canasta circular para organizar mis artículos de baño y estoy muy satisfecha con la calidad. El material es resistente y el diseño es muy bonito. ¡Es perfecta para mis necesidades y la recomiendo ampliamente!',
    userName: 'María López',
    rating: 5
  },
  {
    id: 2,
    titleCard: 'Conjunto de Canastas',
    comment: 'Adquirí el conjunto completo de canastas para mi sala de estar y estoy encantada. Las canastas son muy funcionales y se ven geniales en cualquier espacio. ¡Tener el juego completo es una excelente inversión para mantener todo organizado!',
    userName: 'Ana García',
    rating: 4
  },
  {
    id: 3,
    titleCard: 'Canasta Ovalada',
    comment: 'La canasta ovalada que compré es justo lo que necesitaba para guardar mis revistas y libros. El tamaño es perfecto y el acabado es de alta calidad. ¡Muy recomendable para cualquier hogar!',
    userName: 'Laura Martínez',
    rating: 5
  },
  {
    id: 4,
    titleCard: 'Compra por Mayoreo',
    comment: 'Compré varias canastas por mayoreo con un 30% de descuento para mi tienda y estoy muy contento con la calidad y el precio. Mis clientes también están muy satisfechos con los productos. ¡Excelente calidad y precio!',
    userName: 'Carlos Rodríguez',
    rating: 4
  },
  {
    id: 5,
    titleCard: 'Canasta Cuadrada',
    comment: 'La canasta cuadrada es perfecta para organizar mis productos de limpieza. Es muy resistente y fácil de limpiar. ¡Muy útil para mantener todo en orden!',
    userName: 'Sofía Hernández',
    rating: 5
  },
  {
    id: 6,
    titleCard: 'Conjunto de Canastas',
    comment: 'El conjunto de canastas es justo lo que necesitaba para organizar mi hogar. Las canastas son muy versátiles y se pueden usar en cualquier habitación. ¡Muy satisfecha con la compra!',
    userName: 'Elena Pérez',
    rating: 4
  },
  {
    id: 7,
    titleCard: 'Compra por Mayoreo',
    comment: 'Compré varias canastas por mayoreo y estoy muy contenta con la calidad y el descuento del 30%. Las canastas son perfectas para organizar y decorar cualquier espacio. ¡Recomendado!',
    userName: 'Isabel Gómez',
    rating: 5
  }
]);
</script>

<style scoped>
/* Puedes agregar estilos personalizados aquí si es necesario */
</style>
