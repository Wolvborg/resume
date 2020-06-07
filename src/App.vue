<template>
    <div id="app">

        <section id="header" class="hero is-primary">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        A little About Me....
                    </h1>
                </div>
            </div>
        </section>

        <div id="tabs" class="tabs is-boxed is-centered">
            <ul>
                <li v-bind:class="{'is-active':$route.name === 'About'}"><router-link :to="{name:'About'}">About</router-link></li>
                <li v-bind:class="{'is-active':$route.name === 'Experience'}"><router-link :to="{name:'Experience'}">Experience</router-link></li>
                <li v-bind:class="{'is-active':$route.name === 'Skills'}"><router-link :to="{name:'Skills'}">Skills</router-link></li>
                <li v-bind:class="{'is-active':$route.name === 'Education'}"><router-link :to="{name:'Education'}">Education</router-link></li>
            </ul>
        </div>

        <section id="main-content" class="container">
            <router-view/>
        </section>

        <footer id="footer" class="footer">
            <div class="content has-text-centered">
                <p>
                    Made With <em class="heart">&hearts;</em> & <em class="bulma">Bulma</em> by Abhishek Saini.
                </p>
            </div>
        </footer>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
  })
</script>

