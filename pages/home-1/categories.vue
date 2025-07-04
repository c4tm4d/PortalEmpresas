<script lang="ts" setup>
// Fetch categories from API
const { data: categories, pending } = await useFetch('/api/categories');

// Function to get icon class based on category name
const getCategoryIcon = (categoryName: string) => {
    const iconMap: Record<string, string> = {
        // Portuguese categories
        'Alojamento': 'fi-bed',
        'Comida e Bebida': 'fi-cafe',
        'Restaurantes': 'fi-utensils',
        'Compras': 'fi-shopping-bag',
        'Arte e História': 'fi-museum',
        'Entretenimento': 'fi-entertainment',
        'Fitness e Desporto': 'fi-dumbell',
        'Vida Noturna': 'fi-disco-ball',
        'Medicina': 'fi-meds',
        'Beleza': 'fi-makeup',
        'Aluguer de Carros': 'fi-car',
        'Serviços': 'fi-tools',
        'Construção': 'fi-hammer',
        'Transportes': 'fi-truck',
        'Educação': 'fi-graduation-cap',
        'Agricultura': 'fi-leaf',
        'Indústria': 'fi-factory',
        'Imobiliário': 'fi-home',
        'Serviços Funerários': 'fi-cross',
        'Veículos': 'fi-car',
        'Saúde': 'fi-heartbeat',
        'Comércio': 'fi-store',
        'Lazer': 'fi-gamepad',
        // English fallbacks
        'Accommodation': 'fi-bed',
        'Fitness & Sport': 'fi-dumbell',
        'Food & Drink': 'fi-cafe',
        'Night Life': 'fi-disco-ball',
        'Shopping': 'fi-shopping-bag',
        'Medicine': 'fi-meds',
        'Art & History': 'fi-museum',
        'Beauty': 'fi-makeup',
        'Entertainment': 'fi-entertainment',
        'Auto Service': 'fi-car'
    };
    return iconMap[categoryName] || 'fi-list';
};

// Function to get color class based on category name
const getCategoryColor = (categoryName: string) => {
    const colorMap: Record<string, string> = {
        // Portuguese categories
        'Alojamento': 'bg-faded-accent text-accent',
        'Comida e Bebida': 'bg-faded-warning text-warning',
        'Restaurantes': 'bg-faded-warning text-warning',
        'Compras': 'bg-faded-primary text-primary',
        'Arte e História': 'bg-faded-success text-success',
        'Entretenimento': 'bg-faded-primary text-primary',
        'Fitness e Desporto': 'bg-faded-primary text-primary',
        'Vida Noturna': 'bg-faded-success text-success',
        'Medicina': 'bg-faded-info text-info',
        'Beleza': 'bg-faded-warning text-warning',
        'Aluguer de Carros': 'bg-faded-info text-info',
        'Serviços': 'bg-faded-primary text-primary',
        'Construção': 'bg-faded-warning text-warning',
        'Transportes': 'bg-faded-info text-info',
        'Educação': 'bg-faded-success text-success',
        'Agricultura': 'bg-faded-success text-success',
        'Indústria': 'bg-faded-warning text-warning',
        'Imobiliário': 'bg-faded-accent text-accent',
        'Serviços Funerários': 'bg-faded-muted text-muted',
        'Veículos': 'bg-faded-info text-info',
        'Saúde': 'bg-faded-info text-info',
        'Comércio': 'bg-faded-primary text-primary',
        'Lazer': 'bg-faded-success text-success',
        // English fallbacks
        'Accommodation': 'bg-faded-accent text-accent',
        'Fitness & Sport': 'bg-faded-primary text-primary',
        'Food & Drink': 'bg-faded-warning text-warning',
        'Night Life': 'bg-faded-success text-success',
        'Shopping': 'bg-faded-primary text-primary',
        'Medicine': 'bg-faded-info text-info',
        'Art & History': 'bg-faded-success text-success',
        'Beauty': 'bg-faded-warning text-warning',
        'Entertainment': 'bg-faded-primary text-primary',
        'Auto Service': 'bg-faded-info text-info'
    };
    return colorMap[categoryName] || 'bg-faded-primary text-primary';
};

// Show first 5 categories in main view, rest in dropdown
const mainCategories = computed(() => categories.value?.slice(0, 5) || []);
const dropdownCategories = computed(() => categories.value?.slice(5) || []);
</script>

<template>
    <!-- Categories-->
    <section class="container d-flex flex-wrap flex-column flex-sm-row pb-5 mb-md-3">
        <div v-if="pending" class="d-flex justify-content-center w-100 py-4">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <template v-else>
            <!-- Main categories -->
            <nuxt-link 
                v-for="category in mainCategories" 
                :key="category.id"
                class="icon-box card flex-row align-items-center flex-shrink-0 card-hover border-0 shadow-sm rounded-pill py-2 ps-2 pe-4 mb-2 mb-sm-3 me-sm-3 me-xxl-4" 
                :to="`/catalog?category=${category.id}`"
            >
                <div class="icon-box-media rounded-circle me-2" :class="getCategoryColor(category.name)">
                    <i :class="getCategoryIcon(category.name)"></i>
                </div>
                <h3 class="icon-box-title fs-sm ps-1 pe-2 mb-0">{{ category.name }}</h3>
            </nuxt-link>
            
            <!-- Dropdown for additional categories -->
            <div v-if="dropdownCategories.length > 0" class="dropdown mb-2 mb-sm-3">
                <a class="icon-box card flex-row align-items-center flex-shrink-0 card-hover border-0 shadow-sm rounded-pill py-2 ps-2 pe-4" href="javascript:void(0);" data-bs-toggle="dropdown">
                    <div class="icon-box-media bg-faded-info text-info rounded-circle me-2">
                        <i class="fi-dots-horisontal"></i>
                    </div>
                    <h3 class="icon-box-title fs-sm ps-1 pe-2 mb-0">Mais</h3>
                </a>
                <div class="dropdown-menu dropdown-menu-sm-end my-1">
                    <nuxt-link 
                        v-for="category in dropdownCategories" 
                        :key="category.id"
                        class="dropdown-item fw-bold" 
                        :to="`/catalog?category=${category.id}`"
                    >
                        <i :class="getCategoryIcon(category.name) + ' fs-base opacity-60 me-2'"></i>{{ category.name }}
                    </nuxt-link>
                </div>
            </div>
        </template>
    </section>
</template>
