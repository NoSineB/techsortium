<template>
    <div class="" style="pointer-events: none;">
        <img src="@/assets/images/bg.svg" alt="" class="h-screen md:h-auto object-cover">
    </div>
    <div class="overlay flex-col justify-start items-center bg-[#001b1f] mb-20">
        <SectionHeader title="Competitions"/>
        <div class="mt-20 grid grid-cols-1 justify-items-center gap-8">
            <Card 
                heading="Interface Innovations"
                sub-heading="A UI/UX Design Competition"
                text="Are you ready to unleash your creativity and design prowess?"
                date-time="11th May, 2024 - 12:00 PM"
                link="/interface-innovations"
                left-or-right="right"
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
                >
                <img src="@/assets/images/comp2.jpeg" alt="Front of men&#039;s Basic Tee in black." class="w-full object-cover object-center lg:h-full lg:w-full">
            </Card>
        </div>
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
</script>