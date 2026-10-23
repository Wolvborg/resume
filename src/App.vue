<script setup lang="ts">
  import ExperienceSection from './components/experience-section.vue';
  import Heading from './components/heading.vue';
  import Section from './components/section.vue';
  import resume from './bin/react.js';
</script>

<template>
  <main class="resume">
    <!-- ================= Hero ================= -->

    <header class="flex flex-row justify-between mb-4">
      <div>
        <h1 class="text-2xl text-primary">{{ resume.personal.name }}</h1>

        <h2 class="text-lg">{{ resume.personal.title }}</h2>
        <span class="content">({{ resume.personal.location }})</span>
      </div>

      <div class="flex text-right flex-col content">
        <a :href="`tel:${resume.personal.phone}`">
          {{ resume.personal.phone }}
        </a>
        <a :href="`mailto:${resume.personal.email}`">
          {{ resume.personal.email }}
        </a>

        <a :href="resume.personal.linkedin" target="_blank" rel="noopener noreferrer">
          {{ resume.personal.linkedin }}
        </a>

        <a :href="resume.personal.github" target="_blank" rel="noopener noreferrer">
          {{ resume.personal.github }}
        </a>
      </div>
    </header>

    <!-- ================= Summary ================= -->

    <Section title="Summary">
      <p class="content">{{ resume.summary }}</p>
    </Section>

    <!-- ================= Skills ================= -->

    <Section title="Skills">
      <div v-for="skill in resume.skills" :key="skill.title">
        <span class="font-semibold content">{{ skill.title }} - </span>

        <span class="content">
          {{ skill.technologies.join(', ') }}
        </span>
      </div>
    </Section>

    <!-- ================= Experience ================= -->

    <experience-section :experiences="resume.experience" />

    <!-- ================= Projects ================= -->

    <Section title="Personal Projects">
      <article v-for="project in resume.projects" :key="project.name">
        <Heading>
          {{ project.name }}
          <template #extra>
            <span v-if="project.role">{{ project.role }} </span>
          </template>
        </Heading>

        <ol class="list-disc list-inside content">
          <li v-for="item in project.responsibilities" :key="item">
            {{ item }}
          </li>
        </ol>
      </article>
    </Section>

    <!-- ================= Education ================= -->

    <!-- <Section title="Education">
      <article v-for="education in resume.education" :key="education.degree">
        <Heading>
          {{ education.degree }}

          <template #extra>
            <span class="content">
              {{ education.institute }}
              (<small>{{ education.duration }}</small
              >)
            </span>
          </template>
        </Heading>
      </article>
    </Section> -->

    <!-- ================= Certifications ================= -->

    <Section title="Certifications">
      <ol class="list-disc list-inside content">
        <li v-for="certification in resume.certifications" :key="certification">
          {{ certification }}
        </li>
      </ol>
    </Section>
  </main>
</template>
