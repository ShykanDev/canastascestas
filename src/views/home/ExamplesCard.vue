<template>
  <div
    :class="{ 'bg-slate-50': theme === 'white', 'bg-slate-100': theme === 'black', 'border-b-4 border-sky-800': true }"
    class="flex flex-wrap w-full px-4 space-x-3 min-h-dvh lg:flex-nowrap">
    <section class="flex flex-col w-7/12 justify-evenly font-Poppins">
      <div>
        <p class="text-7xl">Ejemplos de {{ title }}</p>
      </div>
      <div>
        <div class="py-3" v-for="(benefit, index) in benefits as IBenefit[]" :key="index">
          <h2 class="text-xl font-semibold text-purple-900">{{ benefit.title }}</h2>
          <p class="text-gray-700">{{ benefit.description }}</p>
        </div>
      </div>
      <div class="max-w-full mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
        <div class="flex">
          <div class="w-1/3">
            <img alt="A placeholder image showing a generic user profile picture" class="object-cover w-full h-full"
              height="300" :src="profilePicture" width="300" />
          </div>
          <div class="w-2/3 p-4">
            <h2 class="mb-2 text-xl font-semibold text-rose-900">
              {{ profileName }}
            </h2>
            <p class="mb-4 text-gray-700">
              {{ profileDescription }}
            </p>
            <div class="flex items-center">
              <i class="mr-1 text-yellow-500 fas fa-star">
              </i>
              <i class="mr-1 text-yellow-500 fas fa-star">
              </i>
              <i class="mr-1 text-yellow-500 fas fa-star">
              </i>
              <i class="mr-1 text-yellow-500 fas fa-star">
              </i>
              <i class="mr-1 text-yellow-500 fas fa-star-half-alt">
              </i>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="flex flex-col justify-between w-5/12 ">
      <img :src="img1" alt="">
      <img :src="img2" alt="">
    </section>
  </div>
</template>

<script lang="ts" setup>


interface IBenefit {
  title: string;
  description: string;
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
  }
})
</script>

<style scoped></style>
