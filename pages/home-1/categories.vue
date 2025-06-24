<template>
    <!-- Categories-->
    <section class="container d-flex flex-wrap flex-column flex-sm-row pb-5 mb-md-3">
        <nuxt-link class="icon-box card flex-row align-items-center flex-shrink-0 card-hover border-0 shadow-sm rounded-pill py-2 ps-2 pe-4 mb-2 mb-sm-3 me-sm-3 me-xxl-4" to="/catalog">
            <div class="icon-box-media bg-faded-accent text-accent rounded-circle me-2">
                <i class="fi-bed"></i>
            </div>
            <h3 class="icon-box-title fs-sm ps-1 pe-2 mb-0">Alojamento</h3>
        </nuxt-link>
        <nuxt-link class="icon-box card flex-row align-items-center flex-shrink-0 card-hover border-0 shadow-sm rounded-pill py-2 ps-2 pe-4 mb-2 mb-sm-3 me-sm-3 me-xxl-4" to="/catalog">
            <div class="icon-box-media bg-faded-warning text-warning rounded-circle me-2">
                <i class="fi-cafe"></i>
            </div>
            <h3 class="icon-box-title fs-sm ps-1 pe-2 mb-0">Comida &amp; Bebida</h3>
        </nuxt-link>
        <nuxt-link class="icon-box card flex-row align-items-center flex-shrink-0 card-hover border-0 shadow-sm rounded-pill py-2 ps-2 pe-4 mb-2 mb-sm-3 me-sm-3 me-xxl-4" to="/catalog">
            <div class="icon-box-media bg-faded-primary text-primary rounded-circle me-2">
                <i class="fi-shopping-bag"></i>
            </div>
            <h3 class="icon-box-title fs-sm ps-1 pe-2 mb-0">Compras</h3>
        </nuxt-link>
        <nuxt-link class="icon-box card flex-row align-items-center flex-shrink-0 card-hover border-0 shadow-sm rounded-pill py-2 ps-2 pe-4 mb-2 mb-sm-3 me-sm-3 me-xxl-4" to="/catalog">
            <div class="icon-box-media bg-faded-success text-success rounded-circle me-2">
                <i class="fi-museum"></i>
            </div>
            <h3 class="icon-box-title fs-sm ps-1 pe-2 mb-0">Arte &amp; História</h3>
        </nuxt-link>
        <nuxt-link class="icon-box card flex-row align-items-center flex-shrink-0 card-hover border-0 shadow-sm rounded-pill py-2 ps-2 pe-4 mb-2 mb-sm-3 me-sm-3 me-xxl-4" to="/catalog">
            <div class="icon-box-media bg-faded-primary text-primary rounded-circle me-2">
                <i class="fi-entertainment"></i>
            </div>
            <h3 class="icon-box-title fs-sm ps-1 pe-2 mb-0">Entretenimento</h3>
        </nuxt-link>
        <div class="dropdown mb-2 mb-sm-3">
            <a class="icon-box card flex-row align-items-center flex-shrink-0 card-hover border-0 shadow-sm rounded-pill py-2 ps-2 pe-4" href="javascript:void(0);" data-bs-toggle="dropdown">
                <div class="icon-box-media bg-faded-info text-info rounded-circle me-2">
                    <i class="fi-dots-horisontal"></i>
                </div>
                <h3 class="icon-box-title fs-sm ps-1 pe-2 mb-0">Mais</h3>
            </a>
            <div class="dropdown-menu dropdown-menu-sm-end my-1">
                <nuxt-link class="dropdown-item fw-bold" to="/catalog"><i class="fi-meds fs-base opacity-60 me-2"></i>Medicina</nuxt-link>
                <nuxt-link class="dropdown-item fw-bold" to="/catalog"><i class="fi-makeup fs-base opacity-60 me-2"></i>Beleza</nuxt-link>
                <nuxt-link class="dropdown-item fw-bold" to="/catalog"><i class="fi-car fs-base opacity-60 me-2"></i>Aluguer de Carros</nuxt-link>
                <nuxt-link class="dropdown-item fw-bold" to="/catalog"><i class="fi-dumbell fs-base opacity-60 me-2"></i>Fitness &amp; Desporto</nuxt-link>
                <nuxt-link class="dropdown-item fw-bold" to="/catalog"><i class="fi-disco-ball fs-base opacity-60 me-2"></i>Discoteca</nuxt-link>
            </div>
        </div>
    </section>
</template>
