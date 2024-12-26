<template>
  <section class="relative flex flex-wrap items-center px-3 py-4 overflow-hidden">
    <img class="absolute left-0 right-0 w-full h-dvh animate-fade" :key="currentPicture" :src="currentPicture" alt="">
    <aside class="absolute left-0 right-0 w-full overflow-hidden bg-black h-dvh bg-opacity-70"></aside>
    <article class="relative w-1/3 animate-fade ">
      <h1 class="text-[5rem] font-Poppins font-bold text-white">Canastas de Hierro forjado de la India</h1>
      <!-- <div>
        <div class="font-bold text-white animate-fade-left animate-delay-100"><span>Material de Alta Calidad</span>
        </div>
        <div class="font-bold text-white animate-fade-left animate-delay-200"><span>Duradero</span></div>
        <div class="font-bold text-white animate-fade-left animate-delay-500"><span>Alta resistencia</span></div>
      </div> -->
      <RouterLink :to="{ name: 'contact' }"
        class="flex items-center justify-center px-4 py-4 text-2xl font-bold text-white transition duration-300 ease-in-out bg-purple-500 rounded-full cursor-pointer max-w-64 hover:bg-purple-600">
        <i class="mr-2 fas fa-shopping-cart"></i>
        Comprar Ahora
      </RouterLink>
    </article>
    <article class="relative w-2/3">
      <!-- Slider main container -->
      <div class="swiper">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="relative swiper-slide" v-for="img in pictures" :key="img.src">
            <img class="rounded-md" :src="img.src" :alt="img.alt">
            <div
              class="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full bg-black bg-opacity-0">
              <article class="flex flex-col items-center p-2 bg-white rounded-lg shadow-2xl bg-opacity-90">
                <h2 class="text-xl font-semibold text-center font-Poppins">{{ img.title }} {{ img.size }}</h2>
                <img
                  :class="{ 'w-[220px]': img.size === 'Grande', 'w-[130px]': img.size === 'Mediana', 'w-[100px]': img.size === 'Chica', 'rotate-12': img.size === 'Grande' && img.title === 'Canasta Circular', 'transform scale-x-[-1]': img.size === 'Grande' && img.title === 'Canasta Cuadrada', 'w-[190px]': img.size === 'Grande' && img.title === 'Canasta Cuadrada' }"
                  :src="img.img" :alt="img.alt">
                <div class="flex flex-col items-center justify-center gap-2">
                  <h3 class="text-xl text-center line-through font-Poppins">${{ img.originalPrice }}</h3>
                  <h3 class="text-3xl font-bold text-center font-Poppins text-cyan-950">${{ img.discountPrice }}</h3>
                  <div class="flex justify-between text-sm font-Poppins">Diametro: {{ img.diameter }} Altura: {{
                    img.height }}
                  </div>
                </div>
              </article>
            </div>
          </div>
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
// Importing images
// SM images
import crSm from '@/assets/crSm.png'
import squareSm from '@/assets/squareSm.png'
import ovalSm from '@/assets/ovalSm.png'

// MD images
import crMd from '@/assets/crMd.png'
import squareMd from '@/assets/squareMd.png'
import ovalMd from '@/assets/ovalMd.png'

// LG images
import crLg from '@/assets/crLG.png'
import squareLg from '@/assets/squareLg.png'
import ovalLg from '@/assets/ovalLg.png'


// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router'

// init Swiper:
// const swiper = new Swiper();


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
// const pictures = [
//   {
//     src: 'https://i.ibb.co/sq5SLzD/78274e89-4653-47ff-a923-e7fb415a17d9.jpg', alt: 'Image 1',
//     title: 'Canasta Circular',
//     size: 'Chica',
//     originalPrice: '750',
//     discountPrice: '590',
//     diameter: '37cm',
//     height: '8cm',
//     img: crSm
//   },
//   {
//     src: 'https://i.ibb.co/PWb61CM/3b75cdd7-9ef6-40c5-8484-06f389c069c2.jpg', alt: 'Image 1',
//     title: 'Canasta Circular',
//     size: 'Mediana',
//     originalPrice: '890',
//     discountPrice: '690',
//     diameter: '25cm',
//     height: '9.5cm',
//     img: crMd,
//   },
//   {
//     src: 'https://i.ibb.co/VwwrP83/a27e387e-aeda-41da-ad1f-38b16d4bfa6f.jpg', alt: 'Image 1',
//     size: 'Grande',
//     title: 'Canasta Circular',
//     originalPrice: '990',
//     discountPrice: '790',
//     diameter: '37cm',
//     height: '14cm',
//     img: crLg,
//   },
//   {
//     src: 'https://i.ibb.co/tY8k3Yk/d2d68551-aa9f-4f2e-88c9-e29fc6ee7d25.jpg', alt: 'Image 1',
//     size: 'Chica',
//     title: 'Canasta Cuadrada',
//     originalPrice: '750',
//     discountPrice: '590',
//     diameter: '',
//     height: '',
//     img: ''

//   },
//   {
//     src: 'https://i.ibb.co/Br0ZfTq/eb83f0d6-6d74-4e50-af65-8bab90bdb1e4.jpg', alt: 'Image 1',
//     size: 'Mediana',
//     title: 'Canasta Cuadrada',
//     originalPrice: '890',
//     discountPrice: '690',
//     diameter: '',
//     height: '',
//     img: ''

//   },
// ]
const pictures = [
  {
    src: 'https://i.ibb.co/Pj062yF/d9321dc4-0bdf-4d47-a8df-55df833ecc4e.jpg',
    alt: 'Image 1',
    title: 'Canasta Circular',
    size: 'Chica',
    originalPrice: '750',
    discountPrice: '590',
    diameter: '20cm',
    height: '8cm',
    img: crSm
  },
  {
    src: 'https://i.ibb.co/PWb61CM/3b75cdd7-9ef6-40c5-8484-06f389c069c2.jpg',
    alt: 'Image 1',
    title: 'Canasta Circular',
    size: 'Mediana',
    originalPrice: '890',
    discountPrice: '690',
    diameter: '25cm',
    height: '9.5cm',
    img: crMd,
  },
  {
    src: 'https://i.ibb.co/VwwrP83/a27e387e-aeda-41da-ad1f-38b16d4bfa6f.jpg',
    alt: 'Image 1',
    size: 'Grande',
    title: 'Canasta Circular',
    originalPrice: '990',
    discountPrice: '790',
    diameter: '37cm',
    height: '14cm',
    img: crLg,
  },
  {
    src: 'https://i.ibb.co/tY8k3Yk/d2d68551-aa9f-4f2e-88c9-e29fc6ee7d25.jpg',
    alt: 'Image 1',
    size: 'Chica',
    title: 'Canasta Cuadrada',
    originalPrice: '750',
    discountPrice: '590',
    diameter: '15.5cm',
    height: '16cm',
    img: squareSm
  },
  {
    src: 'https://i.ibb.co/Br0ZfTq/eb83f0d6-6d74-4e50-af65-8bab90bdb1e4.jpg',
    alt: 'Image 1',
    size: 'Mediana',
    title: 'Canasta Cuadrada',
    originalPrice: '890',
    discountPrice: '690',
    diameter: '18.75cm', // Aproximado
    height: '18cm',    // Aproximado
    img: squareMd
  },
  {
    src: 'https://i.ibb.co/sq5SLzD/78274e89-4653-47ff-a923-e7fb415a17d9.jpg',
    alt: 'Image 1',
    size: 'Grande',
    title: 'Canasta Cuadrada',
    originalPrice: '990',
    discountPrice: '790',
    diameter: '22cm',
    height: '20cm',
    img: squareLg
  },
  {
    src: 'https://i.ibb.co/dc9pV7X/d8afe1dc-19a5-4e10-b747-89f123c8261d.jpg',
    alt: 'Image 1',
    size: 'Chica',
    title: 'Canasta Ovalada',
    originalPrice: '750',
    discountPrice: '590',
    diameter: '23.5cm',
    height: '9.6cm',
    img: ovalSm
  },
  {
    src: 'https://i.ibb.co/GVFZTT7/a5694e6f-848e-4c86-9a55-67178032ac39.jpg',
    alt: 'Image 1',
    size: 'Mediana',
    title: 'Canasta Ovalada',
    originalPrice: '890',
    discountPrice: '690',
    diameter: '29.5', // Aproximado
    height: '12cm',    // Aproximado
    img: ovalMd
  },
  {
    src: 'https://i.ibb.co/Mk5PnKn/ba31bc18-9deb-46b4-b33d-cfe72f5cada0.jpg',
    alt: 'Image 1',
    size: 'Grande',
    title: 'Canasta Ovalada',
    originalPrice: '990',
    discountPrice: '790',
    diameter: '35.4cm',
    height: '14.4cm',
    img: ovalLg
  },
];

onMounted(() => {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 4500,
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
