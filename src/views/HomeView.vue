<template>
    <div>
        <div class="container-div">
            <div class="landing-div">
                <Landing />
            </div>
            <div class="about-div">
                <About />
            </div>
        </div>
        <Description />
    </div>
</template>

<script setup>
    import Landing from '../components/Landing.vue';
    import About from '../components/About.vue';
    import Description from '../components/Description.vue';
</script>

<style scoped>
    .landing-div{
        position: sticky;
        top: 0;
        left: 0;
        z-index: -1;
    }
    .about-div{
        background-color: white;
    }
</style>