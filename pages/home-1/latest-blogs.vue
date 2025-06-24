<template>
    <!-- Blog: Latest posts-->
    <section class="container my-5 py-lg-4">
        <div class="d-sm-flex align-items-center justify-content-between mb-4 pb-2">
            <h2 class="h3 mb-sm-0">Também te pode interessar</h2>
            <nuxt-link class="btn btn-link fw-normal ms-sm-3 p-0" to="/blog/grid">Ir para o blog<i class="fi-arrow-long-right ms-2"></i></nuxt-link>
        </div>
        <!-- Carousel-->
        <div class="row g-3">
            <div class="col-lg-4">
                <!-- Item-->
                <article>
                    <nuxt-link class="d-block mb-3" to="/blog/single">
                        <img class="rounded-3" src="@/assets/img/city-guide/blog/01.jpg" alt="Imagem do post" />
                    </nuxt-link>
                        <a class="fs-xs text-uppercase text-decoration-none" href="javascript:void(0);">Viagens</a>
                    <h3 class="fs-base pt-1">
                        <nuxt-link class="nav-link" to="/blog/single">Viagens de Avião na Época da COVID-19</nuxt-link>
                    </h3>
                    <a class="d-flex align-items-center text-decoration-none" href="javascript:void(0);">
                        <img class="rounded-circle" src="@/assets/img/avatars/16.png" width="44" alt="Avatar" />
                        <div class="ps-2">
                            <h6 class="fs-sm text-nav lh-base mb-1">Bessie Cooper</h6>
                            <div class="d-flex text-body fs-xs">
                                <span class="me-2 pe-1">
                                    <i class="fi-calendar-alt opacity-70 mt-n1 me-1 align-middle"></i>24 Mai</span>
                                <span>
                                    <i class="fi-chat-circle opacity-70 mt-n1 me-1 align-middle"></i>Sem comentários</span>
                            </div>
                        </div>
                    </a>
                </article>
            </div>
            <div class="col-lg-4">
                <!-- Item-->
                <article>
                    <nuxt-link class="d-block mb-3" to="/blog/single">
                        <img class="rounded-3" src="@/assets/img/city-guide/blog/02.jpg" alt="Imagem do post" />
                    </nuxt-link>
                        <a class="fs-xs text-uppercase text-decoration-none" href="javascript:void(0);">Entretenimento</a>
                    <h3 class="fs-base pt-1">
                        <nuxt-link class="nav-link" to="/blog/single">10 Museus de Classe Mundial que Podes Visitar Online</nuxt-link>
                    </h3>
                    <a class="d-flex align-items-center text-decoration-none" href="javascript:void(0);">
                        <img class="rounded-circle" src="@/assets/img/avatars/18.png" width="44" alt="Avatar" />
                        <div class="ps-2">
                            <h6 class="fs-sm text-nav lh-base mb-1">Annette Black</h6>
                            <div class="d-flex text-body fs-xs">
                                <span class="me-2 pe-1"><i class="fi-calendar-alt opacity-70 mt-n1 me-1 align-middle"></i>28 Abr</span>
                                <span><i class="fi-chat-circle opacity-70 mt-n1 me-1 align-middle"></i>4 comentários</span>
                            </div>
                        </div>
                    </a>
                </article>
            </div>
            <div class="col-lg-4">
                <!-- Item-->
                <article>
                    <nuxt-link class="d-block mb-3" to="/blog/single">
                        <img class="rounded-3" src="@/assets/img/city-guide/blog/03.jpg" alt="Imagem do post" /></nuxt-link>
                    <a class="fs-xs text-uppercase text-decoration-none" href="javascript:void(0);">Viagens</a>
                    <h3 class="fs-base pt-1">
                        <nuxt-link class="nav-link" to="/blog/single">7 Dicas para Viajantes Solitários em África</nuxt-link>
                    </h3>
                    <a class="d-flex align-items-center text-decoration-none" href="javascript:void(0);">
                        <img class="rounded-circle" src="@/assets/img/avatars/17.png" width="44" alt="Avatar" />
                        <div class="ps-2">
                            <h6 class="fs-sm text-nav lh-base mb-1">Ralph Edwards</h6>
                            <div class="d-flex text-body fs-xs">
                                <span class="me-2 pe-1"><i class="fi-calendar-alt opacity-70 mt-n1 me-1 align-middle"></i>15 Abr</span>
                                <span><i class="fi-chat-circle opacity-70 mt-n1 me-1 align-middle"></i>2 comentários</span>
                            </div>
                        </div>
                    </a>
                </article>
            </div>
        </div>
    </section>
</template>
