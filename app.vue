<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute()

defineProps({
  title: {
    type: String,
    default: 'Finder'
  }
})
</script>

<template>
  <NuxtLayout>

    <Head>
      <Title>Finder | City Guide | {{ route.meta.title }}</Title>
      <link rel='icon' type='image/png' href='/favicon.png'>
    </Head>

    <NuxtPage />
  </NuxtLayout>
</template>
