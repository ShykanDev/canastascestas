<template>
  <MainLayout>
    <template #main>
      <div class="flex min-h-screen font-Poppins animate-fade">
        <div class="flex flex-col justify-center w-full max-w-md p-8 bg-white md:w-1/2 lg:w-1/3">
          <div class="flex justify-center mb-8">
            <i class="text-4xl text-purple-600 fas fa-wave-square">
            </i>
          </div>
          <h2 class="mb-2 text-2xl font-bold text-center">
            Iniciar Sesión
          </h2>
          <p class="mb-6 text-center text-gray-600">
            ¿No tiene una cuenta?
            <router-link :to="{ name: 'signup' }" class="font-semibold text-purple-600 hover:text-purple-700">
              Crear cuenta
            </router-link>
          </p>
          <form>
            <div class="mb-4">
              <label class="block mb-2 text-sm font-medium text-gray-700" for="email">
                Correo electronico
              </label>
              <input
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                id="email" required="true" type="email" />
            </div>
            <div class="mb-4">
              <label class="block mb-2 text-sm font-medium text-gray-700" for="password">
                Contraseña
              </label>
              <input
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                id="password" required="true" type="password" />
            </div>
            <div class="flex items-center justify-between mb-6">

              <a class="text-sm text-purple-600" href="#">
                ¿Olvidó su contraseña?
              </a>
            </div>
            <button
              class="w-full px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
              type="submit">
              Iniciar Sesión
            </button>
          </form>
        </div>
        <div class="hidden w-full md:block md:w-1/2 lg:w-2/3">
          <img alt="A desk setup with a laptop, keyboard, mouse, wallet, and phone" class="object-cover w-full h-full"
            height="600" src="../../assets/pulhkari.webp" width="800" />
        </div>
      </div>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import router from '@/router';


</script>

<style scoped></style>
