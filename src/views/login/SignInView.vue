<template>
  <MainLayout>
    <template #main>
      <div class="flex min-h-screen">
        <div class="flex flex-col justify-center w-full max-w-md p-8 bg-white md:w-1/2 lg:w-1/3">
          <div class="flex justify-center mb-8">
            <i class="fas fa-wave-square text-4xl text-purple-600">
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
      </div>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
</script>




</script>

<style scoped></style>
