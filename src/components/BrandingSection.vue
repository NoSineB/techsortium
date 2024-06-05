<template>
    <div class="mx-2 h-screen lg:mx-20">
        <transition-group
            appear
            class="font-bold font-russo"
            tag="div"
            @before-enter="onBeforeH1Enter"
            @enter="onH1Enter"
        >
            <h1 class="text-4xl min-[385px]:text-5xl lg:text-7xl  pt-8 lg:pt-20" key="0">IEEE Kerala Section</h1>
            <h1 class="text-4xl min-[385px]:text-5xl lg:text-7xl" key="1">Student Technical</h1>
            <h1 class="text-4xl min-[385px]:text-5xl lg:text-7xl" key="2">Consortium 2024</h1>   
        </transition-group>
        <div class="mt-8 md:mt-16 text-lg min-[385px]:text-xl md:text-3xl lg:text-2xl">
            <p>Prepare to dive into a world of technical challenges, network with fellow tech minds, and propel your ideas to new heights.</p>
        </div>
        <div class="ms-2 mt-8 md:mt-16 text-sm text-white/55">
            <div>Powered By</div>
            <div class="flex justify-start items-center mt-1 gap-8 flex-wrap">
                <img src="@/assets/images/W_IEEE_LINK.png" alt="" class="w-32 min-[385px]:w-40 transition-opacity duration-300 opacity-90 md:opacity-70 hover:opacity-90">
                <img src="@/assets/images/W_IEEE_KS.png" alt="" class="w-32 min-[385px]:w-40 transition-opacity duration-300 opacity-90 md:opacity-70 hover:opacity-90">
                <img src="@/assets/images/W_IEEE.png" alt="" class="w-32 min-[385px]:w-40 transition-opacity duration-300 opacity-90 md:opacity-70 hover:opacity-90">
            </div>
        </div>
    </div>
</template>

<style >

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

</script>

