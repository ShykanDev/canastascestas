<template>


  <footer class="bg-gray-50 dark:bg-gray-900">
    <div class="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <a href="https://flowbite.com/" class="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3" alt="FlowBite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">canastascestas.com</span>
          </a>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Información</h2>
            <ul class="font-medium text-gray-500 dark:text-gray-400">
              <li class="mb-4">
                <RouterLink :to="{ name: 'faq' }" class="hover:underline">Preguntas Frecuentes</RouterLink>
              </li>
              <li>
                <RouterLink :to="{ name: 'aboutus' }" class="hover:underline">Nosotros</RouterLink>
              </li>
              <li class="py-5">
                <RouterLink :to="{ name: 'contact' }" class="hover:underline">Contacto</RouterLink>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul class="font-medium text-gray-500 dark:text-gray-400">
              <li class="mb-4">
                <RouterLink :to="{ name: 'privacy' }" class="hover:underline">Politica de Privacidad</RouterLink>
              </li>
              <li>
                <RouterLink :to="{ name: 'terms' }" class="hover:underline">Terminos y Condiciones</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="flex-col sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/"
            class="hover:underline">canastascestas.com</a> Todos los derchos reservados.
        </span>
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"><a href="https://flowbite.com/"
            class="hover:underline">Diseño</a> PACA
        </span>

      </div>
    </div>
  </footer>

</template>

<script lang="ts" setup>

</script>

<style scoped></style>
