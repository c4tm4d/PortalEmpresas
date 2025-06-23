<script lang="ts" setup>
defineProps({
    isSingle: {
        type: Boolean,
        default: false
    }
})
</script>
<template>
    <aside class="col-lg-3">
        <div class="offcanvas-lg offcanvas-start" id="blog-sidebar">
            <div class="offcanvas-header shadow-sm mb-2">
                <h2 class="h5 offcanvas-title">Sidebar</h2>
                <button class="btn-close" type="button" data-bs-dismiss="offcanvas" data-bs-target="#blog-sidebar"></button>
            </div>
            <div class="offcanvas-body">
                <!-- Sorting-->
                <div v-if="!isSingle" class="d-flex align-items-center mb-4">
                    <label class="d-inline-block me-2 pe-1 text-muted text-nowrap" for="sort">
                        <i class="fi-arrows-sort mt-n1 me-1 align-middle opacity-80"></i>Sort by:</label>
                    <select class="form-select" id="sort">
                        <option>Newest</option>
                        <option>Oldest</option>
                        <option>Popular</option>
                    </select>
                </div>
                <!-- Search-->
                <div class="position-relative mb-4">
                    <input class="form-control pe-5" type="text" placeholder="Search article by keywords..." />
                    <i class="fi-search position-absolute top-50 end-0 translate-middle-y me-3"></i>
                </div>

                <div v-if="isSingle" class="card card-flush py-2 py-lg-0 mb-4">
                    <div class="card-body d-flex align-items-start">
                        <img class="me-3 rounded-circle" src="@/assets/img/avatars/28.png" width="80" alt="Avatar">
                        <div>
                            <h4 class="h5 mb-2">
                                <a class="nav-link stretched-link p-0 fw-bold" href="javascript:void(0);">Bessie Cooper</a>
                            </h4>
                            <span class="d-block mb-3 fs-sm">Traveller, blogger</span>
                            <div class="position-relative zindex-5 text-nowrap">
                                <a class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2" href="javascript:void(0);">
                                    <i class="fi-facebook"></i>
                                </a>
                                <a class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2" href="javascript:void(0);">
                                    <i class="fi-twitter"></i>
                                </a>
                                <a class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2" href="javascript:void(0);">
                                    <i class="fi-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Categories-->
                <div class="card card-flush pb-2 pb-lg-0 mb-4">
                    <div class="card-body">
                        <h3 class="h5">Categories</h3>
                        <a class="nav-link fw-normal d-flex justify-content-between py-1 px-0" href="javscript:void(0);">Architecture
                            <span class="text-muted ms-2">(2)</span>
                        </a>
                        <a class="nav-link fw-normal d-flex justify-content-between py-1 px-0" href="javscript:void(0);">Travelling
                            <span class="text-muted ms-2">(4)</span>
                        </a>
                        <a class="nav-link fw-normal d-flex justify-content-between py-1 px-0" href="javscript:void(0);">Lifestyle
                            <span class="text-muted ms-2">(5)</span>
                        </a>
                        <a class="nav-link fw-normal d-flex justify-content-between py-1 px-0" href="javscript:void(0);">Entertainment
                            <span class="text-muted ms-2">(1)</span>
                        </a>
                        <a class="nav-link fw-normal d-flex justify-content-between py-1 px-0" href="javscript:void(0);">Accomodation
                            <span class="text-muted ms-2">(8)</span>
                        </a>
                    </div>
                </div>
                <!-- Tags-->
                <div class="card card-flush pb-2 pb-lg-0 mb-4">
                    <div class="card-body">
                        <h4 class="h5">Popular Tags</h4>
                        <div class="d-flex flex-wrap mb-n1">
                            <button class="btn btn-xs btn-outline-secondary rounded-pill fs-sm fw-normal me-2 mb-2">
                                Trending
                            </button>
                            <button class="btn btn-xs btn-outline-secondary rounded-pill fs-sm fw-normal me-2 mb-2">
                                Tutorial
                            </button>
                            <button class="btn btn-xs btn-outline-secondary rounded-pill fs-sm fw-normal me-2 mb-2">
                                Tips
                            </button>
                            <button class="btn btn-xs btn-outline-secondary rounded-pill fs-sm fw-normal me-2 mb-2">
                                Places
                            </button>
                            <button class="btn btn-xs btn-outline-secondary rounded-pill fs-sm fw-normal me-2 mb-2">
                                Urban
                            </button>
                            <button class="btn btn-xs btn-outline-secondary rounded-pill fs-sm fw-normal me-2 mb-2">
                                Travel
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Subscribe-->
                <div class="card card-flush mb-4">
                    <div class="card-body">
                        <h4 class="h5 mb-3">Stay Informed</h4>
                        <p class="fs-sm mb-3">
                            Subscribe to our newsletter and be the first to see the latest news and advice.
                        </p>
                        <form class="form-group rounded-pill">
                            <div class="input-group input-group-sm">
                                <span class="input-group-text text-muted"><i class="fi-mail"></i></span>
                                <input class="form-control" type="email" placeholder="Your email" />
                            </div>
                            <button class="btn btn-primary btn-sm rounded-pill" type="button">Sign up</button>
                        </form>
                        <div class="form-text fs-xs pt-1">
                            * By signing up you agree to our <a href="javscript:void(0);">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </aside>
</template>