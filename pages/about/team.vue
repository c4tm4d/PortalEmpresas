<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import { ref } from 'vue'

const modules = ref([Navigation]);

const swiperOptions = ref({
    breakpoints: {
        500: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        582: {
            slidesPerView: 3,
            spaceBetween: 10
        },

        992: {
            slidesPerView: 4,
            spaceBetween: 24
        }
    }
});
</script>
<template>
    <!-- The people behind Finder-->
    <section class="container mb-5 pb-2 pb-lg-5">
        <h2 class="mb-4 text-center">The people behind Finder</h2>
        <!-- Team carousel-->
        <swiper :modules="modules" :breakpoints="swiperOptions.breakpoints" navigation :loop="true" class="gx-4 mx-0 pt-3 pb-4">
            <!-- Team slide-->
            <SwiperSlide>
                <div class="card border-0 shadow-sm">
                    <img class="card-img-top" src="@/assets/img/city-guide/about/team/01.jpg" alt="Devon Lane" />
                    <div class="card-body text-center">
                        <h3 class="h5 card-title mb-2">Devon Lane</h3>
                        <span class="d-inline-block mb-3 fs-sm">President &amp; CEO</span>
                        <div class="pt-1">
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-facebook"></i>
                            </a>
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-twitter"></i>
                            </a>
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <!-- Team slide-->
            <SwiperSlide>
                <div class="card border-0 shadow-sm">
                    <img class="card-img-top" src="@/assets/img/city-guide/about/team/02.jpg" alt="Dianne Russell" />
                    <div class="card-body text-center">
                        <h3 class="h5 card-title mb-2">Dianne Russell</h3>
                        <span class="d-inline-block mb-3 fs-sm">Chief Financial Officer</span>
                        <div class="pt-1">
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-facebook"></i>
                            </a>
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-twitter"></i>
                            </a>
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <!-- Team slide-->
            <SwiperSlide>
                <div class="card border-0 shadow-sm">
                    <img class="card-img-top" src="@/assets/img/city-guide/about/team/03.jpg" alt="Ronald Richards" />
                    <div class="card-body text-center">
                        <h3 class="h5 card-title mb-2">Ronald Richards</h3>
                        <span class="d-inline-block mb-3 fs-sm">Technology Officer</span>
                        <div class="pt-1">
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-facebook"></i>
                            </a>
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-twitter"></i>
                            </a>
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <!-- Team slide-->
            <SwiperSlide>
                <div class="card border-0 shadow-sm">
                    <img class="card-img-top" src="@/assets/img/city-guide/about/team/04.jpg" alt="RAlbert Flores" />
                    <div class="card-body text-center">
                        <h3 class="h5 card-title mb-2">Albert Flores</h3>
                        <span class="d-inline-block mb-3 fs-sm">Commercial Officer</span>
                        <div class="pt-1">
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-facebook"></i>
                            </a>
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-twitter"></i>
                            </a>
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <!-- Team slide-->
            <SwiperSlide>
                <div class="card border-0 shadow-sm">
                    <img class="card-img-top" src="@/assets/img/city-guide/about/team/01.jpg" alt="Devon Lane" />
                    <div class="card-body text-center">
                        <h3 class="h5 card-title mb-2">Devon Lane</h3>
                        <span class="d-inline-block mb-3 fs-sm">President &amp; CEO</span>
                        <div class="pt-1">
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-facebook"></i>
                            </a>
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-twitter"></i>
                            </a>
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <!-- Team slide-->
            <SwiperSlide>
                <div class="card border-0 shadow-sm">
                    <img class="card-img-top" src="@/assets/img/city-guide/about/team/02.jpg" alt="Dianne Russell" />
                    <div class="card-body text-center">
                        <h3 class="h5 card-title mb-2">Dianne Russell</h3>
                        <span class="d-inline-block mb-3 fs-sm">Chief Financial Officer</span>
                        <div class="pt-1">
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-facebook"></i>
                            </a>
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-twitter"></i>
                            </a>
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <!-- Team slide-->
            <SwiperSlide>
                <div class="card border-0 shadow-sm">
                    <img class="card-img-top" src="@/assets/img/city-guide/about/team/03.jpg" alt="Ronald Richards" />
                    <div class="card-body text-center">
                        <h3 class="h5 card-title mb-2">Ronald Richards</h3>
                        <span class="d-inline-block mb-3 fs-sm">Technology Officer</span>
                        <div class="pt-1">
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-facebook"></i>
                            </a>
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-twitter"></i>
                            </a>
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <!-- Team slide-->
            <SwiperSlide>
                <div class="card border-0 shadow-sm">
                    <img class="card-img-top" src="@/assets/img/city-guide/about/team/04.jpg" alt="RAlbert Flores" />
                    <div class="card-body text-center">
                        <h3 class="h5 card-title mb-2">Albert Flores</h3>
                        <span class="d-inline-block mb-3 fs-sm">Commercial Officer</span>
                        <div class="pt-1">
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-facebook"></i>
                            </a>
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-twitter"></i>
                            </a>
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </swiper>
    </section>
</template>
