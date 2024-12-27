<template>
  <section class="relative flex items-center w-full h-full px-3 py-4 overflow-hidden">
    <img class="absolute top-0 bottom-0 left-0 right-0 w-full h-dvh animate-fade" :key="currentPicture"
      :src="currentPicture" alt="">
    <img class="absolute top-[100%] bottom-0 left-0 right-0 w-full h-dvh animate-fade" :key="currentPicture"
      :src="currentPicture" alt="">
    <aside class="absolute top-0 bottom-0 left-0 right-0 w-full overflow-hidden bg-black h-dvh bg-opacity-70"></aside>
    <section class="flex flex-col items-center justify-center w-full md:flex-row">
      <article class="relative w-full md:w-1/3 animate-fade">
        <!-- <h1
        class="text-[5rem] font-Poppins font-bold bg-gradient-to-bl from-yellow-300 via-yellow-500 to-yellow-700 text-transparent bg-clip-text drop-shadow-lg">
        Canastas de Hierro forjado de la India
      </h1> -->
        <h1 class="golden-text">
          Canastas de Hierro forjado de la India
        </h1>

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
      <article class="relative w-full md:w-2/3">
        <!-- Slider main container -->
        <div class="swiper">
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="relative swiper-slide" v-for="img in pictures" :key="img.src">
              <img class="object-cover w-full h-full rounded-md" :src="img.src" :alt="img.alt">
              <div
                class="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-full bg-black bg-opacity-0">
                <article
                  class="flex flex-col items-center justify-center w-[95%] h-[95%] rounded-lg shadow-2xl bg-white bg-opacity-90">
                  <!-- Título con ícono -->

                  <!-- Imagen del producto -->
                  <img :src="img.img" :alt="img.alt" :class="{ 'w-full': img.title === 'Gif' }"
                    class="mb-4 bg-white border-4 border-yellow-50 rounded-lg shadow-lg w-[265px] hover:scale-150 ease-in-out duration-300 transition-transform">
                  <!-- Precios -->
                  <div v-show="img.title !== 'Gif'" class="flex items-center justify-center gap-2 space-x-3">
                    <h3 class="flex items-center gap-2 text-lg text-gray-500 line-through font-Poppins">
                      <i class="fas fa-tag"></i> ${{ img.originalPrice }}
                    </h3>
                    <h3 class="flex items-center gap-2 text-4xl font-bold text-center text-green-600 font-Poppins">
                      <i class="text-red-600 fas fa-fire"></i> ${{ img.discountPrice }}
                    </h3>
                  </div>
                  <!-- Detalles adicionales -->
                  <div v-show="img.title !== 'Gif'"
                    class="flex items-center mt-4 space-x-2 text-sm text-gray-600 font-Poppins">
                    <div class="flex items-center gap-2">
                      <span class="mr-2">{{ img.title }} {{ img.size }}</span>
                      <i class="text-blue-500 fas fa-ruler-combined"></i>
                      <span>Diámetro: {{ img.diameter }}</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <i class="text-blue-500 fas fa-arrows-alt-v"></i>
                      <span>Altura: {{ img.height }}</span>
                    </div>
                  </div>
                  <!-- Botón -->
                  <RouterLink :to="{ name: 'contact' }"
                    class="px-6 py-2 mt-6 text-lg font-bold text-white transition-transform duration-300 bg-blue-600 rounded-full hover:bg-blue-800 hover:scale-105">
                    <i class="fas fa-shopping-cart"></i> Comprar ahora
                  </RouterLink>
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

// gif imports
import gif1 from '@/assets/gifCr1.gif'
import gif2 from '@/assets/gifCr2.gif'
import gif3 from '@/assets/gifCr3.gif'
import gif4 from '@/assets/Cr4.gif'
import gif5 from '@/assets/Cr5.gif'
import gif6 from '@/assets/Cr6.gif'
import gif7 from '@/assets/Cr7.gif'
import gif8 from '@/assets/Cr8.gif'
import gif9 from '@/assets/final.gif'

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

const pictures = [
  {
    src: 'https://i.ibb.co/Mk5PnKn/ba31bc18-9deb-46b4-b33d-cfe72f5cada0.jpg',
    alt: 'Image 1',
    size: 'Grande',
    title: 'Canasta Circular',
    originalPrice: '990',
    discountPrice: '790',
    diameter: '35.4cm',
    height: '14.4cm',
    img: 'https://i.ibb.co/1KYY5DQ/circle5-removebg-preview.png',
  },
  {
    src: 'https://i.ibb.co/tY8k3Yk/d2d68551-aa9f-4f2e-88c9-e29fc6ee7d25.jpg',
    alt: 'Image 1',
    size: 'Chica',
    title: 'Canasta Ovalada',
    originalPrice: '750',
    discountPrice: '590',
    diameter: '20cm',
    height: '8cm',
    img: 'https://i.ibb.co/dWdzbty/oval6-removebg-preview.png',
  },
  {
    src: 'https://i.ibb.co/tY8k3Yk/d2d68551-aa9f-4f2e-88c9-e29fc6ee7d25.jpg',
    alt: 'Image 1',
    size: 'Chica',
    title: 'Gif',
    originalPrice: 'null',
    discountPrice: 'null',
    diameter: 'null',
    height: 'null',
    img: gif1,
  },
  {
    src: 'https://i.ibb.co/Br0ZfTq/eb83f0d6-6d74-4e50-af65-8bab90bdb1e4.jpg',
    alt: 'Image 1',
    size: 'Mediana',
    title: 'Canasta Circular',
    originalPrice: '890',
    discountPrice: '690',
    diameter: '25cm',
    height: '9.5cm',
    img: 'https://i.ibb.co/9hvztYN/circle6-removebg-preview-2.png',
  },
  {
    src: 'https://i.ibb.co/sq5SLzD/78274e89-4653-47ff-a923-e7fb415a17d9.jpg',
    alt: 'Image 1',
    size: 'Grande',
    title: 'Canasta Ovalada',
    originalPrice: '990',
    discountPrice: '790',
    diameter: '37cm',
    height: '14cm',
    img: 'https://i.ibb.co/jGZQBk5/oval7-removebg-preview.png',
  },
  {
    src: 'https://i.ibb.co/tY8k3Yk/d2d68551-aa9f-4f2e-88c9-e29fc6ee7d25.jpg',
    alt: 'Image 1',
    size: 'Chica',
    title: 'Gif',
    originalPrice: 'null',
    discountPrice: 'null',
    diameter: 'null',
    height: 'null',
    img: gif2,
  },
  {
    src: 'https://i.ibb.co/dc9pV7X/d8afe1dc-19a5-4e10-b747-89f123c8261d.jpg',
    alt: 'Image 1',
    size: 'Chica',
    title: 'Canasta Circular',
    originalPrice: '750',
    discountPrice: '590',
    diameter: '15.5cm',
    height: '16cm',
    img: 'https://i.ibb.co/bvLKnw5/circle4-removebg-preview-1.png',
  },
  {
    src: 'https://i.ibb.co/Pj062yF/d9321dc4-0bdf-4d47-a8df-55df833ecc4e.jpg',
    alt: 'Image 1',
    title: 'Canasta Circular',
    size: 'Chica',
    originalPrice: '750',
    discountPrice: '590',
    diameter: '20cm',
    height: '8cm',
    img: 'https://i.ibb.co/BZqDhK4/circle1-removebg-preview.png',
  },
  {
    src: 'https://i.ibb.co/tY8k3Yk/d2d68551-aa9f-4f2e-88c9-e29fc6ee7d25.jpg',
    alt: 'Image 1',
    size: 'Chica',
    title: 'Gif',
    originalPrice: 'null',
    discountPrice: 'null',
    diameter: 'null',
    height: 'null',
    img: gif3,
  },
  {
    src: 'https://i.ibb.co/PWb61CM/3b75cdd7-9ef6-40c5-8484-06f389c069c2.jpg',
    alt: 'Image 1',
    title: 'Canasta Ovalada',
    size: 'Mediana',
    originalPrice: '890',
    discountPrice: '690',
    diameter: '25cm',
    height: '9.5cm',
    img: 'https://i.ibb.co/28bFv38/oval1-removebg-preview.png',
  },
  {
    src: 'https://i.ibb.co/VwwrP83/a27e387e-aeda-41da-ad1f-38b16d4bfa6f.jpg',
    alt: 'Image 1',
    title: 'Canasta Circular',
    size: 'Grande',
    originalPrice: '990',
    discountPrice: '790',
    diameter: '37cm',
    height: '14cm',
    img: 'https://i.ibb.co/BqDwJjQ/circle2-removebg-preview.png',
  },
  {
    src: 'https://i.ibb.co/tY8k3Yk/d2d68551-aa9f-4f2e-88c9-e29fc6ee7d25.jpg',
    alt: 'Image 1',
    size: 'Chica',
    title: 'Gif',
    originalPrice: 'null',
    discountPrice: 'null',
    diameter: 'null',
    height: 'null',
    img: gif4,
  },
  {
    src: 'https://i.ibb.co/tY8k3Yk/d2d68551-aa9f-4f2e-88c9-e29fc6ee7d25.jpg',
    alt: 'Image 1',
    size: 'Chica',
    title: 'Canasta Ovalada',
    originalPrice: '750',
    discountPrice: '590',
    diameter: '15.5cm',
    height: '16cm',
    img: 'https://i.ibb.co/ZKtz9r7/oval2-removebg-preview.png',
  },
  {
    src: 'https://i.ibb.co/Br0ZfTq/eb83f0d6-6d74-4e50-af65-8bab90bdb1e4.jpg',
    alt: 'Image 1',
    size: 'Mediana',
    title: 'Canasta Circular',
    originalPrice: '890',
    discountPrice: '690',
    diameter: '18.75cm', // Aproximado
    height: '18cm',    // Aproximado
    img: 'https://i.ibb.co/Tqq966w/circle3-removebg-preview.png',
  },
  {
    src: 'https://i.ibb.co/tY8k3Yk/d2d68551-aa9f-4f2e-88c9-e29fc6ee7d25.jpg',
    alt: 'Image 1',
    size: 'Chica',
    title: 'Gif',
    originalPrice: 'null',
    discountPrice: 'null',
    diameter: 'null',
    height: 'null',
    img: gif5,
  },
  {
    src: 'https://i.ibb.co/sq5SLzD/78274e89-4653-47ff-a923-e7fb415a17d9.jpg',
    alt: 'Image 1',
    size: 'Grande',
    title: 'Canasta Ovalada',
    originalPrice: '990',
    discountPrice: '790',
    diameter: '22cm',
    height: '20cm',
    img: 'https://i.ibb.co/1bc6tLB/oval3-removebg-preview.png',
  },
  {
    src: 'https://i.ibb.co/dc9pV7X/d8afe1dc-19a5-4e10-b747-89f123c8261d.jpg',
    alt: 'Image 1',
    size: 'Chica',
    title: 'Canasta Circular',
    originalPrice: '750',
    discountPrice: '590',
    diameter: '23.5cm',
    height: '9.6cm',
    img: 'https://i.ibb.co/bvLKnw5/circle4-removebg-preview-1.png',
  },
  {
    src: 'https://i.ibb.co/tY8k3Yk/d2d68551-aa9f-4f2e-88c9-e29fc6ee7d25.jpg',
    alt: 'Image 1',
    size: 'Chica',
    title: 'Gif',
    originalPrice: 'null',
    discountPrice: 'null',
    diameter: 'null',
    height: 'null',
    img: gif6,
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
    img: 'https://i.ibb.co/RgcMKkd/oval5-removebg-preview.png',
  },
  {
    src: 'https://i.ibb.co/GVFZTT7/a5694e6f-848e-4c86-9a55-67178032ac39.jpg',
    alt: 'Image 1',
    size: 'Mediana',
    title: 'Canasta Ovalada',
    originalPrice: '890',
    discountPrice: '690',
    diameter: '18.75cm', // Aproximado
    height: '18cm',    // Aproximado
    img: 'https://i.ibb.co/jM84MCV/oval8-removebg-preview-1.png',
  },
  {
    src: 'https://i.ibb.co/tY8k3Yk/d2d68551-aa9f-4f2e-88c9-e29fc6ee7d25.jpg',
    alt: 'Image 1',
    size: 'Chica',
    title: 'Gif',
    originalPrice: 'null',
    discountPrice: 'null',
    diameter: 'null',
    height: 'null',
    img: gif7,
  },
  {
    src: 'https://i.ibb.co/Mk5PnKn/ba31bc18-9deb-46b4-b33d-cfe72f5cada0.jpg',
    alt: 'Image 1',
    size: 'Grande',
    title: 'Canasta Ovalada',
    originalPrice: '990',
    discountPrice: '790',
    diameter: '22cm',
    height: '20cm',
    img: 'https://i.ibb.co/5MYt938/oval8-removebg-preview.png',
  },
  {
    src: 'https://i.ibb.co/tY8k3Yk/d2d68551-aa9f-4f2e-88c9-e29fc6ee7d25.jpg',
    alt: 'Image 1',
    size: 'Chica',
    title: 'Gif',
    originalPrice: 'null',
    discountPrice: 'null',
    diameter: 'null',
    height: 'null',
    img: gif8,
  },
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
    src: 'https://i.ibb.co/tY8k3Yk/d2d68551-aa9f-4f2e-88c9-e29fc6ee7d25.jpg',
    alt: 'Image 1',
    size: 'Chica',
    title: 'Gif',
    originalPrice: 'null',
    discountPrice: 'null',
    diameter: 'null',
    height: 'null',
    img: gif9,
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
      delay: 5500,
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
  background: rgba(77, 77, 77, 0.411);
  padding: 30px;
  border-radius: 20%;
}

.swiper-button-next:hover {
  background: rgba(50, 113, 123, 0.813);

}

.swiper-button-prev:hover {
  background: rgba(50, 113, 123, 0.813);
}

.golden-text {
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 5rem;
  background: linear-gradient(90deg, #887400, #ffe791, #995400);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0px 1px 2px rgba(255, 255, 255, 0.2),
    0px 2px 4px rgba(255, 215, 0, 0.3),
    0px 4px 8px rgba(255, 165, 0, 0.4);
}

@media screen and (max-width: 600px) {
  .swiper {
    margin-top: 30px;
    width: 100%;
    height: 530px;
    display: flex;
    justify-content: center;
  }

  .golden-text {
    font-size: 3rem;
  }
}
</style>
