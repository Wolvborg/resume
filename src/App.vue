<template>
    <div id="app">

        <section class="hero is-primary">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Resume
                    </h1>
                    <h2 class="subtitle">
                        A little About Me....
                    </h2>
                </div>
            </div>
        </section>

        <section id="nav" class="main navbar is-spaced">
            <div class="navbar-menu">
                <div class="navbar-start">
                    <div class="navbar-item is-tab" v-bind:class="{'is-active':activeName === 'About'}">
                        <router-link :to="{name:'About'}">About</router-link>
                    </div>

                    <div class="navbar-item is-tab" v-bind:class="{'is-active':activeName === 'Education'}">
                        <router-link :to="{name:'Education'}">Education</router-link>
                    </div>

                    <div class="navbar-item is-tab" v-bind:class="{'is-active':activeName === 'Experience'}">
                        <router-link :to="{name:'Experience'}">Experience</router-link>
                    </div>
                </div>
            </div>
        </section>

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
    computed: {
      activeName() {
        // We will see what `params` is shortly
        return this.$route.name
      }
    },
  })
</script>

<style lang="scss">
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        user-select: none;

        #main-content{
            min-height: 600px;
        }

        #footer {
            .heart {
                color: red;
                font-weight: 800;
            }

            .bulma {
                color: #00d1b2;
                font-weight: 800;
            }
        }
    }
</style>
