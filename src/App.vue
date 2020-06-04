<template>
    <div id="app">

        <section class="hero is-primary">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        A little About Me....
                    </h1>
                    <!--<h2 class="subtitle">
                        A little About Me....
                    </h2>-->
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

<style lang="scss">
    @import "src/assets/style/globalVariable";

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        user-select: none;
        overflow-x: hidden;

        #tabs{
            margin-top: 1.5rem;
        }

        #main-content{
            min-height: 600px;

            @include mobile(){
                padding: 0 1rem;
            }
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
