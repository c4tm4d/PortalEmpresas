<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
</script>
<template>
    <!-- What’s new-->
    <section class="container mt-n3 mt-md-0 mb-5 pb-lg-4">
        <h2 class="h3 mb-4 pb-2">What’s new in Berlin</h2>
        <!-- Carousel-->
        <swiper :modules="[Navigation]" :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }" :slidesPerView="1" :loop="true" :space-between="30" class="h-100vh">
            <!-- Item-->
            <SwiperSlide>
                <div class="row">
                    <div class="col-md-7 mb-md-0 mb-3">
                        <img class="position-relative rounded-3 zindex-5" src="@/assets/img/city-guide/home/new-1.jpg" alt="Article image" />
                    </div>
                    <div class="col-md-5">
                        <h3 class="h4 from-top">Amusement Park</h3>
                        <ul class="list-unstyled delay-2 from-end">
                            <li class="mb-1 fs-sm">
                                <i class="fi-map-pin text-muted me-2 fs-base"></i>Ollenhauer Str. 29, 10118
                            </li>
                            <li class="mb-1 fs-sm">
                                <i class="fi-clock text-muted me-2 fs-base"></i>9:00 – 23:00
                            </li>
                            <li class="mb-1 fs-sm"><i class="fi-wallet text-muted me-2 fs-base"></i>$100</li>
                        </ul>
                        <p class="pb-2 delay-3 from-end d-none d-lg-block">
                            Blandit lorem dictum in velit. Et nisi at faucibus mauris pretium enim. Risus sapien
                            nisi aliquam egestas leo dignissim ut quis ac. Amet, cras orci justo, tortor nisl
                            aliquet. Enim tincidunt tellus nunc, nulla arcu posuere quis. Velit turpis orci
                            venenatis risus felis, volutpat convallis varius. Enim non euismod adipiscing
                            a enim.
                        </p>
                        <div class="delay-4 scale-up">
                            <nuxt-link class="btn btn-primary rounded-pill" to="/catalog/single">View more<i class="fi-chevron-right fs-sm ms-2"></i></nuxt-link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <!-- Item-->
            <SwiperSlide>
                <div class="row">
                    <div class="col-md-7 mb-md-0 mb-3">
                        <img class="position-relative rounded-3 zindex-5" src="@/assets/img/city-guide/home/new-2.jpg" alt="Article image" />
                    </div>
                    <div class="col-md-5">
                        <h3 class="h4 from-top">Mall of Berlin</h3>
                        <ul class="list-unstyled delay-2 from-end">
                            <li class="mb-1 fs-sm">
                                <i class="fi-map-pin text-muted me-2 fs-base"></i>Ollenhauer Str. 29, 10118
                            </li>
                            <li class="mb-1 fs-sm">
                                <i class="fi-clock text-muted me-2 fs-base"></i>10:00 – 20:00
                            </li>
                            <li class="mb-1 fs-sm"><i class="fi-wallet text-muted me-2 fs-base"></i>$89</li>
                        </ul>
                        <p class="pb-2 delay-3 from-end d-none d-lg-block">
                            Sem nibh urna id arcu. Quis tortor vestibulum morbi volutpat. Et duis et sed tellus.
                            Egestas ultrices viverra in pretium nec. Dui ornare fusce vel fringilla scelerisque
                            posuere pharetra ut. Dui donec sapien, dictum nunc varius.
                        </p>
                        <div class="delay-4 scale-up">
                            <nuxt-link class="btn btn-primary rounded-pill" to="/catalog/single">View more<i class="fi-chevron-right fs-sm ms-2"></i></nuxt-link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </swiper>
        <!-- Carousel custom controls-->
        <div class="tns-carousel-controls pt-2 mt-4" id="carousel-controls">
            <div class="swiper-button-prev mx-2"></div>
            <div class="swiper-button-next mx-2"></div>
        </div>
    </section>
</template>
