<script setup lang="ts">
  import Section from './section.vue';
  import Heading from './heading.vue';

  const { experiences } = defineProps(['experiences']);

  function isPromoted(experience) {
    return experience.roles.length > 1;
  }
</script>
<template>
  <Section title="Experience">
    <article v-for="(experience, i) in experiences" :key="i" class="mb-2">
      <template v-if="isPromoted(experience)">
        <Heading>{{ experience.company }}</Heading>
        <div v-for="role in experience.roles" :key="role.designation">
          <span class="text-neutral-700">{{ role.designation }}</span> -
          <span class="text-sm text-neutral-500">{{ role.duration }}</span>
          <ol class="list-disc list-inside">
            <li v-for="item in role.responsibilities" :key="item" class="pl-2">
              {{ item }}
            </li>
          </ol>
        </div>
      </template>
      <template v-else>
        <div>
          <Heading>{{ experience.company }} </Heading>
          <span class="text-neutral-700">{{ experience.roles[0].designation }}</span> -
          <span class="text-sm text-neutral-500">{{ experience.roles[0].duration }}</span>

          <ol class="list-disc list-inside content">
            <li v-for="item in experience.roles[0].responsibilities" :key="item" class="pl-2">
              {{ item }}
            </li>
          </ol>
        </div>
      </template>
    </article>
  </Section>
</template>
