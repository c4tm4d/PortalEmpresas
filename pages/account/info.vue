<script lang="ts" setup>
import { ref } from 'vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Header from './common/header.vue';
import Nav from './common/nav.vue';

import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

const date = ref(null);
const { user } = useAuth();

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
                title: 'Informação Pessoal',
            }
        ]
    }
])

definePageMeta({
    title: 'Informação Pessoal',
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
            <Nav isActive="info" />

            <div class="d-flex flex-md-row flex-column align-items-md-center justify-content-md-between mb-4 pt-2">
                <h1 class="h3 mb-0">Personal Info</h1>
            </div>
            <div class="border rounded-3 p-3 mb-2" id="personal-info">
                <!-- Name-->
                <div class="border-bottom pb-3 mb-3">
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="pe-2">
                            <label class="form-label fw-bold">Full name</label>
                            <div id="name-value">{{ user?.name || 'Not specified' }}</div>
                        </div>
                        <div data-bs-toggle="tooltip" data-bs-title="Edit">
                            <a class="nav-link py-0" data-bs-target="#name-collapse" data-bs-toggle="collapse"><i class="fi-edit"></i></a>
                        </div>
                    </div>
                    <div class="collapse" id="name-collapse" data-bs-parent="#personal-info">
                        <input class="form-control mt-3" type="text" data-bs-binded-element="#name-value" data-bs-unset-value="Not specified" :value="user?.name || ''">
                    </div>
                </div>
                <!-- Gender-->
                <div class="border-bottom pb-3 mb-3">
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="pe-2">
                            <label class="form-label fw-bold">Gender</label>
                            <div id="gender-value">Not specified</div>
                        </div>
                        <div data-bs-toggle="tooltip" data-bs-title="Edit"><a class="nav-link py-0" data-bs-target="#gender-collapse" data-bs-toggle="collapse"><i class="fi-edit"></i></a></div>
                    </div>
                    <div class="collapse" id="gender-collapse" data-bs-parent="#personal-info">
                        <select class="form-select mt-3" data-bs-binded-element="#gender-value" data-bs-unset-value="Not specified">
                            <option value="Not specified" disabled selected>Choose gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>
                <!-- Date of birth-->
                <div class="border-bottom pb-3 mb-3">
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="pe-2">
                            <label class="form-label fw-bold">Date of birth</label>
                            <div id="birth-value">Not specified</div>
                        </div>
                        <div data-bs-toggle="tooltip" data-bs-title="Edit"><a class="nav-link py-0" data-bs-target="#birth-collapse" data-bs-toggle="collapse"><i class="fi-edit"></i></a></div>
                    </div>
                    <div class="collapse" id="birth-collapse" data-bs-parent="#personal-info">
                        <div class="input-group mt-3">
                            <flat-pickr class="form-control date-picker rounded pe-5" data-bs-binded-element="#birth-value" placeholder="Choose date" v-model="date" />
                            <i class="fi-calendar text-muted position-absolute top-50 end-0 translate-middle-y me-3"></i>
                        </div>
                    </div>
                </div>
                <!-- Email-->
                <div class="border-bottom pb-3 mb-3">
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="pe-2">
                            <label class="form-label fw-bold">Email</label>
                            <div id="email-value">{{ user?.email || 'Not specified' }}</div>
                        </div>
                        <div data-bs-toggle="tooltip" data-bs-title="Edit"><a class="nav-link py-0" data-bs-target="#email-collapse" data-bs-toggle="collapse"><i class="fi-edit"></i></a></div>
                    </div>
                    <div class="collapse" id="email-collapse" data-bs-parent="#personal-info">
                        <input class="form-control mt-3" type="email" data-bs-binded-element="#email-value" data-bs-unset-value="Not specified" :value="user?.email || ''">
                    </div>
                </div>
                <!-- Phone number-->
                <div class="border-bottom pb-3 mb-3">
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="pe-2">
                            <label class="form-label fw-bold">Phone number</label>
                            <div id="phone-value">Not specified</div>
                        </div>
                        <div data-bs-toggle="tooltip" data-bs-title="Edit"><a class="nav-link py-0" data-bs-target="#phone-collapse" data-bs-toggle="collapse"><i class="fi-edit"></i></a></div>
                    </div>
                    <div class="collapse" id="phone-collapse" data-bs-parent="#personal-info">
                        <input class="form-control mt-3" type="text" data-bs-binded-element="#phone-value" data-bs-unset-value="Not specified" placeholder="Enter phone number">
                    </div>
                </div>
                <!-- Address-->
                <div class="border-bottom pb-3 mb-3">
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="pe-2">
                            <label class="form-label fw-bold">Address</label>
                            <div id="address-value">Not specified</div>
                        </div>
                        <div data-bs-toggle="tooltip" data-bs-title="Edit"><a class="nav-link py-0" data-bs-target="#address-collapse" data-bs-toggle="collapse"><i class="fi-edit"></i></a></div>
                    </div>
                    <div class="collapse" id="address-collapse" data-bs-parent="#personal-info">
                        <input class="form-control mt-3" type="text" data-bs-binded-element="#address-value" data-bs-unset-value="Not specified" placeholder="Enter address">
                    </div>
                </div>
                <!-- Password-->
                <div>
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="pe-2">
                            <label class="form-label fw-bold">Password</label>
                            <div>********</div>
                        </div>
                        <div data-bs-toggle="tooltip" data-bs-title="Edit"><a class="nav-link py-0" data-bs-target="#company-collapse" data-bs-toggle="collapse"><i class="fi-edit"></i></a></div>
                    </div>
                    <div class="collapse" id="company-collapse" data-bs-parent="#personal-info">
                        <div class="password-toggle mt-3">
                            <input class="form-control" type="password" id="pass-visibility" value="hidden@password">
                            <label class="password-toggle-btn" aria-label="Show/hide password">
                                <input class="password-toggle-check" type="checkbox"><span class="password-toggle-indicator"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-between mt-4">
                <button class="btn btn-primary rounded-pill px-3 px-sm-4" type="button">Save changes</button>
                <button class="btn btn-link btn-sm px-0" type="button"><i class="fi-trash me-2"></i>Delete account</button>
            </div>
        </div>
    </div>
</template>