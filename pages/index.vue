<script lang="ts" setup>
import Hero from './home-1/hero.vue'
import Categories from './home-1/categories.vue';
import Stay from './home-1/stay.vue';
import Eat from './home-1/eat.vue';
import All from './home-1/all.vue';
import UpcomingEvents from './home-1/upcoming-events.vue';
import WhatsNew from './home-1/whats-new.vue';
import CtaSection from './home-1/cta.vue';
import LatestBlogs from './home-1/latest-blogs.vue';

definePageMeta({
    title: 'Home v.1',
});
</script>

<template>
    <Hero />
    <Categories />
    <All />
    <Stay />
    <Eat />
</template>