<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import { useRouter } from 'vue-router'

// Import Vue FilePond
import vueFilePond from 'vue-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import image preview plugin styles
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'

// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'

// Create component
// const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview)
// Using @nuxtjs/leaflet module - components are auto-imported

// Create component
const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview
);

const files = ref([]);
const logoFiles = ref([]);
const zoom = ref<number>(13);

// Manual file management
const uploadedFiles = ref<any[]>([]);
const uploadedLogoFiles = ref<any[]>([]);

const router = useRouter()

onMounted(() => {
    document.body.classList.add('bg-secondary')
    fetchBusinesses()
})

const breadcrumbData = ref([
    {
        title: 'Home',
        link: '/',
        subitems: [
            {
                title: 'Os Meus Negócios'
            }
        ]
    }
])

definePageMeta({
    title: 'Os Meus Negócios',
});

const businesses = ref<any[]>([])
const isLoading = ref(true)
const loadError = ref('')

const fetchBusinesses = async () => {
    try {
        isLoading.value = true
        businesses.value = await $fetch('/api/businesses')
    } catch (error: any) {
        loadError.value = error.data?.message || 'Failed to load businesses.'
    } finally {
        isLoading.value = false
    }
}

const handleEdit = (id: number) => {
    router.push(`/vendor/edit-business/${id}`)
}

const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this business?')) return
    try {
        await $fetch(`/api/businesses/${id}`, { method: 'DELETE' })
        businesses.value = businesses.value.filter((b: any) => b.id !== id)
    } catch (error: any) {
        alert(error.data?.message || 'Failed to delete business.')
    }
}
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
                <select class="form-select form-select-sm" id="sortby" disabled>
                    <option>Newest</option>
                </select>
            </div>
        </div>

        <div class="card p-sm-4 border-0 shadow-sm">
            <div class="card-body">
                <div v-if="isLoading" class="text-center py-5">
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <p class="mt-3">Loading businesses...</p>
                </div>
                <div v-else-if="loadError" class="alert alert-danger" role="alert">
                    <h4 class="alert-heading">Error Loading Businesses</h4>
                    <p>{{ loadError }}</p>
                </div>
                <div v-else>
                    <div v-if="businesses.length === 0" class="text-center py-5">
                        <p>No businesses found.</p>
                        <nuxt-link class="btn btn-primary rounded-pill" to="/vendor/add-business">
                            <i class="fi-plus me-2"></i>Add new business
                        </nuxt-link>
                    </div>
                    <div v-else class="row row-cols-md-2 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-3 g-xl-4">
                        <div v-for="business in businesses" :key="business.id" class="col pb-2">
                            <div class="position-relative">
                                <div class="position-relative mb-3">
                                    <div class="dropdown position-absolute zindex-5 top-0 end-0 mt-3 me-3">
                                        <button class="btn btn-icon btn-light btn-xs rounded-circle shadow-sm" type="button" :id="`contextMenu${business.id}`" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fi-dots-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu my-1" :aria-labelledby="`contextMenu${business.id}`">
                                            <li>
                                                <button class="dropdown-item" type="button" @click="handleEdit(business.id)">
                                                    <i class="fi-edit opacity-60 me-2"></i>Edit
                                                </button>
                                            </li>
                                            <li>
                                                <nuxt-link class="dropdown-item" :to="`/vendor/business-promotion?business=${business.id}`">
                                                    <i class="fi-flame opacity-60 me-2"></i>Promote
                                                </nuxt-link>
                                            </li>
                                            <li>
                                                <button class="dropdown-item" type="button" @click="handleDelete(business.id)">
                                                    <i class="fi-trash opacity-60 me-2"></i>Delete
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    <img v-if="business.logo" class="rounded-3" :src="business.logo" alt="Logo" style="object-fit:cover; width:100%; height:180px;" />
                                    <div v-else class="bg-light rounded-3 d-flex align-items-center justify-content-center" style="height:180px;">
                                        <i class="fi-image text-muted fs-1"></i>
                                    </div>
                                </div>
                                <h3 class="mb-2 fs-lg">
                                    <nuxt-link class="nav-link stretched-link" :to="`/catalog/single?id=${business.id}`">{{ business.name }}</nuxt-link>
                                </h3>
                                <div class="mb-1 text-muted small">
                                    <span v-if="business.category">{{ business.category.name }}</span>
                                </div>
                                <ul class="list-inline mb-0 fs-xs">
                                    <li class="list-inline-item pe-1">
                                        <i class="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle"></i>{{ business.city }}
                                    </li>
                                    <li class="list-inline-item pe-1">
                                        <i class="fi-phone mt-n1 me-1 fs-base text-muted align-middle"></i>{{ business.phone }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
