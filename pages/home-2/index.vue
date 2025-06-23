<script lang="ts" setup>
import Hero from './hero.vue';
import Categories from './categories.vue';
import Stay from '../home-1/stay.vue';
import Eat from '../home-1/eat.vue';
import UpcomingEvents from '../home-1/upcoming-events.vue';
import WhatsNew from '../home-1/whats-new.vue';
import CtaSection from '../home-1/cta.vue';
import LatestBlogs from '../home-1/latest-blogs.vue';

definePageMeta({
    title: 'Home v.2',
});
</script>

<template>
    <Hero />
    <Categories />
    <Stay />
    <Eat />
    <UpcomingEvents />
    <WhatsNew />
    <CtaSection />
    <LatestBlogs />
</template>