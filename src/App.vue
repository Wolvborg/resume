<script setup lang="ts">
  import ExperienceSection from './components/experience-section.vue';
  import Heading from './components/heading.vue';
  import Section from './components/section.vue';

  const resume = {
    personal: {
      name: 'Abhishek Saini',
      title: 'Senior Frontend Engineer',
      phone: '+91 7982067969',
      email: 'abhishek.saini.0607@gmail.com',
      location: 'Bengaluru, Karnataka, India',
      linkedin: 'https://www.linkedin.com/in/abhishek-saini-0607',
      github: 'https://github.com/Wolvborg',
    },

    summary:
      'Senior Frontend Engineer with 8+ years of experience building headless and enterprise web applications using Vue.js, Nuxt.js, and TypeScript. Led frontend delivery across enterprise SPA platforms, reusable component libraries, and Vue 2 → Vue 3 migrations, while mentoring engineers and driving code review and testing standards. Experienced collaborating with cross-functional and distributed engineering teams in Agile/Scrum environments.',

    skills: [
      {
        title: 'Frontend Ecosystem',
        technologies: [
          'Vue',
          'Nuxt',
          'Vuex',
          'Pinia',
          'Vue Router',
          'React',
          'Nextjs',
          'Alpinejs',
          'Ag-grid',
          'Storybook',
        ],
      },
      {
        title: 'Languages & Styling',
        technologies: ['TS', 'JS (ES6+)', 'Python', 'CSS/SCSS', 'Tailwind', 'Bulma', 'BEM'],
      },
      {
        title: 'Headless & Architecture',
        technologies: [
          'Headless Architecture',
          'Component Driven Development',
          'Reusable Components',
          'Storybook',
          'Design Systems',
          'SSR',
          'SPA',
        ],
      },
      {
        title: 'Performance & SEO',
        technologies: [
          'Core Web Vitals',
          'Lighthouse',
          'Technical SEO',
          'SEO',
          'Lazy Loading',
          'Code Splitting',
          'Performance Optimization',
          'Mobile-first Development',
        ],
      },
      {
        title: 'Testing & Quality',
        technologies: ['Jest', 'Vue Test Utils', 'Cypress', 'Code Reviews', 'Accessibility (WCAG)'],
      },
      {
        title: 'APIs & Backend',
        technologies: [
          'REST',
          'Nodejs',
          'Express',
          'Flask',
          'Shopify Admin API',
          'Shopify Storefront API',
        ],
      },
    ],

    experience: [
      {
        company: 'L7 Informatics',
        roles: [
          {
            designation: 'Sr. FE Developer',
            duration: '2025-07 – 2026-06',
            responsibilities: [
              'Led a frontend team of 4, reviewing pull requests and driving technical decisions across the team.',
              'Mentored developers and assigned development tasks to ensure timely delivery of enterprise ELN platform features.',
              'Implemented and customized AG Grid as a core component across multiple modules, including advanced data tables, custom cell renderers, filtering, and sorting.',
              'Built reusable Vue 3 composables to improve maintainability across the platform.',
              "Established the initial Cypress end-to-end testing framework from scratch, laying the foundation for the team's future test coverage.",
              'Partnered closely with backend engineers using Flask to align frontend features with API contracts.',
            ],
          },
        ],
      },
      {
        company: 'Anatta Designs',
        roles: [
          {
            designation: 'UI Developer',
            duration: '2024-02 – 2025-06',
            responsibilities: [
              'Built Shopify Plus storefronts from scratch, converting UI designs into configurable, reusable Shopify themes and sections in close collaboration with UX designers and clients.',
              'Integrated Shopify Admin and Storefront APIs to support custom storefront functionality.',
              'Optimized storefront performance and Core Web Vitals with a mobile-first approach, improving SEO performance by approximately 20% and lifting Lighthouse scores.',
              'Delivered multiple Shopify stores ahead of schedule.',
            ],
          },
        ],
      },
      {
        company: 'Trek Bikes',
        roles: [
          {
            designation: 'Sr. UI Engineer',
            duration: '2023 – 2024-02',
            responsibilities: [
              'Promoted from Software Engineer to Senior UI Engineer after ~2 years for consistent delivery on enterprise Vue applications.',
              'Built 30+ reusable application components and developed 5+ Storybook components to support a scalable internal design system (PDL Component Library).',
              'Contributed to the Vue 2 → Vue 3 migration and introduced Pinia into migrated applications, improving state management and maintainability.',
              'Created reusable composables and implemented automated unit testing (Jest, Vue Test Utils) on SAP Hybris–integrated systems.',
              'Contributed to Project One, a large-scale SPA for bike customization.',
            ],
          },
          {
            designation: 'Software Engineer',
            duration: '2020-12 – 2023',
            responsibilities: [
              'Developed enterprise Vue applications integrated with SAP Hybris, building reusable UI components used across the platform.',
              'Developed Storybook components and implemented automated unit testing to strengthen frontend code quality.',
            ],
          },
        ],
      },
      {
        company: 'BitQit Pvt. Ltd.',
        roles: [
          {
            designation: 'Software Engineer',
            duration: '2019-07 – 2020-11',
            responsibilities: [
              'Promoted from Associate Software Developer to Software Engineer after ~1 year in recognition of delivery across client integrations.',
              'Delivered SearchTap integrations for 30+ e-commerce client brands, each with unique requirements across Shopify, Magento, WordPress, and OpenCart.',
              'Built Node.js indexing services and Vue.js frontend integrations, and integrated Shopify APIs to support client search functionality.',
            ],
          },
          {
            designation: 'Associate Software Developer',
            duration: '2018-07 – 2019-07',
            responsibilities: [
              'Integrated SearchTap into Shopify, Magento, WordPress, and OpenCart storefronts for client projects.',
              'Converted PSD designs into responsive HTML/CSS and developed Vue.js frontend integrations.',
            ],
          },
        ],
      },
    ],

    projects: [
      {
        name: 'HelloParent',
        role: 'Lead Frontend Developer',
        responsibilities: [
          'Built the complete frontend using Nuxt 3 and Tailwind CSS, then migrated the application to Next.js.',
          'Optimized SEO and Core Web Vitals through lazy loading, improving Lighthouse score and page speed.',
        ],
      },
      {
        name: 'CoversCart',
        role: 'Frontend Developer',
        responsibilities: [
          'Developed the Vue.js frontend and migrated the store from OpenCart to Shopify.',
        ],
      },
    ],

    education: [
      {
        degree: 'Bachelor of Technology, CSE',
        institute: 'NIET, Greater Noida',
        duration: '2013 – 2017',
      },
      {
        degree: 'Senior Secondary (11th & 12th)',
        institute: 'Kendriya Vidyalaya, Delhi Cantt',
        duration: '2010 – 2012',
      },
    ],

    certifications: [
      'Liquid Storefronts for Theme Developers — Shopify',
      'Shopify Development Fundamentals — Shopify',
    ],
  };
</script>

<template>
  <main class="resume">
    <!-- ================= Hero ================= -->

    <header class="flex flex-row justify-between">
      <div>
        <h1 class="text-2xl text-primary">{{ resume.personal.name }}</h1>

        <h2 class="text-lg">{{ resume.personal.title }}</h2>
        <span class="text-sm">({{ resume.personal.location }})</span>
      </div>

      <div class="flex text-right flex-col">
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
      <p>{{ resume.summary }}</p>
    </Section>

    <!-- ================= Skills ================= -->

    <Section title="Skills">
      <div v-for="skill in resume.skills" :key="skill.title">
        <span class="font-semibold">{{ skill.title }} - </span>

        <span>
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

        <ol class="list-disc list-inside">
          <li v-for="item in project.responsibilities" :key="item">
            {{ item }}
          </li>
        </ol>
      </article>
    </Section>

    <!-- ================= Education ================= -->

    <Section title="Education">
      <article v-for="education in resume.education" :key="education.degree">
        <Heading>
          {{ education.degree }}

          <template #extra>
            <span>
              {{ education.institute }}
              (<small>{{ education.duration }}</small
              >)
            </span>
          </template>
        </Heading>
      </article>
    </Section>

    <!-- ================= Certifications ================= -->

    <Section title="Certifications">
      <ol class="list-disc list-inside">
        <li v-for="certification in resume.certifications" :key="certification">
          {{ certification }}
        </li>
      </ol>
    </Section>
  </main>
</template>
