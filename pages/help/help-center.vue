<script lang="ts" setup>
import { ref } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue';
import Banner from './common/banner.vue';

const breadcrumbData = ref([
    {
        title: 'Home',
        link: '/',
        subitems: [
            {
                title: 'Help Center'
            }
        ]
    }
])

definePageMeta({
    title: 'Help Center',
});
</script>
<template>
    <!-- Page header-->
    <section class="bg-secondary py-5">
        <div class="container mb-md-2 mb-lg-4 py-5">
            <!-- Breadcrumbs-->
            <Breadcrumb :data="breadcrumbData" />

            <!-- Page title-->
            <div class="col-lg-8 col-md-10 px-0">
                <h1 class="mb-4 pb-2">How can we help?</h1>
                <!-- Search form-->
                <form class="form-group rounded-pill">
                    <input class="form-control" type="text" placeholder="What are you looking for?" />
                    <button class="btn btn-lg btn-primary rounded-pill px-sm-4 px-3" type="submit">
                        <i class="fi-search me-sm-2"></i>
                        <span class="d-sm-inline d-none">Search</span>
                    </button>
                </form>
            </div>
        </div>
    </section>

    <!-- Page content-->
    <section class="position-relative bg-white rounded-xxl-4 mb-5 pt-3 pb-lg-5 zindex-5" style="margin-top: -30px">
        <div class="container pt-2 pt-md-5">
            <!-- Help topics grid-->
            <div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-lg-5 gy-md-4 gy-0 gx-4">
                <!-- Topic-->
                <div class="col">
                    <div class="card border-0 card-hover h-100 bg-transparent">
                        <div class="card-body icon-box pb-0">
                            <div class="icon-box-media bg-faded-accent text-accent rounded-circle mb-3">
                                <i class="fi-settings"></i>
                            </div>
                            <h3 class="h4">Getting started</h3>
                            <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/single-topic">Quis arcu euismod est, varius nisi?</nuxt-link>
                            <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/single-topic">Aliquam, commodo sed nibh?</nuxt-link>
                            <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/single-topic">Faucibus felis fames mauris dolor purus?</nuxt-link>
                            <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/single-topic">Odio diam, tellus facilisi?</nuxt-link>
                            <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/single-topic">Eu quisque libero, sed neque?</nuxt-link>
                            <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/single-topic">Lectus sed sit cursus amet, vitae tempor?</nuxt-link>
                        </div>
                        <div class="card-footer pt-0 pb-4 border-top-0">
                            <nuxt-link to="/help/single-topic">View all</nuxt-link>
                        </div>
                    </div>
                </div>
                <!-- Topic-->
                <div class="col">
                    <div class="card border-0 card-hover h-100 bg-transparent">
                        <div class="card-body icon-box pb-0">
                            <div class="icon-box-media bg-faded-warning text-warning rounded-circle mb-3">
                                <i class="fi-file"></i>
                            </div>
                            <h3 class="h4">Partnership</h3>
                            <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/single-topic">Tincidunt molestie scelerisque?</nuxt-link>
                            <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/single-topic">Nunc, ipsum ut augue fusce ornare?</nuxt-link>
                            <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/single-topic">Velit, mauris amet feugiat condimentum mollis?</nuxt-link>
                            <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/single-topic">Lacus, sed fames mi cras id?</nuxt-link>
                            <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/single-topic">Adipiscing magna suspendisse?</nuxt-link>
                            <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/single-topic">Libero pellentesque ultricies maecenas?</nuxt-link>
                        </div>
                        <div class="card-footer pt-0 pb-4 border-top-0">
                            <nuxt-link to="/help/single-topic">View all</nuxt-link>
                        </div>
                    </div>
                </div>
                <!-- Topic-->
                <div class="col">
                    <div class="card border-0 card-hover h-100 bg-transparent">
                        <div class="card-body icon-box pb-0">
                            <div class="icon-box-media bg-faded-danger text-danger rounded-circle mb-3">
                                <i class="fi-user"></i>
                            </div>
                            <h3 class="h4">Account &amp; profile</h3>
                            <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/single-topic">Cursus fusce volutpat tempor?</nuxt-link>
                            <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/single-topic">A senectus auctor sodales gravida non elit?</nuxt-link>
                            <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/single-topic">Mauris accumsan vel rhoncus?</nuxt-link>
                            <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/single-topic">Cras nunc, semper lectus turpis?</nuxt-link>
                            <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/single-topic">Pulvinar sed morbi massa nulla dolor eget?</nuxt-link>
                            <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/single-topic">Bibendum mattis amet amet?</nuxt-link>
                        </div>
                        <div class="card-footer pt-0 pb-4 border-top-0">
                            <nuxt-link to="/help/single-topic">View all</nuxt-link>
                        </div>
                    </div>
                </div>
                <!-- Topic-->
                <div class="col">
                    <div class="card border-0 card-hover h-100 bg-transparent">
                        <div class="card-body icon-box pb-0">
                            <div class="icon-box-media bg-faded-success text-success rounded-circle mb-3">
                                <i class="fi-security"></i>
                            </div>
                            <h3 class="h4">Privacy &amp; security</h3>
                            <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/single-topic">Mauris accumsan vel rhoncus?</nuxt-link>
                            <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/single-topic">Eu quam bibendum adipiscing leo?</nuxt-link>
                            <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/single-topic">Massa fermentum, eget nec elementum?</nuxt-link>
                            <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/single-topic">In quis pulvinar amet morbi praesent?</nuxt-link>
                            <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/single-topic">Eros, dolor in consequat netus?</nuxt-link>
                            <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/single-topic">Quis gravida felis dui non gravida?</nuxt-link>
                        </div>
                        <div class="card-footer pt-0 pb-4 border-top-0">
                            <nuxt-link to="/help/single-topic">View all</nuxt-link>
                        </div>
                    </div>
                </div>
                <!-- Topic-->
                <div class="col">
                    <div class="card border-0 card-hover h-100 bg-transparent">
                        <div class="card-body icon-box pb-0">
                            <div class="icon-box-media bg-faded-primary text-primary rounded-circle mb-3">
                                <i class="fi-credit-card"></i>
                            </div>
                            <h3 class="h4">Transactions</h3>
                            <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/single-topic">Nisl urna id aliquam sed vitae pellentesque?</nuxt-link>
                            <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/single-topic">Eu quam bibendum adipiscing leo?</nuxt-link>
                            <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/single-topic">Massa fermentum, eget nec elementum?</nuxt-link>
                            <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/single-topic">In quis pulvinar amet morbi praesent?</nuxt-link>
                            <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/single-topic">Eros, dolor in consequat netus?</nuxt-link>
                            <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/single-topic">Quis gravida felis dui non gravida?</nuxt-link>
                        </div>
                        <div class="card-footer pt-0 pb-4 border-top-0">
                            <nuxt-link to="/help/single-topic">View all</nuxt-link>
                        </div>
                    </div>
                </div>
                <!-- Topic-->
                <div class="col">
                    <div class="card border-0 card-hover h-100 bg-transparent">
                        <div class="card-body icon-box pb-0">
                            <div class="icon-box-media bg-faded-info text-info rounded-circle mb-3">
                                <i class="fi-dots-horisontal"></i>
                            </div>
                            <h3 class="h4">More</h3>
                            <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/single-topic">Lacus eget amet blandit egestas?</nuxt-link>
                            <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/single-topic">Augue at donec molestie vulputate cum?</nuxt-link>
                            <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/single-topic">Viverra adipiscing nisl, lacus at et?</nuxt-link>
                            <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/single-topic">Sagittis dictum hendrerit faucibus malesuada?</nuxt-link>
                            <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/single-topic">Tempus est non sapien tempus?</nuxt-link>
                            <nuxt-link class="nav-link mb-2 p-0 fw-normal" to="/help/single-topic">Nunc est hendrerit volutpat nunc donec?</nuxt-link>
                        </div>
                        <div class="card-footer pt-0 pb-4 border-top-0">
                            <nuxt-link to="/help/single-topic">View all</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Us-->
    <Banner />
</template>
