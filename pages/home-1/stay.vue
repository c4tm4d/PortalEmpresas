<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import { ref } from 'vue'

const modules = ref([Navigation]);

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
            spaceBetween: 24
        }
    }
});
</script>
<template>
    <section class="container mb-sm-5 mb-4 pb-lg-4">
        <div class="d-sm-flex align-items-center justify-content-between mb-4 pb-2">
            <h2 class="h3 mb-sm-0">Onde ficar em Lisboa</h2>
            <nuxt-link class="btn btn-link fw-normal ms-sm-3 p-0" to="/catalog">Ver tudo<i class="fi-arrow-long-right ms-2"></i></nuxt-link>
        </div>
        <swiper :modules="modules" :breakpoints="swiperOptions.breakpoints" navigation :loop="true" class="h-100vh">
            <!-- Item-->
            <SwiperSlide>
                <div class="position-relative">
                    <div class="position-relative mb-3">
                        <button class="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Adicionar aos Favoritos">
                            <i class="fi-heart"></i>
                        </button>
                        <img class="rounded-3" src="@/assets/img/city-guide/catalog/01.jpg" alt="Imagem" />
                    </div>
                    <h3 class="mb-2 fs-lg">
                        <nuxt-link class="nav-link stretched-link" to="/catalog/single">Hotel de Negócios de Lisboa</nuxt-link>
                    </h3>
                    <ul class="list-inline mb-0 fs-xs">
                        <li class="list-inline-item pe-1">
                            <i class="fi-star-filled mt-n1 me-1 fs-base text-warning align-middle"></i><b>5.0</b><span class="text-muted">&nbsp;(48)</span>
                        </li>
                        <li class="list-inline-item pe-1">
                            <i class="fi-credit-card mt-n1 me-1 fs-base text-muted align-middle"></i>$$
                        </li>
                        <li class="list-inline-item pe-1">
                            <i class="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle"></i>1.4 km do
                            centro
                        </li>
                    </ul>
                </div>
            </SwiperSlide>
            <!-- Item-->
            <SwiperSlide>
                <div class="position-relative">
                    <div class="position-relative mb-3">
                        <button class="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Adicionar aos Favoritos">
                            <i class="fi-heart"></i>
                        </button>
                        <img class="rounded-3" src="@/assets/img/city-guide/catalog/02.jpg" alt="Imagem" />
                    </div>
                    <h3 class="mb-2 fs-lg">
                        <a class="nav-link stretched-link" to="/catalog/single">Chalé da Grande Árvore</a>
                    </h3>
                    <ul class="list-inline mb-0 fs-xs">
                        <li class="list-inline-item pe-1">
                            <i class="fi-star-filled mt-n1 me-1 fs-base text-warning align-middle"></i><b>4.8</b><span class="text-muted">&nbsp;(24)</span>
                        </li>
                        <li class="list-inline-item pe-1">
                            <i class="fi-credit-card mt-n1 me-1 fs-base text-muted align-middle"></i>$$$
                        </li>
                        <li class="list-inline-item pe-1">
                            <i class="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle"></i>0.5 km do
                            centro
                        </li>
                    </ul>
                </div>
            </SwiperSlide>
            <!-- Item-->
            <SwiperSlide>
                <div class="position-relative">
                    <div class="position-relative mb-3">
                        <button class="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Adicionar aos Favoritos">
                            <i class="fi-heart"></i>
                        </button>
                        <img class="rounded-3" src="@/assets/img/city-guide/catalog/03.jpg" alt="Imagem" />
                    </div>
                    <h3 class="mb-2 fs-lg">
                        <a class="nav-link stretched-link" to="/catalog/single">Grande Resort &amp; Spa</a>
                    </h3>
                    <ul class="list-inline mb-0 fs-xs">
                        <li class="list-inline-item pe-1">
                            <i class="fi-star-filled mt-n1 me-1 fs-base text-warning align-middle"></i><b>4.9</b><span class="text-muted">&nbsp;(43)</span>
                        </li>
                        <li class="list-inline-item pe-1">
                            <i class="fi-credit-card mt-n1 me-1 fs-base text-muted align-middle"></i>$$$
                        </li>
                        <li class="list-inline-item pe-1">
                            <i class="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle"></i>1.8 km do
                            centro
                        </li>
                    </ul>
                </div>
            </SwiperSlide>
            <!-- Item-->
            <SwiperSlide>
                <div class="position-relative">
                    <div class="position-relative mb-3">
                        <button class="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Adicionar aos Favoritos">
                            <i class="fi-heart"></i>
                        </button>
                        <img class="rounded-3" src="@/assets/img/city-guide/catalog/04.jpg" alt="Imagem" />
                    </div>
                    <h3 class="mb-2 fs-lg">
                        <a class="nav-link stretched-link" to="/catalog/single">Motel Merry Berry</a>
                    </h3>
                    <ul class="list-inline mb-0 fs-xs">
                        <li class="list-inline-item pe-1">
                            <i class="fi-star-filled mt-n1 me-1 fs-base text-warning align-middle"></i><b>4.5</b><span class="text-muted">&nbsp;(13)</span>
                        </li>
                        <li class="list-inline-item pe-1">
                            <i class="fi-credit-card mt-n1 me-1 fs-base text-muted align-middle"></i>$$
                        </li>
                        <li class="list-inline-item pe-1">
                            <i class="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle"></i>0.4 km do
                            centro
                        </li>
                    </ul>
                </div>
            </SwiperSlide>
        </swiper>
    </section>
</template>
