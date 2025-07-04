<template>
  <!-- Footer-->
  <footer class="footer pt-lg-5 pt-4 bg-dark text-light">
    <div class="container mb-4 py-4 pb-lg-5">
      <div class="row gy-4">
        <div class="col-lg-3 col-md-6 col-sm-4">
          <div class="mb-4 pb-sm-3">
            <nuxt-link class="d-inline-block" to="/">
              <img src="@/assets/img/logo/logo-light.svg" width="150" alt="Portal Empresas" />
            </nuxt-link>
          </div>
          <ul class="nav nav-light flex-column">
            <li class="nav-item mb-2">
              <a class="nav-link p-0 fw-normal text-light text-nowrap" href="mailto:geral@portal-empresas.pt">
                <i class="fi-mail mt-n1 me-1 align-middle text-primary"></i>geral@portal-empresas.pt</a>
            </li>
          </ul>
        </div>
        <!-- Links-->
        <div class="col-lg-2 col-md-3 col-sm-4">
          <h3 class="fs-base text-light">Ligações rápidas</h3>
          <ul class="list-unstyled fs-sm">
            <li><a class="nav-link-light" href="javascript:void(0);">Principais cidades</a></li>
            <li><a class="nav-link-light" href="javascript:void(0);">Alojamento</a></li>
            <li>
              <a class="nav-link-light" href="javascript:void(0);">Restauração</a>
            </li>
          </ul>
        </div>
        <!-- Subscription form-->
        <div class="col-lg-4 offset-lg-1">
          <h3 class="h4 text-light">Subscreve à nossa newsletter</h3>
          <p class="fs-sm mb-4 opacity-60">Não percas nenhuma oportunidade de negócio!</p>
          <form class="form-group form-group-light rounded-pill" style="max-width: 500px">
            <div class="input-group input-group-sm">
              <span class="input-group-text text-muted"><i class="fi-mail"></i></span>
              <input class="form-control" type="email" placeholder="O teu email" />
            </div>
            <button class="btn btn-primary btn-sm rounded-pill" type="button">Subscrever</button>
          </form>
        </div>
      </div>
    </div>
    <div class="py-4 border-top border-light">
      <div class="container d-flex flex-column flex-lg-row align-items-center justify-content-between py-2">
        <!-- Copyright-->
        <p class="order-lg-1 order-2 fs-sm mb-2 mb-lg-0">
          <span class="text-light opacity-60">&copy; 2024 Portal Empresas. Todos os direitos reservados.</span>
        </p>
        <div class="d-flex flex-lg-row flex-column align-items-center order-lg-2 order-1 ms-lg-4 mb-lg-0 mb-4">
          <!-- Links-->
          
          <div class="d-flex align-items-center">
            <!-- Language switcher-->
           
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
