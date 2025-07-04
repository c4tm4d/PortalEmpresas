<script lang="ts" setup>
// Fetch categories from API
const { data: categories, pending } = await useFetch('/api/categories');

// Search form state
const searchQuery = ref('');
const selectedCategory = ref('');

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

// Handle search form submission
const handleSearch = () => {
    const query = new URLSearchParams();
    if (searchQuery.value) query.append('search', searchQuery.value);
    if (selectedCategory.value) query.append('category', selectedCategory.value);
    
    const searchUrl = `/catalog${query.toString() ? '?' + query.toString() : ''}`;
    navigateTo(searchUrl);
};
</script>

<template>
    <!-- Hero-->
    <section class="container py-5 mt-5 mb-lg-3">
        <div class="row align-items-center mt-md-2">
            <div class="col-lg-7 order-lg-2 mb-lg-0 mb-4 pb-2 pb-lg-0">
                <img class="d-block mx-auto" src="@/assets/img/city-guide/home/hero-img.jpg" width="746" alt="Imagem principal" />
            </div>
            <div class="col-lg-5 order-lg-1 pe-lg-0">
                <h1 class="display-5 mb-4 me-lg-n5 text-lg-start text-center mb-4">
                    Começa a explorar
                    <br>
                    <b>
                        <span class="text-primary">
                            <i class="fi-map-pin"></i>
                        </span>
                        <span class="text-primary">
                            Portugal
                        </span>
                    </b>
                </h1>
                <p class="text-lg-start text-center mb-4 mb-lg-5 fs-lg">
                    Encontra ótimos sítios para ficar, comer, fazer compras ou visitar dos nossos parceiros e especialistas locais.
                </p>
                <!-- Search form-->
                <div class="me-lg-n5">
                    <form class="form-group d-block d-md-flex position-relative rounded-md-pill me-lg-n5" @submit.prevent="handleSearch">
                        <div class="input-group input-group-lg border-end-md">
                            <span class="input-group-text text-muted rounded-pill ps-3"><i class="fi-search"></i></span>
                            <input class="form-control" type="text" placeholder="O que estás à procura?" v-model="searchQuery" />
                        </div>
                        <hr class="d-md-none my-2" />
                        <div class="d-sm-flex">
                            <div class="dropdown w-100 mb-sm-0 mb-3" data-bs-toggle="select">
                                <button class="btn btn-link btn-lg dropdown-toggle ps-2 ps-sm-3" type="button" data-bs-toggle="dropdown">
                                    <i class="fi-list me-2"></i>
                                    <span class="dropdown-toggle-label">
                                        {{ selectedCategory ? categories?.find(c => c.id === parseInt(selectedCategory))?.name : 'Todas as categorias' }}
                                    </span>
                                </button>
                                <input type="hidden" v-model="selectedCategory" />
                                <ul class="dropdown-menu">
                                    <li>
                                        <a class="dropdown-item" href="javascript:void(0);" @click="selectedCategory = ''">
                                            <i class="fi-list fs-lg opacity-60 me-2"></i>
                                            <span class="dropdown-item-label">Todas as categorias</span>
                                        </a>
                                    </li>
                                    <li v-for="category in categories" :key="category.id">
                                        <a class="dropdown-item" href="javascript:void(0);" @click="selectedCategory = category.id.toString()">
                                            <i :class="getCategoryIcon(category.name) + ' fs-lg opacity-60 me-2'"></i>
                                            <span class="dropdown-item-label">{{ category.name }}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <button class="btn btn-primary btn-lg rounded-pill w-100 w-md-auto ms-sm-3" type="submit">
                                Procurar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
