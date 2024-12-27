<template>
  <section class="py-12 bg-gray-100 pricing-section font-Poppins">
    <div class="container mx-auto text-center">
      <h2 class="mb-6 text-4xl font-bold">¡Precios Especiales para Cestas!</h2>
      <p class="mb-12 text-lg text-gray-600">Elige el tamaño que mejor se adapte a tus necesidades</p>

      <div class="grid gap-12 mb-12 md:grid-cols-3">
        <!-- Cesta Grande -->
        <div class="p-6 bg-white rounded-lg shadow-lg pricing-option">
          <i class="mb-4 text-purple-600 text-8xl fas fa-shopping-basket"></i>
          <h3 class="mb-3 text-xl font-semibold line-through text-rose-400">$890 MXN</h3>
          <h3 class="mb-3 text-2xl font-semibold text-purple-600">$790 MXN</h3>
          <p class="mb-6 text-gray-500">Cesta Grande (más costo de envío)</p>
          <RouterLink :to="{ name: 'contact' }"
            class="px-6 py-2 text-lg text-white transition duration-300 bg-purple-600 rounded-full hover:bg-purple-700">
            <i class="mr-2 fas fa-shopping-cart"></i>
            Comprar
            Cesta Grande
          </RouterLink>
        </div>

        <!-- Cesta Mediana -->
        <div class="p-6 bg-white rounded-lg shadow-lg pricing-option">
          <i class="mb-4 text-purple-600 text-7xl fas fa-shopping-basket"></i>
          <h3 class="mb-3 text-xl font-semibold line-through text-rose-400">$790 MXN</h3>
          <h3 class="mb-3 text-2xl font-semibold text-purple-600">$690 MXN</h3>
          <p class="mb-6 text-gray-500">Cesta Mediana (más costo de envío)</p>
          <RouterLink :to="{ name: 'contact' }"
            class="px-6 py-2 text-lg text-white transition duration-300 bg-purple-600 rounded-full hover:bg-purple-700">
            <i class="mr-2 fas fa-shopping-cart"></i>

            Comprar
            Cesta Mediana
          </RouterLink>
        </div>

        <!-- Cesta Chica -->
        <div class="p-6 bg-white rounded-lg shadow-lg pricing-option">
          <i class="mb-4 text-6xl text-purple-600 fas fa-shopping-basket"></i>
          <h3 class="mb-3 text-xl font-semibold line-through text-rose-400">$690 MXN</h3>
          <h3 class="mb-3 text-2xl font-semibold text-purple-600">$590 MXN</h3>
          <p class="mb-6 text-gray-500">Cesta Chica (más costo de envío)</p>
          <RouterLink :to="{ name: 'contact' }"
            class="px-6 py-2 text-lg text-white transition duration-300 bg-purple-600 rounded-full hover:bg-purple-700">
            <i class="mr-2 fas fa-shopping-cart"></i>

            Comprar
            Cesta Grande
          </RouterLink>
        </div>
      </div>

      <!-- Conjunto de 3 unidades -->
      <div class="relative p-6 mb-6 bg-white rounded-lg shadow-lg pricing-option">
        <div
          class="absolute top-0 left-0 px-4 py-1 text-sm font-semibold text-white transform -translate-y-4 bg-purple-600 rounded-br-lg">
          Más barato <i class="ml-2 fas fa-star"></i>
        </div>
        <i class="mb-4 text-4xl text-purple-600 fas fa-basket-shopping"></i>
        <h2 class="text-slate ">En conjunto ahorras más</h2>
        <h3 class="mb-3 text-xl font-semibold line-through text-rose-400">$2070 MXN</h3>
        <h3 class="mb-3 text-2xl font-semibold text-purple-600">
          $1990 MXN
        </h3>
        <p class="mb-6 text-gray-500">Conjunto de 3 unidades:
          <span class="flex items-center justify-center space-x-4">
            <span class="flex items-center">
              <i class="mb-4 text-6xl text-purple-600 fas fa-shopping-basket"></i>
              Chica -
              $590</span>
            <span class="flex items-center"> <i class="mb-4 text-purple-600 text-7xl fas fa-shopping-basket"></i>
              Mediana -
              $690</span>
            <span class="flex items-center"> <i class="mb-4 text-purple-600 text-8xl fas fa-shopping-basket"></i>
              Grande -
              $790</span>
          </span>
          <span>Más costo de envío</span>
        </p>
        <RouterLink :to="{ name: 'contact' }"
          class="px-6 py-2 text-lg text-white transition duration-300 bg-purple-600 rounded-full hover:bg-purple-700">
          <i class="mr-2 fas fa-shopping-cart"></i>
          Comprar
          Conjunto
        </RouterLink>
      </div>

      <!-- Descuento al por mayor -->
      <div class="relative p-6 bg-white rounded-lg shadow-lg pricing-option">
        <div
          class="absolute top-0 left-0 px-4 py-1 text-sm font-semibold text-white transform -translate-y-4 bg-purple-600 rounded-br-lg">
          Mejor Opción <i class="ml-2 fas fa-certificate"></i>
        </div>
        <i class="mb-4 text-4xl text-purple-600 fas fa-box-open"></i>
        <h3 class="mb-3 text-2xl font-semibold text-purple-600">Al por mayor</h3>
        <p class="mb-6 text-gray-500">Compra 3 conjuntos con 30% de descuento y <span
            class="font-bold text-purple-600"><i class="mr-2 fas fa-truck"></i>Envío gratis</span></p>
        <RouterLink :to="{ name: 'contact' }"
          class="px-6 py-2 text-lg text-white transition duration-300 bg-purple-600 rounded-full hover:bg-purple-700">
          <i class="mr-2 fas fa-shopping-cart"></i>
          Comprar
          Mayoreo
        </RouterLink>
      </div>

    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style scoped></style>
