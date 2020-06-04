<template>
    <div id="accordion">
        <div class="accordion-bar" v-on:click="isOpen = !isOpen">
            <span class="title is-4">{{title}}</span>
            <span class="accordion-icon">
                <span v-show="!isOpen"><i class="fas fa-plus fa-2x"></i></span>
                <span v-show="isOpen"><i class="fas fa-minus fa-2x"></i></span>
            </span>
        </div>
        <transition name="fade">
            <div class="accordion-content" v-show="isOpen"><slot></slot></div>
        </transition>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Vue from 'vue'

    export default Vue.extend({
        name: "Accordion",
        props: ['title'],
        data(){
            return{
                isOpen:false,
            }
        }
    })
</script>

<style lang="scss" >
    @import "../../assets/style/globalVariable";

    #accordion {
        margin-bottom:45px ;

        .accordion-bar{
            border: 1px solid $palette3;
            padding: 10px 15px;
            text-align: left;
            border-radius: 10px;
            cursor: pointer;

            span{
                color: $palette2;

                &.accordion-icon{
                    float: right;
                }
            }
        }

        .accordion-content{
            margin-top: 20px;
        }

        .fade-enter-active, .fade-leave-active {
            transition: opacity .5s linear;
        }
        .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
            opacity: 0;
        }
    }
</style>
