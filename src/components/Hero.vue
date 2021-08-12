<template>
    <section class="hero container flex py-16 justify-between flex-wrap">
    <div class="w-8/12 self-center">
        <div class="w-3/4">
            <h1>Devenez le boss de l’integration web</h1>
            <p class="py-10">Nous mettons à votre dispostion un ensemble de designs pour vous améliorer en developement web</p>
            <a href="#" class="text-white"><button class="bg-camel py-4 px-9 uppercase font-bold text-xl">Découvrir les challenges</button></a>
        </div>
    </div>
    <div class="w-4/12 flex justify-end">
        <img src="../assets/images/hero.jpg" alt="Ordinateur avec du code" style="border-radius:10px">
    </div>
    </section>
    
    <Mouse />
</template>

<script>
import Mouse from '@/components/partials/Mouse.vue'

export default {
 name:'Hero',
 components: {
     Mouse
 }
}
</script>

<style>
    .hero {
        max-height: 75vh;
    }
    .hero p {
        font-size: 1.3rem;
    }
    .hero button {
        border-radius: 10px;
    }
    .hero img {
        max-height: 65vh;
    }

</style>