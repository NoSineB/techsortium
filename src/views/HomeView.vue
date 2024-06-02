<template>
    <div class="panel bg-white">
        <Landing />
    </div>
    <div class="panel" id="lander">
        <About />
    </div>
    <div class="dark">
        <Description />
    </div>
    
</template>

<script setup>
    import Landing from '../components/Landing.vue';
    import About from '../components/About.vue';
    import Description from '../components/Description.vue';
    import gsap from 'gsap';
import { onMounted } from 'vue';

    gsap.registerPlugin(ScrollTrigger);

    onMounted(() => {
        gsap.utils.toArray(".panel").forEach((panel, i) => {
            ScrollTrigger.create({
                trigger: panel,
                start: "top bottom-=2",
                end: () => "+=" + (window.innerHeight * 2 - 4),
            });
        });

        gsap.fromTo( "#lander", {
            backgroundColor: gsap.getProperty("html", "--white")
        }, {
            scrollTrigger: {
                trigger: ".dark",
                start: "top 90%",
                end: "top 50%",
                scrub: true,
            },
            backgroundColor: gsap.getProperty("html", "--black")
        });

        gsap.fromTo( "#lander h1", {
            color: gsap.getProperty("html", "--black")
        }, {
            scrollTrigger: {
                trigger: ".dark",
                start: "top 90%",
                end: "top 50%",
                scrub: true,
            },
            color: gsap.getProperty("html", "--white")
        });

        gsap.fromTo( "#lander p", {
            color: gsap.getProperty("html", "--black")
        }, {
            scrollTrigger: {
                trigger: ".dark",
                start: "top 90%",
                end: "top 50%",
                scrub: true,
            },
            color: gsap.getProperty("html", "--white")
        });
    })

</script>

<style>
:root{
    --blue: #a20000;
    --pink: #5770F3;
    --red: #0E0940;
    --black: #001b1f;
    --white: white;
    --shadow: rgba(0,0,0, 0.25);
}

body{
  background-color: var(--black);
  color: var(--white);
}
.panel {
    height: 100vh;
    position: sticky;
    top: 0;
    z-index: -1;
}
</style>