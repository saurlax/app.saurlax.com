<script setup lang="ts">
const route = useRoute();
const { data } = await useAsyncData(
  () => {
    return queryCollection("tools").path(route.path).first();
  },
  { watch: [route] }
);
definePageMeta({
  layout: "tools",
});
</script>

<template>
  {{ data!.body }}
</template>
