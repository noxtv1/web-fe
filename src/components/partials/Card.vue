<template>
  <article class="border border-black border-opacity-30 p-4 flex flex-col">
    <img v-if="img" :src="imgURL" alt="" class="border border-camel-light w-full">
    <div class="text flex flex-col flex-1 justify-between">
        <h2 class="font-medium py-4 text-xl">{{title}}</h2>
        <p class="pb-4 text-base">
            {{textLenght(text)}}
        </p>

        <router-link :to="{ name: 'SingleChallenge', params: { id }}"><button class="bg-camel text-white w-full py-2 mt-2 uppercase font-semibold tracking-wider text-base">Voir le challenge</button></router-link>
    </div>
  </article>
</template>

<script>
//import {postsImages} from '@/firebase.config.js'
import 'firebase/storage'
export default {
    name : "Card",
    props : ['title','text', 'id', 'img'],
    data() {
        return {
            imgURL : "",
            propsImg : this.img,
            imgPath: ''
        }
    },

    methods : {
        textLenght(post) {
        post = post.substring(0,99) + " ..."
        return post
        },

    },
    mounted(){
        }
    }

</script>

<style lang="scss">
article {
    border-radius: 10px;
    img {
        max-height: 220px;
        border-radius: 10px;
    }
    button {
        border-radius: 10px;
    }
}
</style>