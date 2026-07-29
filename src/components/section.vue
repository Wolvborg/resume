<script setup lang="ts">
  import SectionTitle from './section-title.vue';

  interface props {
    title: string;
  }

  const { title } = defineProps<props>();
</script>

<template>
  <div class="mb-4">
    <section-title>{{ title }}</section-title>
    <slot />
  </div>
</template>
