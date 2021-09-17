<template>
<div class="container mx-auto">
   <footer class="p-16 flex">
        <div class="info w-6/12 pr-8">
            <img src="@/assets/images/logo.svg" alt="Logo webfrontend" class="pb-8">
            <p>
               <b>webfrontend.fr</b> propose d’améliorer vos compétences en intégration web (HTML, CSS, JS).
            </p>
            <p class="pt-2">
                L’équipe et les membres mettre à votre disposition des designs pour votre entrainement.
            </p>
        </div>
        <div class="navs w-3/12 flex justify-center">
            <div>
            <span class="font-bold text-xl block pb-2">NAVIGATION</span>
                <ul class="footer-nav navigation w-3/12 uppercase">
                    <li><router-link to="/">Accueil</router-link></li>
                    <li><router-link to="/Challenges">Challenges</router-link></li>
                    <li><router-link to="/">Communauté</router-link></li>
                </ul>
            </div>
        </div>
        <div class="navs w-3/12 flex justify-center">
        <div>
            <span class="font-bold text-xl block pb-2">NAVIGATION</span>
                <ul class="footer-nav navigation w-3/12 uppercase">
                    <li><a href="#" class="whitespace-nowrap">CONDITIONS D’UTILISATION</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">L'équipe</a></li>
                </ul>
            </div>
        </div>
   </footer>
</div>
</template>

<script>
export default {
 name : 'Footer'
}
</script>

<style>
    footer {
        background-color: #E5E5E5;
        border-radius: 10px 10px 0px 0px;
    }
    .footer-nav a {
        display: block;
            padding: 8px 0;
    }
</style>