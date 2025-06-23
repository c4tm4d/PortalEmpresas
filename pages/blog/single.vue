<script lang="ts" setup>
import { ref } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Sidebar from './common/sidebar.vue'

const breadcrumbData = ref([
    {
        title: 'Home',
        link: '/',
        subitems: [
            {
                title: 'Blog',
                link: '/blog/grid'
            },
            {
                title: 'Air Travel in the Time of COVID-19'
            }
        ]
    }
])

definePageMeta({
    title: 'Blog Single',
});
</script>
<template>
    <div class="container mt-5 mb-md-4 py-5">
        <!-- Breadcrumb-->
        <Breadcrumb :data="breadcrumbData" />
        <h1 class="h2 pb-3">Air Travel in the Time of COVID-19</h1>
        <img class="rounded-3" src="@/assets/img/city-guide/blog/single.jpg" alt="Post image" />
        <div class="row mt-4 pt-3">
            <!-- Sidebar (offcanvas)-->
            <Sidebar :isSingle="true" />

            <!-- Post content-->
            <div class="col-lg-8">
                <!-- Post meta-->
                <div class="d-flex flex-wrap border-bottom pb-3 mb-4">
                    <a class="text-uppercase text-decoration-none border-end pe-3 me-3 mb-2" href="javascript:void(0);">Travelling</a>
                    <div class="d-flex align-items-center border-end pe-3 me-3 mb-2">
                        <i class="fi-calendar-alt opacity-70 me-2"></i><span>May 24</span>
                    </div>
                    <div class="d-flex align-items-center border-end pe-3 me-3 mb-2">
                        <i class="fi-clock opacity-70 me-2"></i><span>8 min read</span>
                    </div>
                    <a class="nav-link-muted d-flex align-items-center mb-2" href="javascript:void(0);">
                        <i class="fi-chat-circle opacity-70 me-2"></i><span>3 comments</span>
                    </a>
                </div>
                <p class="fs-lg fw-bold text-dark mb-4">
                    Feugiat eget gravida urna placerat posuere pulvinar. Id nibh hendrerit semper urna
                    consequat. Mauris elit tellus risus ultricies ut consequat. Tempor tellus imperdiet nec
                    velit fames pellentesque sed sed arcu. Neque quam id pellentesque in diam in.
                </p>
                <p>
                    Purus ornare nisl est nec. Nunc, enim tellus pretium viverra quisque id in metus volutpat.
                    Urna eget velit venenatis, commodo eget massa. Magna donec dictum cras nullam platea. Diam
                    rhoncus massa lectus pellentesque tristique. Amet commodo, egestas vitae bibendum.
                    Volutpat elit condimentum integer tortor porttitor justo vel lobortis risus. Lacinia
                    pellentesque fermentum tellus orci mauris, velit duis eget. Commodo justo, hac ligula
                    molestie felis, iaculis. Vitae dui at ante orci, dictum fusce. Urna, sed urna fringilla
                    faucibus euismod aliquet nec. Quis libero, fermentum amet eu, condimentum auctor. Sit vel
                    ipsum sem tempus gravida et. Scelerisque blandit orci, est quis. Nisi, tellus amet est
                    nascetur habitant faucibus ornare et vivamus.
                </p>
                <p>
                    Convallis massa nunc, tempus eget egestas sollicitudin mauris. Purus donec sed neque arcu,
                    dictumst tortor nisi, odio. A sit lectus sem velit orci, rhoncus pharetra facilisis. Cras
                    sodales a, dui pellentesque enim odio rutrum leo. Auctor viverra sit sit ut. Massa, elit
                    venenatis, ultrices viverra at sagittis, velit. Cursus tempus phasellus consectetur
                    suspendisse a blandit pellentesque diam neque. Massa est nibh congue elit amet, diam
                    faucibus. Morbi non est semper ullamcorper quam iaculis at.
                </p>
                <blockquote class="blockquote pb-2">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <footer class="fs-base">— Annette Black</footer>
                </blockquote>
                <p>
                    Velit dignissim pharetra ut augue. Nunc felis neque non sagittis. Sodales eros suspendisse
                    scelerisque varius neque elit elementum quis. Ut euismod id auctor donec consectetur
                    massa. Sed vitae accumsan lorem pharetra dictum eget vestibulum. Non blandit viverra
                    laoreet amet, maecenas auctor leo justo, sit. Vitae vulputate gravida est feugiat.
                    Adipiscing tristique mauris, eu sit tortor. Velit in scelerisque sit tincidunt habitant
                    urna nec. Justo, non massa metus convallis cursus lorem volutpat eu duis. Ipsum dolor
                    feugiat est tristique.
                </p>
                <p>
                    Praesent sed pulvinar posuere nisl tincidunt. Iaculis sit quam magna congue. Amet vel non
                    aliquet habitasse. Egestas erat odio et, eleifend turpis etiam blandit interdum. Nec augue
                    ut senectus quisque diam quis. At augue accumsan, in bibendum. A eget et, eget quisque
                    egestas netus vel. Velit, aliquet turpis convallis ullamcorper. Scelerisque sagittis
                    condimentum pretium in vitae etiam lacinia quis amet. Porttitor consequat, sollicitudin
                    vivamus pharetra nibh faucibus neque, viverra. Praesent amet sed lacus vitae.
                </p>
                <p>
                    Velit parturient tellus tellus, congue pulvinar tellus viverra. In cum massa mattis ac.
                    Amet vitae massa ut mi etiam. Auctor aliquam tristique felis donec eu sit nisi. Accumsan
                    mauris eget convallis mattis sed etiam scelerisque.
                </p>
                <!-- Tags + Sharing-->
                <div class="pt-4">
                    <div class="d-md-flex align-items-center justify-content-between border-top pt-4">
                        <div class="d-flex align-items-center me-3 mb-3 mb-md-0">
                            <div class="d-none d-sm-block fw-bold text-nowrap mb-2 me-2 pe-1">Tags:</div>
                            <div class="d-flex flex-wrap">
                                <a class="btn btn-xs btn-outline-secondary rounded-pill fs-sm fw-normal me-2 mb-2" href="javascript:void(0);">COVID-19</a><a class="btn btn-xs btn-outline-secondary rounded-pill fs-sm fw-normal mb-2" href="javascript:void(0);">Travel</a>
                            </div>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="fw-bold text-nowrap pe-1 mb-2">Share:</div>
                            <div class="d-flex">
                                <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mb-2 ms-2" href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-title="Share with Facebook"><i class="fi-facebook"></i></a><a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mb-2 ms-2" href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-title="Share with Twitter"><i class="fi-twitter"></i></a><a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mb-2 ms-2" href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-title="Share with LinkedIn"><i class="fi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Recent posts-->
        <div class="pt-5 mt-md-4 mb-lg-2">
            <div class="d-sm-flex align-items-center justify-content-between mb-4 pb-2">
                <h2 class="h3 mb-sm-0">You may be also interested in</h2>
                <nuxt-link class="btn btn-link fw-normal ms-sm-3 p-0" to="/blog/grid">Go to blog<i class="fi-arrow-long-right ms-2"></i></nuxt-link>
            </div>
            <!-- Carousel-->
            <div class="row">
                <div class="col-lg-4">
                    <!-- Item-->
                    <article>
                        <nuxt-link class="d-block mb-3" to="/blog/single">
                            <img class="rounded-3" src="@/assets/img/city-guide/blog/12.jpg" alt="Post image" />
                        </nuxt-link>
                        <a class="fs-xs text-uppercase text-decoration-none" href="javascript:void(0);">Travelling</a>
                        <h3 class="fs-base pt-1">
                            <nuxt-link class="nav-link" to="/blog/single">10 Travel Mistakes to Avoid During Coronavirus</nuxt-link>
                        </h3>
                        <a class="d-flex align-items-center text-decoration-none" href="javascript:void(0);">
                            <img class="rounded-circle" src="@/assets/img/avatars/16.png" width="44" alt="Avatar" />
                            <div class="ps-2">
                                <h6 class="fs-sm text-nav lh-base mb-1">Bessie Cooper</h6>
                                <div class="d-flex text-body fs-xs">
                                    <span class="me-2 pe-1">
                                        <i class="fi-calendar-alt opacity-70 mt-n1 me-1 align-middle"></i>May 24
                                    </span>
                                    <span>
                                        <i class="fi-chat-circle opacity-70 mt-n1 me-1 align-middle"></i>No comments
                                    </span>
                                </div>
                            </div>
                        </a>
                    </article>
                </div>
                <!-- Item-->
                <div class="col-lg-4">
                    <article>
                        <a class="d-block mb-3" href="javascript:void(0);">
                            <img class="rounded-3" src="@/assets/img/city-guide/blog/13.jpg" alt="Post image" />
                        </a>
                        <a class="fs-xs text-uppercase text-decoration-none" href="javascript:void(0);">Inspiration</a>
                        <h3 class="fs-base pt-1">
                            <nuxt-link class="nav-link" to="/blog/single">10 World-Class Museums You Can Visit Online</nuxt-link>
                        </h3>
                        <a class="d-flex align-items-center text-decoration-none" href="javascript:void(0);">
                            <img class="rounded-circle" src="@/assets/img/avatars/18.png" width="44" alt="Avatar" />
                            <div class="ps-2">
                                <h6 class="fs-sm text-nav lh-base mb-1">Annette Black</h6>
                                <div class="d-flex text-body fs-xs">
                                    <span class="me-2 pe-1">
                                        <i class="fi-calendar-alt opacity-70 mt-n1 me-1 align-middle"></i>Apr 28
                                    </span>
                                    <span>
                                        <i class="fi-chat-circle opacity-70 mt-n1 me-1 align-middle"></i>4 comments
                                    </span>
                                </div>
                            </div>
                        </a>
                    </article>
                </div>
                <!-- Item-->
                <div class="col-lg-4">
                    <article>
                        <a class="d-block mb-3" href="javascript:void(0);">
                            <img class="rounded-3" src="@/assets/img/city-guide/blog/14.jpg" alt="Post image" />
                        </a>
                        <a class="fs-xs text-uppercase text-decoration-none" href="javascript:void(0);">Entertainment</a>
                        <h3 class="fs-base pt-1">
                            <a class="nav-link" href="javascript:void(0);">7 Tips for Solo Travelers in Africa</a>
                        </h3>
                        <a class="d-flex align-items-center text-decoration-none" href="javascript:void(0);">
                            <img class="rounded-circle" src="@/assets/img/avatars/17.png" width="44" alt="Avatar" />
                            <div class="ps-2">
                                <h6 class="fs-sm text-nav lh-base mb-1">Ralph Edwards</h6>
                                <div class="d-flex text-body fs-xs">
                                    <span class="me-2 pe-1">
                                        <i class="fi-calendar-alt opacity-70 mt-n1 me-1 align-middle"></i>Mar 15
                                    </span>
                                    <span>
                                        <i class="fi-chat-circle opacity-70 mt-n1 me-1 align-middle"></i>2 comments
                                    </span>
                                </div>
                            </div>
                        </a>
                    </article>
                </div>
            </div>
        </div>
    </div>
</template>
