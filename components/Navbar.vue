<script lang="ts" setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const navbar = ref<HTMLElement | null>(null)
const scrollOffset = 20
const isStuck = ref<Boolean>(false)
const route = useRoute()

const navbarStuck = () => {
  if (navbar.value && window.scrollY > scrollOffset) {
    isStuck.value = true
  } else {
    isStuck.value = false
  }
}

const setActiveNavItem = () => {
  var navbarEle = document.getElementById("navbarNav");
  if (navbarEle) {
    // Remove the 'active' class from any element that has it initially
    navbarEle.querySelectorAll('.dropdown.active').forEach((item) => {
      item.classList.remove("active");
    });

    var activeEle = navbarEle.querySelector(`.nav-item a[href="${route.path}"]`);
    if (activeEle) {
      const parentListItem = activeEle.parentElement;
      if (parentListItem) {
        const grandParentListItem = parentListItem.parentElement?.parentElement;
        if (grandParentListItem) {
          grandParentListItem.classList.add("active");
          if (grandParentListItem.parentElement?.parentElement?.classList.contains("nav-item")) {
            grandParentListItem.parentElement?.parentElement?.classList.add("active");
          }
        }
      }
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', navbarStuck);
  setActiveNavItem();
})

onUnmounted(() => {
  window.removeEventListener('scroll', navbarStuck)
})

watch(() => route.fullPath,
  async () => {
    setActiveNavItem();
  }
);
</script>

<template>
  <!-- Navbar-->
  <header ref="navbar" class="navbar navbar-expand-lg navbar-light fixed-top" :class="{ 'navbar-stuck': isStuck }" data-scroll-header>
    <div class="container">
      <nuxt-link class="navbar-brand me-3 me-xl-4" to="/">
        <img class="d-block" src="@/assets/img/logo/logo-dark.svg" width="116" alt="Finder">
      </nuxt-link>
      <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span>
      </button>
      <a class="btn btn-sm text-primary d-none d-lg-block order-lg-3" data-bs-target="#signin-modal" data-bs-toggle="modal">
        <i class="fi-user me-2"></i>Sign in</a>
      <div class="dropdown d-none d-lg-block order-lg-3 my-n2 me-3">
        <nuxt-link class="d-block py-2" to="/account/info">
          <img class="rounded-circle" src="@/assets/img/avatars/36.png" width="40" alt="Annette Black">
        </nuxt-link>
        <div class="dropdown-menu dropdown-menu-end">
          <div class="d-flex align-items-start border-bottom px-3 py-1 mb-2" style="width: 16rem;">
            <img class="rounded-circle" src="@/assets/img/avatars/24.png" width="48" alt="Annette Black">
            <div class="ps-2">
              <h6 class="fs-base mb-0">Annette Black</h6>
              <span class="star-rating star-rating-sm">
                <i class="star-rating-icon fi-star-filled active"></i>
                <i class="star-rating-icon fi-star-filled active"></i>
                <i class="star-rating-icon fi-star-filled active"></i>
                <i class="star-rating-icon fi-star-filled active"></i>
                <i class="star-rating-icon fi-star-filled active"></i>
              </span>
              <div class="fs-xs py-2">(302) 555-0107<br>annette_black@email.com</div>
            </div>
          </div>
          <nuxt-link class="dropdown-item" to="/account/info"><i class="fi-user opacity-60 me-2"></i>Personal Info</nuxt-link>
          <nuxt-link class="dropdown-item" to="/account/favorites"><i class="fi-heart opacity-60 me-2"></i>Favorites</nuxt-link>
          <nuxt-link class="dropdown-item" to="/vendor/businesses"><i class="fi-home opacity-60 me-2"></i>My Businesses</nuxt-link>
          <nuxt-link class="dropdown-item" to="/account/reviews"><i class="fi-star opacity-60 me-2"></i>Reviews</nuxt-link>
          <nuxt-link class="dropdown-item" to="/account/notifications"><i class="fi-bell opacity-60 me-2"></i>Notifications</nuxt-link>
          <div class="dropdown-divider"></div>
          <nuxt-link class="dropdown-item" to="/help/help-center">Help</nuxt-link>
          <nuxt-link class="dropdown-item" to="/auth/signin-light">Sign Out</nuxt-link>
        </div>
      </div>
      <nuxt-link class="btn btn-primary btn-sm rounded-pill ms-2 order-lg-3" to="/vendor/add-business">
        <i class="fi-plus me-2"></i>Add Business
      </nuxt-link>
      <div class="collapse navbar-collapse order-lg-2" id="navbarNav">
        <ul class="navbar-nav navbar-nav-scroll" style="max-height: 35rem;">
          <li class="nav-item dropdown me-lg-2"><a class="nav-link dropdown-toggle align-items-center pe-lg-4" href="#" data-bs-toggle="dropdown" role="button" aria-expanded="false"><i class="fi-layers me-2"></i>Demos<span class="d-none d-lg-block position-absolute top-50 end-0 translate-middle-y border-end" style="width: 1px; height: 30px;"></span></a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="https://property-finder-vue.vercel.app/"><i class="fi-building fs-base opacity-50 me-2"></i>Real Estate Demo</a></li>
              <li class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="https://car-finder-vue.vercel.app/"><i class="fi-car fs-base opacity-50 me-2"></i>Car Finder Demo</a></li>
              <li class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="https://job-finder-vue.vercel.app/"><i class="fi-briefcase fs-base opacity-50 me-2"></i>Job Board Demo</a></li>
              <li class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="https://city-finder-vue.vercel.app/"><i class="fi-map-pin fs-base opacity-50 me-2"></i>City Guide Demo</a></li>
             </ul>
          </li>
         
          <!-- Menu items-->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</a>
            <ul class="dropdown-menu">
              <li><nuxt-link class="dropdown-item" to="/">Home v.1</nuxt-link></li>
              <li><nuxt-link class="dropdown-item" to="/home-2">Home v.2</nuxt-link></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">Catalog</a>
            <ul class="dropdown-menu">
              <li><nuxt-link class="dropdown-item" to="/catalog">Grid with Filters</nuxt-link></li>
              <li><nuxt-link class="dropdown-item" to="/catalog/single">Single Place - Gallery</nuxt-link></li>
              <li><nuxt-link class="dropdown-item" to="/catalog/single-info">Single Place - Info</nuxt-link></li>
              <li><nuxt-link class="dropdown-item" to="/catalog/single-review">Single Place - Reviews</nuxt-link></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">Account</a>
            <ul class="dropdown-menu">
              <li><nuxt-link class="dropdown-item" to="/account/info">Personal Info</nuxt-link></li>
              <li><nuxt-link class="dropdown-item" to="/account/favorites">Favorites</nuxt-link></li>
              <li><nuxt-link class="dropdown-item" to="/account/reviews">Reviews</nuxt-link></li>
              <li><nuxt-link class="dropdown-item" to="/account/notifications">Notifications</nuxt-link></li>
              <li><nuxt-link class="dropdown-item" to="/auth/signin-light">Sign In</nuxt-link></li>
              <li><nuxt-link class="dropdown-item" to="/auth/signup-light">Sign Up</nuxt-link></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">Vendor</a>
            <ul class="dropdown-menu">
              <li><nuxt-link class="dropdown-item" to="/vendor/add-business">Add Business</nuxt-link></li>
              <li><nuxt-link class="dropdown-item" to="/vendor/business-promotion">Business Promotion</nuxt-link></li>
              <li><nuxt-link class="dropdown-item" to="/vendor/businesses">My Businesses</nuxt-link></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
            <ul class="dropdown-menu">
              <li><nuxt-link class="dropdown-item" to="/about/">About</nuxt-link></li>
              <li class="dropdown">
                <a class="dropdown-item dropdown-toggle" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
                <ul class="dropdown-menu">
                  <li><nuxt-link class="dropdown-item" to="/blog/grid">Blog Grid</nuxt-link></li>
                  <li><nuxt-link class="dropdown-item" to="/blog/single">Single Post</nuxt-link></li>
                </ul>
              </li>
              <li><nuxt-link class="dropdown-item" to="/contact">Contacts</nuxt-link></li>
              <li class="dropdown">
                <a class="dropdown-item dropdown-toggle" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">Help Center</a>
                <ul class="dropdown-menu">
                  <li><nuxt-link class="dropdown-item" to="/help/help-center">Help Topics</nuxt-link></li>
                  <li><nuxt-link class="dropdown-item" to="/help/single-topic">Single Topic</nuxt-link></li>
                </ul>
              </li>
              <li><nuxt-link class="dropdown-item" to="/account/404">404 Not Found</nuxt-link></li>
            </ul>
          </li>
          <li class="nav-item d-lg-none">
            <a class="nav-link" data-bs-target="#signin-modal" data-bs-toggle="modal"><i class="fi-user me-2"></i>Sign in</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
