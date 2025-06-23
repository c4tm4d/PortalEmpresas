<script lang="ts" setup>
import Header from './common/header.vue';
import RecentlyViewed from './common/recently-view.vue';

import Lightgallery from 'lightgallery/vue'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

// If you are using scss you can skip the css imports below and use scss instead
import 'lightgallery/scss/lightgallery.scss'

import map from "@/assets/img/city-guide/single/map.jpg"

import single01 from "@/assets/img/city-guide/single/01.jpg";
import single02 from "@/assets/img/city-guide/single/02.jpg";
import single03 from "@/assets/img/city-guide/single/03.jpg";
import single04 from "@/assets/img/city-guide/single/04.jpg";
import single05 from "@/assets/img/city-guide/single/05.jpg";
import single06 from "@/assets/img/city-guide/single/06.jpg";
import single07 from "@/assets/img/city-guide/single/07.jpg";
import single08 from "@/assets/img/city-guide/single/08.jpg";

const pluginsData = [lgThumbnail, lgZoom];

definePageMeta({
    title: 'Catalog Single',
});
</script>

<template>
    <!-- Page header-->
    <Header isActive="single" />

    <!-- Gallery-->
    <div class="container overflow-auto mb-4 pb-3">
        <div class="row g-2 g-md-3 gallery" style="min-width: 30rem">
            <div class="col-8">
                <lightgallery :settings="{ speed: 500, plugins: pluginsData }">
                    <a class="gallery-item rounded rounded-md-3" :href="single01">
                        <img alt="Bathroom" src="@/assets/img/city-guide/single/01.jpg" />
                    </a>
                </lightgallery>
            </div>
            <div class="col-4">
                <lightgallery :settings="{ speed: 500, plugins: pluginsData }">
                    <a class="gallery-item rounded rounded-md-3 mb-2 mb-md-3" :href="single02">
                        <img alt="Bedroom" src="@/assets/img/city-guide/single/02.jpg" />
                    </a>
                    <a class="gallery-item rounded rounded-md-3" :href="single03">
                        <img alt="Living Room" src="@/assets/img/city-guide/single/03.jpg" />
                    </a>
                </lightgallery>
            </div>
            <div class="col-12">
                <div class="row g-2 g-md-3">
                    <div class="col">
                        <lightgallery :settings="{ speed: 500, plugins: pluginsData }">
                            <a class="gallery-item rounded rounded-md-3" :href="single04">
                                <img alt="Bedroom" src="@/assets/img/city-guide/single/th04.jpg" />
                            </a>
                        </lightgallery>
                    </div>
                    <div class="col">
                        <lightgallery :settings="{ speed: 500, plugins: pluginsData }">
                            <a class="gallery-item rounded rounded-md-3" :href="single05">
                                <img alt="Kitchen" src="@/assets/img/city-guide/single/th05.jpg" />
                            </a>
                        </lightgallery>
                    </div>
                    <div class="col">
                        <lightgallery :settings="{ speed: 500, plugins: pluginsData }">
                            <a class="gallery-item rounded rounded-md-3" :href="single06">
                                <img alt="Living Room" src="@/assets/img/city-guide/single/th06.jpg" />
                            </a>
                        </lightgallery>
                    </div>
                    <div class="col">
                        <lightgallery :settings="{ speed: 500, plugins: pluginsData }">
                            <a class="gallery-item rounded rounded-md-3" :href="single07">
                                <img alt="Bathroom" src="@/assets/img/city-guide/single/th07.jpg" />
                            </a>
                        </lightgallery>
                    </div>
                    <div class="col">
                        <lightgallery :settings="{ speed: 500, plugins: pluginsData }">
                            <a class="gallery-item more-item rounded rounded-md-3" :href="single08">
                                <img alt="Bathroom" src="@/assets/img/city-guide/single/th08.jpg" />
                                <span class="gallery-item-caption fs-base">+5 <span class="d-none d-md-inline">photos</span></span>
                            </a>
                        </lightgallery>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Page content-->
    <section class="container pb-5 mb-md-4">
        <div class="row">
            <div class="col-md-7 mb-md-0 mb-3">
                <div class="card py-2 px-sm-4 px-3 shadow-sm">
                    <div class="card-body mx-n2">

                        <!-- Place info-->
                        <div class="d-flex align-items-start mb-3 pb-3 border-bottom">
                            <img src="@/assets/img/city-guide/brands/hotel.svg" width="60" alt="Thumbnail">
                            <div class="ps-2 ms-1">
                                <h3 class="h5 mb-2"> Berlin Business Hotel</h3>
                                <ul class="list-unstyled d-flex flex-wrap fs-sm">
                                    <li class="me-2 mb-1 pe-1"><i class="fi-star-filled mt-n1 me-1 text-warning align-middle opacity-70"></i><b>4.9 </b>(48)</li>
                                    <li class="me-2 mb-1 pe-1"><i class="fi-wallet mt-n1 me-1 align-middle opacity-70"></i>$$</li>
                                    <li class="me-2 mb-1 pe-1"><i class="fi-map-pin mt-n1 me-1 align-middle opacity-70"></i>1.4 km from center</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Place contacts-->
                        <div class="mb-3 pb-3 border-bottom">
                            <h4 class="h5 mb-2">Contacts:</h4>
                            <ul class="nav row row-cols-sm-2 row-cols-1 gy-1">
                                <li class="col">
                                    <a class="nav-link p-0 fw-normal d-flex align-items-start" href="javascript:void(0);"><i class="fi-map-pin mt-1 me-2 align-middle opacity-70"></i>Ollenhauer Str. 29, 10118, Berlin</a>
                                </li>
                                <li class="col">
                                    <a class="nav-link d-inline-block p-0 fw-normal d-inline-flex align-items-start" href="tel:3025550107"><i class="fi-phone mt-1 me-2 align-middle opacity-70"></i>(302) 555-0107</a>, <a class="nav-link d-inline-block p-0 fw-normal" href="tel:3025550208">(302) 555-0208</a>
                                </li>
                                <li class="col">
                                    <a class="nav-link p-0 fw-normal d-flex align-items-start" href="javascript:void(0);"><i class="fi-globe mt-1 me-2 align-middle opacity-60"></i>bb-hotel.com</a>
                                </li>
                                <li class="col">
                                    <a class="nav-link p-0 fw-normal d-flex align-items-start" href="mailto:bb-hotel@example.com"><i class="fi-mail mt-1 me-2 align-middle opacity-70"></i>bb-hotel@example.com</a>
                                </li>
                            </ul>
                        </div>
                        <!-- Place pricing-->
                        <div class="mb-3 pb-3 border-bottom">
                            <div class="row row-cols-sm-2 row-cols-1">
                                <div class="col mb-sm-0 mb-3">
                                    <h4 class="h5 mb-0">
                                        <span class="fs-4">$50-100&nbsp;</span>
                                        <span class="fs-base fw-normal text-body">/night</span>
                                    </h4>
                                </div>
                                <div class="col">
                                    <a class="btn btn-primary btn-lg rounded-pill w-sm-auto w-100" href="javascript:void(0);">Book now<i class="fi-chevron-right fs-sm ms-2"></i></a>
                                </div>
                            </div>
                        </div>
                        <!-- Follow-->
                        <div class="d-flex align-items-center">
                            <h4 class="h5 mb-0 me-3">Follow:</h4>
                            <div class="text-nowrap">
                                <a class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2" href="javascript:void(0);">
                                    <i class="fi-facebook"></i>
                                </a>
                                <a class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2" href="javascript:void(0);">
                                    <i class="fi-instagram"></i>
                                </a>
                                <a class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle" href="javascript:void(0);">
                                    <i class="fi-twitter"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Location (Map)-->
            <div class="col-md-5">
                <div class="position-relative bg-size-cover bg-position-center bg-repeat-0 h-100 rounded-3" :style="`background-image: url(${map}); min-height: 250px;`">
                    <div class="d-flex h-100 flex-column align-items-center justify-content-center">
                        <img class="d-block mx-auto mb-4 rounded-circle bg-white shadow" src="@/assets/img/city-guide/brands/hotel.svg" width="40" alt="Place logo">
                        <a class="btn btn-primary rounded-pill stretched-link" href="javascript:void(0);">
                            <i class="fi-route me-2"></i>Get directions
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <RecentlyViewed />
</template>