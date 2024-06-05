<template>
    <div class="" style="pointer-events: none;">
        <img src="@/assets/images/bg.svg" alt="" class="h-screen md:h-auto object-cover">
    </div>
    <div class="overlay flex-col justify-start items-center bg-[#001b1f] mb-20">
        <SectionHeader title="Competitions"/>
        <transition-group 
            appear
            @before-enter="onBeforeH1Enter"
            @enter="onH1Enter"
            class="mt-20 grid grid-cols-1 justify-items-center gap-8"
            tag="div">
            <Card 
                heading="Interface Innovations"
                sub-heading="A UI/UX Design Competition"
                text="Are you ready to unleash your creativity and design prowess?"
                date-time="11th May, 2024 - 12:00 PM"
                link="/interface-innovations"
                left-or-right="right"
                key="0"
                >
                <img src="@/assets/images/comp1.jpeg" alt="Front of men&#039;s Basic Tee in black." class="w-full object-cover object-center lg:h-full lg:w-full">
            </Card>
            <Card 
                heading="Prompt Pulse"
                sub-heading="A Prompt Engineering Competition"
                text="Mastering the Machine's Whisper: The Prompt Engineering Showdown"
                date-time="10th May, 8:00 PM to 8:45PM"
                link="/prompt-pulse"
                left-or-right="left"
                key="1"
                >
                <img src="@/assets/images/comp2.jpeg" alt="Front of men&#039;s Basic Tee in black." class="w-full object-cover object-center lg:h-full lg:w-full">
            </Card>
        </transition-group>
    </div>
    <div class="h-3/5">
        Footer
    </div>
</template>

<style scoped>
.overlay{
    position: relative;
}

.overlay::before {
    content: "";
    position: absolute;
    top: -120px;
    left: 0;
    display: block;
    width: 100%;
    height: 120px;
    background: linear-gradient(0deg, #001b1f, transparent);
    pointer-events: none;
}
</style>

<script setup>
    import SectionHeader from './SectionHeader.vue';
    import Card from './Card.vue';

    import gsap from 'gsap';
    gsap.registerPlugin(ScrollTrigger)

    function onBeforeH1Enter(el) {
        gsap.set(el,{
            opacity: 0,
            y: 100,
            scale: 0.8
        })
    }

    function onH1Enter(el, done) {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 60%",
                end: "+=150",
                scrub: true,
            },
            opacity: 1,
            y: 0,
            scale: 1
        })
    }
</script>