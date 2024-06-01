<template>
    <nav class="w-full h-[80px] flex justify-between items-center text-white">
        <hr class="border-2 border-[#000000] lg:mx-[15%] w-[100%] lg:w-[70%] absolute top-[-4px]">
        <div class="ms-4 lg:ms-32">
            <a href="">
                <img src="@/assets/images/logo.svg" alt="">
            </a>
        </div>
        <div class="me-32 hidden lg:block">
            <ul class="w-[30%] flex justify-between items-center">
                <li><a href="" class="me-10 text-xl">Home</a></li>
                <li><a href="" class="me-10 text-xl">About</a></li>
                <li><a href="" class="me-10 text-xl">Competions</a></li>
            </ul>
        </div>
        <div class="me-4 lg:hidden">
            <div @click.prevent="toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </div>
        </div>
    </nav>
    <div id="mySidenav" class="sidenav" :class="{ 'activeNav': isNavActive }">
        <a href="javascript:void(0)" class="closebtn" @click="toggle">&times;</a>
        <ul>
            <li v-for="(navLink, id) in navLinks" :data-index="id" :key="navLink.title">
                <a :href="navLink.link">{{ navLink.title }}</a>
            </li>
        </ul>
    </div>
</template>

<style scoped>
nav{
    position: fixed;
    top: 0;
    z-index: 1000;
}

.sidenav {
    height: 0%;
    width: 100%;
    position: fixed;
    z-index: 5;
    top: 0;
    background-color: #001b1f;
    overflow-x: hidden;
    transition: 0.5s;
}

.sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: white;
    display: block;
    transition: 0.3s;
}

.sidenav a:hover {
    color: rgb(66, 66, 66);
}

.sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
}
.activeNav {
    height: 100%;
}
</style>

<script setup>
import gsap from 'gsap';
import { ref } from 'vue';

const navLinks = ref([
    {
        'title' : 'Home',
        'link' : '#homepage'
    },
    {
        'title' : 'Home',
        'link' : '#homepage'
    },
    {
        'title' : 'Home',
        'link' : '#homepage'
    },
    {
        'title' : 'Home',
        'link' : '#homepage'
    }
]);

let isNavActive = ref(false);
function toggle() {
    isNavActive.value = !isNavActive.value;
}


</script>