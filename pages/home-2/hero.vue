<script lang="ts" setup>
import { onMounted } from 'vue'

const scrollOffset = 20;
const navbarStuck = () => {
  if (!(document.getElementsByTagName('header')[0] && window.scrollY > scrollOffset)) {
    document.getElementsByTagName('header')[0]?.classList.add('bg-light');
  }
}

onMounted(() => {
  document.getElementsByTagName('header')[0]?.classList.add('bg-light')
  window.addEventListener('scroll', navbarStuck);
})

import Hero from '@/assets/img/city-guide/home/hero-bg.jpg';

</script>
<template>
  <!-- Hero-->
  <section class="jarallax bg-dark zindex-1 py-xxl-5" data-speed="0.5">
    <span class="img-overlay bg-transparent opacity-100" style="background-image: linear-gradient(0deg, rgba(31, 27, 45, 0.7), rgba(31, 27, 45, 0.7))"></span>
    <div class="jarallax-img" :style="{ 'background-image': `url(${Hero})` }" style=" position: absolute;"></div>
    <div class="content-overlay container py-md-5">
      <div class="mt-5 mb-md-5 py-5">
        <div class="col-xl-6 col-lg-8 col-md-10 mx-auto mb-sm-5 mb-4 px-0 text-center">
          <h1 class="display-5 text-light mt-sm-5 my-4">
            Start exploring<span class="dropdown d-inline-block ms-2">
              <a class="dropdown-toggle text-decoration-none" href="javscript:void(0);" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Berlin</a>
              <span class="dropdown-menu dropdown-menu-end my-1">
                <a class="dropdown-item fs-base fw-bold" href="javscript:void(0);">Hamburg</a>
                <a class="dropdown-item fs-base fw-bold" href="javscript:void(0);">Munich</a>
                <a class="dropdown-item fs-base fw-bold" href="javscript:void(0);">Frankfurt am Main</a>
                <a class="dropdown-item fs-base fw-bold" href="javscript:void(0);">Stuttgart</a>
                <a class="dropdown-item fs-base fw-bold" href="javscript:void(0);">Cologne</a>
              </span>
            </span>
          </h1>
          <p class="fs-lg text-white">
            Find great places to stay, eat, shop, or visit from our partners and local experts. Plan
            your trip with Finder now
          </p>
        </div>
        <div class="col-xl-8 col-lg-9 col-md-10 mx-auto px-0">
          <!-- Search form-->
          <form class="form-group d-block d-md-flex position-relative rounded-md-pill mb-2 mb-sm-4 mb-lg-5">
            <div class="input-group input-group-lg border-end-md">
              <span class="input-group-text text-muted rounded-pill ps-3"><i class="fi-search"></i></span>
              <input class="form-control" type="text" placeholder="What are you looking for?" />
            </div>
            <hr class="d-md-none my-2" />
            <div class="d-sm-flex">
              <div class="dropdown w-100 mb-sm-0 mb-3" data-bs-toggle="select">
                <button class="btn btn-link btn-lg dropdown-toggle ps-2 ps-sm-3" type="button" data-bs-toggle="dropdown">
                  <i class="fi-list me-2"></i>
                  <span class="dropdown-toggle-label">All categories</span>
                </button>
                <input type="hidden" />
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="javscript:void(0);">
                      <i class="fi-bed fs-lg opacity-60 me-2"></i>
                      <span class="dropdown-item-label">Accomodation</span>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="javscript:void(0);">
                      <i class="fi-cafe fs-lg opacity-60 me-2"></i>
                      <span class="dropdown-item-label">Food &amp; Drink</span>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="javscript:void(0);">
                      <i class="fi-shopping-bag fs-lg opacity-60 me-2"></i>
                      <span class="dropdown-item-label">Shopping</span>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="javscript:void(0);">
                      <i class="fi-museum fs-lg opacity-60 me-2"></i>
                      <span class="dropdown-item-label">Art &amp; History</span>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="javscript:void(0);">
                      <i class="fi-entertainment fs-lg opacity-60 me-2"></i>
                      <span class="dropdown-item-label">Entertainment</span>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="javscript:void(0);">
                      <i class="fi-meds fs-lg opacity-60 me-2"></i>
                      <span class="dropdown-item-label">Medicine</span>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="javscript:void(0);">
                      <i class="fi-makeup fs-lg opacity-60 me-2"></i>
                      <span class="dropdown-item-label">Beauty</span>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="javscript:void(0);">
                      <i class="fi-car fs-lg opacity-60 me-2"></i>
                      <span class="dropdown-item-label">Car Rental</span>
                    </a>
                  </li>
                </ul>
              </div>
              <button class="btn btn-primary btn-lg rounded-pill w-100 w-md-auto ms-sm-3" type="button">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="position-absolute d-none d-xxl-block bottom-0 start-0 w-100 bg-white zindex-1" style="border-top-left-radius: 30px; border-top-right-radius: 30px; height: 30px"></div>
  </section>
</template>
