<script lang="ts" setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

const swiperOptions = ref({
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        582: {
            slidesPerView: 2,
            spaceBetween: 10
        },

        992: {
            slidesPerView: 3,
            spaceBetween: 25
        }
    }
})
const modules = [Navigation]
</script>
<template>
    <section class="container mb-5 pb-2 pb-lg-4">
        <div class="d-flex align-items-center justify-content-between mb-3">
            <h2 class="h3 mb-0">Recently viewed</h2>
            <nuxt-link class="btn btn-link fw-normal p-0" to="/">View all<i class="fi-arrow-long-right ms-2"></i></nuxt-link>
        </div>
        <swiper :modules="modules" navigation :breakpoints="swiperOptions.breakpoints" :loop="true" class="mb-xxl-2">
            <!-- Item-->
            <SwiperSlide>
                <div class="position-relative">
                    <div class="position-relative mb-3">
                        <button class="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Add to Favorites">
                            <i class="fi-heart"></i>
                        </button>
                        <img class="rounded-3" src="@/assets/img/city-guide/catalog/09.jpg" alt="Article img" />
                    </div>
                    <h3 class="mb-2 fs-lg"><a class="nav-link stretched-link" href="javascript:void(0);">Repose Hotel</a></h3>
                    <ul class="list-inline mb-0 fs-xs">
                        <li class="list-inline-item pe-1">
                            <i class="fi-star-filled mt-n1 me-1 fs-base text-warning align-middle"></i><b>5.0</b><span class="text-muted">&nbsp;(48)</span>
                        </li>
                        <li class="list-inline-item pe-1">
                            <i class="fi-credit-card mt-n1 me-1 fs-base text-muted align-middle"></i>$100
                        </li>
                        <li class="list-inline-item pe-1">
                            <i class="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle"></i>1.4 km from
                            center
                        </li>
                    </ul>
                </div>
            </SwiperSlide>
            <!-- Item-->
            <SwiperSlide>
                <div class="position-relative">
                    <div class="position-relative mb-3">
                        <button class="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Add to Favorites">
                            <i class="fi-heart"></i>
                        </button>
                        <img class="rounded-3" src="@/assets/img/city-guide/catalog/05.jpg" alt="Article img" />
                    </div>
                    <h3 class="mb-2 fs-lg"><a class="nav-link stretched-link" href="javascript:void(0);">Leisure Inn</a></h3>
                    <ul class="list-inline mb-0 fs-xs">
                        <li class="list-inline-item pe-1">
                            <i class="fi-star-filled mt-n1 me-1 fs-base text-warning align-middle"></i><b>4.8</b><span class="text-muted">&nbsp;(24)</span>
                        </li>
                        <li class="list-inline-item pe-1">
                            <i class="fi-credit-card mt-n1 me-1 fs-base text-muted align-middle"></i>$236
                        </li>
                        <li class="list-inline-item pe-1">
                            <i class="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle"></i>0.5 km from
                            center
                        </li>
                    </ul>
                </div>
            </SwiperSlide>
            <!-- Item-->
            <SwiperSlide>
                <div class="position-relative">
                    <div class="position-relative mb-3">
                        <button class="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Add to Favorites">
                            <i class="fi-heart"></i>
                        </button>
                        <img class="rounded-3" src="@/assets/img/city-guide/catalog/11.jpg" alt="Article img" />
                    </div>
                    <h3 class="mb-2 fs-lg">
                        <a class="nav-link stretched-link" href="javascript:void(0);">Soothe &amp; Stay</a>
                    </h3>
                    <ul class="list-inline mb-0 fs-xs">
                        <li class="list-inline-item pe-1">
                            <i class="fi-star-filled mt-n1 me-1 fs-base text-warning align-middle"></i><b>4.9</b><span class="text-muted">&nbsp;(43)</span>
                        </li>
                        <li class="list-inline-item pe-1">
                            <i class="fi-credit-card mt-n1 me-1 fs-base text-muted align-middle"></i>$856
                        </li>
                        <li class="list-inline-item pe-1">
                            <i class="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle"></i>1.8 km from
                            center
                        </li>
                    </ul>
                </div>
            </SwiperSlide>
            <!-- Item-->
            <SwiperSlide>
                <div class="position-relative">
                    <div class="position-relative mb-3">
                        <button class="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Add to Favorites">
                            <i class="fi-heart"></i>
                        </button>
                        <img class="rounded-3" src="@/assets/img/city-guide/catalog/04.jpg" alt="Article img" />
                    </div>
                    <h3 class="mb-2 fs-lg">
                        <a class="nav-link stretched-link" href="javascript:void(0);">Merry Berry Motel</a>
                    </h3>
                    <ul class="list-inline mb-0 fs-xs">
                        <li class="list-inline-item pe-1">
                            <i class="fi-star-filled mt-n1 me-1 fs-base text-warning align-middle"></i><b>4.5</b><span class="text-muted">&nbsp;(13)</span>
                        </li>
                        <li class="list-inline-item pe-1">
                            <i class="fi-credit-card mt-n1 me-1 fs-base text-muted align-middle"></i>$452
                        </li>
                        <li class="list-inline-item pe-1">
                            <i class="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle"></i>0.4 km from
                            center
                        </li>
                    </ul>
                </div>
            </SwiperSlide>
        </swiper>
    </section>
</template>
