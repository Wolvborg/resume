<template>
  <div id="experience" class="content is-medium has-text-left">
    <h1 class="title is-1 has-text-primary is-spaced">Currently Working...</h1>
    <h2 class="subtitle is-3">BitQit Pvt. Ltd (Jul., 2018 till now)</h2>
    <p>
      Responsible for implementing
      <a href="https://www.searchtap.io/">SearchTap</a> search APIs on
      e-Commerce companies which are based on Shopify, Magento, and WooCommerce.
      Here I make a search page which is the replica of their category page
      using HTML,CSS and implement API using VueJS front end UI framework and
      bundle all the JS using Webpack and deploy the files on client
      environment.
    </p>

    <p>
      I have also worked here on the Indexing script of certain shopify clients
      using NodeJS. The Indexing would fetch the products from Shopify API and
      send them to Searchtap database for further processing. Here I used to
      make a node app using Express.js and deploy that on Heroku.
    </p>

    <p>
      Some the clients with which I've worked are
    </p>
    <ol type="1">
      <li><a href="https://www.themancompany.com/">The Man Company</a></li>
      <li><a href="https://www.gonoise.com/">Go Noise</a></li>
      <li><a href="https://www.jaypore.com/">Jaypore</a></li>
      <li><a href="https://www.veromoda.in/">Veromoda</a></li>
      <li><a href="https://www.mystereparis.com/">Mystreparis</a></li>
      <li><a href="https://www.jackjones.in/">Jack & Jones</a></li>
    </ol>

    <h1 class="title is-2 has-text-primary is-spaced">In Past</h1>
    <h2 class="subtitle is-4">
      Stormfront Pvt. Ltd (Apr., 2017 to Dec., 2017)
    </h2>
    <p>
      Responsible for maintaining US based Android app of
      <a
        href="https://play.google.com/store/apps/details?id=com.NetSecure.Paydeo&hl=en_IN"
        >Anywhere Commerce</a
      >
      (formerly known 'Paydeo'). I had mainly worked here on adding new screens,
      editing the current screens or removing any.
    </p>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Experience",
});
</script>
