<template>
    <div class="desp-div mt-4 lg:mt-20 ms-4 me-4 lg:me-0 lg:ms-20">
        <div class="inllne-block">
            <transition
                appear
                @before-enter="onBeforeHeaderEnter"
                @enter="onHeaderEnter"
            >

                <h1 class="text-2xl lg:text-6xl font-semibold mb-8 text-center lg:text-start">About Techsortium</h1>

            </transition>
        </div>
        
        <div class="w-[100%] text-center lg:text-start lg:w-[70%] lg:text-4xl text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum placeat officia ut nam, ea blanditiis deserunt recusandae maiores tempore suscipit. Mollitia officiis laborum, fugit necessitatibus nihil rem accusamus doloremque?
        </div>
    </div>
</template>

<style>
    .desp-div{
        height: 100vh;
    }
</style>

<script setup>
    import gsap from 'gsap';
    gsap.registerPlugin(ScrollTrigger);

    function onBeforeHeaderEnter(el){
        gsap.set(el,{
            opacity: 0,
            x:-150
        })
    }

    function onHeaderEnter(el){
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none restart none"
            },
            duration: 1.5,
            opacity: 1,
            x: 0
        })
    }

</script>