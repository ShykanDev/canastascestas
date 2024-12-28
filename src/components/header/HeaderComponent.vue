<template>
  <nav class="z-50 w-full bg-white shadow-lg ">
    <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <!-- mobile menu -->
        <div class="sticky inset-y-0 top-0 left-0 flex items-center w-full sm:hidden">
          <!-- Mobile menu button-->
          <button type="button"
            class="relative inline-flex items-center justify-center p-2 text-black rounded-md hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-700"
            aria-controls="mobile-menu" aria-expanded="false" @click="toggleMenu">
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          -->
            <svg v-if="!showMenu" class="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          -->
            <svg v-else class="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
          <div class="flex items-center shrink-0">
            <img class="hidden w-auto h-8 sm:block" src="../../assets/ssla.png" alt="Your Company">
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <!-- Home -->
              <router-link :to="{ name: 'home' }" :class="{
                'bg-slate-100 text-gray-900': route.name === 'home',
                'text-black hover:bg-gray-200 hover:text-gray-700': route.name !== 'home'
              }" class="px-3 py-2 font-medium rounded-md text-md" aria-current="page">
                Inicio
              </router-link>

              <!-- Examples (only visible on 'home') -->
              <a v-if="route.name === 'home'" href="#ejemplos"
                class="px-3 py-2 font-medium text-black rounded-md text-md hover:bg-gray-200 hover:text-gray-700">
                Ejemplos
              </a>

              <!-- Signup -->
              <router-link :to="{ name: 'signup' }" :class="{
                'bg-slate-100 text-gray-900': route.name === 'signup',
                'text-black hover:bg-gray-200 hover:text-gray-700': route.name !== 'signup'
              }" class="px-3 py-2 font-medium rounded-md text-md">
                Registrarse
              </router-link>

              <!-- Signin -->
              <router-link :to="{ name: 'signin' }" :class="{
                'bg-slate-100 text-gray-900': route.name === 'signin',
                'text-black hover:bg-gray-200 hover:text-gray-700': route.name !== 'signin'
              }" class="px-3 py-2 font-medium rounded-md text-md">
                Iniciar Sesión
              </router-link>

              <!-- Contact -->
              <router-link :to="{ name: 'contact' }" :class="{
                'bg-slate-100 text-gray-900': route.name === 'contact',
                'text-black hover:bg-gray-200 hover:text-gray-700': route.name !== 'contact'
              }" class="px-3 py-2 font-medium rounded-md text-md">
                Contacto
              </router-link>

              <!-- Comments -->
              <router-link :to="{ name: 'comments' }" :class="{
                'bg-slate-100 text-gray-900': route.name === 'comments',
                'text-black hover:bg-gray-200 hover:text-gray-700': route.name !== 'comments'
              }" class="px-3 py-2 font-medium rounded-md text-md">
                Comentarios
              </router-link>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-end max-h-full ">
          <img src="https://i.ibb.co/VMmfs2Y/thmjl.png" alt="" class="w-24 mr-11 animate-fade-down">
        </div>
        <div class="flex items-center justify-center text-lg font-Chelsea">
          <span translate="no" class="text-purple-800 animate-fade-left animate-delay-75">canastas</span>
          <span translate="no" class="text-purple-500 animate-fade-left animate-delay-150">cestas</span>
          <span translate="no" class="animate-fade-left animate-delay-200 text-fuchsia-400">.com</span>
        </div>
        <div v-if="1 + 2 === 5"
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button @click="toggleMenu" type="button"
            class="relative inline-flex items-center justify-center p-2 text-black rounded-md hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-700"
            aria-controls="mobile-menu">
            <span class="sr-only">Open main menu</span>
            <svg v-if="!showMenu" class="block w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg v-else class="block w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Profile dropdown -->
          <div class="relative ml-3">
            <div>
              <button @click="toggleMenu" type="button"
                class="relative flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-white"
                id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span class="absolute -inset-1.5"></span>
                <span class="sr-only">Open user menu</span>
                <img class="rounded-full size-8"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="">
              </button>
            </div>

            <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
            <div v-show="showMenu"
              class="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none"
              role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
              <!-- Active: "bg-gray-100 outline-none", Not Active: "" -->
              <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                id="user-menu-item-0">Your Profile</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                id="user-menu-item-1">Settings</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                id="user-menu-item-2">Sign out</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div :class="{ 'hidden': !showMenu, 'block': showMenu }" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-200 text-gray-900", Default: "text-black hover:bg-gray-200 hover:text-gray-700" -->
        <router-link :to="{ name: 'home' }"
          class="block px-3 py-2 text-base font-medium text-black rounded-md hover:bg-gray-200 hover:text-gray-700">Home</router-link>
        <router-link :to="{ name: 'signup' }"
          class="block px-3 py-2 text-base font-medium text-black rounded-md hover:bg-gray-200 hover:text-gray-700">Registrarse</router-link>

        <router-link :to="{ name: 'signin' }"
          class="block px-3 py-2 text-base font-medium text-black rounded-md hover:bg-gray-200 hover:text-gray-700">Iniciar
          Sesión</router-link>
        <router-link :to="{ name: 'contact' }"
          class="block px-3 py-2 text-base font-medium text-black rounded-md hover:bg-gray-200 hover:text-gray-700">Contacto</router-link>
        <router-link :to="{ name: 'comments' }"
          class="block px-3 py-2 text-base font-medium text-black rounded-md hover:bg-gray-200 hover:text-gray-700">Comentarios</router-link>
      </div>
    </div>
  </nav>

  <!-- Additional content below the navbar -->
  <div class="hidden shadow-lg bg-slate-100 md:block rounded-b-md">
    <div class="gap-4 lg:flex lg:items-center lg:justify-around">
      <!-- Location -->
      <div class="flex items-center gap-2">
        <i class="text-2xl text-purple-400 fas fa-map-marker-alt"></i>
        <a class="text-xs font-medium text-gray-700 transition-colors hover:text-orange-600 lg:text-base font-Poppins"
          href="https://www.google.com.mx/maps/place/Gutenberg+128,+Anzures,+Miguel+Hidalgo,+11590+Ciudad+de+M%C3%A9xico,+CDMX/@19.4322888,-99.1760704,17z/data=!3m1!4b1!4m6!3m5!1s0x85d1f8b32758939b:0xf34fbd07bc47d6dd!8m2!3d19.4322888!4d-99.1760704!16s%2Fg%2F11c4n3lm2g?entry=ttu&g_ep=EgoyMDI0MTEwNS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank">
          Gutenberg #128 Anzures, Miguel Hidalgo, 11590 CDMX.
        </a>
      </div>

      <!-- Phone Numbers -->
      <div class="flex items-center gap-2">
        <i class="text-2xl text-green-600 fas fa-phone-alt"></i>
        <a href="tel:+525563950178"
          class="text-sm font-medium text-gray-700 transition-colors hover:text-orange-600 lg:text-base font-Poppins">
          +52 55 6395 0178
        </a>
        <i class="text-2xl text-green-600 fas fa-phone-alt"></i>
        <a href="tel:+525563950179"
          class="text-sm font-medium text-gray-700 transition-colors hover:text-orange-600 lg:text-base font-Poppins">
          +52 55 6395 0179
        </a>
      </div>

      <!-- WhatsApp -->
      <div class="flex items-center gap-2">
        <i class="text-2xl fab fa-whatsapp text-emerald-500"></i>
        <a href="https://wa.me/525562516687"
          class="text-sm font-medium text-gray-700 transition-colors hover:text-emerald-600 lg:text-base font-Poppins"
          target="_blank" rel="noopener noreferrer">
          +52 5562516687
        </a>
      </div>
      <div class="flex items-center gap-2">
        <i class="text-2xl fas fa-envelope text-slate-500"></i>
        <a href="mailto:informes@prasadam.mx"
          class="text-sm font-medium text-gray-700 transition-colors hover:text-emerald-600 lg:text-base font-Poppins"
          target="_blank" rel="noopener noreferrer">
          informes@prasadam.mx
        </a>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const showMenu = ref(false);

const toggleMenu = (): void => {
  showMenu.value = !showMenu.value;
};

const route = useRoute();
</script>

<style scoped></style>
