<template>
  <div class="flex flex-wrap gap-1.5">
    <span
      class="inline-block py-0.5 px-2 text-white bg-primary rounded-xl text-sm"
      v-for="(tag, index) in tags"
      :key="index"
      >{{ tag }}</span
    >
  </div>
</template>

<script setup>
  const { tags } = defineProps(['tags']);
</script>
