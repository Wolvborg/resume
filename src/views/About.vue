<template>
    <div id="about" class="columns">
        <div class="column is-3">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by5">
                        <img v-bind:src="img" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="content">
                        <p class="title is-4 has-text-centered">Abhishek Saini</p>
                        <a href="mailto:abhishek.saini.0607@gmail.com">abhishek.saini.0607@gmail.com</a>
                        <br>
                        <a href="https://api.whatsapp.com/send?phone=+917982067969">+917982067969</a>
                        <br>
                        <time datetime="1995-03-06">6 Mar 1995</time>
                        <br>
                        <span>WZ300, Sadhnagar</span>
                        <br>
                        <span>Palam, New Delhi</span>
                        <br>
                        <span class="logo-links">
                            <a title="Gmail" href="mailto:abhishek.saini.0607@gmail.com"><span class="gmail"><i
                                    class="fas fa-envelope fa-2x"></i></span></a>
                            <a title="Linkedin" href="https://in.linkedin.com/in/abhishek-saini-0607"><span
                                    class="linkedin"><i class="fab fa-linkedin fa-2x"></i></span></a>
                            <a title="FaceBook" href="https://www.facebook.com/wolborg"><span class="facebook"><i
                                    class="fab fa-facebook-square fa-2x"></i></span></a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-9">
            <div class="content is-medium has-text-left-desktop has-text-centered-mobile">
                <h2 class="is-3">Objective</h2>
                <p>
                    A detailed and highly capable Front-end Web Developer with more than two years of hands-on
                    experience in
                    NodeJS and VueJS front-end framework, popular CSS framework like Bootstrap and Bulma. Also have a
                    good
                    knowledge of VCS
                </p>


                <h2 class="is-3">Summary</h2>
                <p>
                    A detailed and highly capable Front-end Web Developer with more than two years of hands-on
                    experience in
                    NodeJS and VueJS front-end framework, popular CSS framework like Bootstrap and <em>Bulma</em>.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    import Vue from 'vue'
    import img from '@/assets/img/PHOTO.png'

    export default Vue.extend({
        name: 'About',
        components: {},
        data() {
            return {
                img: img
            }
        }
    })
</script>

<style lang="scss" scoped>
    @import "src/assets/style/globalVariable";

    #about {

        @include mobile(){
            padding: 1rem 3rem;
        }
        .card {
            .card-content {
                padding: 1.5rem 0.5rem;
            }

            .content {
                .logo-links {

                    a {
                        span {
                            margin: 0 3px;

                            &.gmail {
                                color: #D44638;
                            }

                            &.linkedin {
                                color: #2867B2;
                            }

                            &.facebook {
                                color: #3b5998;
                            }
                        }
                    }
                }
            }
        }

        .content {
            p {
                em {
                    color: #00d1b2;
                }
            }
        }
    }
</style>
