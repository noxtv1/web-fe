<template>
  <article v-if="this.imgLoad" class="border border-black border-opacity-30 p-4 flex flex-col">
    <img v-if="img" :src="this.imgURL" alt="" class="border border-camel-light w-full">
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
import {storage} from '@/firebase.config.js'
//import {storageRef} from 'firebase/storage'
export default {
    name : "Card",
    components : "postsImages",
    props : ['title','text', 'id', 'img'],
    data() {
        return {
            imgURL : "",
            imgPath: null,
            imgLoad: false
        }
    },

    methods : {
        textLenght(post) {
        post = post.substring(0,99) + " ..."
        return post
        },
    },
    mounted(){
        if (this.img) {
        let path = this.img.path
        storage.ref().child(path).getDownloadURL()
        .then(url => {
            this.imgURL = url
            this.imgLoad = true
        })
        }
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