<script lang="ts" setup>
import Team from './team.vue'
import hero from "@/assets/img/city-guide/about/hero-bg.jpg"

definePageMeta({
    title: 'About Us',
});
</script>
<template>
    <section class="mt-5 pt-4">
        <!-- Parallax container-->
        <div class="jarallax mt-2" data-jarallax data-speed="0.5">
            <!-- Parallax image-->
            <div class="jarallax-img bg-secondary" :style="`background-image: url(${hero});background-position: 36% center !important;`"></div>
            <!-- Section content-->
            <div class="container py-3">
                <!-- Breadcrumb-->
                <nav class="pt-3" aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-light mb-lg-5">
                        <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                        <li class="breadcrumb-item active" aria-current="page">About</li>
                    </ol>
                </nav>
                <!-- Text-->
                <div class="col-md-6 col-sm-8 py-md-5 py-4 px-0">
                    <h1 class="display-4 mb-4 pb-md-2 text-light">
                        Fall in <i class="fi-heart fs-1 text-primary"></i> with new places!
                    </h1>
                    <p class="mb-sm-5 mb-4 pb-md-5 pb-3 lead text-light">
                        We are your personal guide to unique experiences. We know the best places to see and
                        events in any part of the world. Don't miss anything with our help!
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Features-->
    <section class="position-relative bg-white rounded-xxl-4 mb-5 pb-1 py-md-3 zindex-5" style="margin-top: -30px">
        <div class="container pt-5 mb-4 mb-md-5">
            <h2 class="text-center">The values we live by</h2>
            <p class="mb-4 pb-2 mx-auto fs-lg text-center" style="max-width: 616px">
                Travelers across the globe use our platform to discover where to stay, what to do and where
                to eat in any part of the world.
            </p>
            <!-- Features grid-->
            <div class="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4 justify-content-center">
                <!-- Feature item-->
                <div class="col">
                    <div class="card border-0 shadow-sm card-hover h-100">
                        <div class="card-body icon-box">
                            <div class="icon-box-media bg-faded-accent text-accent rounded-circle mb-3">
                                <i class="fi-bed"></i>
                            </div>
                            <h3 class="h5 card-title">Safety is our priority</h3>
                            <p class="card-text fs-sm">
                                Vel et aliquet diam vulputate hendrerit lorem eget amet adipiscing. At ut ut
                                consectetur in sed.
                            </p>
                        </div>
                    </div>
                </div>
                <!-- Feature item-->
                <div class="col">
                    <div class="card border-0 shadow-sm card-hover h-100">
                        <div class="card-body icon-box">
                            <div class="icon-box-media bg-faded-warning text-warning rounded-circle mb-3">
                                <i class="fi-cash"></i>
                            </div>
                            <h3 class="h5 card-title">Fair price</h3>
                            <p class="card-text fs-sm">
                                Tincidunt mauris sit eu, lacinia pharetra, lorem neque dui. Maecenas ultricies
                                laoreet facilisis fusce amet.
                            </p>
                        </div>
                    </div>
                </div>
                <!-- Feature item-->
                <div class="col">
                    <div class="card border-0 shadow-sm card-hover h-100">
                        <div class="card-body icon-box">
                            <div class="icon-box-media bg-faded-primary text-primary rounded-circle mb-3">
                                <i class="fi-heart"></i>
                            </div>
                            <h3 class="h5 card-title">Empathy</h3>
                            <p class="card-text fs-sm">
                                Id velit, dui condimentum dictumst sapien quis a elementum dignissim. Dignissim
                                ultrices scelerisque.
                            </p>
                        </div>
                    </div>
                </div>
                <!-- Feature item-->
                <div class="col">
                    <div class="card border-0 shadow-sm card-hover h-100">
                        <div class="card-body icon-box">
                            <div class="icon-box-media bg-faded-success text-success rounded-circle mb-3">
                                <i class="fi-users"></i>
                            </div>
                            <h3 class="h5 card-title">Results-driven team</h3>
                            <p class="card-text fs-sm">
                                Tincidunt mauris sit eu, lacinia pharetra, lorem neque dui. Maecenas ultricies
                                laoreet facilisis fusce amet.
                            </p>
                        </div>
                    </div>
                </div>
                <!-- Feature item-->
                <div class="col">
                    <div class="card border-0 shadow-sm card-hover h-100">
                        <div class="card-body icon-box">
                            <div class="icon-box-media bg-faded-primary text-primary rounded-circle mb-3">
                                <i class="fi-briefcase"></i>
                            </div>
                            <h3 class="h5 card-title">Daily hard work</h3>
                            <p class="card-text fs-sm">
                                Elementum quisque cursus sagittis purus mauris. Ultrices ut eu egestas at tristique
                                malesuada.
                            </p>
                        </div>
                    </div>
                </div>
                <!-- Feature item-->
                <div class="col">
                    <div class="card border-0 shadow-sm card-hover h-100">
                        <div class="card-body icon-box">
                            <div class="icon-box-media bg-faded-success text-success rounded-circle mb-3">
                                <i class="fi-chat-left"></i>
                            </div>
                            <h3 class="h5 card-title">Communication</h3>
                            <p class="card-text fs-sm">
                                Faucibus sollicitudin id vitae pharetra tristique cursus id. Blandit at proin purus
                                cursus id sem.
                            </p>
                        </div>
                    </div>
                </div>
                <!-- Feature item-->
                <div class="col">
                    <div class="card border-0 shadow-sm card-hover h-100">
                        <div class="card-body icon-box">
                            <div class="icon-box-media bg-faded-info text-info rounded-circle mb-3">
                                <i class="fi-like"></i>
                            </div>
                            <h3 class="h5 card-title">Passion &amp; enthusiasm</h3>
                            <p class="card-text fs-sm">
                                Cras aliquam fringilla sollicitudin quis potenti lacinia volutpat nisl amet. Felis
                                gravida sed sit nec nulla id morbi.
                            </p>
                        </div>
                    </div>
                </div>
                <!-- Feature item-->
                <div class="col">
                    <div class="card border-0 shadow-sm card-hover h-100">
                        <div class="card-body icon-box">
                            <div class="icon-box-media bg-faded-warning text-warning rounded-circle mb-3">
                                <i class="fi-checkbox-checked-alt"></i>
                            </div>
                            <h3 class="h5 card-title">Simple solutions</h3>
                            <p class="card-text fs-sm">
                                Porta vulputate commodo ut pulvinar. Fames augue dui faucibus porttitor dis duis id
                                faucibus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Add business-->
    <section class="container mb-5 pb-2 pb-lg-5">
        <div class="row align-items-lg-center gy-4">
            <div class="col-md-6">
                <img class="rounded-3" src="@/assets/img/city-guide/about/01.jpg" alt="Cover" />
            </div>
            <div class="col-lg-5 offset-lg-1 col-md-6">
                <h2 class="mb-lg-4">Get new customers with our catalog easily!</h2>
                <p class="mb-lg-4 fs-lg text-muted">
                    Et quis dictum malesuada phasellus feugiat laoreet lacus. Imperdiet sed a dignissim mauris
                    amet bibendum. Non odio molestie feugiat sed ullamcorper nunc.
                </p>
                <ul class="list-unstyled mb-4 pb-lg-3">
                    <li class="d-flex">
                        <i class="fi-check mt-1 me-2 pe-1 text-primary"></i>Nec placerat massa vitae arcu,
                        sodales tortor.
                    </li>
                    <li class="d-flex">
                        <i class="fi-check mt-1 me-2 pe-1 text-primary"></i>Risus consectetur nulla vitae at
                        donec est felis eget turpis.
                    </li>
                    <li class="d-flex">
                        <i class="fi-check mt-1 me-2 pe-1 text-primary"></i>Elit, sed vel turpis donec molestie
                        elit, morbi aliquam.
                    </li>
                    <li class="d-flex">
                        <i class="fi-check mt-1 me-2 pe-1 text-primary"></i>Orci tincidunt consectetun quam
                        massa at.
                    </li>
                    <li class="d-flex">
                        <i class="fi-check mt-1 me-2 pe-1 text-primary"></i>Ac aenean proin amet bibendum dolor
                        placerat.
                    </li>
                    <li class="d-flex">
                        <i class="fi-check mt-1 me-2 pe-1 text-primary"></i>Leo quis nisi lorem morbi egestas
                        sed lacus.
                    </li>
                </ul>
                <nuxt-link class="btn btn-lg btn-primary rounded-pill" to="/vendor/add-business"><i class="fi-plus me-2"></i>Add Business</nuxt-link>
            </div>
        </div>
    </section>

    <!-- FAQ-->
    <section class="container mb-5 pb-lg-5">
        <h2 class="mb-sm-4 pb-md-2 text-center">Frequently asked questions</h2>
        <!-- FAQ grid-->
        <div class="row row-cols-lg-3 row-cols-sm-2 row-cols-1 g-sm-4 g-0">
            <!-- Grid item-->
            <div class="col">
                <div class="card border-0 h-100">
                    <div class="card-body">
                        <h3 class="h5 text-primary">01. Getting started</h3>
                        <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/help-center">Quis arcu euismod est, varius nisi?</nuxt-link>
                        <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/help-center">Aliquam, commodo sed nibh?</nuxt-link>
                        <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/help-center">Faucibus felis fames mauris dolor purus?</nuxt-link>
                        <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/help-center">Odio diam, tellus facilisi?</nuxt-link>
                        <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/help-center">Eu quisque libero, sed neque?</nuxt-link>
                        <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/help-center">Lectus sed sit cursus amet, vitae tempor?</nuxt-link>
                    </div>
                </div>
            </div>
            <!-- Grid item-->
            <div class="col">
                <div class="card border-0 h-100">
                    <div class="card-body">
                        <h3 class="h5 text-primary">02.Partnership</h3>
                        <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/help-center">Tincidunt molestie scelerisque?</nuxt-link>
                        <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/help-center">Nunc, ipsum ut augue fusce ornare?</nuxt-link>
                        <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/help-center">Velit, mauris amet feugiat condimentum mollis?</nuxt-link>
                        <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/help-center">Lacus, sed fames mi cras id?</nuxt-link>
                        <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/help-center">Adipiscing magna suspendisse?</nuxt-link>
                        <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/help-center">Libero pellentesque ultricies maecenas?</nuxt-link>
                    </div>
                </div>
            </div>
            <!-- Grid item-->
            <div class="col">
                <div class="card border-0 h-100">
                    <div class="card-body">
                        <h3 class="h5 text-primary">03. Account &amp; profile</h3>
                        <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/help-center">Cursus fusce volutpat tempor?</nuxt-link>
                        <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/help-center">A senectus auctor sodales gravida non elit?</nuxt-link>
                        <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/help-center">Mauris accumsan vel rhoncus?</nuxt-link>
                        <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/help-center">Cras nunc, semper lectus turpis?</nuxt-link>
                        <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/help-center">Pulvinar sed morbi massa nulla dolor eget?</nuxt-link>
                        <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/help-center">Bibendum mattis amet amet?</nuxt-link>
                    </div>
                </div>
            </div>
            <!-- Grid item-->
            <div class="col">
                <div class="card border-0 h-100">
                    <div class="card-body">
                        <h3 class="h5 text-primary">04. Privacy &amp; security</h3>
                        <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/help-center">Pellentesque ante quisque sit?</nuxt-link>
                        <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/help-center">Eu quam bibendum adipiscing leo?</nuxt-link>
                        <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/help-center">Massa fermentum, eget nec elementum?</nuxt-link>
                        <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/help-center">In quis pulvinar amet morbi praesent?</nuxt-link>
                        <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/help-center">Eros, dolor in consequat netus?</nuxt-link>
                        <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/help-center">Quis gravida felis dui non gravida?</nuxt-link>
                    </div>
                </div>
            </div>
            <!-- Grid item-->
            <div class="col">
                <div class="card border-0 h-100">
                    <div class="card-body">
                        <h3 class="h5 text-primary">05. Transactions</h3>
                        <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/help-center">Nisl urna id aliquam sed vitae pellentesque?</nuxt-link>
                        <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/help-center">Nam morbi faucibus ultricies euismod?</nuxt-link>
                        <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/help-center">Amet scelerisque consectetur consequa?</nuxt-link>
                        <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/help-center">Sapien at fames urna in id at?</nuxt-link>
                        <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/help-center">Fames id nullam et id proin ante ultrices?</nuxt-link>
                        <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/help-center">Quis ultricies turpis commodo, elit lectus?</nuxt-link>
                    </div>
                </div>
            </div>
            <!-- Grid item-->
            <div class="col">
                <div class="card border-0 h-100">
                    <div class="card-body">
                        <h3 class="h5 text-primary">06. Privacy &amp; security</h3>
                        <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/help-center">Lacus eget amet blandit egestas?</nuxt-link>
                        <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/help-center">Augue at donec molestie vulputate cum?</nuxt-link>
                        <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/help-center">Viverra adipiscing nisl, lacus at et?</nuxt-link>
                        <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/help-center">Sagittis dictum hendrerit faucibus malesuada?</nuxt-link>
                        <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/help-center">Tempus est non sapien tempus?</nuxt-link>
                        <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/help-center">Nunc est hendrerit volutpat nunc donec?</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Team />

    <!-- The people behind Finder-->
    <section class="container mb-5 pb-2 pb-lg-5">
        <h2 class="mb-4 pb-2 text-center">World city guides</h2>
        <img src="@/assets/img/city-guide/about/map.jpg" alt="World map" />
    </section>

    <!-- Blog: Latest posts-->
    <section class="container my-5 py-lg-4">
        <div class="d-sm-flex align-items-center justify-content-between mb-4 pb-2">
            <h2 class="h3 mb-sm-0">Don’t miss the latest posts</h2>
            <nuxt-link class="btn btn-link fw-normal ms-sm-3 p-0" to="/blog/grid">Go to blog<i class="fi-arrow-long-right ms-2"></i></nuxt-link>
        </div>
        <!-- -->
        <div class="mb-md-2">
            <div class="row">
                <!-- Item-->
                <div class="col-lg-4">
                    <article>
                        <nuxt-link class="d-block mb-3" to="/blog/single">
                            <img class="rounded-3" src="@/assets/img/city-guide/blog/01.jpg" alt="Post image" />
                        </nuxt-link>
                        <a class="fs-xs text-uppercase text-decoration-none" href="javascript:void(0);">Travelling</a>
                        <h3 class="fs-base pt-1">
                            <nuxt-link class="nav-link" to="/blog/single">Air Travel in the Time of COVID-19</nuxt-link>
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
                        <nuxt-link class="d-block mb-3" to="/blog/single">
                            <img class="rounded-3" src="@/assets/img/city-guide/blog/02.jpg" alt="Post image" /></nuxt-link>
                        <a class="fs-xs text-uppercase text-decoration-none" href="javascript:void(0);">Entertainment</a>
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
                        <nuxt-link class="d-block mb-3" to="/blog/single">
                            <img class="rounded-3" src="@/assets/img/city-guide/blog/03.jpg" alt="Post image" /></nuxt-link>
                        <a class="fs-xs text-uppercase text-decoration-none" href="javascript:void(0);">Travelling</a>
                        <h3 class="fs-base pt-1">
                            <nuxt-link class="nav-link" to="/blog/single">7 Tips for Solo Travelers in Africa</nuxt-link>
                        </h3>
                        <a class="d-flex align-items-center text-decoration-none" href="javascript:void(0);">
                            <img class="rounded-circle" src="@/assets/img/avatars/17.png" width="44" alt="Avatar" />
                            <div class="ps-2">
                                <h6 class="fs-sm text-nav lh-base mb-1">Ralph Edwards</h6>
                                <div class="d-flex text-body fs-xs">
                                    <span class="me-2 pe-1">
                                        <i class="fi-calendar-alt opacity-70 mt-n1 me-1 align-middle"></i>Apr 15
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
    </section>

    <!-- Stay informed (subscribe form)-->
    <section class="container mb-5 pb-lg-5">
        <div class="rounded-3 bg-faded-accent py-5 px-sm-5 px-4">
            <div class="mx-auto py-md-4 text-center" style="max-width: 605px;">
                <h2>Stay informed</h2>
                <p class="mb-4 pb-2 fs-lg">Subscribe to our newsletter, be the first to see the latest news &amp; advice.</p>
                <form class="form-group rounded-pill mb-3">
                    <div class="input-group input-group-lg"><span class="input-group-text text-muted"><i class="fi-mail"></i></span>
                        <input class="form-control" type="email" placeholder="Your email">
                    </div>
                    <button class="btn btn-primary btn-lg rounded-pill" type="button">Subscribe</button>
                </form>
                <div class="form-text">* By signing up you agree to our <a href='#' class='text-decoration-none'>Privacy Policy</a></div>
            </div>
        </div>
    </section>
</template>
