<script lang="ts" setup>
import { ref, computed, watch } from 'vue';
import Sidebar from './sidebar.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';

const breadcrumbData = ref([
    {
        title: 'Home',
        link: '/',
        subitems: [
            {
                title: 'Encontrar Empresas',
            },
        ]
    }
])

definePageMeta({
    title: 'Encontrar Empresas',
});

const { data: businesses, pending, error } = await useFetch('/api/businesses/public');

// Filter states
const filters = ref<{
    category: number | null;
    search: string;
    city: string;
    district: string;
    priceRange: [number, number];
}>({
    category: null,
    search: '',
    city: '',
    district: '',
    priceRange: [310, 710] as [number, number]
});

// Handle filter changes from sidebar
const handleFilterChange = (newFilters: any) => {
    filters.value = newFilters;
};

// Filter businesses based on current filters
const filteredBusinesses = computed(() => {
    if (!businesses.value) return [];
    
    return businesses.value.filter(business => {
        // Category filter
        if (filters.value.category && business.category?.id !== filters.value.category) {
            return false;
        }
        
        // Search filter
        if (filters.value.search && !business.name.toLowerCase().includes(filters.value.search.toLowerCase()) &&
            !business.description.toLowerCase().includes(filters.value.search.toLowerCase())) {
            return false;
        }
        
        // City filter
        if (filters.value.city && business.city !== filters.value.city) {
            return false;
        }
        
        // District filter
        if (filters.value.district && business.district !== filters.value.district) {
            return false;
        }
        
        return true;
    });
});

// Pagination
const itemsPerPage = 12;
const currentPage = ref(1);

// Reset to first page when filters change
watch(filters, () => {
    currentPage.value = 1;
}, { deep: true });

// Computed properties for pagination
const totalPages = computed(() => Math.ceil(filteredBusinesses.value.length / itemsPerPage));
const paginatedBusinesses = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredBusinesses.value.slice(start, end);
});

// Pagination methods
const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
};

const goToNextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
};

const goToPrevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};

// Generate page numbers for pagination
const pageNumbers = computed(() => {
    const pages = [];
    const total = totalPages.value;
    const current = currentPage.value;
    
    if (total <= 7) {
        // Show all pages if 7 or fewer
        for (let i = 1; i <= total; i++) {
            pages.push(i);
        }
    } else {
        // Show first page, last page, current page, and pages around current
        if (current <= 4) {
            // Near the beginning
            for (let i = 1; i <= 5; i++) {
                pages.push(i);
            }
            pages.push('...');
            pages.push(total);
        } else if (current >= total - 3) {
            // Near the end
            pages.push(1);
            pages.push('...');
            for (let i = total - 4; i <= total; i++) {
                pages.push(i);
            }
        } else {
            // In the middle
            pages.push(1);
            pages.push('...');
            for (let i = current - 1; i <= current + 1; i++) {
                pages.push(i);
            }
            pages.push('...');
            pages.push(total);
        }
    }
    
    return pages;
});

// Active filters
const hasActiveFilters = computed(() => {
    return filters.value.category !== null || 
           filters.value.search !== '' || 
           filters.value.city !== '' || 
           filters.value.district !== '';
});

// Get category name
const getCategoryName = (categoryId: number | null) => {
    const category = businesses.value?.find(business => business.category?.id === categoryId)?.category;
    return category?.name || 'Unknown Category';
};

// Clear filter
const clearFilter = (filter: keyof typeof filters.value) => {
    if (filter === 'category') {
        filters.value.category = null;
    } else if (filter === 'search') {
        filters.value.search = '';
    } else if (filter === 'city') {
        filters.value.city = '';
    } else if (filter === 'district') {
        filters.value.district = '';
    }
};

// Clear all filters
const clearAllFilters = () => {
    filters.value.category = null;
    filters.value.search = '';
    filters.value.city = '';
    filters.value.district = '';
};
</script>
<template>
    <div class="container-fluid mt-5 pt-5 p-0">
        <div class="row g-0 mt-n3">

            <Sidebar :current-filters="filters" @filter-change="handleFilterChange" />

            <!-- Page content-->
            <div class="col-lg-8 col-xl-9 position-relative overflow-hidden pb-5 pt-4 px-3 px-xl-4 px-xxl-5">
                <!-- Map popup-->
                <div class="map-popup invisible" id="map">
                    <button class="btn btn-icon btn-light btn-sm shadow-sm rounded-circle" type="button" data-bs-toggle-class="invisible" data-bs-target="#map"><i class="fi-x fs-xs"></i></button>
                    <div class="interactive-map" data-map-options-json="json/map-options-city-guide.json"></div>
                </div>

                <!-- Breadcrumb-->
                <Breadcrumb :data="breadcrumbData" />

                <!-- Title-->
                <div class="d-sm-flex align-items-center justify-content-between pb-3 pb-sm-4">
                    <h1 class="h2 mb-sm-0">Encontrar Empresas</h1>
                    <a class="d-inline-block fw-bold text-decoration-none py-1" href="javascript:void(0);" data-bs-toggle-class="invisible" data-bs-target="#map"><i class="fi-map me-2"></i>Map view</a>
                </div>
                <!-- Sorting-->
                <div class="d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch my-2">
                    <div class="d-flex align-items-center flex-shrink-0">
                        <label class="fs-sm me-2 pe-1 text-nowrap" for="sortby"><i class="fi-arrows-sort text-muted mt-n1 me-2"></i>Sort by:</label>
                        <select class="form-select form-select-sm" id="sortby">
                            <option>Newest</option>
                            <option>Popularity</option>
                            <option>Low - High Price</option>
                            <option>High - Low Price</option>
                            <option>High rating</option>
                            <option>Average Rating</option>
                        </select>
                    </div>
                    <hr class="d-none d-sm-block w-100 mx-4">
                    <div class="d-none d-sm-flex align-items-center flex-shrink-0 text-muted"><i class="fi-check-circle me-2"></i><span class="fs-sm mt-n1">{{ filteredBusinesses.length }} results</span></div>
                </div>

                <!-- Active Filters -->
                <div v-if="hasActiveFilters" class="mb-4">
                    <div class="d-flex align-items-center flex-wrap gap-2">
                        <span class="fs-sm text-muted">Active filters:</span>
                        
                        <!-- Category filter -->
                        <span v-if="filters.category" class="badge bg-primary rounded-pill d-flex align-items-center">
                            <i class="fi-list me-1"></i>
                            {{ getCategoryName(filters.category) }}
                            <button @click="clearFilter('category')" class="btn-close btn-close-white ms-2" style="font-size: 0.5rem;"></button>
                        </span>
                        
                        <!-- Search filter -->
                        <span v-if="filters.search" class="badge bg-info rounded-pill d-flex align-items-center">
                            <i class="fi-search me-1"></i>
                            "{{ filters.search }}"
                            <button @click="clearFilter('search')" class="btn-close btn-close-white ms-2" style="font-size: 0.5rem;"></button>
                        </span>
                        
                        <!-- City filter -->
                        <span v-if="filters.city" class="badge bg-success rounded-pill d-flex align-items-center">
                            <i class="fi-map-pin me-1"></i>
                            {{ filters.city }}
                            <button @click="clearFilter('city')" class="btn-close btn-close-white ms-2" style="font-size: 0.5rem;"></button>
                        </span>
                        
                        <!-- District filter -->
                        <span v-if="filters.district" class="badge bg-warning rounded-pill d-flex align-items-center">
                            <i class="fi-map-pin me-1"></i>
                            {{ filters.district }}
                            <button @click="clearFilter('district')" class="btn-close btn-close-white ms-2" style="font-size: 0.5rem;"></button>
                        </span>
                        
                        <!-- Clear all filters -->
                        <button @click="clearAllFilters" class="btn btn-outline-secondary btn-sm">
                            <i class="fi-x me-1"></i>Clear all
                        </button>
                    </div>
                </div>

                <!-- Catalog grid-->
                <div v-if="pending || error || filteredBusinesses.length === 0" class="d-flex align-items-center justify-content-center" style="min-height: 400px;">
                  <div class="text-center">
                    <div v-if="pending">
                      <div class="d-flex justify-content-center mb-4">
                        <div class="bg-light rounded-circle p-4">
                          <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        </div>
                      </div>
                      <h3 class="h4 mb-3">Loading businesses...</h3>
                      <p class="text-muted">Please wait while we fetch the latest business listings.</p>
                    </div>
                    
                    <div v-else-if="error">
                      <div class="d-flex justify-content-center mb-4">
                        <div class="bg-light rounded-circle p-4">
                          <i class="fi-alert-circle display-4 text-danger"></i>
                        </div>
                      </div>
                      <h3 class="h4 mb-3">Error loading businesses</h3>
                      <p class="text-muted mb-4 fs-lg">Please try refreshing the page or contact support if the problem persists.</p>
                      <button @click="$router.go(0)" class="btn btn-primary px-4">
                        <i class="fi-rotate-right me-2"></i>Refresh Page
                      </button>
                    </div>
                    
                    <div v-else-if="filteredBusinesses.length === 0">
                      <div class="d-flex justify-content-center mb-4">
                        <div class="bg-light rounded-circle p-4">
                          <i class="fi-search display-4 text-muted"></i>
                        </div>
                      </div>
                      <h3 class="h4 mb-3">No businesses found</h3>
                      <p class="text-muted mb-4 fs-lg">
                        <span v-if="hasActiveFilters">
                          No businesses match your current filters. Try adjusting your search criteria or clearing some filters.
                        </span>
                        <span v-else>
                          No businesses are currently available. Please check back later or contact us for more information.
                        </span>
                      </p>
                      <div v-if="hasActiveFilters" class="d-flex justify-content-center gap-3">
                        <button @click="clearAllFilters" class="btn btn-primary px-4">
                          <i class="fi-rotate-right me-2"></i>Clear all filters
                        </button>
                        <button @click="filters.search = ''; filters.category = null; filters.city = ''; filters.district = ''" class="btn btn-outline-secondary px-4">
                          <i class="fi-search me-2"></i>Try different search
                        </button>
                      </div>
                      <div v-else class="d-flex justify-content-center">
                        <button @click="$router.go(0)" class="btn btn-outline-secondary px-4">
                          <i class="fi-rotate-right me-2"></i>Refresh Page
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div v-else class="row row-cols-xl-3 row-cols-sm-2 row-cols-1 gy-4 gx-3 gx-xxl-4 py-4">
                  <div v-for="(item, index) in paginatedBusinesses" :key="item.id" class="col pb-sm-2">
                    <article class="position-relative">
                      <div class="position-relative mb-3">
                        <button class="btn btn-icon btn-light-primary btn-xs text-primary rounded-circle position-absolute top-0 end-0 m-3 zindex-5" type="button" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Add to Favorites">
                          <i class="fi-heart"></i>
                        </button>
                        <img class="rounded-3" :src="item.logo || '/placeholder.png'" alt="Business logo" />
                      </div>
                      <h3 class="mb-2 fs-lg">
                        <nuxt-link class="nav-link stretched-link" :to="`/catalog/single?id=${item.id}`">{{ item.name }}</nuxt-link>
                      </h3>
                      <ul class="list-inline mb-0 fs-xs">
                        <li class="list-inline-item pe-1">
                          <i class="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle"></i>{{ item.address }}
                        </li>
                        <li class="list-inline-item pe-1">
                          <i class="fi-list mt-n1 me-1 fs-base text-muted align-middle"></i>{{ item.category?.name }}
                        </li>
                      </ul>
                    </article>
                  </div>
                </div>

                <!-- Pagination-->
                <nav v-if="totalPages > 1" class="border-top pb-md-4 pt-4" aria-label="Pagination">
                    <ul class="pagination mb-1">
                        <!-- Mobile pagination -->
                        <li class="page-item d-sm-none">
                            <span class="page-link page-link-static">{{ currentPage }} / {{ totalPages }}</span>
                        </li>
                        
                        <!-- Desktop pagination -->
                        <template v-for="page in pageNumbers" :key="page">
                            <!-- Previous button -->
                            <li v-if="page === 1 && currentPage > 1" class="page-item d-none d-sm-block">
                                <button class="page-link" @click="goToPrevPage" aria-label="Previous">
                                    <i class="fi-chevron-left"></i>
                                </button>
                            </li>
                            
                            <!-- Page number or ellipsis -->
                            <li v-if="page === '...'" class="page-item d-none d-sm-block">
                                <span class="page-link">...</span>
                            </li>
                            <li v-else class="page-item d-none d-sm-block" :class="{ active: page === currentPage }">
                                <button v-if="page === currentPage" class="page-link" disabled>
                                    {{ page }}<span class="visually-hidden">(current)</span>
                                </button>
                                <button v-else class="page-link" @click="goToPage(page as number)">
                                    {{ page }}
                                </button>
                            </li>
                            
                            <!-- Next button -->
                            <li v-if="page === totalPages && currentPage < totalPages" class="page-item d-none d-sm-block">
                                <button class="page-link" @click="goToNextPage" aria-label="Next">
                                    <i class="fi-chevron-right"></i>
                                </button>
                            </li>
                        </template>
                        
                        <!-- Next button (if not already shown) -->
                        <li v-if="currentPage < totalPages && !pageNumbers.includes(totalPages)" class="page-item d-none d-sm-block">
                            <button class="page-link" @click="goToNextPage" aria-label="Next">
                                <i class="fi-chevron-right"></i>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>