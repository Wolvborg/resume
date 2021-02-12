<template>
  <div id="about" class="columns">
    <div class="column is-narrow">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by5">
            <img v-bind:src="img" alt="Placeholder image" />
          </figure>
        </div>
        <div class="card-content">
          <div class="content">
            <p class="title is-4 has-text-centered">Abhishek Saini</p>
            <a href="mailto:abhishek.saini.0607@gmail.com"
              >abhishek.saini.0607@gmail.com</a
            >
            <br />
            <a href="https://api.whatsapp.com/send?phone=+917982067969"
              >+917982067969</a
            >
            <br />
            <time datetime="1995-03-06">6 Mar 1995</time>
            <br />
            <span class="logo-links">
              <a title="Gmail" href="mailto:abhishek.saini.0607@gmail.com"
                ><span class="gmail"><i class="fas fa-envelope fa-2x"></i></span
              ></a>
              <a
                title="Linkedin"
                href="https://in.linkedin.com/in/abhishek-saini-0607"
                ><span class="linkedin"
                  ><i class="fab fa-linkedin fa-2x"></i></span
              ></a>
              <a title="FaceBook" href="https://www.facebook.com/wolborg"
                ><span class="facebook"
                  ><i class="fab fa-facebook-square fa-2x"></i></span
              ></a>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <div
        class="content is-medium has-text-left-desktop has-text-centered-mobile"
      >
        <h2 class="is-3">Objective</h2>
        <p>
          To obtain a challenging job within my chosen field that allow me to
          use my education, skills in a way that is mutually beneficial to both
          myself and my employer and allow me for future growth and advancement.
        </p>

        <h2 class="is-3">Summary</h2>
        <p>
          A detailed and highly capable Front-end Web Developer with more than
          two years of hands-on experience in HTML, CSS, Javascript, VueJS & ReactJS front-end
          framework, popular CSS framework like <em class="bootstrap">Bootstrap</em> and <em class="bulma">Bulma</em>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Vue from "vue";
import img from "@/assets/img/PHOTO.webp";

export default Vue.extend({
  name: "About",
  components: {},
  data() {
    return {
      img: img,
    };
  },
});
</script>
