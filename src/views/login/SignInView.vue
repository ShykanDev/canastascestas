<template>
  <MainLayout>
    <template #main>
      <!-- <div class="flex min-h-screen">
        <div class="flex flex-col justify-center w-full max-w-md p-8 bg-white md:w-1/2 lg:w-1/3">
          <div class="flex justify-center mb-8">
            <i class="text-4xl text-purple-600 fas fa-wave-square">
            </i>
          </div>
          <h2 class="mb-2 text-2xl font-bold text-center">
            Sign in to your account
          </h2>
          <p class="mb-6 text-center text-gray-600">
            Not a member?
            <a class="text-purple-600" href="#">
              Start a 14 day free trial
            </a>
          </p>
          <form>
            <div class="mb-4">
              <label class="block mb-2 text-sm font-medium text-gray-700" for="email">
                Email address
              </label>
              <input
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                id="email" required="true" type="email" />
            </div>
            <div class="mb-4">
              <label class="block mb-2 text-sm font-medium text-gray-700" for="password">
                Password
              </label>
              <input
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                id="password" required="true" type="password" />
            </div>
            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center">
                <input class="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500" id="remember"
                  type="checkbox" />
                <label class="ml-2 text-sm text-gray-700" for="remember">
                  Remember me
                </label>
              </div>
              <a class="text-sm text-purple-600" href="#">
                Forgot password?
              </a>
            </div>
            <button
              class="w-full px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
              type="submit">
              Sign in
            </button>
          </form>
          <div class="my-6 text-center text-gray-500">
            Or continue with
          </div>
          <div class="flex justify-center space-x-4">
            <button
              class="flex items-center px-4 py-2 space-x-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              <img alt="Google logo" class="w-5 h-5" height="20"
                src="https://storage.googleapis.com/a1aa/image/nsp4fjLjjXyHB6j7l602vN2ANF189qiokZYP6OH5OuFKv7eTA.jpg"
                width="20" />
              <span>
                Google
              </span>
            </button>
            <button
              class="flex items-center px-4 py-2 space-x-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              <img alt="GitHub logo" class="w-5 h-5" height="20"
                src="https://storage.googleapis.com/a1aa/image/duiHOPq3K2YkHFPPt6IZixX8RsL7SaYe1DzhaHImvMZLv7eTA.jpg"
                width="20" />
              <span>
                GitHub
              </span>
            </button>
          </div>
        </div>
        <div class="hidden w-full md:block md:w-1/2 lg:w-2/3">
          <img alt="A desk setup with a laptop, keyboard, mouse, wallet, and phone" class="object-cover w-full h-full"
            height="600"
            src="https://storage.googleapis.com/a1aa/image/EeZsmrhmgnSuWa9l7Fk5Q6v73FLmz2R4W56CSFUvoOeSeu7nA.jpg"
            width="800" />
        </div>
      </div> -->
      <div class="w-full max-w-md p-8 bg-white shadow-2xl rounded-xl animate-fade-in">
        <h2 class="mb-8 text-2xl font-bold text-center text-indigo-800">Create an Account</h2>
        <form id="registrationForm" class="space-y-6" novalidate>
          <div>
            <label for="username" class="block mb-2 font-semibold text-indigo-900">Username</label>
            <input type="text" id="username" v-model="name"
              class="w-full px-4 py-2 transition-all duration-300 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800"
              placeholder="Enter your username" required>
            <p class="hidden mt-2 text-sm text-red-500" id="usernameError">Username is required.</p>
          </div>

          <div>
            <label for="email" class="block mb-2 font-semibold text-indigo-900">Email</label>
            <input type="email" id="email" v-model="email"
              class="w-full px-4 py-2 transition-all duration-300 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800"
              placeholder="Enter your email" required>
            <p class="hidden mt-2 text-sm text-red-500" id="emailError">Please enter a valid email.</p>
          </div>

          <div>
            <label for="password" class="block mb-2 font-semibold text-indigo-900">Password</label>
            <input type="password" id="password" v-model="password"
              class="w-full px-4 py-2 transition-all duration-300 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800"
              placeholder="Enter your password" required>
            <p class="hidden mt-2 text-sm text-red-500" id="passwordError">Password is required.</p>
          </div>

          <div>
            <label for="confirm-password" class="block mb-2 font-semibold text-indigo-900">Confirm Password</label>
            <input type="password" id="confirm-password" v-model="cpassword"
              class="w-full px-4 py-2 transition-all duration-300 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800"
              placeholder="Confirm your password" required>
            <p class="hidden mt-2 text-sm text-red-500" id="confirmPasswordError">Passwords do not match.</p>
          </div>

          <button @click.prevent="handleCreateAccount" type="submit"
            class="w-full bg-indigo-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-indigo-800 focus:ring-offset-2 transition-all duration-300 transform hover:scale-[1.02]">
            Register
          </button>
        </form>

        <p class="mt-6 text-center text-gray-600">
          Already have an account?
          <a href="https://tailwindflex.com/@nejaa-badr/login-form-12"
            class="font-semibold text-indigo-800 transition-colors duration-300 hover:text-blue-900">Sign In</a>
        </p>
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
