<template>
    <section class="hero flex py-20 justify-between flex-wrap">
    <div class="w-8/12 self-center">
        <div class="w-3/4">
        <div>
            <h1>Devenez le boss de l’integration web
                <span class="pl-4 mb-5 fire">
                <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.6719 53.7582C10.5458 53.7582 5.70277 34.8629 7.89192 22.4826C7.98721 21.9438 8.69351 21.7886 9.00127 22.2411C9.95432 23.6418 10.8024 25.6651 12.2076 25.4895C14.3196 25.2255 15.7828 6.58904 28.3001 1.34525C28.6974 1.17885 29.113 1.49456 29.0694 1.92296C28.4504 7.99584 32.0967 16.69 38.5565 16.69C42.2595 16.69 44.7932 13.7346 46.0592 10.7666C46.4438 9.86498 47.7611 9.97863 47.9817 10.9337C50.2408 20.7179 56.28 53.7582 28.6719 53.7582Z" fill="#F39D5C"/>
                <path d="M22.3176 35.5381C22.7438 35.1799 23.3909 35.4257 23.4877 35.974C23.7142 37.2569 24.4588 39.4617 26.9014 39.4617C29.8396 39.4617 31.8335 31.3767 32.3565 28.999C32.4425 28.6077 32.8238 28.3421 33.2163 28.4219C40.5591 29.9148 44.1293 53.7582 27.9845 53.7582C16.2313 53.7582 18.8939 38.4142 22.3176 35.5381ZM42.3819 9.71674C42.6407 7.6927 38.9458 13.2287 38.9458 13.2287C38.9458 13.2287 41.7628 14.5592 42.3819 9.71674ZM5.15231 39.9025C5.23019 39.0409 4.12171 36.7339 3.92545 37.6473C3.45569 39.8327 5.07443 40.7642 5.15231 39.9025Z" fill="#FCC195"/>
                <path d="M34.7162 37.4468C34.4409 36.2985 33.4534 38.9658 33.5775 40.0522C33.7016 41.1386 35.3748 40.1943 34.7162 37.4468Z" fill="#FFDBC1"/>
                </svg>
                </span>
            </h1>
          
        </div>
            <p class="py-10">Nous mettons à votre dispostion un ensemble de designs pour vous améliorer en developement web</p>
            <a href="#" class="text-white"><button class="bg-camel mt-2 py-4 px-9 uppercase font-bold text-2xl">Découvrir les challenges</button></a>
        </div>
    </div>
    <div class="w-4/12 flex justify-end">
        <img src="../assets/images/hero.jpg" alt="Ordinateur avec du code" style="border-radius:10px">
    </div>
        <Mouse/>
    </section>
    

</template>

<script>
import Mouse from '@/components/partials/Mouse.vue'

export default {
 name:'Hero',
 components: {
     Mouse
 },
 data() {
     return {
     }
 }
}
</script>

<style>
    .hero p {
        font-size: 1.3rem;
    }
    .hero button {
        border-radius: 10px;
        letter-spacing: 0.05em;
    }
    .hero img {
        max-height: 65vh;
    }
    .fire {
        transform: translateY(10px);
        position: absolute;
    }

</style>