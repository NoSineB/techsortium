<template>
    <div class="w-[75%] md:w-[90%] lg:w-4/5 xl:w-3/5 md:h-card transition-all duration-300 flex flex-col md:flex-row bg-white/10 rounded-lg">
        <div :class="leftOrRight === 'right' ? 'order-2 md:order-1' : 'order-2'" class="md:w-1/2">
            <div class="p-4 flex flex-col h-full overflow-hidden relative">
                <div class="mt-2">
                    <h3 class="text-2xl">{{ heading }}</h3>
                    <p class="text-white/60 text-md lowercase">{{ subHeading }}</p>
                </div>
                <div class="mt-4 flex-1">
                    <p class="text-sm sm:block md:text-base">
                        {{ text }}
                    </p>
                </div>
                <div class="">
                    <p class="text-sm sm:block md:text-base flex items-center mt-2">
                        <span class="inline-block me-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="" viewBox="0 0 16 16">
                                <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                            </svg>
                        </span>
                        {{ dateTime }}
                    </p>
                </div>
                <div class="absolute bottom-4 right-4 hover:bg-black rounded-full">
                    <a :href="link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"/>
                        </svg>
                    </a>                            
                </div>
                
            </div>
        </div>
        <div :class="leftOrRight === 'right' ? 'order-1 md:order-2' : 'order-1'" class="h-full overflow-hidden md:w-1/2">
            <div class="w-full bg-gray-200 group-hover:opacity-75">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    heading : String,
    subHeading : String,
    text: String,
    dateTime : String,
    link: String,
    leftOrRight: String
})
</script>