<script lang="ts" setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const navbar = ref<HTMLElement | null>(null)
const scrollOffset = 20
const isStuck = ref<Boolean>(false)
const route = useRoute()

const navbarStuck = () => {
  if (navbar.value && window.scrollY > scrollOffset) {
    isStuck.value = true
  } else {
    isStuck.value = false
  }
}

const setActiveNavItem = () => {
  var navbarEle = document.getElementById("navbarNav");
  if (navbarEle) {
    // Remove the 'active' class from any element that has it initially
    navbarEle.querySelectorAll('.dropdown.active').forEach((item) => {
      item.classList.remove("active");
    });

    var activeEle = navbarEle.querySelector(`.nav-item a[href="${route.path}"]`);
    if (activeEle) {
      const parentListItem = activeEle.parentElement;
      if (parentListItem) {
        const grandParentListItem = parentListItem.parentElement?.parentElement;
        if (grandParentListItem) {
          grandParentListItem.classList.add("active");
          if (grandParentListItem.parentElement?.parentElement?.classList.contains("nav-item")) {
            grandParentListItem.parentElement?.parentElement?.classList.add("active");
          }
        }
      }
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', navbarStuck);
  setActiveNavItem();
})

onUnmounted(() => {
  window.removeEventListener('scroll', navbarStuck)
})

watch(() => route.fullPath,
  async () => {
    setActiveNavItem();
  }
);
</script>

<template>
  <!-- Navbar-->
  <header ref="navbar" class="navbar navbar-expand-lg navbar-light fixed-top" :class="{ 'navbar-stuck': isStuck }" data-scroll-header>
    <div class="container">
      <nuxt-link class="navbar-brand me-3 me-xl-4" to="/">
        <img class="d-block" src="@/assets/img/logo/logo-azul.png" width="116" alt="Finder">
      </nuxt-link>
      <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alternar navegação"><span class="navbar-toggler-icon"></span>
      </button>
      <a class="btn btn-sm text-primary d-none d-lg-block order-lg-3" data-bs-target="#signin-modal" data-bs-toggle="modal">
        <i class="fi-user me-2"></i>Entrar</a>
      <div class="dropdown d-none d-lg-block order-lg-3 my-n2 me-3">
        <nuxt-link class="d-block py-2" to="/account/info">
          <img class="rounded-circle" src="@/assets/img/avatars/36.png" width="40" alt="Annette Black">
        </nuxt-link>
        <div class="dropdown-menu dropdown-menu-end">
          <div class="d-flex align-items-start border-bottom px-3 py-1 mb-2" style="width: 16rem;">
            <img class="rounded-circle" src="@/assets/img/avatars/24.png" width="48" alt="Annette Black">
            <div class="ps-2">
              <h6 class="fs-base mb-0">Annette Black</h6>
              <span class="star-rating star-rating-sm">
                <i class="star-rating-icon fi-star-filled active"></i>
                <i class="star-rating-icon fi-star-filled active"></i>
                <i class="star-rating-icon fi-star-filled active"></i>
                <i class="star-rating-icon fi-star-filled active"></i>
                <i class="star-rating-icon fi-star-filled active"></i>
              </span>
              <div class="fs-xs py-2">(302) 555-0107<br>annette_black@email.com</div>
            </div>
          </div>
          <nuxt-link class="dropdown-item" to="/account/info"><i class="fi-user opacity-60 me-2"></i>Informação Pessoal</nuxt-link>
          <nuxt-link class="dropdown-item" to="/account/favorites"><i class="fi-heart opacity-60 me-2"></i>Favoritos</nuxt-link>
          <nuxt-link class="dropdown-item" to="/vendor/businesses"><i class="fi-home opacity-60 me-2"></i>Os Meus Negócios</nuxt-link>
          <nuxt-link class="dropdown-item" to="/account/reviews"><i class="fi-star opacity-60 me-2"></i>Avaliações</nuxt-link>
          <nuxt-link class="dropdown-item" to="/account/notifications"><i class="fi-bell opacity-60 me-2"></i>Notificações</nuxt-link>
          <div class="dropdown-divider"></div>
          <nuxt-link class="dropdown-item" to="/help/help-center">Ajuda</nuxt-link>
          <nuxt-link class="dropdown-item" to="/auth/signin-light">Sair</nuxt-link>
        </div>
      </div>
      <nuxt-link class="btn btn-primary btn-sm rounded-pill ms-2 order-lg-3" to="/vendor/add-business">
        <i class="fi-plus me-2"></i>Adicionar Negócio
      </nuxt-link>
      <div class="collapse navbar-collapse order-lg-2" id="navbarNav">
        <ul class="navbar-nav navbar-nav-scroll" style="max-height: 35rem;">
          <li class="nav-item dropdown me-lg-2"><a class="nav-link dropdown-toggle align-items-center pe-lg-4" href="#" data-bs-toggle="dropdown" role="button" aria-expanded="false"><i class="fi-layers me-2"></i>Demos<span class="d-none d-lg-block position-absolute top-50 end-0 translate-middle-y border-end" style="width: 1px; height: 30px;"></span></a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="https://property-finder-vue.vercel.app/"><i class="fi-building fs-base opacity-50 me-2"></i>Demo Imobiliário</a></li>
              <li class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="https://car-finder-vue.vercel.app/"><i class="fi-car fs-base opacity-50 me-2"></i>Demo Procura de Carros</a></li>
              <li class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="https://job-finder-vue.vercel.app/"><i class="fi-briefcase fs-base opacity-50 me-2"></i>Demo Bolsa de Emprego</a></li>
              <li class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="https://city-finder-vue.vercel.app/"><i class="fi-map-pin fs-base opacity-50 me-2"></i>Demo Guia da Cidade</a></li>
             </ul>
          </li>
         
          <!-- Menu items-->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">Início</a>
            <ul class="dropdown-menu">
              <li><nuxt-link class="dropdown-item" to="/">Início v.1</nuxt-link></li>
              <li><nuxt-link class="dropdown-item" to="/home-2">Início v.2</nuxt-link></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">Catálogo</a>
            <ul class="dropdown-menu">
              <li><nuxt-link class="dropdown-item" to="/catalog">Grelha com Filtros</nuxt-link></li>
              <li><nuxt-link class="dropdown-item" to="/catalog/single">Local Individual - Galeria</nuxt-link></li>
              <li><nuxt-link class="dropdown-item" to="/catalog/single-info">Local Individual - Informação</nuxt-link></li>
              <li><nuxt-link class="dropdown-item" to="/catalog/single-review">Local Individual - Avaliações</nuxt-link></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">Conta</a>
            <ul class="dropdown-menu">
              <li><nuxt-link class="dropdown-item" to="/account/info">Informação Pessoal</nuxt-link></li>
              <li><nuxt-link class="dropdown-item" to="/account/favorites">Favoritos</nuxt-link></li>
              <li><nuxt-link class="dropdown-item" to="/account/reviews">Avaliações</nuxt-link></li>
              <li><nuxt-link class="dropdown-item" to="/account/notifications">Notificações</nuxt-link></li>
              <li><nuxt-link class="dropdown-item" to="/auth/signin-light">Entrar</nuxt-link></li>
              <li><nuxt-link class="dropdown-item" to="/auth/signup-light">Registar</nuxt-link></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">Vendedor</a>
            <ul class="dropdown-menu">
              <li><nuxt-link class="dropdown-item" to="/vendor/add-business">Adicionar Negócio</nuxt-link></li>
              <li><nuxt-link class="dropdown-item" to="/vendor/business-promotion">Promoção de Negócio</nuxt-link></li>
              <li><nuxt-link class="dropdown-item" to="/vendor/businesses">Os Meus Negócios</nuxt-link></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">Páginas</a>
            <ul class="dropdown-menu">
              <li><nuxt-link class="dropdown-item" to="/about/">Sobre</nuxt-link></li>
              <li class="dropdown">
                <a class="dropdown-item dropdown-toggle" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
                <ul class="dropdown-menu">
                  <li><nuxt-link class="dropdown-item" to="/blog/grid">Grelha do Blog</nuxt-link></li>
                  <li><nuxt-link class="dropdown-item" to="/blog/single">Post Individual</nuxt-link></li>
                </ul>
              </li>
              <li><nuxt-link class="dropdown-item" to="/contact">Contactos</nuxt-link></li>
              <li class="dropdown">
                <a class="dropdown-item dropdown-toggle" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">Centro de Ajuda</a>
                <ul class="dropdown-menu">
                  <li><nuxt-link class="dropdown-item" to="/help/help-center">Tópicos de Ajuda</nuxt-link></li>
                  <li><nuxt-link class="dropdown-item" to="/help/single-topic">Tópico Individual</nuxt-link></li>
                </ul>
              </li>
              <li><nuxt-link class="dropdown-item" to="/account/404">404 Não Encontrado</nuxt-link></li>
            </ul>
          </li>
          <li class="nav-item d-lg-none">
            <a class="nav-link" data-bs-target="#signin-modal" data-bs-toggle="modal"><i class="fi-user me-2"></i>Entrar</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
