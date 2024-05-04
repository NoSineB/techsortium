<template>
    <div class="about">
        <transition-group
            appear
            class="w-[70%] h1"
            tag="div"
            @before-enter="onBeforeH1Enter"
            @enter="onH1Enter"
        >
            <h1 class="text-4xl lg:text-8xl text-black ms-4 lg:ms-20 pt-8 lg:pt-20 font-bold" key="0">IEEE Kerala Section</h1>
            <h1 class="text-4xl lg:text-8xl text-black ms-4 lg:ms-20 font-bold" key="1">Student Technical</h1>
            <h1 class="text-4xl lg:text-8xl text-black ms-4 lg:ms-20 font-bold" key="2">Consortium 2024</h1>   
        </transition-group>
        <transition
            appear
            @before-enter="onBeforeLogoEnter"
            @enter="onLogoEnter"
        >
            <div class="logos mx-2 lg:mx-0">
                <img src="../assets/images/HEADER.svg" alt="">
            </div>
        </transition> 
    </div>
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
    .about{
        height: 100vh;
        color: black;
        position: relative;
    }
    .h1 h1{
        font-family: "Russo One";
    }
    
    .logos{
        position: absolute;
        bottom: 200px;
    }
    

    @media (min-width: 1024px) { 
        .logos{
            right: 130px;
            bottom: 130px;
        }
    }

</style>

<script setup>
    import gsap from 'gsap';
    gsap.registerPlugin(ScrollTrigger)

    function onBeforeH1Enter(el) {
        gsap.set(el,{
            opacity: 0,
            y: 350,
        })
    }

    function onH1Enter(el, done) {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                end: "+=150",
                scrub: true
            },
            opacity: 1,
            y: 0
        })
    }

    function onBeforeLogoEnter(el){
        gsap.set(el,{
            opacity: 0,
            y:150
        })
    }

    function onLogoEnter(el){
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none restart none"
            },
            duration: 1.5,
            opacity: 1,
            y: 0
        })
    }

</script>

