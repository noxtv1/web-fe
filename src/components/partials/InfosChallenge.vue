<template>
  <h1 class="">{{el.title}}</h1>
  <div class="flags pt-3 flex flex-row">
    <span class="tech pr-4">{{spacer(this.data.tech)}}</span>
    <span class="level">{{el.level}}</span>
  </div>
    <p>{{el.textSmall}}</p>
</template>

<script>
export default {
    name : 'InfosChallenge',
    props : [
        'data'
    ],
    data() {
        return{
            el : this.data,
        }
    },
    methods: {
        spacer : (el)=> {
            let me = el.join(' - ')
            return me
        },
    },
    mounted() {
        console.log(this.el);
    }


}
</script>

<style>
    h1 {
        @apply text-4xl font-semibold;
    }
    .tech {
        @apply text-camel font-semibold italic;
        letter-spacing: 2px;
        font-size: 1.125rem;
    }
    .level {
        @apply bg-camel text-white;
        padding:  2px 10px 2px 10px;
        border-radius: 10px;
        font-size: 0.85rem;
        align-self: center;
        vertical-align: middle;
    }
</style>