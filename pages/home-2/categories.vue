<template>
    <!-- Categories-->
    <section class="container py-5 pt-xxl-4 mt-md-2 mb-md-4">
        <div class="row row-cols-lg-6 row-cols-sm-3 row-cols-2 g-3 g-xl-4">
            <div class="col">
                <nuxt-link class="icon-box card card-body h-100 border-0 shadow-sm card-hover text-center" to="/catalog">
                    <div class="icon-box-media bg-faded-accent text-accent rounded-circle mb-3 mx-auto">
                        <i class="fi-bed"></i>
                    </div>
                    <h3 class="icon-box-title fs-base mb-0">Accommodation</h3>
                </nuxt-link>
            </div>
            <div class="col">
                <nuxt-link class="icon-box card card-body h-100 border-0 shadow-sm card-hover text-center" to="/catalog">
                    <div class="icon-box-media bg-faded-warning text-warning rounded-circle mb-3 mx-auto">
                        <i class="fi-cafe"></i>
                    </div>
                    <h3 class="icon-box-title fs-base mb-0">Food &amp; Drink</h3>
                </nuxt-link>
            </div>
            <div class="col">
                <nuxt-link class="icon-box card card-body h-100 border-0 shadow-sm card-hover text-center" to="/catalog">
                    <div class="icon-box-media bg-faded-primary text-primary rounded-circle mb-3 mx-auto">
                        <i class="fi-shopping-bag"></i>
                    </div>
                    <h3 class="icon-box-title fs-base mb-0">Shopping</h3>
                </nuxt-link>
            </div>
            <div class="col">
                <nuxt-link class="icon-box card card-body h-100 border-0 shadow-sm card-hover text-center" to="/catalog">
                    <div class="icon-box-media bg-faded-success text-success rounded-circle mb-3 mx-auto">
                        <i class="fi-museum"></i>
                    </div>
                    <h3 class="icon-box-title fs-base mb-0">Art &amp; History</h3>
                </nuxt-link>
            </div>
            <div class="col">
                <nuxt-link class="icon-box card card-body h-100 border-0 shadow-sm card-hover text-center" to="/catalog">
                    <div class="icon-box-media bg-faded-primary text-primary rounded-circle mb-3 mx-auto">
                        <i class="fi-entertainment"></i>
                    </div>
                    <h3 class="icon-box-title fs-base mb-0">Entertainment</h3>
                </nuxt-link>
            </div>
            <div class="col">
                <div class="dropdown h-100">
                    <a class="icon-box card card-body h-100 border-0 shadow-sm card-hover text-center" href="javascript:void(0);" data-bs-toggle="dropdown">
                        <div class="icon-box-media bg-faded-info text-info rounded-circle mb-3 mx-auto">
                            <i class="fi-dots-horisontal"></i>
                        </div>
                        <h3 class="icon-box-title fs-base mb-0">More</h3>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end my-1">
                        <nuxt-link class="dropdown-item fw-bold" to="/catalog"><i class="fi-meds fs-base opacity-60 me-2"></i>Medicine</nuxt-link>
                        <nuxt-link class="dropdown-item fw-bold" to="/catalog"><i class="fi-makeup fs-base opacity-60 me-2"></i>Beauty</nuxt-link>
                        <nuxt-link class="dropdown-item fw-bold" to="/catalog"><i class="fi-car fs-base opacity-60 me-2"></i>Car Rental</nuxt-link>
                        <nuxt-link class="dropdown-item fw-bold" to="/catalog"><i class="fi-dumbell fs-base opacity-60 me-2"></i>Fitness &amp; Sport</nuxt-link>
                        <nuxt-link class="dropdown-item fw-bold" to="/catalog"><i class="fi-disco-ball fs-base opacity-60 me-2"></i>Night Club</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
