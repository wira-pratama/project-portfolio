<script setup lang="ts">
const props = defineProps({
    projects_title: null,
})
</script>

<template>
    <!-- <h3 class="font-primary border-b-2 py-2 mb-4">
        Value Proposition:
    </h3> -->
    <h3 class="text-xl underline  font-bold font-primary py-8 w-fit">
        Past {{ projects_title }} Projects:
    </h3>
    <ol class="flex flex-col space-y-8">
        <slot />
    </ol>
</template>