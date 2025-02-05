<script setup>
  import { ref } from 'vue';
  import SectionTitle from '@/components/section-title.vue';
  import Tags from '@/components/tags.vue';
  import Heading from '@/components/heading.vue';

  const programmingLanguage = ref(['JavaScript', 'TypeScript', 'HTML', 'CSS/SCSS', 'Bash']);

  const libs = ref([
    'VueJS',
    'ReactJS',
    'NodeJS',
    'ExpressJS',
    'NestJS',
    'Vuex',
    'Vue Router',
    'Vite',
    'Webpack',
    'Tailwind',
    'Bootstrap',
    'Nuxt',
    'Next',
    'AlpineJS',
    'Petite Vue',
  ]);

  const tool = ref([
    'Liquid',
    'Shopify',
    'Lighthouse',
    'PageSpeed Insights',
    'Vue DevTools',
    'Redux DevTools',
    'Web Vitals',
    'Vue Test Utils',
    'Jest',
    'Vercel',
    'Netlify',
    'Docker',
    'Postman',
    'Prisma',
    'Firebase',
  ]);
</script>

<template>
  <main class="flex h-screen">
    <div class="bg-primary-fade flex-35 p-3">
      <div class="text-center mb-4">
        <p class="title">Abhishek Saini</p>
        <p class="sub-title">(Frontend Web Developer)</p>
      </div>

      <div class="border-2 p-2 border-primary rounded text-sm flex justify-around mb-4">
        <a href="mailto:abhishek.saini.0607@gmail.com">
          <i class="fa-solid fa-envelope fa-xl text-primary"></i>
        </a>
        <a href="https://www.linkedin.com/in/abhishek-saini-0607/">
          <i class="fa-brands fa-linkedin fa-xl text-primary"></i>
        </a>
        <a href="https://github.com/Wolvborg">
          <i class="fa-brands fa-github fa-xl text-primary"></i>
        </a>
        <a href="tel:+917982067969">
          <i class="fa-solid fa-phone fa-xl text-primary"></i>
        </a>
      </div>

      <div class="mb-4">
        <section-title>About</section-title>
        <p class="content">
          Frontend Web Developer with 6.5+ years of experience specializing in Vue.js, Nuxt.js, and
          React.js. Skilled in building scalable, high-performance e-commerce solutions. Passionate
          about creating elegant UIs and exploring backend technologies with Node.js, Express, and
          NestJS.
        </p>
      </div>

      <div class="mb-4">
        <section-title>Skills</section-title>
        <div class="mb-2">
          <heading>Programming Languages/Scripts</heading>
          <tags :tags="programmingLanguage" />
        </div>

        <div class="mb-2">
          <heading>Frameworks/Libraries</heading>
          <tags :tags="libs" />
        </div>

        <div class="mb-2">
          <heading>Tools</heading>
          <tags :tags="tool" />
        </div>
      </div>

      <div>
        <section-title>Education</section-title>
        <div class="mb-2">
          <heading>
            <a href="https://www.niet.co.in/"> NIET, Greater Noida </a>
            <template #extra>(2013-2017)</template>
          </heading>
          <p class="content">Bachelors of Technology, Computer Science Engineering</p>
        </div>

        <div class="mb-2">
          <heading>
            <a href="https://no1delhicantt.kvs.ac.in/"> Kendriya Vidyalaya, Delhi Cantt. </a>
            <template #extra>(2010-2012)</template>
          </heading>
          <p class="content">High School & Senior Secondary High School</p>
        </div>
      </div>
    </div>
    <div class="p-3 flex-65">
      <div class="mb-4">
        <section-title> WORK EXPERIENCE</section-title>

        <div class="mb-2">
          <heading>
            <a href="https://anatta.io/"> Anatta Designs(Shopify Plus Agency)</a>
            <template #extra>(19/02/2024 - Present)</template>
          </heading>
          <ul class="content list-disc pl-6">
            <li>
              Developing custom Shopify themes for high-growth e-commerce brands, ensuring
              pixel-perfect implementations from Figma designs.
            </li>
            <li>
              Leveraging AlpineJS, Petite-Vue, Vue and React to build interactive and lightweight UI
              components for improved performance.
            </li>
            <li>Implementing Liquid templating for dynamic and modular Shopify themes.</li>
            <li>
              Conducting code reviews and performance optimizations to ensure high-speed,
              accessible, and SEO-friendly Shopify stores.
            </li>
          </ul>
        </div>

        <div class="mb-2">
          <heading>
            <a href="https://www.trekbikes.com/">Trek Bicycle India</a>
            <template #extra>(07/12/2020 - 15/02/2024)</template>
          </heading>
          <ul class="content list-disc pl-6">
            <li>
              Migrated a legacy codebase from Vue 2 to Vue 3, improving performance and code
              maintainability.
            </li>
            <li>
              Creating/modifying reusable & scalable components based on business requirements on
              <span class="text-primary">StoryBook</span>.
            </li>
            <li>
              Implemented global state management using Vuex and Pinia, enhancing data flow
              efficiency.
            </li>
            <li>
              Wrote Jest unit tests for components, achieving 95%+ test coverage and improving code
              reliability.
            </li>
            <li>
              Reviewed and optimized pull requests, enforcing clean coding standards and best
              practices.
            </li>
            <li>
              Made significant contributions to
              <a
                class="text-primary underline"
                href="https://www.trekbikes.com/us/en_US/project-one/"
              >
                Project-One
              </a>
            </li>
          </ul>
        </div>

        <div class="mb-2">
          <heading>
            <a href="https://www.searchtap.io/">BitQit Pvt. Ltd</a>
            <template #extra>(07/07/2018 - 27/11/2020)</template>
          </heading>
          <ul class="content list-disc pl-6">
            <li>Implemented SearchTap API on e-commerce CMS websites</li>
            <li>Utilized Vue and React to integrate SearchTap API</li>
            <li>Converted client-approved PSD designs into HTML and CSS (SCSS) layouts</li>
            <li>Employed Webpack to bundle the JavaScript code for deployment</li>
            <li>
              Collaborated with prominent clients such as
              <a class="text-primary underline" href="https://www.jackjones.in/"> Jack & Jones </a>
              ,
              <a class="text-primary underline" href="https://www.themancompany.com/">
                The Man Company
              </a>
              ,
              <a class="text-primary underline" href="https://www.gonoise.com/"> GoNoise </a>
              ,
              <a class="text-primary underline" href="https://www.itcstore.in/"> ITC Store </a>
            </li>
          </ul>
        </div>

        <div class="mb-2">
          <heading>
            <a>StormFront Consultancy</a>
            <template #extra>(01/05/2017 - 29/12/2017)</template>
          </heading>
          <ul class="content list-disc pl-6">
            <li>
              Paydeo GO (Now Anywhere Commence) – Implemented features like three finger swipes to
              send diagnostics, tutorial screens for the first use of the app and fixed various
              bugs.
            </li>
            <li>ButterFli – Made UI/UX Changes and fixed bugs</li>
          </ul>
        </div>
      </div>

      <div class="mb-4">
        <section-title> Side Projects</section-title>

        <div class="mb-2">
          <heading>
            <a href="https://www.npmjs.com/package/madebyme"> madebyme </a>(Still in development)
          </heading>
          <ul class="content list-disc pl-6">
            <li>
              NPM package to log projects author's name in console or store it in localstorage
            </li>
            <li>
              Monorepo and TypeScript based, can be installed in Vue2, Vue3, Web, Nuxt & Next
              projects
            </li>
          </ul>
        </div>

        <div class="mb-2">
          <heading>
            <a href="https://www.helloparent.com/"> Hello-Parent </a>
          </heading>
          <ul class="content list-disc pl-6">
            <li>Nextjs SSR Application on Vercel</li>
            <li>
              Initially developed the entire application using Nuxt 2 and Tailwind, deployed on
              Vercel, later migrated to Nextjs on client's demand.
            </li>
          </ul>
        </div>

        <div class="mb-2">
          <heading>
            <a href="https://www.cotriad.ai/"> Cotriad </a>
          </heading>
          <p class="content">
            Handling the Backend operation using NodeJS/ExpressJS and AWS tools and Front end
            operation using ReactJS
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
