<script lang="ts" setup>
// Fetch businesses from API
const { data: businesses, pending } = await useFetch('/api/businesses/public');

// Filter for food & drink businesses (assuming category name contains "Food" or "Drink")
const foodBusinesses = computed(() => {
    if (!businesses.value) return [];
    return businesses.value
        .filter(business => {
            const categoryName = business.category?.name?.toLowerCase() || '';
            const categorySlug = business.category?.slug?.toLowerCase() || '';
            
            return categoryName.includes('comida') || 
                   categoryName.includes('bebida') ||
                   categoryName.includes('restaurante') ||
                   categoryName.includes('food') || 
                   categoryName.includes('drink') ||
                   categoryName.includes('cafe') ||
                   categorySlug.includes('food') ||
                   categorySlug.includes('restaurant');
        })
        .slice(0, 6); // Show max 6 businesses
});

// Split businesses into two columns
const leftColumnBusinesses = computed(() => foodBusinesses.value.slice(0, 3));
const rightColumnBusinesses = computed(() => foodBusinesses.value.slice(3, 6));
</script>

<template>
    <!-- Banner + Where to eat-->
    <div class="container mb-5 pb-lg-4">
        <div class="row">
            <!-- Banner-->
            
            <!-- Where to eat-->
            <div class="col-lg-12">
                <div class="d-flex align-items-center justify-content-between mb-4 pb-2">
                    <h2 class="h3 mb-0">Onde comer</h2>
                    <nuxt-link class="btn btn-link fw-normal p-0" to="/catalog">Ver tudo<i class="fi-arrow-long-right ms-2"></i></nuxt-link>
                </div>
                
                <div v-if="pending" class="text-center py-4">
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                
                <div v-else-if="foodBusinesses.length === 0" class="text-center py-4">
                    <p class="text-muted">Nenhum restaurante disponível no momento.</p>
                </div>
                
                <div v-else class="row">
                    <div class="col-sm-6">
                        <!-- Left column items -->
                        <div v-for="business in leftColumnBusinesses" :key="business.id" class="d-flex align-items-start position-relative mb-4">
                            <img class="flex-shrink-0 me-3 rounded-3" :src="business.logo || '/placeholder.png'" alt="Logo da marca" style="width: 60px; height: 60px; object-fit: cover;" />
                            <div>
                                <h3 class="mb-2 fs-lg">
                                    <nuxt-link class="nav-link stretched-link" :to="`/catalog/single?id=${business.id}`">{{ business.name }}</nuxt-link>
                                </h3>
                                <ul class="list-unstyled mb-0 fs-xs">
                                    <li>
                                        <i class="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle"></i>{{ business.address }}
                                    </li>
                                    <li>
                                        <i class="fi-list mt-n1 me-1 fs-base text-muted align-middle"></i>{{ business.category?.name }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <!-- Right column items -->
                        <div v-for="business in rightColumnBusinesses" :key="business.id" class="d-flex align-items-start position-relative mb-4">
                            <img class="flex-shrink-0 me-3 rounded-3" :src="business.logo || '/placeholder.png'" alt="Logo da marca" style="width: 60px; height: 60px; object-fit: cover;" />
                            <div>
                                <h3 class="mb-2 fs-lg">
                                    <nuxt-link class="nav-link stretched-link" :to="`/catalog/single?id=${business.id}`">{{ business.name }}</nuxt-link>
                                </h3>
                                <ul class="list-unstyled mb-0 fs-xs">
                                    <li>
                                        <i class="fi-map-pin mt-n1 me-1 fs-base text-muted align-middle"></i>{{ business.address }}
                                    </li>
                                    <li>
                                        <i class="fi-list mt-n1 me-1 fs-base text-muted align-middle"></i>{{ business.category?.name }}
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
