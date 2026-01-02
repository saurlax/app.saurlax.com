<script setup lang="ts">
const route = useRoute();
const { data } = await useAsyncData("tools-item", () => {
  return queryCollection("tools").path(route.path).first();
});
definePageMeta({
  layout: "tools",
});
</script>

<template>
  <div v-if="data">
    <UPageHeader :title="data.title" :description="data.description" />
    <UPageBody>
      <ContentRenderer :value="data.body" />
    </UPageBody>
  </div>
</template>
