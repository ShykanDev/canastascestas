<template>
  <MainLayout>
    <template #main>
      <div class="px-6 py-10 bg-white isolate sm:py-4 lg:px-8 animate-fade animate-duration-1000">
        <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true">
          <div
            class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
          </div>
        </div>
        <div class="max-w-5xl mx-auto text-center">
          <h2 class="text-4xl font-semibold tracking-tight text-gray-900 text-balance sm:text-5xl">Contacto de ventas
          </h2>
          <p class="mt-2 text-lg text-gray-600 font-Poppins">Envíenos un mensaje, y nosotros nos pondremos en contacto
            con usted a
            la brevedad.</p>
        </div>
        <form action="#" method="POST" class="max-w-xl mx-auto mt-16 sm:mt-20">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label for="first-name" class="block font-semibold text-gray-900 text-sm/6">Nombre</label>
              <div class="mt-2.5">
                <input type="text" v-model="name" name="first-name" id="first-name" autocomplete="given-name"
                  class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600">
              </div>
            </div>


            <div class="sm:col-span-2">
              <label for="email" class="block font-semibold text-gray-900 text-sm/6">Correo electrónico</label>
              <div class="mt-2.5">
                <input type="email" v-model="email" name="email" id="email" autocomplete="email"
                  class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600">
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="phone-number" class="block font-semibold text-gray-900 text-sm/6">Número de teléfono
                <span class="text-xs text-slate-600">(opcional)</span></label>
              <div class="mt-2.5">
                <div
                  class="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                  <div class="grid grid-cols-1 shrink-0 focus-within:relative">
                    <select id="country" name="country" autocomplete="country" aria-label="País"
                      class="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pl-3.5 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                      <option>MX</option>
                      <option>US</option>
                    </select>
                    <svg
                      class="self-center col-start-1 row-start-1 mr-2 text-gray-500 pointer-events-none size-5 justify-self-end sm:size-4"
                      viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd"
                        d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                        clip-rule="evenodd" />
                    </svg>
                  </div>
                  <input type="text" v-model="phone" name="phone-number" id="phone-number"
                    class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                    placeholder="+52 123456789">
                </div>
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block font-semibold text-gray-900 text-sm/6">Mensaje</label>
              <div class="mt-2.5">
                <textarea name="message" v-model="message" id="message" rows="4"
                  class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"></textarea>
              </div>
            </div>

          </div>
          <div class="mt-10">
            <button @click="sendEmail" type="button"
              class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Contactar</button>
          </div>
        </form>
      </div>


    </template>
  </MainLayout>
</template>

<script lang="ts" setup>


import MainLayout from '@/layouts/MainLayout.vue';
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const name = ref('');
const subject = ref('');
const email = ref('');
const message = ref('');
const phone = ref();


const sendEmail = async () => {
  if (!name.value || !email.value || !message.value) {
    alert('Por favor, complete todos los campos.');
    return;
  }
  if (!phone.value) {
    phone.value = 'No se proporciono un número de teléfono';
  }
  if (!subject.value) {
    subject.value = 'Sin asunto proporcionado';
  }
  const templateParams = {
    name: name.value,
    subject: subject.value,
    email: email.value,
    phone: phone.value,
    message: message.value,
    reply_to: email.value
  };

  try {
    await emailjs.send(
      'service_3nl9wkf.', // Reemplaza con tu Service ID
      'template_2q2mc52', // Reemplaza con tu Template ID
      templateParams,
      'fXlbInB-wrOGPiUbH' // Reemplaza con la clave pública que obtuviste
    );
    name.value = '';
    subject.value = '';
    email.value = '';
    message.value = '';

  } catch (error) {
    console.error('Error al enviar el correo:', error);

  }
};
</script>

<style scoped></style>
