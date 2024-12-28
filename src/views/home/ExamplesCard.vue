<template>
  <div
    :class="{ 'bg-slate-50': theme === 'white', 'bg-slate-100': theme === 'black', 'border-b-4 border-sky-800': true }"
    class="flex flex-wrap w-full px-4 space-x-3 min-h-dvh lg:flex-nowrap">
    <section class="flex flex-col w-full md:w-7/12 justify-evenly font-Poppins">
      <div class="flex flex-col">
        <p class="text-3xl md:text-7xl">Ejemplos de {{ title }}</p>
        <!-- <div class="flex space-x-1">
          <img :src="img1India" class="rounded-3xl w-96">
          <img :src="img2India" class="rounded-3xl w-96">
        </div> -->
        <div class="flex space-x-1">
          <!-- Primer imagen con hover -->
          <div class="relative group">
            <img :src="img1India" class="rounded-3xl w-96">
            <div
              class="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100">
              <h3 class="text-lg font-bold">{{ titleIndian1 }}</h3>
              <p class="mt-2 text-sm">{{ descIndian1 }}</p>
              <p class="mt-2">{{ infoIndian1 }}</p>
            </div>
          </div>

          <!-- Segunda imagen con hover -->
          <div class="relative group">
            <img :src="img2India" class="rounded-3xl w-96">
            <div
              class="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100">
              <h3 class="text-lg font-bold">{{ titleIndian2 }}</h3>
              <p class="mt-2 text-sm">{{ descIndian2 }}</p>
              <p class="mt-2">{{ infoIndian2 }}</p>
            </div>
          </div>
        </div>

      </div>
      <div>
        <div class="py-3" v-for="(benefit, index) in benefits as IBenefit[]" :key="index">
          <h2 class="text-xl font-semibold text-purple-900">{{ benefit.title }}</h2>
          <p class="text-gray-700">{{ benefit.description }}</p>
        </div>
      </div>
      <div class="max-w-full mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
        <div class="flex">
          <div class="w-1/6">
            <img alt="A placeholder image showing a generic user profile picture" class="object-cover w-full h-auto"
              height="100" :src="profilePicture" width="100" />
          </div>
          <div class="w-5/6 p-4">
            <h2 class="mb-2 text-xl font-semibold text-rose-900">
              {{ profileName }}
            </h2>
            <p class="mb-4 text-gray-700">
              {{ profileDescription }}
            </p>
            <div class="flex items-center">
              <i class="mr-1 text-yellow-500 fas fa-star"></i>
              <i class="mr-1 text-yellow-500 fas fa-star"></i>
              <i class="mr-1 text-yellow-500 fas fa-star"></i>
              <i class="mr-1 text-yellow-500 fas fa-star"></i>
              <i class="mr-1 text-yellow-500 fas fa-star-half-alt"></i>
            </div>
          </div>
        </div>


      </div>
    </section>
    <section class="flex flex-row justify-between w-5/12 mt-4 md:flex-col md:mt-0">
      <img :src="img1" alt="">
      <img :src="img2" alt="">
    </section>
  </div>
</template>



<script lang="ts" setup>
interface IBenefit {
  title: string,
  description: string
}
const props = defineProps({
  title: {
    type: String,
    default: 'Card Title',
  },
  benefits: {
    type: Array,
    default: () => [
      {
        title: 'Benefit 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos beatae maiores nemo error quisquam qui distinctio adipisci illum incidunt accusantium!',
      },
      {
        title: 'Benefit 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos beatae maiores nemo error quisquam qui distinctio adipisci illum incidunt accusantium!',
      },
      {
        title: 'Benefit 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos beatae maiores nemo error quisquam qui distinctio adipisci illum incidunt accusantium!',
      }
    ],
  },
  profilePicture: {
    type: String,
    default: 'https://storage.googleapis.com/a1aa/image/WZz4we3MqkxleUzDo2tSZ3puDFkTaNQf7mot7mV8xq7Jio8nA.jpg'
  },
  profileName: {
    type: String,
    default: 'John Doe'
  },
  profileDescription: {
    type: String,
    default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.'
  },
  theme: {
    type: String,
    default: 'white'
  },
  img1: {
    type: String,
    default: 'https://i.ibb.co/dMn1frd/oval-Lg-2.png'
  },
  img2: {
    type: String,
    default: 'https://i.ibb.co/9Hk009S/ovalMd.png'
  },
  titleIndian1: {
    type: String,
    default: 'Agni'
  },
  titleIndian2: {
    type: String,
    default: 'Brahma'
  },
  descIndian1: {
    type: String,
    default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos beatae maiores nemo error quisquam qui distinctio adipisci illum incidunt accusantium!'
  },
  descIndian2: {
    type: String,
    default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos beatae maiores nemo error quisquam qui distinctio adipisci illum incidunt accusantium!'
  },
  infoIndian1: {
    type: String,
    default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos beatae maiores nemo error quisquam qui distinctio adipisci illum incidunt accusantium!'
  },
  infoIndian2: {
    type: String,
    default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos beatae maiores nemo error quisquam qui distinctio adipisci illum incidunt accusantium!'
  },
  img1India: {
    type: String,
    default: 'https://i.ibb.co/Zf2v5bL/agni.jpg'
  },
  img2India: {
    type: String,
    default: 'https://i.ibb.co/pr7NQ9h/brahma.jpg'
  }

})
</script>

<style scoped></style>
