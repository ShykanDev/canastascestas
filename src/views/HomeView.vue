<template>
  <MainLayout>
    <template #main>
      <HomeSlider />
      <div class="my-3" id="ejemplos"></div>
      <ExamplesCard v-for="obj in data" :key="obj.title" :benefits="obj.benefits" :title="obj.title" class="py-9"
        :profile-picture="obj.profilePicture" :profile-name="obj.profileName"
        :profile-description="obj.profileDescription" :img1="obj.img1" :img2="obj.img2" />
      <CTACard1 />
      <CTACard2 />
      <section class="container px-4 py-8 mx-auto font-Poppins">
        <h2 class="mb-6 text-3xl font-bold text-left text-gray-400">Más de nuestros productos</h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
          <!-- Ad 1: Cyanprash -->
          <div class="p-6 bg-white rounded-lg shadow-md">
            <img src="https://chyawanprash.com.mx/images/explosion-chyawanprash.png" alt="Cyanprash"
              class="w-full h-auto mb-4 rounded">
            <h3 class="mb-2 text-xl font-bold text-gray-800">Cyanprash</h3>
            <p class="text-gray-600">Producto 100% natural, libre de conservadores y químicos. Ingredientes y procesos
              directos de la India.</p>
            <a href="https://chyawanprash.com.mx"
              class="inline-block px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600">Más Información</a>
          </div>

          <!-- Ad 2: Pasta Neem -->
          <div class="p-6 bg-white rounded-lg shadow-md">
            <img src="https://pastaneem.com/img/wpp16.png" alt="Pasta Neem" class="w-full h-auto mb-4 rounded">
            <h3 class="mb-2 text-xl font-bold text-gray-800">Pasta Neem</h3>
            <p class="text-gray-600">Nuestra pasta es natural a base de NEEM, un árbol originario de la India con
              múltiples propiedades benéficas.</p>
            <a href="https://pastaneem.com"
              class="inline-block px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600">Más Información</a>
          </div>

          <!-- Ad 3: Jabón Neemo Prasadam -->
          <div class="p-6 bg-white rounded-lg shadow-md">
            <img src="https://http2.mlstatic.com/D_NQ_NP_977173-MLM42046641384_062020-O.webp" alt="Jabón Neemo Prasadam"
              class="w-full h-auto mb-4 rounded">
            <h3 class="mb-2 text-xl font-bold text-gray-800">Jabón Neemo Prasadam</h3>
            <p class="text-gray-600">Jabón natural a base de aceite de NEEM, libre de grasas animales y con múltiples
              beneficios para la piel.</p>
            <a href="https://articulo.mercadolibre.com.mx/MLM-781290580-jabon-neem-prasadam-india-ayurveda-natural-_JM"
              class="inline-block px-4 py-2 mt-4 text-white bg-yellow-500 rounded hover:bg-yellow-600">Más
              Información</a>
          </div>
        </div>
      </section>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import HomeSlider from '@/components/home/HomeSlider.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import ExamplesCard from './home/ExamplesCard.vue';
import CTACard1 from './cta/CTACard1.vue';
import CTACard2 from './cta/CTACard2.vue';




const data = [
  {
    title: 'Canasta Ovalada',
    benefits: [
      {
        title: 'Frutas Frescas',
        description: 'La canasta ovalada es perfecta para guardar frutas frescas y mantenerlas organizadas. Su diseño permite una fácil visualización y acceso a las frutas, asegurando que siempre estén a mano cuando las necesites. Además, su material resistente y fácil de limpiar garantiza que tus frutas se mantengan frescas y en óptimas condiciones durante más tiempo.',
      },
      {
        title: 'Arreglos Florales',
        description: 'Esta canasta es ideal para arreglos florales, manteniendo las flores frescas y en su lugar. Su diseño elegante y funcional permite crear hermosos arreglos que pueden ser utilizados como centro de mesa o para decorar cualquier rincón de tu hogar. Las flores se mantendrán frescas y vibrantes, añadiendo un toque de naturaleza y belleza a tu espacio.',
      },
      {
        title: 'Decoración Elegante',
        description: 'El diseño elegante de la canasta ovalada se adapta a cualquier decoración de tu hogar. Su estilo versátil y sofisticado la convierte en un complemento perfecto para cualquier ambiente, ya sea moderno, clásico o rústico. Además, su funcionalidad y estética la hacen una excelente opción para regalar a amigos y familiares.',
      }
    ],
    profilePicture: 'https://i.ibb.co/D1ZbGGJ/ba6d052d-4216-4f69-b2da-f85fd88041da.jpg',
    profileName: 'Maritza Juárez',
    profileDescription: 'Invité a una amiga a casa y le encantó mi canasta de frutas. Me pidió información y ahora ella también tiene una, siempre llenándola con frutas frescas para su familia.',
    theme: 'white',
    img1: 'https://i.ibb.co/VDRdpDW/oval-Fruits.png',
    img2: 'https://i.ibb.co/9Hk009S/ovalMd.png'
  },
  {
    title: 'Canasta Cuadrada',
    benefits: [
      {
        title: 'Organización de Escritura',
        description: 'La canasta cuadrada es perfecta para guardar lápices, bolígrafos y otros materiales de escritura. Su diseño permite mantenerlos organizados y siempre a la mano, ideal para oficinas o espacios de estudio. Además, es fácil de limpiar y su material es duradero.',
      },
      {
        title: 'Versatilidad en Cosméticos',
        description: 'El diseño versátil de esta canasta cuadrada permite usarla para guardar cosméticos, perfumes y otros productos de belleza. Es perfecta para mantener tus productos de belleza organizados y siempre a la mano.',
      },
      {
        title: 'Material Resistente',
        description: 'Fabricada con materiales de alta calidad, esta canasta cuadrada garantiza durabilidad y resistencia, ideal para el uso diario. Además, su diseño atractivo la convierte en un complemento útil y decorativo.',
      }
    ],
    profilePicture: 'https://i.ibb.co/WHVTc8H/073238a1-76fd-4fa2-881a-bbf30e9f09cc.jpg',
    profileName: 'Esmeralda Martínez',
    profileDescription: 'Uso esta canasta para organizar mis lápices y bolígrafos en mi oficina. Todo se ve ordenado y mis colegas siempre preguntan dónde la conseguí.',
    theme: 'white',
    img1: 'https://i.ibb.co/gth2kgT/sqLapiz.png',
    img2: 'https://i.ibb.co/h821ypg/Picsart-24-12-26-15-46-35-356.png'
  },
  {
    title: 'Canasta Circular',
    benefits: [
      {
        title: 'Almacenamiento de Galletas',
        description: 'La canasta circular es perfecta para almacenar galletas y mantenerlas frescas. Su diseño permite una organización eficiente, asegurando que estén bien ordenadas y fáciles de acceder.',
      },
      {
        title: 'Guardar Pan',
        description: 'Esta canasta es ideal para guardar pan y mantenerlo fresco. Su forma circular facilita el almacenamiento de diferentes tipos de pan, permitiendo que los coloques y los saques fácilmente.',
      },
      {
        title: 'Diseño Moderno',
        description: 'El diseño moderno de la canasta circular se adapta a cualquier estilo de decoración. Su forma elegante la convierte en un complemento perfecto para cualquier ambiente, ya sea en la cocina, el comedor o la sala de estar.',
      }
    ],
    profilePicture: 'https://i.ibb.co/0fRLW5k/0f75b081-a9c5-40a2-86af-78865b1f278d.jpg',
    profileName: 'Maria José',
    profileDescription: 'Me encanta esta canasta para guardar galletas. Las tengo en la mesa de la cocina, y mis hijos siempre se emocionan al ver las galletas organizadas en ella.',
    theme: 'white',
    img1: 'https://i.ibb.co/wc2Pzcw/cr-Galletas.png',
    img2: 'https://i.ibb.co/L60BbX6/crPan.png'
  }
];




</script>

<style scoped></style>
