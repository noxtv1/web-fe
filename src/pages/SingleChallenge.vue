<template>
<div v-if="load" class="flex justify-between py-16">
    <section class="w-5/12 py-8">
    <carousel :items-to-show="1">
        <slide v-for="slide in slider" :key="slide.id">
            <img :src="slide">
        </slide>

        <template #addons>
            <navigation />
            <pagination />
        </template>
    </carousel>
    </section>
    
    <section class="w-6/12">
        <InfosChallenge :data="post"/>
    </section>
</div>

<div v-else>

    <section>
        <p> Loading ... </p>
    </section>
</div>
</template>

<script>
import '@/firebase.config.js'
import {posts, storage} from '@/firebase.config.js'

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import InfosChallenge from '@/components/partials/InfosChallenge.vue'

export default {
    name: "SingleChallenge",
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
        InfosChallenge

    },
    data() {
        return {
        post : null,
        load : false,
        imgURL: null,
        slider: [],
        }
    },
    methods : {

    },
    async mounted() {
    // RECUPÉRATION DE LA DATA DU POST
        const postId = this.$route.params.id;
        let queryPost = posts.doc(postId);
        await queryPost.get().then((doc) => {
            this.post = doc.data();
            // CHARGEMENT OK
            this.load = true;
            if (this.post.img.path) {
               storage.ref().child(this.post.img.path).getDownloadURL()
               .then(url => {
                   this.imgURL = url
               })
            }
        })
        this.post.slider.forEach(el => {
            storage.ref().child(el.path).getDownloadURL()
            .then(url => {
                this.slider.push(url)
            })
        })
    }
}
</script>

<style>
.carousel__pagination-button {
    @apply bg-camel;
}
.carousel__pagination-button {
    width : 12px;
    height: 12px;
    border-radius: 100%;
    opacity: 0.7;
    transition: 0.4s;
    }
.carousel__pagination-button--active {
    opacity: 1;
}
.carousel img {
    border-radius: 10px;
}
.carousel__icon {
    fill :#A68267; 
}
.carousel__prev {
    left: -2%;
        top: 45%;
}
.carousel__next {
    right: -2%;
        top: 45%;
}
.carousel__pagination {
    @apply py-4;
}


.carousel {
    position: relative;
}
.carousel::before {
    content:"";
    display: block;
    width: 100%;
    position: absolute;
    top: -10%;
    left: 3%;
    height: 100%;
    background-repeat: no-repeat;
    background-image: url('~@/assets/images/point1.png');
}
</style>