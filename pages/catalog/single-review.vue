<script lang="ts" setup>
import Header from './common/header.vue'
import RecentlyViewed from './common/recently-view.vue'

definePageMeta({
    title: 'Business Reviews',
});

// Get business ID from query parameter
const route = useRoute();
const businessId = route.query.id;

// Fetch business data
const { data: business, pending, error } = await useFetch(`/api/businesses/public/${businessId}`);

// Handle case when business is not found
if (!business.value && !pending.value) {
    throw createError({
        statusCode: 404,
        message: 'Business not found'
    });
}

// Set dynamic page title
useHead(() => ({
    title: business.value?.name ? `${business.value.name} - Reviews` : 'Business Reviews'
}));
</script>

<template>
    <!-- Page header-->
    <Header :title="business?.name" :subtitle="business?.category?.name" isActive="single-reviews" />

    <!-- Loading state -->
    <div v-if="pending" class="container py-5">
        <div class="text-center">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p class="mt-3">Loading business details...</p>
        </div>
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="container py-5">
        <div class="text-center">
            <i class="fi-alert-circle display-4 text-danger mb-3"></i>
            <h3>Error loading business</h3>
            <p class="text-muted">Failed to load business details. Please try again.</p>
        </div>
    </div>

    <!-- Page content -->
    <section v-else-if="business" class="container pb-5 mb-md-4">
        <div class="row">
            <!-- Left column-->
            <div class="col-md-7 mb-md-0 mb-4 pb-md-0 pb-2">
                <h2 class="h4 mb-4">Average rating</h2>
                <div class="row mb-md-5 mb-4">
                    <!-- Rating breakdown-->
                    <div class="col-sm-8 order-sm-1 order-2">
                        <div class="d-flex align-items-center mb-2 fs-sm">
                            <div class="text-nowrap">
                                5<i class="fi-star mt-n1 ms-1 align-middle opacity-70"></i>
                            </div>
                            <div class="progress w-100 mx-3">
                                <div class="progress-bar bg-warning" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span style="min-width: 48px">80%</span>
                        </div>
                        <div class="d-flex align-items-center mb-2 fs-sm">
                            <div class="text-nowrap">
                                4<i class="fi-star mt-n1 ms-1 align-middle opacity-70"></i>
                            </div>
                            <div class="progress w-100 mx-3">
                                <div class="progress-bar bg-warning" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span style="min-width: 48px">10%</span>
                        </div>
                        <div class="d-flex align-items-center mb-2 fs-sm">
                            <div class="text-nowrap">
                                3<i class="fi-star mt-n1 ms-1 align-middle opacity-70"></i>
                            </div>
                            <div class="progress w-100 mx-3">
                                <div class="progress-bar bg-warning" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span style="min-width: 48px">0%</span>
                        </div>
                        <div class="d-flex align-items-center mb-2 fs-sm">
                            <div class="text-nowrap">
                                2<i class="fi-star mt-n1 ms-1 align-middle opacity-70"></i>
                            </div>
                            <div class="progress w-100 mx-3">
                                <div class="progress-bar bg-warning" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span style="min-width: 48px">0%</span>
                        </div>
                        <div class="d-flex align-items-center mb-2 fs-sm">
                            <div class="text-nowrap">
                                1<i class="fi-star mt-n1 ms-1 align-middle opacity-70"></i>
                            </div>
                            <div class="progress w-100 mx-3">
                                <div class="progress-bar bg-warning" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span style="min-width: 48px">10%</span>
                        </div>
                    </div>
                    <!-- Score-->
                    <div class="col-sm-4 order-sm-2 order-1 mb-sm-0 mb-3 text-center">
                        <h5 class="display-4 mb-2">4,7</h5>
                        <div>
                            <span class="star-rating">
                                <i class="star-rating-icon fi-star-filled active"></i>
                                <i class="star-rating-icon fi-star-filled active"></i>
                                <i class="star-rating-icon fi-star-filled active"></i>
                                <i class="star-rating-icon fi-star-filled active"></i>
                                <i class="star-rating-icon fi-star-filled active"></i>
                            </span>
                        </div>
                        <span class="fs-sm">48 reviews</span>
                    </div>
                </div>
                <!-- Add review btn + Reviews sort-->
                <div class="d-flex flex-sm-row flex-column align-items-sm-center justify-content-between mb-4 pb-4 border-bottom">
                    <a class="btn btn-outline-primary rounded-pill mb-sm-0 mb-3" data-bs-target="#modal-review" data-bs-toggle="modal"><i class="fi-edit mt-n1 me-1 align-middle"></i>Add review</a>
                    <div class="d-flex align-items-center ms-sm-4">
                        <label class="d-inline-block me-2 pe-1 text-muted text-nowrap" for="reviews-sort"><i class="fi-arrows-sort mt-n1 me-1 align-middle opacity-80"></i>Sort by:</label>
                        <select class="form-select" id="reviews-sort" style="min-width: 180px">
                            <option>Newest</option>
                            <option>Oldest</option>
                            <option>Popular</option>
                            <option>High rating</option>
                            <option>Low rating</option>
                        </select>
                    </div>
                </div>
                <!-- Review-->
                <div class="mb-4 pb-4 border-bottom">
                    <div class="d-flex justify-content-between mb-3">
                        <div class="d-flex align-items-center pe-2">
                            <img class="rounded-circle me-1" src="@/assets/img/avatars/03.jpg" width="48" alt="Avatar" />
                            <div class="ps-2">
                                <h6 class="fs-base mb-0">Annette Black</h6>
                                <span class="star-rating">
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                </span>
                            </div>
                        </div>
                        <span class="text-muted fs-sm">Jan 17, 2021</span>
                    </div>
                    <p>
                        Elementum ut quam tincidunt egestas vitae elit, hendrerit. Ullamcorper nulla amet
                        lobortis elit, nibh condimentum enim. Aliquam felis nisl tellus sodales lectus dictum
                        tristique proin vitae. Odio fermentum viverra tortor quis.
                    </p>
                    <div class="d-flex align-items-center">
                        <button class="btn-like" type="button"><i class="fi-like"></i><span>(3)</span></button>
                        <div class="border-end me-1">&nbsp;</div>
                        <button class="btn-dislike" type="button">
                            <i class="fi-dislike"></i><span>(0)</span>
                        </button>
                    </div>
                </div>
                <!-- Review-->
                <div class="mb-4 pb-4 border-bottom">
                    <div class="d-flex justify-content-between mb-3">
                        <div class="d-flex align-items-center pe-2">
                            <img class="rounded-circle me-1" src="@/assets/img/avatars/13.png" width="48" alt="Avatar" />
                            <div class="ps-2">
                                <h6 class="fs-base mb-0">Darrell Steward</h6>
                                <span class="star-rating">
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                    <i class="star-rating-icon fi-star"></i>
                                </span>
                            </div>
                        </div>
                        <span class="text-muted fs-sm">Dec 1, 2020</span>
                    </div>
                    <p>
                        Vel dictum nunc ut tristique. Egestas diam amet, ut proin hendrerit. Dui accumsan at
                        phasellus tempus consequat dignissim.
                    </p>
                    <div class="d-flex align-items-center">
                        <button class="btn-like" type="button"><i class="fi-like"></i><span>(0)</span></button>
                        <div class="border-end me-1">&nbsp;</div>
                        <button class="btn-dislike" type="button">
                            <i class="fi-dislike"></i><span>(1)</span>
                        </button>
                    </div>
                </div>
                <!-- Review-->
                <div class="mb-4 pb-4 border-bottom">
                    <div class="d-flex justify-content-between mb-3">
                        <div class="d-flex align-items-center pe-2">
                            <img class="rounded-circle me-1" src="@/assets/img/avatars/13.png" width="48" alt="Avatar" />
                            <div class="ps-2">
                                <h6 class="fs-base mb-0">Floyd Miles</h6>
                                <span class="star-rating">
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                </span>
                            </div>
                        </div>
                        <span class="text-muted fs-sm">Oct 28, 2020</span>
                    </div>
                    <p>
                        Viverra nunc blandit sapien non imperdiet sit. Purus tempus elementum aliquam eu urna. A
                        aenean duis non egestas at libero porttitor integer eget. Sed dictum lobortis laoreet
                        gravida.
                    </p>
                    <div class="d-flex align-items-center">
                        <button class="btn-like" type="button"><i class="fi-like"></i><span>(2)</span></button>
                        <div class="border-end me-1">&nbsp;</div>
                        <button class="btn-dislike" type="button">
                            <i class="fi-dislike"></i><span>(1)</span>
                        </button>
                    </div>
                </div>
                <!-- Review-->
                <div class="mb-4 pb-4 border-bottom">
                    <div class="d-flex justify-content-between mb-3">
                        <div class="d-flex align-items-center pe-2">
                            <img class="rounded-circle me-1" src="@/assets/img/avatars/04.jpg" width="48" alt="Avatar" />
                            <div class="ps-2">
                                <h6 class="fs-base mb-0">Ralph Edwards</h6>
                                <span class="star-rating">
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                    <i class="star-rating-icon fi-star-filled active"></i>
                                    <i class="star-rating-icon fi-star"></i>
                                </span>
                            </div>
                        </div>
                        <span class="text-muted fs-sm">Sep 14, 2020</span>
                    </div>
                    <p>
                        Elementum nisl, egestas nam consectetur nisl, at pellentesque cras. Non sed ac vivamus
                        dolor dignissim ut. Nisl sapien blandit pulvinar sagittis donec sociis ipsum arcu est.
                        Tempus, rutrum morbi scelerisque tempor mi. Etiam urna, cras bibendum leo nec faucibus
                        velit. Tempor lectus dignissim at auctor integer neque quam amet.
                    </p>
                    <div class="d-flex align-items-center">
                        <button class="btn-like" type="button"><i class="fi-like"></i><span>(0)</span></button>
                        <div class="border-end me-1">&nbsp;</div>
                        <button class="btn-dislike" type="button">
                            <i class="fi-dislike"></i><span>(0)</span>
                        </button>
                    </div>
                </div>
                <!-- Review pagination + Add review btn-->
                <div class="d-flex align-items-center justify-content-between">
                    <nav aria-label="Reviews pagination">
                        <ul class="pagination mb-0">
                            <li class="page-item d-sm-none">
                                <span class="page-link page-link-static">1 / 8</span>
                            </li>
                            <li class="page-item active d-none d-sm-block" aria-current="page">
                                <span class="page-link">1<span class="visually-hidden">(current)</span></span>
                            </li>
                            <li class="page-item d-none d-sm-block">
                                <a class="page-link" href="javascript:void(0);">2</a>
                            </li>
                            <li class="page-item d-none d-sm-block">
                                <a class="page-link" href="javascript:void(0);">3</a>
                            </li>
                            <li class="page-item d-none d-sm-block">...</li>
                            <li class="page-item d-none d-sm-block">
                                <a class="page-link" href="javascript:void(0);">8</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="javascript:void(0);" aria-label="Next"><i class="fi-chevron-right"></i></a>
                            </li>
                        </ul>
                    </nav>
                    <a class="btn btn-outline-primary rounded-pill ms-4" data-bs-target="#modal-review" data-bs-toggle="modal"><i class="fi-edit mt-n1 me-1 align-middle"></i>Add review</a>
                </div>
            </div>
            <!-- Sidebar-->
            <aside class="col-md-5">
                <!-- Place card-->
                <div class="card mb-4 p-2 shadow-sm">
                    <div class="card-body">
                        <!-- Place info-->
                        <div class="d-flex align-items-start mb-3 pb-2 border-bottom">
                            <img :src="business.logo || '/placeholder.png'" width="60" alt="Business logo" />
                            <div class="ps-2 ms-1">
                                <h3 class="h5 mb-2">{{ business.name }}</h3>
                                <ul class="list-unstyled d-flex flex-wrap fs-sm">
                                    <li class="me-2 mb-1 pe-1">
                                        <i class="fi-list mt-n1 me-1 text-primary align-middle opacity-70"></i>{{ business.category?.name }}
                                    </li>
                                    <li class="me-2 mb-1 pe-1">
                                        <i class="fi-map-pin mt-n1 me-1 align-middle opacity-70"></i>{{ business.city }}, {{ business.district }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- Place contacts-->
                        <div class="mb-3 pb-3 border-bottom">
                            <h4 class="h5 mb-2">Contacts:</h4>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2">
                                    <a class="nav-link p-0 fw-normal d-flex align-items-start" href="javascript:void(0);"><i class="fi-map-pin mt-1 me-2 align-middle opacity-70"></i>Ollenhauer Str. 29,
                                        10118, Berlin</a>
                                </li>
                                <li class="nav-item mb-2">
                                    <a class="nav-link d-inline-block p-0 fw-normal d-inline-flex align-items-start" href="tel:3025550107"><i class="fi-phone mt-1 me-2 align-middle opacity-70"></i>(302) 555-0107</a>,
                                    <a class="nav-link d-inline-block p-0 fw-normal" href="tel:3025550208">(302) 555-0208</a>
                                </li>
                                <li class="nav-item mb-2">
                                    <a class="nav-link p-0 fw-normal d-flex align-items-start" href="javascript:void(0);"><i class="fi-globe mt-1 me-2 align-middle opacity-60"></i>bb-hotel.com</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link p-0 fw-normal d-flex align-items-start" href="mailto:bb-hotel@example.com"><i class="fi-mail mt-1 me-2 align-middle opacity-70"></i>bb-hotel@example.com</a>
                                </li>
                            </ul>
                        </div>
                        <!-- Place pricing-->
                        <div class="mb-3 pb-4 border-bottom">
                            <div class="row row-cols-1">
                                <div class="col mb-3">
                                    <h4 class="h5 mb-0">
                                        <span class="fs-4">$50-100&nbsp;</span><span class="fs-base fw-normal text-body">/night</span>
                                    </h4>
                                </div>
                                <div class="col">
                                    <a class="btn btn-primary btn-lg rounded-pill w-sm-auto w-100" href="javascript:void(0);">Book now<i class="fi-chevron-right fs-sm ms-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <!-- Place following-->
                        <div class="d-flex align-items-center">
                            <h4 class="h5 mb-0 me-3">Follow:</h4>
                            <div class="text-nowrap">
                                <a class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2" href="javascript:void(0);">
                                    <i class="fi-facebook"></i>
                                </a>
                                <a class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2" href="javascript:void(0);">
                                    <i class="fi-instagram"></i>
                                </a>
                                <a class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle" href="javascript:void(0);">
                                    <i class="fi-twitter"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Location (Map)-->
                <div class="position-relative">
                    <img class="rounded-3" src="@/assets/img/city-guide/single/map-sm.jpg" alt="Map" />
                    <div class="d-flex w-100 h-100 flex-column align-items-center justify-content-center position-absolute top-0 start-0">
                        <img class="d-block mx-auto mb-4 rounded-circle bg-white shadow" src="@/assets/img/city-guide/brands/hotel.svg" width="40" alt="Place logo" />
                        <a class="btn btn-primary rounded-pill stretched-link" href="javascript:void(0);">
                            <i class="fi-route me-2"></i>Get directions
                        </a>
                    </div>
                </div>
            </aside>
        </div>
    </section>

    <RecentlyViewed />

    <!-- Review modal-->
    <div class="modal fade" id="modal-review" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header d-block position-relative border-0 pb-0 px-sm-5 px-4">
                    <h3 class="modal-title mt-4 text-center">Leave a review</h3>
                    <button class="btn-close position-absolute top-0 end-0 mt-3 me-3" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body px-sm-5 px-4">
                    <form class="needs-validation" novalidate>
                        <div class="mb-3">
                            <label class="form-label" for="review-name">Name <span class='text-danger'>*</span></label>
                            <input class="form-control" type="text" id="review-name" placeholder="Your name" required>
                            <div class="invalid-feedback">Please let us know your name.</div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="review-email">Email <span class='text-danger'>*</span></label>
                            <input class="form-control" type="email" id="review-email" placeholder="Your email address" required>
                            <div class="invalid-feedback">Please provide a valid email address.</div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="review-rating">Rating <span class='text-danger'>*</span></label>
                            <select class="form-control form-select" id="review-rating" required>
                                <option value="" selected disabled hidden>Choose rating</option>
                                <option value="5 stars">5 stars</option>
                                <option value="4 stars">4 stars</option>
                                <option value="3 stars">3 stars</option>
                                <option value="2 stars">2 stars</option>
                                <option value="1 star">1 star</option>
                            </select>
                            <div class="invalid-feedback">Please rate the property.</div>
                        </div>
                        <div class="mb-4">
                            <label class="form-label" for="review-text">Review <span class='text-danger'>*</span></label>
                            <textarea class="form-control" id="review-text" rows="5" placeholder="Your review message" required></textarea>
                            <div class="invalid-feedback">Please write your review.</div>
                        </div>
                        <button class="btn btn-primary d-block rounded-pill w-100 mb-4" type="submit">Submit a review</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
