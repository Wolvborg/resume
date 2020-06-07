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
