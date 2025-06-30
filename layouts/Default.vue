<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from "vue-router";

import AuthModals from '@/components/AuthModals.vue'
import NavBar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

const isLoader = ref(false);
const router = useRouter();

onMounted(() => {
  // init preloader
  isLoader.value = true;
  setTimeout(() => isLoader.value = false, 500);

  // handle scroll
  let n: HTMLElement | null = document.querySelector(".btn-scroll-top");
  let a = 600;
  if (n) {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > a) {
        n?.classList.add("show");
      } else {
        n?.classList.remove("show");
      }
    });

    n?.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})

// show loader on route chnage
router.beforeEach(() => {
  isLoader.value = true;
  setTimeout(() => isLoader.value = false, 500);
});

</script>

<template>
  <!-- Page loading spinner-->
  <div class="page-loading active" v-if="isLoader">
    <div class="page-loading-inner">
      <div class="page-spinner"></div>
      <span>Loading...</span>
    </div>
  </div>

  <main class="page-wrapper">
    <AuthModals />
    <NavBar />

    <slot />
  </main>
  <Footer />
  <a class="btn-scroll-top" href="#top">
    <span class="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span>
    <i class="btn-scroll-top-icon fi-chevron-up"></i>
  </a>
</template>
