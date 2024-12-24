<template>
  <section class="flex relative flex-wrap items-center px-3 py-4">
    <img class="absolute h-dvh left-0 right-0 w-full animate-fade" :key="currentPicture" :src="currentPicture" alt="">
    <aside class="absolute h-dvh left-0 right-0 w-full bg-black bg-opacity-70"></aside>
    <article class="w-1/3 animate-fade relative ">
      <h1 class="text-[5rem] font-Poppins font-bold text-white">Canastas de Hierro forjado de la India</h1>
      <div>
        <div class="animate-fade-left animate-delay-100 text-white font-bold"><span>Material de Alta Calidad</span>
        </div>
        <div class="animate-fade-left animate-delay-200 text-white font-bold"><span>Duradero</span></div>
        <div class="animate-fade-left animate-delay-500 text-white font-bold"><span>Alta resistencia</span></div>
      </div>
      <h2></h2>
    </article>
    <article class="w-2/3 relative">
      <!-- Slider main container -->
      <div class="swiper">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide" v-for="img in pictures" :key="img.src"> <img :src="img.src" :alt="img.alt"></div>
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>

        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <!-- If we need scrollbar -->
        <div class="swiper-scrollbar"></div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';
import { onMounted, ref } from 'vue';

// init Swiper:
const swiper = new Swiper();


const currentPicture = ref('https://i.ibb.co/sq5SLzD/78274e89-4653-47ff-a923-e7fb415a17d9.jpg');


const udpateCurrentPicture = () => {
  setInterval(() => {
    for (let i = 0; i < pictures.length; i++) {
      if (currentPicture.value === pictures[i].src) {
        currentPicture.value = pictures[i + 1] ? pictures[i + 1].src : pictures[0].src;
        return;
      }
    }
  }, 2600);
};


onMounted(() => {
  udpateCurrentPicture();
});
const pictures = [
  { src: 'https://i.ibb.co/sq5SLzD/78274e89-4653-47ff-a923-e7fb415a17d9.jpg', alt: 'Image 1' },
  { src: 'https://i.ibb.co/PWb61CM/3b75cdd7-9ef6-40c5-8484-06f389c069c2.jpg', alt: 'Image 1' },
  { src: 'https://i.ibb.co/VwwrP83/a27e387e-aeda-41da-ad1f-38b16d4bfa6f.jpg', alt: 'Image 1' },
  { src: 'https://i.ibb.co/tY8k3Yk/d2d68551-aa9f-4f2e-88c9-e29fc6ee7d25.jpg', alt: 'Image 1' },
  { src: 'https://i.ibb.co/Br0ZfTq/eb83f0d6-6d74-4e50-af65-8bab90bdb1e4.jpg', alt: 'Image 1' },
]

onMounted(() => {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
    effect: 'cards',
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      enabled: true,

    },


  });
});
</script>

<style scoped>
.swiper {
  width: 600px;
  height: 500px;
}

.swiper-button-prev,
.swiper-button-next {
  color: white;
  background: rgba(217, 217, 217, 0.411);
  padding: 30px;
  border-radius: 20%;
}

.swiper-button-next:hover {
  background: rgba(50, 113, 123, 0.813);

}

.swiper-button-prev:hover {
  background: rgba(50, 113, 123, 0.813);
}
</style>
