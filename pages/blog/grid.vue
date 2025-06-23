<script lang="ts" setup>
import { ref } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Sidebar from './common/sidebar.vue';

import b6 from "@/assets/img/city-guide/blog/06.jpg"
import b7 from "@/assets/img/city-guide/blog/07.jpg"
import b8 from "@/assets/img/city-guide/blog/08.jpg"
import b9 from "@/assets/img/city-guide/blog/09.jpg"
import b10 from "@/assets/img/city-guide/blog/10.jpg"
import b11 from "@/assets/img/city-guide/blog/11.jpg"

const breadcrumbData = ref([
    {
        title: 'Home',
        link: '/',
        subitems: [
            {
                title: 'Blog'
            }
        ]
    }
])

definePageMeta({
    title: 'Blog Grid',
});
</script>
<template>
    <div class="container mt-5 mb-md-4 py-5">
        <!-- Breadcrumb-->
        <Breadcrumb :data="breadcrumbData" />

        <h1 class="mb-4">News &amp; insights</h1>
        <!-- Sponsored posts-->
        <div class="row gy-4 mb-md-5 mb-4 pb-md-5 pb-4 border-bottom">
            <!-- Article-->
            <article class="col-md-6 pb-2 pb-md-0">
                <div class="card border-0 h-100">
                    <nuxt-link class="d-block position-relative mb-3" to="/blog/single">
                        <span class="badge bg-success position-absolute top-0 end-0 m-3 fs-sm">Sponsored</span>
                        <img class="rounded-3" src="@/assets/img/city-guide/blog/04.jpg" alt="Post image" />
                    </nuxt-link>
                    <div class="card-body p-0">
                        <a class="fs-sm text-uppercase text-decoration-none" href="javscript:void(0);">Architecture</a>
                        <h2 class="h5 pt-1 mb-2">
                            <nuxt-link class="nav-link" to="/blog/single">10 Delightful Dining Room Decor Trends for Spring</nuxt-link>
                        </h2>
                        <p class="mb-md-4 text-muted">
                            Mi sit montes, aenean tempor sollicitudin volutpat viverra. Tellus amet, vitae
                            ac consectetur blandit at. Odio proin elit, vehicula morbi faucibus vestibulum.
                            Elementum sed tincidunt nec aliquam tempus. Neque pharetra vitae malesuada.
                        </p>
                    </div>
                    <div class="card-footer p-0 border-top-0">
                        <a class="d-flex align-items-center text-decoration-none position-relative zindex-5" href="javscript:void(0);">
                            <img class="rounded-circle" src="@/assets/img/avatars/23.png" width="48" alt="Avatar" />
                            <div class="ps-2">
                                <h6 class="fs-sm text-nav lh-base mb-1">Kristin Watson</h6>
                                <div class="d-flex text-body fs-xs">
                                    <span class="me-2 pe-1">
                                        <i class="fi-calendar-alt opacity-70 mt-n1 me-1 align-middle"></i>Apr 28</span>
                                    <span>
                                        <i class="fi-chat-circle opacity-70 mt-n1 me-1 align-middle"></i>0
                                        comments</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </article>
            <!-- Article-->
            <article class="col-md-6 pb-2 pb-md-0">
                <div class="card border-0 h-100">
                    <nuxt-link class="d-block position-relative mb-3" to="/blog/single">
                        <span class="badge bg-success position-absolute top-0 end-0 m-3 fs-sm">Sponsored</span>
                        <img class="rounded-3" src="@/assets/img/city-guide/blog/05.jpg" alt="Post image" />
                    </nuxt-link>
                    <div class="card-body p-0">
                        <a class="fs-sm text-uppercase text-decoration-none" href="javscript:void(0);">Travelling</a>
                        <h2 class="h5 pt-1 mb-2">
                            <nuxt-link class="nav-link" to="/blog/single">10 Travel Mistakes to Avoid During Coronavirus Outbreak</nuxt-link>
                        </h2>
                        <p class="mb-md-4 text-muted">
                            Phasellus consequat ut sagittis, vestibulum, eget egestas senectus quis congue.
                            Posuere montes, in ultrices vitae, luctus. Ultrices aliquet pellentesque egt in sed
                            platea egestas amet purus nibh suspendisse semper. Iaculis sit quam magna...
                        </p>
                    </div>
                    <div class="card-footer p-0 border-top-0">
                        <a class="d-flex align-items-center text-decoration-none position-relative zindex-5" href="javscript:void(0);">
                            <img class="rounded-circle" src="@/assets/img/avatars/24.png" width="48" alt="Avatar" />
                            <div class="ps-2">
                                <h6 class="fs-sm text-nav lh-base mb-1">Annette Black</h6>
                                <div class="d-flex text-body fs-xs">
                                    <span class="me-2 pe-1">
                                        <i class="fi-calendar-alt opacity-70 mt-n1 me-1 align-middle"></i>Mar 15
                                    </span>
                                    <span>
                                        <i class="fi-chat-circle opacity-70 mt-n1 me-1 align-middle"></i>3 comments
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </article>
        </div>
        <!-- List of posts + Sidebar-->
        <div class="row">
            <!-- Sidebar (offcanvas)-->
            <Sidebar />

            <!-- Articles list-->
            <div class="col-lg-9">
                <div class="ps-lg-3">
                    <!-- Article-->
                    <article class="card card-horizontal border-0 mb-4">
                        <nuxt-link class="card-img-top position-relative rounded-3 me-sm-4 mb-sm-0 mb-3" to="/blog/single" :style="`background-image: url(${b6})`">
                            <span class="badge bg-info position-absolute top-0 end-0 m-3 fs-sm">New</span>
                        </nuxt-link>
                        <div class="card-body px-0 pt-0 pb-lg-5 pb-sm-4 pb-2">
                            <a class="fs-sm text-uppercase text-decoration-none" href="javscript:void(0);">Travelling</a>
                            <h3 class="h5 pt-1 mb-2">
                                <nuxt-link class="nav-link" to="/blog/single">Air Travel in the Time of COVID-19</nuxt-link>
                            </h3>
                            <p class="fs-sm text-muted">
                                Mi sit montes, aenean tempor sollicitudin volutpat viverra. Tellus amet, vitae
                                ac consectetur blandit at. Odio proin elit, vehicula morbi faucibus vestibulum
                                pulvinar posuere nisl tincidunt. Iaculis sit quam magna congue.
                            </p>
                            <a class="d-flex align-items-center text-decoration-none" href="javscript:void(0);">
                                <img class="rounded-circle" src="@/assets/img/avatars/25.png" width="48" alt="Avatar" />
                                <div class="ps-2">
                                    <h6 class="fs-sm text-nav lh-base mb-1">Bessie Cooper</h6>
                                    <div class="d-flex text-body fs-xs">
                                        <span class="me-2 pe-1">
                                            <i class="fi-calendar-alt opacity-70 mt-n1 me-1 align-middle"></i>May 24
                                        </span>
                                        <span>
                                            <i class="fi-chat-circle opacity-70 mt-n1 me-1 align-middle"></i>3 comments
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </article>
                    <!-- Article-->
                    <article class="card card-horizontal border-0 mb-4">
                        <nuxt-link class="card-img-top position-relative rounded-3 me-sm-4 mb-sm-0 mb-3" to="/blog/single" :style="`background-image: url(${b7})`"></nuxt-link>
                        <div class="card-body px-0 pt-0 pb-lg-5 pb-sm-4 pb-2">
                            <a class="fs-sm text-uppercase text-decoration-none" href="javscript:void(0);">Inspiration</a>
                            <h3 class="h5 pt-1 mb-2">
                                <nuxt-link class="nav-link" to="/blog/single">10 World-Class Museums You Can Visit Online</nuxt-link>
                            </h3>
                            <p class="fs-sm text-muted">
                                Nunc vivamus nam vitae ut faucibus metus pretium nisl. Elementum sed tincidunt nec
                                aliquam tempus. Neque pharetra vitae, mauris malesuada. Porttitor consequat,
                                sollicitudin vivamus pharetra nibh faucibus neque, viverra.
                            </p>
                            <a class="d-flex align-items-center text-decoration-none" href="javscript:void(0);">
                                <img class="rounded-circle" src="@/assets/img/avatars/24.png" width="48" alt="Avatar" />
                                <div class="ps-2">
                                    <h6 class="fs-sm text-nav lh-base mb-1">Annette Black</h6>
                                    <div class="d-flex text-body fs-xs">
                                        <span class="me-2 pe-1">
                                            <i class="fi-calendar-alt opacity-70 mt-n1 me-1 align-middle"></i>May 17
                                        </span>
                                        <span>
                                            <i class="fi-chat-circle opacity-70 mt-n1 me-1 align-middle"></i>4 comments
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </article>
                    <!-- Article-->
                    <article class="card card-horizontal border-0 mb-4">
                        <nuxt-link class="card-img-top position-relative rounded-3 me-sm-4 mb-sm-0 mb-3" to="/blog/single" :style="`background-image: url(${b8})`"></nuxt-link>
                        <div class="card-body px-0 pt-0 pb-lg-5 pb-sm-4 pb-2">
                            <a class="fs-sm text-uppercase text-decoration-none" href="javscript:void(0);">Entertainment</a>
                            <h3 class="h5 pt-1 mb-2">
                                <nuxt-link class="nav-link" to="/blog/single">7 Tips for Solo Travelers in Africa</nuxt-link>
                            </h3>
                            <p class="fs-sm text-muted">
                                Phasellus cursus orci pulvinar proin nulla vitae. Arcu faucibus vestibulum fames
                                eget nunc. Ut in sed platea egestas amet purus nibh suspendisse semper. Iaculis sit
                                quam magna congue. Amet vel non aliquet habitasse.
                            </p>
                            <a class="d-flex align-items-center text-decoration-none" href="javscript:void(0);">
                                <img class="rounded-circle" src="@/assets/img/avatars/26.png" width="48" alt="Avatar" />
                                <div class="ps-2">
                                    <h6 class="fs-sm text-nav lh-base mb-1">Ralph Edwards</h6>
                                    <div class="d-flex text-body fs-xs">
                                        <span class="me-2 pe-1">
                                            <i class="fi-calendar-alt opacity-70 mt-n1 me-1 align-middle"></i>May 10
                                        </span>
                                        <span>
                                            <i class="fi-chat-circle opacity-70 mt-n1 me-1 align-middle"></i>2 comments
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </article>
                    <!-- Article-->
                    <article class="card card-horizontal border-0 mb-4">
                        <nuxt-link class="card-img-top position-relative rounded-3 me-sm-4 mb-sm-0 mb-3" to="/blog/single" :style="`background-image: url(${b9})`"></nuxt-link>
                        <div class="card-body px-0 pt-0 pb-lg-5 pb-sm-4 pb-2">
                            <a class="fs-sm text-uppercase text-decoration-none" href="javscript:void(0);">Accomodation</a>
                            <h3 class="h5 pt-1 mb-2">
                                <nuxt-link class="nav-link" to="/blog/single">How to Spend a Few Days Visiting Coast</nuxt-link>
                            </h3>
                            <p class="fs-sm text-muted">
                                Mi sit montes, aenean tempor sollicitudin volutpat viverra. Tellus amet, vitae
                                ac consectetur blandit at. Odio proin elit, vehicula morbi faucibus vestibulum.
                                Praesent sed pulvinar posuere nisl tincidunt. Iaculis sit quam magna congue.
                            </p>
                            <a class="d-flex align-items-center text-decoration-none" href="javscript:void(0);">
                                <img class="rounded-circle" src="@/assets/img/avatars/23.png" width="48" alt="Avatar" />
                                <div class="ps-2">
                                    <h6 class="fs-sm text-nav lh-base mb-1">Kristin Watson</h6>
                                    <div class="d-flex text-body fs-xs">
                                        <span class="me-2 pe-1">
                                            <i class="fi-calendar-alt opacity-70 mt-n1 me-1 align-middle"></i>Apr 30
                                        </span>
                                        <span>
                                            <i class="fi-chat-circle opacity-70 mt-n1 me-1 align-middle"></i>No comments
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </article>
                    <!-- Article-->
                    <article class="card card-horizontal border-0 mb-4">
                        <nuxt-link class="card-img-top position-relative rounded-3 me-sm-4 mb-sm-0 mb-3" to="/blog/single" :style="`background-image: url(${b10})`"></nuxt-link>
                        <div class="card-body px-0 pt-0 pb-lg-5 pb-sm-4 pb-2">
                            <a class="fs-sm text-uppercase text-decoration-none" href="javscript:void(0);">Inspiration</a>
                            <h3 class="h5 pt-1 mb-2">
                                <nuxt-link class="nav-link" to="/blog/single">US Museum Industry 2021–2024</nuxt-link>
                            </h3>
                            <p class="fs-sm text-muted">
                                Nunc vivamus nam vitae ut faucibus metus pretium nisl. Elementum sed tincidunt nec
                                aliquam tempus. Neque pharetra vitae, mauris malesuadafelis donec eu sit nisi.
                                Accumsan mauris eget convallis mattis sed etiam scelerisque.
                            </p>
                            <a class="d-flex align-items-center text-decoration-none" href="javscript:void(0);">
                                <img class="rounded-circle" src="@/assets/img/avatars/27.png" width="48" alt="Avatar" />
                                <div class="ps-2">
                                    <h6 class="fs-sm text-nav lh-base mb-1">Guy Hawkins</h6>
                                    <div class="d-flex text-body fs-xs">
                                        <span class="me-2 pe-1">
                                            <i class="fi-calendar-alt opacity-70 mt-n1 me-1 align-middle"></i>Apr 19
                                        </span>
                                        <span>
                                            <i class="fi-chat-circle opacity-70 mt-n1 me-1 align-middle"></i>2 comments
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </article>
                    <!-- Article-->
                    <article class="card card-horizontal border-0 mb-4">
                        <nuxt-link class="card-img-top position-relative rounded-3 me-sm-4 mb-sm-0 mb-3" to="/blog/single" :style="`background-image: url(${b11})`">
                            
                        </nuxt-link>
                        <div class="card-body px-0 pt-0 pb-lg-5 pb-sm-4 pb-2">
                            <a class="fs-sm text-uppercase text-decoration-none" href="javscript:void(0);">Lifestyle</a>
                            <h3 class="h5 pt-1 mb-2">
                                <nuxt-link class="nav-link" to="/blog/single">Rocky Mountains Ski Resorts News &amp; Events</nuxt-link>
                            </h3>
                            <p class="fs-sm text-muted">
                                Phasellus cursus orci pulvinar proin nulla vitae. Arcu faucibus vestibulum fames
                                eget nunc. Ut in sed platea egestas amet purus nibh suspendisse semper. Praesent sed
                                pulvinar posuere nisl tincidunt. Praesent amet sed lacus vitae.
                            </p>
                            <a class="d-flex align-items-center text-decoration-none" href="javscript:void(0);">
                                <img class="rounded-circle" src="@/assets/img/avatars/26.png" width="48" alt="Avatar" />
                                <div class="ps-2">
                                    <h6 class="fs-sm text-nav lh-base mb-1">Ralph Edwards</h6>
                                    <div class="d-flex text-body fs-xs">
                                        <span class="me-2 pe-1">
                                            <i class="fi-calendar-alt opacity-70 mt-n1 me-1 align-middle"></i>Apr 06
                                        </span>
                                        <span>
                                            <i class="fi-chat-circle opacity-70 mt-n1 me-1 align-middle"></i>5 comments
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </article>
                </div>
                <!-- Pagination-->
                <div class="d-flex justify-content-end pt-4 border-top">
                    <nav aria-label="Blog pagination">
                        <ul class="pagination mb-0">
                            <li class="page-item d-sm-none">
                                <span class="page-link page-link-static">1 / 8</span>
                            </li>
                            <li class="page-item active d-none d-sm-block" aria-current="page">
                                <span class="page-link">1<span class="visually-hidden">(current)</span></span>
                            </li>
                            <li class="page-item d-none d-sm-block"><a class="page-link" href="javscript:void(0);">2</a></li>
                            <li class="page-item d-none d-sm-block"><a class="page-link" href="javscript:void(0);">3</a></li>
                            <li class="page-item d-none d-sm-block">...</li>
                            <li class="page-item d-none d-sm-block"><a class="page-link" href="javscript:void(0);">8</a></li>
                            <li class="page-item">
                                <a class="page-link" href="javscript:void(0);" aria-label="Next"><i class="fi-chevron-right"></i></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>
