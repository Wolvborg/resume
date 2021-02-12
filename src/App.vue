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

        <section id="main-content" class="container">
           
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

<style lang="scss" scoped>
@import '@/assets/style/globalVariable.scss';

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    user-select: none;

    #main-content {
        min-height: calc(100vh - 132px - 168px);

        @include mobile() {
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

