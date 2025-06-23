<template>
    <div class="d-flex align-items-center justify-content-between pb-4 mb-2">
        <div class="d-flex align-items-center">
            <div class="position-relative flex-shrink-0">
                <img class="rounded-circle border border-white" src="@/assets/img/avatars/29.png" width="100" alt="Annette Black">
                <button class="btn btn-icon btn-light btn-xs rounded-circle shadow-sm position-absolute end-0 bottom-0" type="button" data-bs-toggle="tooltip" data-bs-title="Change image">
                    <i class="fi-pencil fs-xs"></i>
                </button>
            </div>
            <div class="ps-3 ps-sm-4">
                <h3 class="h4 mb-2">Annette Black</h3>
                <span class="star-rating">
                    <i class="star-rating-icon fi-star-filled active"></i>
                    <i class="star-rating-icon fi-star-filled active"></i>
                    <i class="star-rating-icon fi-star-filled active"></i>
                    <i class="star-rating-icon fi-star-filled active"></i>
                    <i class="star-rating-icon fi-star-filled active"></i>
                </span>
            </div>
        </div>
        <nuxt-link class="nav-link p-0 d-none d-md-block" to="/auth/signin-light">
            <i class="fi-logout mt-n1 me-2"></i>Sign out
        </nuxt-link>
    </div>
</template>