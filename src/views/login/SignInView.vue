<template>
  <MainLayout>
    <template #main>

      <div class="flex flex-col min-h-screen md:flex-row animate-fade">
        <div class="flex justify-center w-full p-8 bg-white md:w-1/3 rounded-xl animate-fade-in">
          <div class="w-full max-w-md">
            <h2 class="mb-8 text-2xl font-bold text-center text-indigo-800">
              Crear una Cuenta
            </h2>
            <form class="space-y-6" id="registrationForm">
              <div>
                <label class="block mb-2 font-semibold text-indigo-900" for="username">
                  Nombre de Usuario
                </label>
                <input
                  class="w-full px-4 py-2 transition-all duration-300 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800"
                  id="username" placeholder="Ingresa tu nombre de usuario" required="true" type="text" v-model="name" />
                <p class="hidden mt-2 text-sm text-red-500" id="usernameError">
                  El nombre de usuario es obligatorio.
                </p>
              </div>
              <div>
                <label class="block mb-2 font-semibold text-indigo-900" for="email">
                  Correo Electrónico
                </label>
                <input
                  class="w-full px-4 py-2 transition-all duration-300 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800"
                  id="email" placeholder="Ingresa tu correo electrónico" required="true" type="email" v-model="email" />
                <p class="hidden mt-2 text-sm text-red-500" id="emailError">
                  Por favor, ingresa un correo electrónico válido.
                </p>
              </div>
              <div>
                <label class="block mb-2 font-semibold text-indigo-900" for="password">
                  Contraseña
                </label>
                <input
                  class="w-full px-4 py-2 transition-all duration-300 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800"
                  id="password" placeholder="Ingresa tu contraseña" required="true" type="password"
                  v-model="password" />
                <p class="hidden mt-2 text-sm text-red-500" id="passwordError">
                  La contraseña es obligatoria.
                </p>
              </div>
              <div>
                <label class="block mb-2 font-semibold text-indigo-900" for="confirm-password">
                  Confirmar Contraseña
                </label>
                <input
                  class="w-full px-4 py-2 transition-all duration-300 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800"
                  id="confirm-password" placeholder="Confirma tu contraseña" required="true" type="password"
                  v-model="cpassword" />
                <p class="hidden mt-2 text-sm text-red-500" id="confirmPasswordError">
                  Las contraseñas no coinciden.
                </p>
              </div>
              <button @click.prevent="handleCreateAccount"
                class="w-full bg-indigo-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-indigo-800 focus:ring-offset-2 transition-all duration-300 transform hover:scale-[1.02]"
                type="submit">
                Registrarse
              </button>
            </form>
            <p class="mt-6 text-center text-gray-600">
              ¿Ya tienes una cuenta?
              <a class="font-semibold text-indigo-800 transition-colors duration-300 hover:text-blue-900"
                href="https://tailwindflex.com/@nejaa-badr/login-form-12">
                Iniciar Sesión
              </a>
            </p>
          </div>
        </div>
        <div class="items-center justify-center hidden w-full bg-gray-200 md:w-2/3 md:flex">
          <img
            alt="Una imagen de marcador de posición con dimensiones 600x800, mostrando un fondo gris simple con el texto '600x800' en el centro"
            class="h-full" src="../../assets/pulhkariv2.webp" />
        </div>
      </div>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { ref } from 'vue';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth'
const auth = getAuth();

const name = ref('')
const email = ref('')
const password = ref('')
const cpassword = ref('')


const handleCreateAccount = async () => {
  if (!name.value) {

    return
  } else {
  }

  if (!email.value) {
    return
  } else {
  }

  if (!password.value) {
    return
  } else {
  }

  if (password.value !== cpassword.value) {
    return
  } else {
    try {
      const credentials = await createUserWithEmailAndPassword(auth, email.value, password.value);
      if (credentials.user) {
        console.log(credentials.user);
        updateProfile(credentials.user, {
          displayName: name.value
        })
      }
      alert('Your account has been created successfully')
    } catch (error) {
      alert(`Error while creating your account ${error}`)
    }
  }
}

</script>






<style scoped></style>
