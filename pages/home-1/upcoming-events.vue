<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import { ref } from 'vue'
import flatPickr from 'vue-flatpickr-component';
import simplebar from 'simplebar-vue';
import 'flatpickr/dist/flatpickr.css';
import 'simplebar/dist/simplebar.min.css';

import upcoming1 from "@/assets/img/city-guide/home/upcoming-1.jpg"
import upcoming2 from "@/assets/img/city-guide/home/upcoming-2.jpg"
import upcoming3 from "@/assets/img/city-guide/home/upcoming-3.jpg"


const date = ref(null);
const modules = ref([Navigation]);
const swiperOptions = ref({
    breakpoints: {
        582: {
            slidesPerView: 1,
            spaceBetween: 10
        },

        992: {
            slidesPerView: 2,
            spaceBetween: 24
        }
    }
});
</script>
<template>
    <!-- Upcoming events-->
    <section class="container mb-5 pb-lg-3">
        <div class="d-md-flex align-items-center justify-content-between mb-4 pb-md-2">
            <h2 class="h3 w-100 mb-md-0">Próximos eventos em Lisboa</h2>
            <!-- Sorting by date-->
            <simplebar class="w-100 ms-md-3 mb-n3 pt-2 pb-3 px-1" data-simplebar-auto-hide="false">
                <div class="d-flex align-items-center">
                    <div class="input-group input-group-sm flex-shrink-0 ms-md-auto me-3" style="max-width: 180px">
                        <flat-pickr class="form-control date-picker rounded-pill ps-5" placeholder="Escolher data" v-model="date"/>
                        <i class="fi-calendar position-absolute top-50 start-0 translate-middle-y ms-3 ps-1"></i>
                    </div>
                    <a class="btn btn-sm btn-secondary rounded-pill fw-normal ms-n1 me-3" href="javascript:void(0);">Amanhã</a>
                    <a class="btn btn-sm btn-secondary rounded-pill fw-normal ms-n1 me-3" href="javascript:void(0);">Este fim-de-semana</a>
                    <nuxt-link class="btn btn-link ms-md-3 ms-auto p-0 fw-normal" to="/catalog">Ver tudo<i class="fi-arrow-long-right ms-2"></i></nuxt-link>
                </div>
            </simplebar>
        </div>
        <!-- Carousel-->
        <swiper :modules="modules" :breakpoints="swiperOptions.breakpoints" navigation :loop="true">
            <!-- Item-->
            <SwiperSlide>
                <div class="card border-0 bg-size-cover pt-5" :style="`background-image: url(${upcoming1})`">
                    <div class="d-none d-md-block" style="height: 13rem"></div>
                    <div class="card-body text-center text-md-start pt-4 pt-xl-0">
                        <div class="d-md-flex justify-content-between align-items-end">
                            <div class="me-2 mb-4 mb-md-0">
                                <div class="d-flex justify-content-center justify-content-md-start text-light fs-sm mb-2">
                                    <div class="text-nowrap me-3">
                                        <i class="fi-calendar-alt me-1 opacity-70"></i><span class="align-middle">15 Nov</span>
                                    </div>
                                    <div class="text-nowrap">
                                        <i class="fi-clock me-1 opacity-70"></i><span class="align-middle">21:00</span>
                                    </div>
                                </div>
                                <h3 class="h5 text-light mb-0">Concerto do Simon Rock</h3>
                            </div>
                            <div class="btn-group">
                                <a class="btn btn-primary rounded-pill rounded-end-0 px-3" href="javascript:void(0);">Bilhetes a partir de $50</a>
                                <div class="position-relative border-start border-light zindex-5" style="margin-left: -1px"></div>
                                <button class="btn btn-primary rounded-pill rounded-start-0 px-3" type="button">
                                    <i class="fi-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <!-- Item-->
            <SwiperSlide>
                <div class="card border-0 bg-size-cover pt-5" :style="`background-image: url(${upcoming2})`">
                    <div class="d-none d-md-block" style="height: 13rem"></div>
                    <div class="card-body text-center text-md-start pt-4 pt-xl-0">
                        <div class="d-md-flex justify-content-between align-items-end">
                            <div class="me-2 mb-4 mb-md-0">
                                <div class="d-flex justify-content-center justify-content-md-start text-light fs-sm mb-2">
                                    <div class="text-nowrap me-3">
                                        <i class="fi-calendar-alt me-1 opacity-70"></i><span class="align-middle">2 Dez</span>
                                    </div>
                                    <div class="text-nowrap">
                                        <i class="fi-clock me-1 opacity-70"></i><span class="align-middle">10:00</span>
                                    </div>
                                </div>
                                <h3 class="h5 text-light mb-0">Festival Holi</h3>
                            </div>
                            <div class="btn-group">
                                <a class="btn btn-primary rounded-pill rounded-end-0 px-3" href="javascript:void(0);">Bilhetes a partir de $35</a>
                                <div class="position-relative border-start border-light zindex-5" style="margin-left: -1px"></div>
                                <button class="btn btn-primary rounded-pill rounded-start-0 px-3" type="button">
                                    <i class="fi-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <!-- Item-->
            <SwiperSlide>
                <div class="card border-0 bg-size-cover pt-5" :style="`background-image: url(${upcoming3})`">
                    <div class="d-none d-md-block" style="height: 13rem"></div>
                    <div class="card-body text-center text-md-start pt-4 pt-xl-0">
                        <div class="d-md-flex justify-content-between align-items-end">
                            <div class="me-2 mb-4 mb-md-0">
                                <div class="d-flex justify-content-center justify-content-md-start text-light fs-sm mb-2">
                                    <div class="text-nowrap me-3">
                                        <i class="fi-calendar-alt me-1 opacity-70"></i><span class="align-middle">11 Nov</span>
                                    </div>
                                    <div class="text-nowrap">
                                        <i class="fi-clock me-1 opacity-70"></i><span class="align-middle">18:00</span>
                                    </div>
                                </div>
                                <h3 class="h5 text-light mb-0">Jogo de Futebol</h3>
                            </div>
                            <div class="btn-group">
                                <a class="btn btn-primary rounded-pill rounded-end-0 px-3" href="javascript:void(0);">Bilhetes a partir de $40</a>
                                <div class="position-relative border-start border-light zindex-5" style="margin-left: -1px"></div>
                                <button class="btn btn-primary rounded-pill rounded-start-0 px-3" type="button">
                                    <i class="fi-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </swiper>
    </section>
</template>
