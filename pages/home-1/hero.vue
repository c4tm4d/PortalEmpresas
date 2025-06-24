<script lang="ts" setup></script>

<template>
    <!-- Hero-->
    <section class="container py-5 mt-5 mb-lg-3">
        <div class="row align-items-center mt-md-2">
            <div class="col-lg-7 order-lg-2 mb-lg-0 mb-4 pb-2 pb-lg-0">
                <img class="d-block mx-auto" src="@/assets/img/city-guide/home/hero-img.jpg" width="746" alt="Imagem principal" />
            </div>
            <div class="col-lg-5 order-lg-1 pe-lg-0">
                <h1 class="display-5 mb-4 me-lg-n5 text-lg-start text-center mb-4">
                    Começa a explorar
                    <br>
                    <b>
                        <span class="text-primary">
                            <i class="fi-map-pin"></i>
                        </span>
                        <span class="text-primary">
                            Portugal
                        </span>
                    </b>
                </h1>
                <p class="text-lg-start text-center mb-4 mb-lg-5 fs-lg">
                    Encontra ótimos sítios para ficar, comer, fazer compras ou visitar dos nossos parceiros e especialistas locais.
                </p>
                <!-- Search form-->
                <div class="me-lg-n5">
                    <form class="form-group d-block d-md-flex position-relative rounded-md-pill me-lg-n5">
                        <div class="input-group input-group-lg border-end-md">
                            <span class="input-group-text text-muted rounded-pill ps-3"><i class="fi-search"></i></span>
                            <input class="form-control" type="text" placeholder="O que estás à procura?" />
                        </div>
                        <hr class="d-md-none my-2" />
                        <div class="d-sm-flex">
                            <div class="dropdown w-100 mb-sm-0 mb-3" data-bs-toggle="select">
                                <button class="btn btn-link btn-lg dropdown-toggle ps-2 ps-sm-3" type="button" data-bs-toggle="dropdown">
                                    <i class="fi-list me-2"></i><span class="dropdown-toggle-label">Todas as categorias</span>
                                </button>
                                <input type="hidden" />
                                <ul class="dropdown-menu">
                                    <li>
                                        <a class="dropdown-item" href="javascript:void(0);">
                                            <i class="fi-bed fs-lg opacity-60 me-2"></i><span class="dropdown-item-label">Alojamento</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="javascript:void(0);">
                                            <i class="fi-cafe fs-lg opacity-60 me-2"></i><span class="dropdown-item-label">Comida &amp; Bebida</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="javascript:void(0);">
                                            <i class="fi-shopping-bag fs-lg opacity-60 me-2"></i><span class="dropdown-item-label">Compras</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="javascript:void(0);">
                                            <i class="fi-museum fs-lg opacity-60 me-2"></i><span class="dropdown-item-label">Arte &amp; História</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="javascript:void(0);">
                                            <i class="fi-entertainment fs-lg opacity-60 me-2"></i><span class="dropdown-item-label">Entretenimento</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="javascript:void(0);">
                                            <i class="fi-meds fs-lg opacity-60 me-2"></i><span class="dropdown-item-label">Medicina</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="javascript:void(0);">
                                            <i class="fi-makeup fs-lg opacity-60 me-2"></i><span class="dropdown-item-label">Beleza</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="javascript:void(0);">
                                            <i class="fi-car fs-lg opacity-60 me-2"></i><span class="dropdown-item-label">Aluguer de Carros</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <button class="btn btn-primary btn-lg rounded-pill w-100 w-md-auto ms-sm-3" type="button">
                                Procurar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
