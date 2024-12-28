<template>
  <MainLayout>
    <template #main>
      <HomeSlider />
      <div class="my-3" id="ejemplos"></div>
      <ExamplesCard v-for="obj in data" :key="obj.title" :benefits="obj.benefits" :title="obj.title" class="py-9"
        :profile-picture="obj.profilePicture" :profile-name="obj.profileName"
        :profile-description="obj.profileDescription" :img1="obj.img1" :img2="obj.img2" :desc-indian1="obj.descIndian1"
        :desc-indian2="obj.descIndian2" :info-indian1="obj.infoIndian1" :info-indian2="obj.infoIndian2"
        :title-indian1="obj.titleIndian1" :title-indian2="obj.titleIndian2" :img1-india="obj.img1Indian"
        :img2-indian="obj.img2Indian" :img2-india="obj.img2Indian" />
      <CTACard1 />
      <CTACard2 />
      <section class="container px-4 py-8 mx-auto font-Poppins">
        <h2 class="mb-6 text-3xl font-bold text-left text-gray-400">Más de nuestros productos</h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
          <!-- Ad 1: Cyanprash -->
          <div class="p-6 bg-white rounded-lg shadow-md">
            <img src="https://chyawanprash.com.mx/images/explosion-chyawanprash.png" alt="Cyanprash"
              class="w-full h-auto mb-4 rounded">
            <h3 class="mb-2 text-xl font-bold text-gray-800">Chyawanprash</h3>
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
    img2: 'https://i.ibb.co/9Hk009S/ovalMd.png',
    titleIndian1: 'Ganesha',
    titleIndian2: 'Indra',
    descIndian1: 'Ganesha es uno de los dioses más populares en el hinduismo. Con su cabeza de elefante y cuerpo humano, es adorado como el dios que elimina obstáculos y guía a los devotos hacia la sabiduría y la prosperidad.',
    descIndian2: 'Indra es un dios guerrero que preside sobre las lluvias y el trueno. Es una figura importante en el panteón hindú y es conocido por sus batallas y su papel como protector del orden cósmico.',
    infoIndian1: 'Ganesha, el dios con cabeza de elefante, es conocido como el eliminador de obstáculos. Se le invoca al comenzar nuevas tareas y proyectos. Además, es el patrón de la sabiduría, el conocimiento y las artes.',
    infoIndian2: 'Indra es el dios hindú del trueno, la lluvia, y la guerra. Es el rey de los dioses en el panteón védico y se le representa como un guerrero valiente montando su elefante Airavata.',
    img1Indian: 'https://i.ibb.co/sqmynYH/ganesha.jpg',
    img2Indian: 'https://i.ibb.co/XySTxJx/indra.jpg',
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
    img2: 'https://i.ibb.co/h821ypg/Picsart-24-12-26-15-46-35-356.png',
    titleIndian1: 'Agni',
    titleIndian2: 'Brahma',
    descIndian1: 'Agni es considerado el dios del fuego, esencial en los rituales védicos. Es responsable de la purificación espiritual y es invocado en los sacrificios para transmitir las ofrendas a los dioses.',
    descIndian2: 'Brahma es el dios creador dentro de la Trimurti, encargado de la creación del universo y todo lo que en él habita. Es venerado por su sabiduría y su capacidad de dar vida a todas las criaturas.',
    infoIndian1: 'Agni es el dios hindú del fuego. Es el mediador entre los dioses y los humanos, llevando las ofrendas a los cielos a través del fuego. En la mitología védica, Agni también representa la purificación y el poder transformador del fuego.',
    infoIndian2: 'Brahma es el dios hindú de la creación, parte de la Trimurti (junto a Vishnu y Shiva). Se le considera el creador del universo y de todas las formas de vida. Su papel es crear, mantener y destruir el universo.',
    img1Indian: 'https://i.ibb.co/Zf2v5bL/agni.jpg',
    img2Indian: 'https://i.ibb.co/pr7NQ9h/brahma.jpg',
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
    img2: 'https://i.ibb.co/L60BbX6/crPan.png',
    titleIndian1: 'Saraswati',
    titleIndian2: 'Surya',
    descIndian1: 'Saraswati es la diosa de la sabiduría y las artes. Venerada por estudiantes y artistas, es conocida por su capacidad para otorgar conocimiento y creatividad. Su imagen más común es con un libro y un instrumento musical.',
    descIndian2: 'Surya es el dios solar, cuyo resplandor da vida y energía a todo el universo. En la mitología hindú, Surya es una figura central que representa la luz, la salud y la vitalidad.',
    infoIndian1: 'Saraswati es la diosa hindú del conocimiento, la música, las artes, y la sabiduría. Es la consorte de Brahma y se la representa tocando un instrumento musical, simbolizando el flujo de sabiduría.',
    infoIndian2: 'Surya es el dios del sol en la mitología hindú. Se le considera el rey de los planetas y el dador de vida, y su energía es responsable del ciclo de la vida en la Tierra.',
    img1Indian: 'https://i.ibb.co/D7bWWv2/saraswati.jpg',
    img2Indian: 'https://i.ibb.co/XyFKCnc/surya.jpg',
  }
];


const a = [
  {
    "name": "Agni",
    "img": "https://i.ibb.co/Zf2v5bL/agni.jpg",
    "titleIndian": "Agni es el dios hindú del fuego. Es el mediador entre los dioses y los humanos, llevando las ofrendas a los cielos a través del fuego. En la mitología védica, Agni también representa la purificación y el poder transformador del fuego.",
    "descIndian": "Agni es considerado el dios del fuego, esencial en los rituales védicos. Es responsable de la purificación espiritual y es invocado en los sacrificios para transmitir las ofrendas a los dioses."
  },
  {
    "name": "Brahma",
    "img": "https://i.ibb.co/pr7NQ9h/brahma.jpg",
    "titleIndian": "Brahma es el dios hindú de la creación, parte de la Trimurti (junto a Vishnu y Shiva). Se le considera el creador del universo y de todas las formas de vida. Su papel es crear, mantener y destruir el universo.",
    "descIndian": "Brahma es el dios creador dentro de la Trimurti, encargado de la creación del universo y todo lo que en él habita. Es venerado por su sabiduría y su capacidad de dar vida a todas las criaturas."
  },
  {
    "name": "Ganesha",
    "img": "https://i.ibb.co/sqmynYH/ganesha.jpg",
    "titleIndian": "Ganesha, el dios con cabeza de elefante, es conocido como el eliminador de obstáculos. Se le invoca al comenzar nuevas tareas y proyectos. Además, es el patrón de la sabiduría, el conocimiento y las artes.",
    "descIndian": "Ganesha es uno de los dioses más populares en el hinduismo. Con su cabeza de elefante y cuerpo humano, es adorado como el dios que elimina obstáculos y guía a los devotos hacia la sabiduría y la prosperidad."
  },
  {
    "name": "Indra",
    "img": "https://i.ibb.co/XySTxJx/indra.jpg",
    "titleIndian": "Indra es el dios hindú del trueno, la lluvia, y la guerra. Es el rey de los dioses en el panteón védico y se le representa como un guerrero valiente montando su elefante Airavata.",
    "descIndian": "Indra es un dios guerrero que preside sobre las lluvias y el trueno. Es una figura importante en el panteón hindú y es conocido por sus batallas y su papel como protector del orden cósmico."
  },
  {
    "name": "Saraswati",
    "img": "https://i.ibb.co/D7bWWv2/saraswati.jpg",
    "titleIndian": "Saraswati es la diosa hindú del conocimiento, la música, las artes, y la sabiduría. Es la consorte de Brahma y se la representa tocando un instrumento musical, simbolizando el flujo de sabiduría.",
    "descIndian": "Saraswati es la diosa de la sabiduría y las artes. Venerada por estudiantes y artistas, es conocida por su capacidad para otorgar conocimiento y creatividad. Su imagen más común es con un libro y un instrumento musical."
  },
  {
    "name": "Surya",
    "img": "https://i.ibb.co/XyFKCnc/surya.jpg",
    "titleIndian": "Surya es el dios del sol en la mitología hindú. Se le considera el rey de los planetas y el dador de vida, y su energía es responsable del ciclo de la vida en la Tierra.",
    "descIndian": "Surya es el dios solar, cuyo resplandor da vida y energía a todo el universo. En la mitología hindú, Surya es una figura central que representa la luz, la salud y la vitalidad."
  }
]



</script>

<style scoped></style>
