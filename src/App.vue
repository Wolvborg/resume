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
    'Vue Test Utils',
    'Jest',
    'Tailwind',
    'Bootstrap',
    'Nuxt',
    'AlpineJS',
    'Liquid',
    'Petite Vue',
  ]);
</script>

<template>
  <main class="flex h-screen">
    <div class="bg-primary-fade flex-35 p-3">
      <div class="text-center mb-4">
        <p class="title">Abhishek Saini</p>
        <p class="sub-title">(Frontend Web Developer)</p>
      </div>

      <div
        class="border-2 p-2 border-primary rounded text-sm flex flex-col gap-1.5 font-medium mb-4"
      >
        <a href="https://maps.app.goo.gl/2GLnkxiw2hAequ8F7">
          <i class="fa-solid fa-location-dot fa-xs text-primary"></i> Delhi, India
        </a>
        <a href="mailto:abhishek.saini.0607@gmail.com">
          <i class="fa-solid fa-envelope fa-xs text-primary"></i> abhishek.saini.0607@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/abhishek-saini-0607/">
          <i class="fa-brands fa-linkedin fa-xs text-primary"></i> abhishek-saini-0607
        </a>
        <a href="https://github.com/Wolvborg">
          <i class="fa-brands fa-github fa-xs text-primary"></i> Wolvborg
        </a>
        <a href="tel:+917982067969">
          <i class="fa-solid fa-phone fa-xs text-primary"></i> +91-7982067969
        </a>
      </div>

      <div class="mb-4">
        <section-title>About</section-title>
        <p class="content">
          Frontend Web Developer in Anatta.io, Former UI Engineer in Trek Bikes & BitQit Pvt. Ltd.
          carrying 5.5+ years of experience in VueJS & ReactsJS and other Front End Technologies.
          Exploring the world of backend with NodeJS, Express and NestJS.
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
      </div>

      <div>
        <section-title>Education</section-title>
        <div class="mb-2">
          <heading>
            <a href="https://www.niet.co.in/">
              Noida Institute of Engineering Technology, Greater Noida
            </a>
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
            <a href="https://anatta.io/"> Anatta </a>
            <template #extra>(19/02/2024 - Present)</template>
          </heading>
          <ul class="content list-disc pl-6">
            <li>
              Working on Shopify Theme for US based E-comms, converting Pixel Perfect Figma design
              into beautiful websites using AlpineJS, Petite-Vue
            </li>
          </ul>
        </div>

        <div class="mb-2">
          <heading>
            <a href="https://www.trekbikes.com/">Trek Bicycle India</a>
            <template #extra>(07/12/2020 - 15/02/2024)</template>
          </heading>
          <ul class="content list-disc pl-6">
            <li>Contributed in Migration from Vue2 to Vue3</li>
            <li>
              Creating/modifying reusable & scalable components based on business requirements.
            </li>
            <li>Worked with agile methodology.</li>
            <li>Implementing mixins and stores for code reusability throughout applications.</li>
            <li>Written Jest tests for components to ensure code quality.</li>
            <li>
              Proven ability to conduct code reviews and provide constructive feedback PR and
              maintain high coding standards.
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
            <li>Utilized Vue.JS and React to integrate SearchTap API</li>
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
            <a href="https://www.helloparent.com/"> Hello-Parent </a>
          </heading>
          <ul class="content list-disc pl-6">
            <li>Nuxt SSR Application on Vercel</li>
            <li>
              Developed the Entire application on Nuxt as an SSR application using Tailwind as a CSS
              framework deployed on Vercel
            </li>
          </ul>
        </div>

        <div class="mb-2">
          <heading>
            <a href="https://www.cotriad.ai/"> Cotriad </a>
          </heading>
          <p></p>
          <p class="content">
            Handling the Backend operation using NodeJS/ExpressJS and AWS tools and Front end
            operation using ReactJS
          </p>
        </div>

        <div class="mb-2">
          <heading>
            <a href="https://stayclassic.in/"> Coverscart </a>
          </heading>
          <p></p>
          <p class="content">
            Developed the Entire application on VueJS as a SPA application using Tailwind as a CSS
            framework. It is a migration of
            <a class="text-primary underline" href="https://www.coverscart.com/">Coverscart</a> a
            CMS site built on cPanel to SPA
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
