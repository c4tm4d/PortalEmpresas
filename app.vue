<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute()

defineProps({
  title: {
    type: String,
    default: 'Portal Empresas'
  }
})
</script>

<template>
  <NuxtLayout>

    <Head>
      <Title>Portal Empresas | Guia de Empresas | {{ route.meta.title }}</Title>
      <link rel='icon' type='image/x-icon' href='/favicon.ico'>
    </Head>

    <NuxtPage />
  </NuxtLayout>
</template>
