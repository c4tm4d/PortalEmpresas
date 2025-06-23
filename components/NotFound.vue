<script lang="ts" setup>
import { Vue3Lottie } from 'vue3-lottie'
import lottieJson from '@/assets/json/animation-city-guide-404.json'
</script>

<template>
   <section class="d-flex align-items-center min-vh-100 py-5 bg-secondary">
    <div class="container d-flex justify-content-center text-center">
      <div class="col-lg-8 col-md-10 col-12 px-0">
        <div class="ratio ratio-16x9 mb-lg-5 mb-4">
          <Vue3Lottie :animationData="lottieJson" />
        </div>
        <h1 class="h3 pt-lg-4">Sorry, the content you are looking for doesn’t exist.</h1>
        <p class="lead mb-5 pb-lg-2">Either it was removed, or you mistyped the link.</p>
        <nuxt-link class="btn btn-lg btn-primary rounded-pill w-sm-auto w-100 mb-3 me-sm-4" to="/">Go to homepage</nuxt-link>
        <nuxt-link class="btn btn-lg btn-outline-primary rounded-pill w-sm-auto w-100 mb-3" to="/contact">Contact us</nuxt-link>
      </div>
    </div>
  </section>
</template>