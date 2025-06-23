<script lang="ts" setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue'

onMounted(() => {
    document.body.classList.add('bg-secondary')
})

const breadcrumbData = ref([
    {
        title: 'Home',
        link: '/',
        subitems: [
            {
                title: 'My Businesses'
            }
        ]
    }
])

definePageMeta({
    title: 'Business',
});
</script>

<template>
    <!-- Page container-->
    <div class="container mt-5 mb-md-4 py-5">
        <!-- Breadcrumbs-->
        <Breadcrumb :data="breadcrumbData" />

        <!-- Page title + Sorting-->
        <div class="d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch justify-content-between pb-4 mb-2 mb-md-3">
            <h1 class="h2 mb-sm-0">My businesses</h1>
            <div class="d-flex align-items-center ms-sm-4">
                <label class="fs-sm me-2 pe-1 text-nowrap" for="sortby"><i class="fi-arrows-sort text-muted mt-n1 me-2"></i>Sort by:</label>
                <select class="form-select form-select-sm" id="sortby">
                    <option>Newest</option>
                    <option>Oldest</option>
                    <option>Popularity</option>
                    <option>High rating</option>
                    <option>Low rating</option>
                </select>
            </div>
        </div>

        <div class="card p-sm-4 border-0 shadow-sm">
            <div class="card-body">
                <div class="row">
                    <!-- Sidebar-->
                    <aside class="col-lg-3 col-md-4 mb-lg-0 mb-4 pb-2 pe-xl-5">
                        <ul class="nav flex-column mb-4 pb-lg-3">
                            <li class="nav-item">
                                <a class="nav-link py-1 px-0 fs-sm fw-normal" href="javascript:void(0);">
                                    <i class="fi-bed mt-n1 me-2 fs-base align-middle opacity-70"></i>Accommodation<span class="float-end text-muted">(4)</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link py-1 px-0 fs-sm fw-normal" href="javascript:void(0);">
                                    <i class="fi-cafe mt-n1 me-2 fs-base align-middle opacity-70"></i>Food &amp;
                                    Drink<span class="float-end text-muted">(1)</span>
                                </a>
                            </li>
                        </ul>
                        <nuxt-link class="btn btn-primary rounded-pill" to="/vendor/add-business">
                            <i class="fi-plus me-2"></i>Add new business
                        </nuxt-link>
                    </aside>
                    <!-- Grid-->
                    <div class="col-lg-9 col-md-8">
                        <div class="row row-cols-md-2 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-3 g-xl-4">
                            <!-- Item-->
                            <div class="col pb-2">
                                <div class="position-relative">
                                    <div class="position-relative mb-3">
                                        <div class="dropdown position-absolute zindex-5 top-0 end-0 mt-3 me-3">
                                            <button class="btn btn-icon btn-light btn-xs rounded-circle shadow-sm" type="button" id="contextMenu1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="fi-dots-vertical"></i>
                                            </button>
                                            <ul class="dropdown-menu my-1" aria-labelledby="contextMenu1">
                                                <li>
                                                    <button class="dropdown-item" type="button">
                                                        <i class="fi-edit opacity-60 me-2"></i>Edit
                                                    </button>
                                                </li>
                                                <li>
                                                    <button class="dropdown-item" type="button">
                                                        <i class="fi-flame opacity-60 me-2"></i>Promote
                                                    </button>
                                                </li>
                                                <li>
                                                    <button class="dropdown-item" type="button">
                                                        <i class="fi-power opacity-60 me-2"></i>Deactivate
                                                    </button>
                                                </li>
                                                <li>
                                                    <button class="dropdown-item" type="button">
                                                        <i class="fi-trash opacity-60 me-2"></i>Delete
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                        <img class="rounded-3" src="@/assets/img/city-guide/business/01.jpg" alt="Image" />
                                    </div>
                                    <h3 class="mb-2 fs-lg">
                                        <nuxt-link class="nav-link stretched-link" to="/catalog/single">Berlin Business Hotel</nuxt-link>
                                    </h3>
                                    <ul class="list-inline mb-0 fs-xs">
                                        <li class="list-inline-item pe-1">
                                            <i class="fi-star-filled mt-n1 me-1 fs-base text-warning align-middle"></i><b>5.0</b><span class="text-muted">&nbsp;(48)</span>
                                        </li>
                                        <li class="list-inline-item pe-1">
                                            <i class="fi-credit-card mt-n1 me-1 fs-base text-muted align-middle"></i>$$
                                        </li>
                                        <li class="list-inline-item pe-1">
                                            <i class="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle"></i>1.4 km
                                            from center
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- Item-->
                            <div class="col pb-2">
                                <div class="position-relative">
                                    <div class="position-relative mb-3">
                                        <div class="dropdown position-absolute zindex-5 top-0 end-0 mt-3 me-3">
                                            <button class="btn btn-icon btn-light btn-xs rounded-circle shadow-sm" type="button" id="contextMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="fi-dots-vertical"></i>
                                            </button>
                                            <ul class="dropdown-menu my-1" aria-labelledby="contextMenu2">
                                                <li>
                                                    <button class="dropdown-item" type="button">
                                                        <i class="fi-edit opacity-60 me-2"></i>Edit
                                                    </button>
                                                </li>
                                                <li>
                                                    <button class="dropdown-item" type="button">
                                                        <i class="fi-flame opacity-60 me-2"></i>Promote
                                                    </button>
                                                </li>
                                                <li>
                                                    <button class="dropdown-item" type="button">
                                                        <i class="fi-power opacity-60 me-2"></i>Deactivate
                                                    </button>
                                                </li>
                                                <li>
                                                    <button class="dropdown-item" type="button">
                                                        <i class="fi-trash opacity-60 me-2"></i>Delete
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                        <img class="rounded-3" src="@/assets/img/city-guide/business/02.jpg" alt="Article img" />
                                    </div>
                                    <h3 class="mb-2 fs-lg">
                                        <nuxt-link class="nav-link stretched-link" to="/catalog/single">Big Tree Cottage</nuxt-link>
                                    </h3>
                                    <ul class="list-inline mb-0 fs-xs">
                                        <li class="list-inline-item pe-1">
                                            <i class="fi-star-filled mt-n1 me-1 fs-base text-warning align-middle"></i><b>4.8</b><span class="text-muted">&nbsp;(24)</span>
                                        </li>
                                        <li class="list-inline-item pe-1">
                                            <i class="fi-credit-card mt-n1 me-1 fs-base text-muted align-middle"></i>$$$
                                        </li>
                                        <li class="list-inline-item pe-1">
                                            <i class="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle"></i>0.5 km
                                            from center
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- Item-->
                            <div class="col pb-2">
                                <div class="position-relative">
                                    <div class="position-relative mb-3">
                                        <div class="dropdown position-absolute zindex-5 top-0 end-0 mt-3 me-3">
                                            <button class="btn btn-icon btn-light btn-xs rounded-circle shadow-sm" type="button" id="contextMenu3" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="fi-dots-vertical"></i>
                                            </button>
                                            <ul class="dropdown-menu my-1" aria-labelledby="contextMenu3">
                                                <li>
                                                    <button class="dropdown-item" type="button">
                                                        <i class="fi-edit opacity-60 me-2"></i>Edit
                                                    </button>
                                                </li>
                                                <li>
                                                    <button class="dropdown-item" type="button">
                                                        <i class="fi-flame opacity-60 me-2"></i>Promote
                                                    </button>
                                                </li>
                                                <li>
                                                    <button class="dropdown-item" type="button">
                                                        <i class="fi-power opacity-60 me-2"></i>Deactivate
                                                    </button>
                                                </li>
                                                <li>
                                                    <button class="dropdown-item" type="button">
                                                        <i class="fi-trash opacity-60 me-2"></i>Delete
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                        <img class="rounded-3" src="@/assets/img/city-guide/business/03.jpg" alt="Image" />
                                    </div>
                                    <h3 class="mb-2 fs-lg">
                                        <nuxt-link class="nav-link stretched-link" to="/catalog/single">Leisure Inn</nuxt-link>
                                    </h3>
                                    <ul class="list-inline mb-0 fs-xs">
                                        <li class="list-inline-item pe-1">
                                            <i class="fi-star-filled mt-n1 me-1 fs-base text-warning align-middle"></i><b>4.9</b><span class="text-muted">&nbsp;(43)</span>
                                        </li>
                                        <li class="list-inline-item pe-1">
                                            <i class="fi-credit-card mt-n1 me-1 fs-base text-muted align-middle"></i>$$$
                                        </li>
                                        <li class="list-inline-item pe-1">
                                            <i class="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle"></i>1.8 km
                                            from center
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- Item-->
                            <div class="col pb-2">
                                <div class="position-relative">
                                    <div class="position-relative mb-3">
                                        <div class="dropdown position-absolute zindex-5 top-0 end-0 mt-3 me-3">
                                            <button class="btn btn-icon btn-light btn-xs rounded-circle shadow-sm" type="button" id="contextMenu4" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="fi-dots-vertical"></i>
                                            </button>
                                            <ul class="dropdown-menu my-1" aria-labelledby="contextMenu4">
                                                <li>
                                                    <button class="dropdown-item" type="button">
                                                        <i class="fi-edit opacity-60 me-2"></i>Edit
                                                    </button>
                                                </li>
                                                <li>
                                                    <button class="dropdown-item" type="button">
                                                        <i class="fi-flame opacity-60 me-2"></i>Promote
                                                    </button>
                                                </li>
                                                <li>
                                                    <button class="dropdown-item" type="button">
                                                        <i class="fi-power opacity-60 me-2"></i>Deactivate
                                                    </button>
                                                </li>
                                                <li>
                                                    <button class="dropdown-item" type="button">
                                                        <i class="fi-trash opacity-60 me-2"></i>Delete
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                        <img class="rounded-3" src="@/assets/img/city-guide/business/04.jpg" alt="Image" />
                                    </div>
                                    <h3 class="mb-2 fs-lg">
                                        <nuxt-link class="nav-link stretched-link" to="/catalog/single">Central Cafe</nuxt-link>
                                    </h3>
                                    <ul class="list-inline mb-0 fs-xs">
                                        <li class="list-inline-item pe-1">
                                            <i class="fi-star-filled mt-n1 me-1 fs-base text-warning align-middle"></i><b>5.0</b><span class="text-muted">&nbsp;(40)</span>
                                        </li>
                                        <li class="list-inline-item pe-1">
                                            <i class="fi-credit-card mt-n1 me-1 fs-base text-muted align-middle"></i>$
                                        </li>
                                        <li class="list-inline-item pe-1">
                                            <i class="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle"></i>1.7 km
                                            from center
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- Item-->
                            <div class="col pb-sm-2">
                                <div class="position-relative">
                                    <div class="position-relative mb-3">
                                        <div class="dropdown position-absolute zindex-5 top-0 end-0 mt-3 me-3">
                                            <button class="btn btn-icon btn-light btn-xs rounded-circle shadow-sm" type="button" id="contextMenu5" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="fi-dots-vertical"></i>
                                            </button>
                                            <ul class="dropdown-menu my-1" aria-labelledby="contextMenu5">
                                                <li>
                                                    <button class="dropdown-item" type="button">
                                                        <i class="fi-edit opacity-60 me-2"></i>Edit
                                                    </button>
                                                </li>
                                                <li>
                                                    <button class="dropdown-item" type="button">
                                                        <i class="fi-flame opacity-60 me-2"></i>Promote
                                                    </button>
                                                </li>
                                                <li>
                                                    <button class="dropdown-item" type="button">
                                                        <i class="fi-power opacity-60 me-2"></i>Deactivate
                                                    </button>
                                                </li>
                                                <li>
                                                    <button class="dropdown-item" type="button">
                                                        <i class="fi-trash opacity-60 me-2"></i>Delete
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                        <img class="rounded-3" src="@/assets/img/city-guide/business/05.jpg" alt="Image" />
                                    </div>
                                    <h3 class="mb-2 fs-lg">
                                        <nuxt-link class="nav-link stretched-link" to="/catalog/single">Grand Resort &amp; Spa</nuxt-link>
                                    </h3>
                                    <ul class="list-inline mb-0 fs-xs">
                                        <li class="list-inline-item pe-1">
                                            <i class="fi-star-filled mt-n1 me-1 fs-base text-warning align-middle"></i><b>4.9</b><span class="text-muted">&nbsp;(43)</span>
                                        </li>
                                        <li class="list-inline-item pe-1">
                                            <i class="fi-credit-card mt-n1 me-1 fs-base text-muted align-middle"></i>$$$
                                        </li>
                                        <li class="list-inline-item pe-1">
                                            <i class="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle"></i>1.8 km
                                            from center
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
