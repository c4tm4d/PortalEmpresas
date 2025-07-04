<script lang="ts" setup>
import { ref, computed, watch } from 'vue';
import Slider from '@vueform/slider'
import simplebar from 'simplebar-vue';
import 'simplebar/dist/simplebar.min.css';

// Props to receive current filter state
const props = defineProps<{
    currentFilters?: {
        category: number | null;
        search: string;
        city: string;
        district: string;
        priceRange: [number, number];
    };
}>();

const slider = ref<{ min: number, max: number; }>({
    min: 50,
    max: 1000,
});
const pricePerMonth = ref<[number, number]>([310, 710]);

// Fetch categories from API
const { data: categories, pending: categoriesPending } = await useFetch('/api/categories');

// Filter states - sync with props
const selectedCategory = ref<number | null>(props.currentFilters?.category || null);
const searchQuery = ref(props.currentFilters?.search || '');
const selectedCity = ref(props.currentFilters?.city || '');
const selectedDistrict = ref(props.currentFilters?.district || '');

// Watch for prop changes to sync local state
watch(() => props.currentFilters, (newFilters) => {
    if (newFilters) {
        selectedCategory.value = newFilters.category;
        searchQuery.value = newFilters.search;
        selectedCity.value = newFilters.city;
        selectedDistrict.value = newFilters.district;
        pricePerMonth.value = newFilters.priceRange;
    }
}, { deep: true });

// Emit filter changes to parent
const emit = defineEmits(['filter-change']);

// Watch for filter changes and emit them
watch([selectedCategory, searchQuery, selectedCity, selectedDistrict, pricePerMonth], () => {
    emit('filter-change', {
        category: selectedCategory.value,
        search: searchQuery.value,
        city: selectedCity.value,
        district: selectedDistrict.value,
        priceRange: pricePerMonth.value
    });
}, { deep: true });

// Get unique cities and districts from businesses
const { data: businesses } = await useFetch('/api/businesses/public');
const cities = computed(() => {
    if (!businesses.value) return [];
    return [...new Set(businesses.value.map(b => b.city).filter(Boolean))];
});

const districts = computed(() => {
    if (!businesses.value) return [];
    return [...new Set(businesses.value.map(b => b.district).filter(Boolean))];
});

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
</script>

<template>
    <!-- Filters sidebar (Offcanvas on mobile)-->
    <aside class="col-lg-4 col-xl-3 border-top-lg border-end-lg shadow-sm px-3 px-xl-4 px-xxl-5 pt-lg-2">
        <div class="offcanvas-lg offcanvas-start" id="filters-sidebar">
            <div class="offcanvas-header d-flex d-lg-none align-items-center">
                <h2 class="h5 mb-0">Filters</h2>
                <button class="btn-close" type="button" data-bs-dismiss="offcanvas" data-bs-target="#filters-sidebar"></button>
            </div>
            <!-- Search form-->
            <div class="offcanvas-header d-block border-bottom pt-0 pt-lg-4 px-lg-0">
                <form class="form-group mb-lg-2 rounded-pill" @submit.prevent>
                    <div class="input-group">
                        <span class="input-group-text text-muted"><i class="fi-search"></i></span>
                        <input class="form-control" type="text" placeholder="Search..." v-model="searchQuery">
                    </div>
                    <button class="btn btn-primary rounded-pill d-lg-inline-block d-none" type="button">Search</button>
                    <button class="btn btn-icon btn-primary rounded-circle flex-shrink-0 d-lg-none d-inline-flex" type="button">
                        <i class="fi-search mt-n2"></i>
                    </button>
                </form>
            </div>
            <!-- Nav tabs-->
            <div class="offcanvas-header d-block border-bottom py-lg-4 py-3 px-lg-0">
                <ul class="nav nav-pills" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link d-flex align-items-center active" data-bs-target="#categories" data-bs-toggle="tab" role="tab"><i class="fi-list me-2"></i>Categories</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link d-flex align-items-center" data-bs-target="#filters" data-bs-toggle="tab" role="tab"><i class="fi-filter-alt-horizontal me-2"></i>Filters</a>
                    </li>
                </ul>
            </div>
            <div class="offcanvas-body py-lg-4">
                <!-- Tabs content-->
                <div class="tab-content">
                    <!-- Categories-->
                    <div class="tab-pane fade show active" id="categories" role="tabpanel">
                        <div v-if="categoriesPending" class="text-center py-4">
                            <div class="spinner-border text-primary" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        <div v-else class="row row-cols-lg-2 row-cols-1 g-3">
                            <div v-for="category in categories" :key="category.id" class="col">
                                <a class="icon-box card card-body h-100 border-0 shadow-sm card-hover text-center" 
                                   href="javascript:void(0);" 
                                   @click="selectedCategory = selectedCategory === category.id ? null : category.id"
                                   :class="{ 'border-primary': selectedCategory === category.id }">
                                    <div class="icon-box-media rounded-circle mb-3 mx-auto" :class="getCategoryColor(category.name)">
                                        <i :class="getCategoryIcon(category.name)"></i>
                                    </div>
                                    <h3 class="icon-box-title fs-base mb-0">{{ category.name }}</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- Filters-->
                    <div class="tab-pane fade" id="filters" role="tabpanel">
                        <div class="pb-4 mb-2">
                            <h3 class="h6">Location</h3>
                            <select class="form-select mb-2" v-model="selectedCity">
                                <option value="">All cities</option>
                                <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
                            </select>
                            <select class="form-select" v-model="selectedDistrict">
                                <option value="">All districts</option>
                                <option v-for="district in districts" :key="district" :value="district">{{ district }}</option>
                            </select>
                        </div>
                        <div class="pb-4 mb-2">
                            <h3 class="h6">Category</h3>
                            <div class="dropdown mb-sm-0 mb-3" data-bs-toggle="select">
                                <button class="btn btn-outline-secondary d-flex align-items-center w-100 px-4 fw-normal text-start dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                    <i class="fi-list me-2 text-muted"></i>
                                    <span class="dropdown-toggle-label d-block w-100">
                                        {{ selectedCategory ? categories?.find(c => c.id === selectedCategory)?.name : 'All categories' }}
                                    </span>
                                </button>
                                <input type="hidden" v-model="selectedCategory">
                                <ul class="dropdown-menu w-100">
                                    <li>
                                        <a class="dropdown-item" href="javascript:void(0);" @click="selectedCategory = null">
                                            <i class="fi-list me-2 fs-lg opacity-60"></i>
                                            <span class="dropdown-item-label">All categories</span>
                                        </a>
                                    </li>
                                    <li v-for="category in categories" :key="category.id">
                                        <a class="dropdown-item" href="javascript:void(0);" @click="selectedCategory = category.id">
                                            <i :class="getCategoryIcon(category.name) + ' me-2 fs-lg opacity-60'"></i>
                                            <span class="dropdown-item-label">{{ category.name }}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="pb-4 mb-2">
                            <h3 class="h6">Subcategory</h3>
                            <simplebar class="overflow-auto" data-simplebar-auto-hide="false" style="height: 11rem;">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="hotel">
                                    <label class="form-check-label fs-sm" for="hotel">Hotel</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="hostel">
                                    <label class="form-check-label fs-sm" for="hostel">Hostel</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="motel">
                                    <label class="form-check-label fs-sm" for="motel">Motel</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="apartment" checked>
                                    <label class="form-check-label fs-sm" for="apartment">Apartment</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="cottage">
                                    <label class="form-check-label fs-sm" for="cottage">Cottage</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="boutique-hotel">
                                    <label class="form-check-label fs-sm" for="boutique-hotel">Boutique Hotel</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="room">
                                    <label class="form-check-label fs-sm" for="room">Room</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="land">
                                    <label class="form-check-label fs-sm" for="land">Land</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="commercial">
                                    <label class="form-check-label fs-sm" for="commercial">Commercial</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="parking-lot">
                                    <label class="form-check-label fs-sm" for="parking-lot">Parking lot</label>
                                </div>
                            </simplebar>
                        </div>
                        <div class="pb-4 mb-2">
                            <h3 class="h6">Price</h3>
                            <div class="range-slider" data-start-min="300" data-start-max="700" data-min="50" data-max="1000" data-step="20">
                                <div class="range-slider-ui"></div>
                                <div class="d-flex align-items-center">
                                    <div class="w-50 pe-2">
                                        <div class="input-group"><span class="input-group-text fs-base">$</span>
                                            <input class="form-control range-slider-value-min" v-model="slider.min" type="text">
                                        </div>
                                    </div>
                                    <div class="text-muted">&mdash;</div>
                                    <div class="w-50 ps-2">
                                        <div class="input-group"><span class="input-group-text fs-base">$</span>
                                            <input class="form-control range-slider-value-max" v-model="slider.max" type="text">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Slider class="mb-4" v-model="pricePerMonth" :min="slider.min" :max="slider.max" :step="1" :format="{ prefix: '$', decimals: 0 }" />
                        </div>
                        <div class="pb-4 mb-2">
                            <h3 class="h6">Average rating</h3>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="5-star">
                                <label class="form-check-label fs-sm align-middle mt-n2" for="5-star"><span class="star-rating"><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i></span>
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="4-star">
                                <label class="form-check-label fs-sm align-middle mt-n2" for="4-star"><span class="star-rating"><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star"></i></span>
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="3-star">
                                <label class="form-check-label fs-sm align-middle mt-n2" for="3-star"><span class="star-rating"><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star"></i><i class="star-rating-icon fi-star"></i></span>
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="2-star">
                                <label class="form-check-label fs-sm align-middle mt-n2" for="2-star"><span class="star-rating"><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star"></i><i class="star-rating-icon fi-star"></i><i class="star-rating-icon fi-star"></i></span>
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="1-star">
                                <label class="form-check-label fs-sm align-middle mt-n2" for="1-star"><span class="star-rating"><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star"></i><i class="star-rating-icon fi-star"></i><i class="star-rating-icon fi-star"></i><i class="star-rating-icon fi-star"></i></span>
                                </label>
                            </div>
                        </div>
                        <div class="pb-4 mb-2">
                            <h3 class="h6">Number of rooms</h3>
                            <select class="form-select mb-2">
                                <option value="1-room" selected>1 room</option>
                                <option value="2-rooms">2 rooms</option>
                                <option value="3-rooms">3 rooms</option>
                                <option value="4-rooms">4 rooms</option>
                                <option value="5-rooms">5 rooms</option>
                            </select>
                        </div>
                        <div class="pb-4 mb-2">
                            <h3 class="h6">Amenities</h3>
                            <simplebar class="overflow-auto" data-simplebar-auto-hide="false" style="height: 11rem;">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="parking">
                                    <label class="form-check-label fs-sm" for="parking">Parking</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="restaurant">
                                    <label class="form-check-label fs-sm" for="restaurant">Restaurant</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="pet-friendly">
                                    <label class="form-check-label fs-sm" for="pet-friendly">Pet Friendly</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="room-service" checked>
                                    <label class="form-check-label fs-sm" for="room-service">Room Service</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="fitness-center">
                                    <label class="form-check-label fs-sm" for="fitness-center">Fitness Center</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="free-wifi" checked>
                                    <label class="form-check-label fs-sm" for="free-wifi">Free WiFi</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="spa-lounge">
                                    <label class="form-check-label fs-sm" for="spa-lounge">Spa lounge</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="bar">
                                    <label class="form-check-label fs-sm" for="bar">Bar</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="swimming-pool">
                                    <label class="form-check-label fs-sm" for="swimming-pool">Swimming pool</label>
                                </div>
                            </simplebar>
                        </div>
                        <div class="pb-4 mb-2">
                            <h3 class="h6">Room facilities</h3>
                            <simplebar class="overflow-auto" data-simplebar-auto-hide="false" style="height: 11rem;">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="kitchen">
                                    <label class="form-check-label fs-sm" for="kitchen">Kitchen</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="private-bathroom">
                                    <label class="form-check-label fs-sm" for="private-bathroom">Private Bathroom</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="air-conditioning" checked>
                                    <label class="form-check-label fs-sm" for="air-conditioning">Air Conditioning</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="desk">
                                    <label class="form-check-label fs-sm" for="desk">Desk</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="terrace">
                                    <label class="form-check-label fs-sm" for="terrace">Terrace</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="washing-machine">
                                    <label class="form-check-label fs-sm" for="washing-machine">Washing Machine</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="heating">
                                    <label class="form-check-label fs-sm" for="heating">Heating</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="laundry-service">
                                    <label class="form-check-label fs-sm" for="laundry-service">Laundry Service</label>
                                </div>
                            </simplebar>
                        </div>
                        <div class="border-top py-4">
                            <button class="btn btn-outline-primary rounded-pill" type="button"><i class="fi-rotate-right me-2"></i>Reset filters</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </aside>
</template>