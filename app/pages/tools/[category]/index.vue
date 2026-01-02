<script setup lang="ts">
const route = useRoute();
const { data } = await useAsyncData(() => {
  return queryCollection("tools")
    .where("path", "LIKE", `${route.path}%`)
    .all()
    .then((items) => {
      return items.map((item) => {
        return {
          title: item.title,
          description: item.description,
          to: item.path,
        };
      });
    });
});
definePageMeta({
  layout: "tools",
});
</script>

<template>
  <UPageHeader :title="route.path" />
  <UPageGrid>
    <UPageCard v-for="item in data" :key="item.title" v-bind="item" />
  </UPageGrid>
</template>
