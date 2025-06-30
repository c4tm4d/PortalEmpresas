<script lang="ts" setup>
import { ref } from 'vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Header from './common/header.vue';
import Nav from './common/nav.vue';

const breadcrumbData = ref([
    {
        title: 'Home',
        link: '/',
        subitems: [
            {
                title: 'Conta',
                link: '/account/info'
            },
            {
                title: 'Notificações',
            }
        ]
    }
])

definePageMeta({
    title: 'Notificações',
    middleware: 'auth'
});
</script>
<template>
    <div class="container mt-5 mb-md-4 py-5">
        <!-- Breadcrumb-->
        <Breadcrumb :data="breadcrumbData" />

        <!-- Account header-->
        <Header />

        <!-- Page content-->
        <div class="card card-body p-4 p-md-5 shadow-sm">
            <!-- Account nav-->
            <Nav isActive="notifications" />

            <div class="d-flex flex-md-row flex-column align-items-md-center justify-content-md-between mb-4 py-2">
                <h1 class="h3 mb-0">Notifications</h1>
            </div>
            <div class="border-bottom mb-3 pb-3">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="all-notifications" data-master-checkbox-for="#notification-settings" checked>
                    <label class="form-check-label ms-2 fw-bold text-dark opacity-90" for="all-notifications">Enable / disable all notifications</label>
                </div>
            </div>
            <div class="py-2" id="notification-settings">
                <div class="d-flex mb-4">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="product-sold" checked>
                        <label class="form-check-label" for="product-sold"></label>
                    </div>
                    <div class="ms-2">
                        <h6 class="mb-1 fs-base opacity-90">Product sold notifications</h6>
                        <p class="fs-sm mb-0">Send an email when someone purchased one of my products</p>
                    </div>
                </div>
                <div class="d-flex mb-4">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="product-update" checked>
                        <label class="form-check-label" for="product-update"></label>
                    </div>
                    <div class="ms-2">
                        <h6 class="mb-1 fs-base opacity-90">Product update notifications</h6>
                        <p class="fs-sm mb-0">Send an email when the product I've purchased is updated</p>
                    </div>
                </div>
                <div class="d-flex mb-4">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="product-comment">
                        <label class="form-check-label" for="product-comment"></label>
                    </div>
                    <div class="ms-2">
                        <h6 class="mb-1 fs-base opacity-90">Product comment notifications</h6>
                        <p class="fs-sm mb-0">Send an email when someone comments on one of my products</p>
                    </div>
                </div>
                <div class="d-flex mb-4">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="product-review" checked>
                        <label class="form-check-label" for="product-review"></label>
                    </div>
                    <div class="ms-2">
                        <h6 class="mb-1 fs-base opacity-90">Product review notification</h6>
                        <p class="fs-sm mb-0">Send an email when someone leaves a review with their rating</p>
                    </div>
                </div>
                <div class="d-flex">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="daily-emails">
                        <label class="form-check-label" for="daily-emails"></label>
                    </div>
                    <div class="ms-2">
                        <h6 class="mb-1 fs-base opacity-90">Daily summary emails</h6>
                        <p class="fs-sm mb-0">Send me a daily summary of all products sold, commented or reviewed</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>