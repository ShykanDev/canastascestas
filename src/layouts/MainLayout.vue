<template>
  <header class="sticky top-0 z-50 ">
    <HeaderComponent />
  </header>
  <main>
    <slot name="main"></slot>
  </main>
  <footer>
    <FooterCard />
  </footer>
</template>

<script lang="ts" setup>
import FooterCard from '@/components/footer/FooterCard.vue';
import HeaderComponent from '@/components/header/HeaderComponent.vue';

</script>

<style scoped></style>
