<template>


  <footer class="bg-gray-50 dark:bg-gray-900">
    <div class="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <a href="#" class="flex items-center">
            <img src="../../assets/liftarn_Ganesh.svg" class="h-20 me-3" alt="FlowBite Logo" />
            <span translate="no"
              class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">canastascestas.com</span>
          </a>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7525.079184837638!2d-99.17607!3d19.432289!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8b32758939b%3A0xf34fbd07bc47d6dd!2sGutenberg%20128%2C%20Anzures%2C%20Miguel%20Hidalgo%2C%2011590%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1sen!2smx!4v1735271208505!5m2!1sen!2smx"
          width="400" height="300" style="border:0;" allowfullscreen="true" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
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
      <div class="flex justify-center mt-6">

      </div>
    </div>
  </footer>

</template>

<script lang="ts" setup>

</script>

<style scoped></style>
