<template>
  <div class="flex items-start max-w-[40%] p-6 mx-auto space-x-4 bg-white rounded-lg shadow-md">

    <div>
      <div class="text-lg font-bold text-gray-900">
        {{ titleCard }}
      </div>
      <p class="mt-2 text-gray-700">
        {{ comment }}
      </p>
      <div class="flex items-center mt-4">
        <div class="font-semibold text-gray-900">
          {{ userName }}
        </div>
        <div class="flex items-center ml-4">
          <i v-for="i in rating" :key="i" class="text-blue-500 fas fa-star">
          </i>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  titleCard: {
    type: String,
    required: true,
    default: 'Card Title'
  },
  comment: {
    type: String,
    required: true,
    default: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Eos beatae maiores nemo error quisquam qui distinctio adipisci illum incidunt accusantium!'
  },
  userName: {
    type: String,
    required: true,
    default: 'John Doe'
  },
  rating: {
    type: Number,
    required: true,
    default: 5
  }
})
</script>

<style scoped></style>
