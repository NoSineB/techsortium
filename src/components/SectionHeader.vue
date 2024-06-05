<template>
    <h2 class="text-center pt-20 text-3xl lg:text-5xl font-extrabold">
        {{ title }}
    </h2>
</template>

<script setup>
defineProps({
    title : String
})
</script>