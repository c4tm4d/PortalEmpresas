<template>
    <!-- Banner + Where to eat-->
    <div class="container mb-5 pb-lg-4">
        <div class="row">
            <!-- Banner-->
            <div class="col-lg-4 text-center text-lg-start mb-lg-0 mb-5">
                <a class="d-block text-decoration-none bg-faded-accent rounded-3 h-100" href="javascript:void(0);">
                    <div class="p-4">
                        <h2 class="mb-0 p-2 text-primary text-nowrap">
                            <i class="fi-phone mt-n1 me-2 pe-1 fs-3 align-middle"></i>Taxi<span class="text-dark">&nbsp;488</span>
                        </h2>
                        <p class="mb-0 p-2 fs-lg text-body">The best way to get wherever you’re going!</p>
                    </div>
                    <img src="@/assets/img/city-guide/illustrations/taxi.svg" alt="Illustration" />
                </a>
            </div>
            <!-- Where to eat-->
            <div class="col-lg-8">
                <div class="d-flex align-items-center justify-content-between mb-4 pb-2">
                    <h2 class="h3 mb-0">Where to eat</h2>
                    <nuxt-link class="btn btn-link fw-normal p-0" to="/catalog">View all<i class="fi-arrow-long-right ms-2"></i></nuxt-link>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <!-- Item-->
                        <div class="d-flex align-items-start position-relative mb-4">
                            <img class="flex-shrink-0 me-3 rounded-3" src="@/assets/img/city-guide/brands/01.svg" alt="Brand logo" />
                            <div>
                                <h3 class="mb-2 fs-lg">
                                    <nuxt-link class="nav-link stretched-link" to="/catalog/single">Pina Pizza Restaurant</nuxt-link>
                                </h3>
                                <ul class="list-unstyled mb-0 fs-xs">
                                    <li>
                                        <i class="fi-star-filled mt-n1 me-1 fs-base text-warning align-middle"></i><b>5.0</b><span class="text-muted">&nbsp;(48)</span>
                                    </li>
                                    <li>
                                        <i class="fi-credit-card mt-n1 me-1 fs-base text-muted align-middle"></i>$$
                                    </li>
                                    <li>
                                        <i class="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle"></i>1.4 km from
                                        center
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- Item-->
                        <div class="d-flex align-items-start position-relative mb-4">
                            <img class="flex-shrink-0 me-3 rounded-3" src="@/assets/img/city-guide/brands/02.svg" alt="Brand logo" />
                            <div>
                                <h3 class="mb-2 fs-lg">
                                    <nuxt-link class="nav-link stretched-link" to="/catalog/single">KFC</nuxt-link>
                                </h3>
                                <ul class="list-unstyled mb-0 fs-xs">
                                    <li>
                                        <i class="fi-star-filled mt-n1 me-1 fs-base text-warning align-middle"></i><b>4.0</b><span class="text-muted">&nbsp;(18)</span>
                                    </li>
                                    <li>
                                        <i class="fi-credit-card mt-n1 me-1 fs-base text-muted align-middle"></i>$
                                    </li>
                                    <li>
                                        <i class="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle"></i>1.8 km from
                                        center
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- Item-->
                        <div class="d-flex align-items-start position-relative mb-4">
                            <img class="flex-shrink-0 me-3 rounded-3" src="@/assets/img/city-guide/brands/03.svg" alt="Brand logo" />
                            <div>
                                <h3 class="mb-2 fs-lg">
                                    <nuxt-link class="nav-link stretched-link" to="/catalog/single">Yum Restaurant</nuxt-link>
                                </h3>
                                <ul class="list-unstyled mb-0 fs-xs">
                                    <li>
                                        <i class="fi-star-filled mt-n1 me-1 fs-base text-warning align-middle"></i><b>4.6</b><span class="text-muted">&nbsp;(48)</span>
                                    </li>
                                    <li>
                                        <i class="fi-credit-card mt-n1 me-1 fs-base text-muted align-middle"></i>$
                                    </li>
                                    <li>
                                        <i class="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle"></i>2.4 km from
                                        center
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <!-- Item-->
                        <div class="d-flex align-items-start position-relative mb-4">
                            <img class="flex-shrink-0 me-3 rounded-3" src="@/assets/img/city-guide/brands/04.svg" alt="Brand logo" />
                            <div>
                                <h3 class="mb-2 fs-lg">
                                    <nuxt-link class="nav-link stretched-link" to="/catalog/single">Tosaka Sushi Bar</nuxt-link>
                                </h3>
                                <ul class="list-unstyled mb-0 fs-xs">
                                    <li>
                                        <i class="fi-star-filled mt-n1 me-1 fs-base text-warning align-middle"></i><b>5.0</b><span class="text-muted">&nbsp;(28)</span>
                                    </li>
                                    <li>
                                        <i class="fi-credit-card mt-n1 me-1 fs-base text-muted align-middle"></i>$$$
                                    </li>
                                    <li>
                                        <i class="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle"></i>2.5 km from
                                        center
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- Item-->
                        <div class="d-flex align-items-start position-relative mb-4">
                            <img class="flex-shrink-0 me-3 rounded-3" src="@/assets/img/city-guide/brands/05.svg" alt="Brand logo" />
                            <div>
                                <h3 class="mb-2 fs-lg">
                                    <nuxt-link class="nav-link stretched-link" to="/catalog/single">Dunkin' Donuts</nuxt-link>
                                </h3>
                                <ul class="list-unstyled mb-0 fs-xs">
                                    <li>
                                        <i class="fi-star-filled mt-n1 me-1 fs-base text-warning align-middle"></i><b>5.0</b><span class="text-muted">&nbsp;(43)</span>
                                    </li>
                                    <li>
                                        <i class="fi-credit-card mt-n1 me-1 fs-base text-muted align-middle"></i>$
                                    </li>
                                    <li>
                                        <i class="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle"></i>1.8 km from
                                        center
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- Item-->
                        <div class="d-flex align-items-start position-relative">
                            <img class="flex-shrink-0 me-3 rounded-3" src="@/assets/img/city-guide/brands/06.svg" alt="Brand logo" />
                            <div>
                                <h3 class="mb-2 fs-lg">
                                    <nuxt-link class="nav-link stretched-link" to="/catalog/single">Spicy Bar-Restaurant</nuxt-link>
                                </h3>
                                <ul class="list-unstyled mb-0 fs-xs">
                                    <li>
                                        <i class="fi-star-filled mt-n1 me-1 fs-base text-warning align-middle"></i><b>5.0</b><span class="text-muted">&nbsp;(32)</span>
                                    </li>
                                    <li>
                                        <i class="fi-credit-card mt-n1 me-1 fs-base text-muted align-middle"></i>$$$
                                    </li>
                                    <li>
                                        <i class="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle"></i>0.4 km from
                                        center
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
