<template>
  <MainLayout>
    <template #main>
      <h1 class="text-6xl font-bold text-center text-purple-900 font-Poppins">Comentarios</h1>
      <section class="flex flex-wrap justify-between gap-4 my-2">
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
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
</script>

<style scoped>
/* Puedes agregar estilos personalizados aquí si es necesario */
</style>
