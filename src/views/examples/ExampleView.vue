<template>
  <MainLayout>
    <template #main>
      <HomeSlider />
      <ExamplesCard v-for="obj in data" :key="obj.title" :benefits="obj.benefits" :title="obj.title" class="py-9"
        :profile-picture="obj.profilePicture" :profile-name="obj.profileName"
        :profile-description="obj.profileDescription" :img1="obj.img1" :img2="obj.img2" />
      <CTACard1 />
      <CTACard2 />
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import HomeSlider from '@/components/home/HomeSlider.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import ExamplesCard from '../home/ExamplesCard.vue';
import CTACard1 from '../cta/CTACard1.vue';
import CTACard2 from '../cta/CTACard2.vue';




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
        title: 'Versatilidad Decorativa',
        description: 'El diseño versátil de esta canasta cuadrada permite usarla para diferentes fines decorativos en tu hogar u oficina. Es perfecta para guardar pequeños objetos, agregando un toque de organización y estilo.',
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
    img2: 'https://i.ibb.co/9Hk009S/ovalMd.png'
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
