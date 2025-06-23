<script lang="ts" setup>
import Header from './common/header.vue';
import RecentlyViewed from './common/recently-view.vue'

definePageMeta({
    title: 'Single Place - Info',
});
</script>

<template>
    <!-- Page header-->
   <Header isActive="single-info" />

    <!-- Page content -->
    <section class="container pb-5 mb-md-4">
        <div class="row">
            <!-- Left column-->
            <div class="col-md-7 mb-md-0 mb-4 pb-md-0 pb-2">
                <h2 class="h4">About</h2>
                <ul class="list-unstyled">
                    <li>
                        <i class="fi-star-filled mt-n1 me-1 text-warning align-middle"></i><b>4.9 </b><span class="text-muted">(48 reviews)</span>
                    </li>
                    <li><i class="fi-wallet mt-n1 me-1 align-middle opacity-70"></i>$456</li>
                    <li><i class="fi-map-pin mt-n1 me-1 align-middle opacity-70"></i>1.4 km from center</li>
                </ul>
                <div class="mb-4 pb-md-3">
                    <p class="mb-1">
                        Lorem tincidunt lectus vitae id vulputate diam quam. Imperdiet non scelerisque turpis
                        sed etiam ultrices. Blandit mollis dignissim egestas consectetur porttitor. Vulputate
                        dolor pretium, dignissim eu augue sit ut convallis. Lectus est, magna urna feugiat sed
                        ultricies sed in lacinia. Fusce potenti sit id pharetra vel ornare. Vestibulum sed
                        tellus ullamcorper arcu.
                    </p>
                    <div class="collapse" id="seeMoreAbout">
                        <p class="mb-1">
                            Asperiores eos molestias, aspernatur assumenda vel corporis ex, magni excepturi totam
                            exercitationem quia inventore quod amet labore impedit quae distinctio? Officiis
                            blanditiis consequatur alias, atque, sed est incidunt accusamus repudiandae tempora
                            repellendus obcaecati delectus ducimus inventore tempore harum numquam autem eligendi
                            culpa.
                        </p>
                    </div>
                    <a class="collapse-label collapsed" data-bs-target="#seeMoreAbout" data-bs-toggle="collapse" data-bs-label-collapsed="Show more" data-bs-label-expanded="Show less" role="button" aria-expanded="false" aria-controls="seeMoreAbout"></a>
                </div>
                <!-- Amenities-->
                <div class="mb-4 pb-md-3">
                    <h2 class="h4">Amenities</h2>
                    <ul class="list-unstyled row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
                        <li class="col"><i class="fi-wifi mt-n1 me-2 fs-lg align-middle"></i>Free WiFi</li>
                        <li class="col">
                            <i class="fi-swimming-pool mt-n1 me-2 fs-lg align-middle"></i>2 swimming pools
                        </li>
                        <li class="col"><i class="fi-pet mt-n1 me-2 fs-lg align-middle"></i>Pets-friendly</li>
                        <li class="col">
                            <i class="fi-parking mt-n1 me-2 fs-lg align-middle"></i>Free parking
                        </li>
                        <li class="col"><i class="fi-spa mt-n1 me-2 fs-lg align-middle"></i>Spa lounge</li>
                        <li class="col"><i class="fi-cafe mt-n1 me-2 fs-lg align-middle"></i>Restaurant</li>
                        <li class="col">
                            <i class="fi-hotel-bell mt-n1 me-2 fs-lg align-middle"></i>Room service
                        </li>
                        <li class="col"><i class="fi-cocktail mt-n1 me-2 fs-lg align-middle"></i>Bar</li>
                        <li class="col">
                            <i class="fi-dumbell mt-n1 me-2 fs-lg align-middle"></i>Fitness Center
                        </li>
                    </ul>
                    <div class="collapse" id="seeMoreAmenities">
                        <ul class="list-unstyled row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
                            <li class="col"><i class="fi-dish mt-n1 me-2 fs-lg align-middle"></i>Dishwasher</li>
                            <li class="col">
                                <i class="fi-thermometer mt-n1 me-2 fs-lg align-middle"></i>Heating
                            </li>
                        </ul>
                    </div>
                    <a class="collapse-label collapsed" data-bs-target="#seeMoreAmenities" data-bs-toggle="collapse" data-bs-label-collapsed="Show more" data-bs-label-expanded="Show less" role="button" aria-expanded="false" aria-controls="seeMoreAmenities"></a>
                </div>
                <!-- Room types-->
                <div class="mb-4 pb-md-3">
                    <h2 class="h4">Room types</h2>
                    <ul class="list-unstyled row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
                        <li class="col">
                            <i class="fi-no-smoke mt-n1 me-2 fs-lg align-middle"></i>Non-smoking rooms
                        </li>
                        <li class="col">
                            <i class="fi-single-bed mt-n1 me-2 fs-lg align-middle"></i>Single rooms
                        </li>
                        <li class="col">
                            <i class="fi-double-bed mt-n1 me-2 fs-lg align-middle"></i>Family suites
                        </li>
                    </ul>
                </div>
                <!-- Awards-->
                <h2 class="h4">Awards</h2>
                <ul class="list-unstyled">
                    <li class="d-flex align-items-center mb-2">
                        <img class="flex-shrink-0 me-2" src="@/assets/img/city-guide/single/awards/01.jpg" width="40" alt="Award logo" />
                        <div>2020 Traveler’s Choice</div>
                    </li>
                    <li class="d-flex align-items-center mb-2">
                        <img class="flex-shrink-0 me-2" src="@/assets/img/city-guide/single/awards/02.jpg" width="40" alt="Award logo" />
                        <div>TUI Top Quality 2020</div>
                    </li>
                    <li class="d-flex align-items-center mb-2">
                        <img class="flex-shrink-0 me-2" src="@/assets/img/city-guide/single/awards/03.jpg" width="40" alt="Award logo" />
                        <div>TUI Holly 2019</div>
                    </li>
                </ul>
                <hr class="my-4" />
                <!-- Payment-->
                <div class="d-lg-flex align-items-center pb-2 pb-lg-0">
                    <h4 class="fs-lg mb-lg-0">Cards accepted at this hotel:</h4>
                    <div class="ps-lg-3">
                        <img class="me-2 border rounded-1 shadow-sm" src="@/assets/img/city-guide/single/payment/visa.svg" width="54" alt="Visa" />
                        <img class="me-2 border rounded-1 shadow-sm" src="@/assets/img/city-guide/single/payment/mastercard.svg" width="54" alt="Mastercard" />
                        <img class="me-2 border rounded-1 shadow-sm" src="@/assets/img/city-guide/single/payment/maestro.svg" width="54" alt="Maestro" />
                        <img class="border rounded-1 shadow-sm" src="@/assets/img/city-guide/single/payment/american-express.svg" width="54" alt="American Express" />
                    </div>
                </div>
            </div>
            <!-- Sidebar-->
            <aside class="col-md-5">
                <!-- Place card-->
                <div class="card mb-4 p-2 shadow-sm">
                    <div class="card-body">
                        <!-- Place info-->
                        <div class="d-flex align-items-start mb-3 pb-2 border-bottom">
                            <img src="@/assets/img/city-guide/brands/hotel.svg" width="60" alt="Thumbnail" />
                            <div class="ps-2 ms-1">
                                <h3 class="h5 mb-2">Berlin Business Hotel</h3>
                                <ul class="list-unstyled d-flex flex-wrap fs-sm">
                                    <li class="me-2 mb-1 pe-1">
                                        <i class="fi-star-filled mt-n1 me-1 text-warning align-middle opacity-70"></i><b>4.9 </b>(48)
                                    </li>
                                    <li class="me-2 mb-1 pe-1">
                                        <i class="fi-wallet mt-n1 me-1 align-middle opacity-70"></i>$456s
                                    </li>
                                    <li class="me-2 mb-1 pe-1">
                                        <i class="fi-map-pin mt-n1 me-1 align-middle opacity-70"></i>1.4 km from center
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
</template>
