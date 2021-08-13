<template>
  <section class="twitter flex mb-14 flex-wrap">
    <div class="brand-twitter flex flex-col items-center w-full lg:w-4/12">
        <div class="py-8">
            <img src="@/assets/images/twitter.png" alt="" height="120">
        </div>
        <p class="text-3xl font-semibold text-twitter">
            #webfrontendFR
        </p>
    </div>

    <div class="twitter-text flex flex-col justify-center w-full lg:w-8/12 py-12 lg:px-16 lg:py-0 text-center lg:text-left">
        <h3 class="text-2xl py-3 font-semibold">Partager vos résultats, proposer vos designs !</h3>
        <p class="py-3">Pourquoi ne pas partagez vos trauvaux ? Avec le hashtag #webfrontendFR vous pouvez montrer vos créations à la communauté et obtenir congratulations</p>
        <p>Si tu es créateur, propose nous un design et tu aura peu être la chance d’être selectioné pour avoir ton travail en challenge</p>
    </div>
  </section>
</template>

<script>
export default {
    name : "Twitter"
}
</script>

<style>
    .twitter {
        border : 1px solid rgba(38, 38, 38, 0.3);
        border-radius: 10px;  
        padding: 25px;
        background-color: rgba(85, 172, 238, 0.1);
        min-height: 290px;
    }
    .brand-twitter {
        position: relative;
    }
    .brand-twitter::after {
        content: "";
        display: block;
        position: absolute;
        width: 1px;
        height: 75%;
        background-color:#55ACEE;
        right: 0px;
        top: 50%;
        transform: translateY(-50%);
    }
    @media (max-width: 1024px) {
        .brand-twitter::after {
           right: auto;
           top: auto;
           bottom: -30px;
           transform: translateY(0);
           width: 30%;
           height: 1px;
        }
    }

</style>