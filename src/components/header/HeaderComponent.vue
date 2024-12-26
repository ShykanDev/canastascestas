<template>
  <nav class="z-50 w-full bg-white shadow-lg rounded-b-md">
    <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button type="button"
            class="relative inline-flex items-center justify-center p-2 text-black rounded-md hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-700"
            aria-controls="mobile-menu" aria-expanded="false">
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          -->
            <svg class="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          -->
            <svg class="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
          <div class="flex items-center shrink-0">
            <img class="w-auto h-8" src="../../assets/ssla.png" alt="Your Company">
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-200 text-gray-900", Default: "text-black hover:bg-gray-200 hover:text-gray-700" -->
              <router-link :to="{ name: 'home' }"
                class="px-3 py-2 font-medium text-gray-900 bg-gray-200 rounded-md text-md"
                aria-current="page">Inicio</router-link>
              <a v-if="route.name === 'home'" href="#ejemplos "
                class="px-3 py-2 font-medium text-black rounded-md text-md hover:bg-gray-200 hover:text-gray-700">
                Ejemplos</a>
              <router-link :to="{ name: 'signup' }"
                class="px-3 py-2 font-medium text-black rounded-md text-md hover:bg-gray-200 hover:text-gray-700">Registrarse</router-link>
              <router-link :to="{ name: 'signin' }"
                class="px-3 py-2 font-medium text-black rounded-md text-md hover:bg-gray-200 hover:text-gray-700">Iniciar
                Sesion</router-link>
              <router-link :to="{ name: 'contact' }"
                class="px-3 py-2 font-medium text-black rounded-md text-md hover:bg-gray-200 hover:text-gray-700">Contacto</router-link>
              <router-link :to="{ name: 'comments' }"
                class="px-3 py-2 font-medium text-black rounded-md text-md hover:bg-gray-200 hover:text-gray-700">Comentarios</router-link>
            </div>

          </div>
        </div>
        <div class="flex items-center justify-center text-lg font-Chelsea">
          <span class="animate-fade-left animate-delay-75">canastas</span>
          <span class="animate-fade-left animate-delay-150">cestas</span>
          <span class="animate-fade-left animate-delay-200">.com</span>
        </div>
        <div v-if="1 + 2 === 5"
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button type="button"
            class="relative p-1 text-black bg-white rounded-full hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-white">
            <span class="absolute -inset-1.5"></span>
            <span class="sr-only">View notifications</span>
            <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
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
    <div class="sm:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-200 text-gray-900", Default: "text-black hover:bg-gray-200 hover:text-gray-700" -->
        <a href="#" class="block px-3 py-2 text-base font-medium text-gray-900 bg-gray-200 rounded-md"
          aria-current="page">Dashboard</a>
        <a href="#"
          class="block px-3 py-2 text-base font-medium text-black rounded-md hover:bg-gray-200 hover:text-gray-700">Team</a>
        <a href="#"
          class="block px-3 py-2 text-base font-medium text-black rounded-md hover:bg-gray-200 hover:text-gray-700">Projects</a>
        <a href="#"
          class="block px-3 py-2 text-base font-medium text-black rounded-md hover:bg-gray-200 hover:text-gray-700">Calendar</a>
      </div>
    </div>
  </nav>

</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const showMenu = ref(false);

const toggleMenu = (): boolean => showMenu.value = !showMenu.value;

const route = useRoute();
</script>

<style scoped></style>
