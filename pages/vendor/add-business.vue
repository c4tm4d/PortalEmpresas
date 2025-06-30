<script lang="ts" setup>
import { onMounted, onUnmounted, ref, computed, watch } from 'vue';
import Breadcrumb from '@/components/Breadcrumb.vue';

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

// Form data
const formData = ref({
  name: 'Berlin Business Hotel',
  description: '',
  address: 'Pasewalker Str. 97',
  district: 'Berlin-Mitte',
  city: 'Berlin',
  zipCode: '13127',
  email: '',
  phone: '',
  website: '',
  facebook: '',
  foursquare: '',
  twitter: '',
  instagram: '',
  linkedin: '',
  categoryId: 1, // Default to Accommodation
  latitude: 40.7447,
  longitude: -73.9485
});

// Process files for API submission
const processFiles = (fileList: any[], isLogo: boolean = false) => {
  console.log(`Processing ${isLogo ? 'logo' : 'gallery'} files:`, fileList);
  
  const processed = fileList
    .filter(file => {
      // Check if file exists and has been uploaded successfully
      if (!file) return false;
      
      // FilePond files have different structures depending on their state
      if (file.serverId) return true; // Successfully uploaded
      if (file.file && file.status === 2) return true; // FilePond success status
      
      console.log(`Skipping file:`, file);
      return false;
    })
    .map((file, index) => {
      let url;
      
      // Handle different FilePond file states
      if (file.serverId) {
        url = `/images/${file.serverId}`;
      } else if (file.file && file.status === 2) {
        // FilePond success state - file should have been uploaded
        url = file.getFileEncodeDataURL ? file.getFileEncodeDataURL() : null;
      }
      
      return {
        url,
        isPrimary: !isLogo && index === 0, // First gallery photo is primary
        isLogo
      };
    })
    .filter(item => item.url); // Only include items with valid URLs
    
  console.log(`Processed ${isLogo ? 'logo' : 'gallery'} files:`, processed);
  return processed;
};

// Process uploaded files for API submission
const processUploadedFiles = (fileList: any[], isLogo: boolean = false) => {
  console.log(`Processing uploaded ${isLogo ? 'logo' : 'gallery'} files:`, fileList);
  
  const processed = fileList
    .filter(file => file && file.serverId) // Only include files that were successfully uploaded
    .map((file, index) => ({
      url: `/images/${file.serverId}`, // Prepend /images/ to the pathname for serving
      isPrimary: !isLogo && index === 0, // First gallery photo is primary
      isLogo
    }));
    
  console.log(`Processed uploaded ${isLogo ? 'logo' : 'gallery'} files:`, processed);
  return processed;
};

// Form state
const isSubmitting = ref(false);
const submitError = ref('');
const submitSuccess = ref(false);

// Categories from API
const categories = ref<Array<{id: number, name: string, icon: string | null, slug: string}>>([]);
const isLoadingCategories = ref(true);

// Cities and districts
const cities = [
  { name: 'Berlin', districts: ['Berlin-Mitte', 'Charlottenburg', 'Prenzlauer Berg', 'Friedrichshain', 'Kreuzberg'] },
  { name: 'Hamburg', districts: ['Hamburg-Mitte', 'Altona', 'Eimsbüttel', 'Hamburg-Nord', 'Wandsbek'] },
  { name: 'Munich', districts: ['Altstadt', 'Maxvorstadt', 'Schwabing', 'Haidhausen', 'Au-Haidhausen'] },
  { name: 'Frankfurt am Main', districts: ['Innenstadt', 'Sachsenhausen', 'Bornheim', 'Bockenheim', 'Nordend'] },
  { name: 'Stuttgart', districts: ['Mitte', 'Bad Cannstatt', 'Degerloch', 'Möhringen', 'Vaihingen'] },
  { name: 'Cologne', districts: ['Innenstadt', 'Lindenthal', 'Ehrenfeld', 'Nippes', 'Chorweiler'] }
];

// Computed districts based on selected city
const availableDistricts = computed(() => {
  const selectedCity = cities.find(city => city.name === formData.value.city);
  return selectedCity ? selectedCity.districts : [];
});

// Computed properties for preview
const logoPreviewUrl = computed(() => {
  if (logoFiles.value.length > 0) {
    const logoFile = logoFiles.value[0] as any;
    // Prioritize blob URL if available
    if (logoFile.serverId) {
      return `/images/${logoFile.serverId}`;
    }
    // Fallback to local data URL for instant preview
    if (logoFile.file) {
      return logoFile.getFileEncodeDataURL();
    }
  }
  return null;
});

const galleryPreviewUrls = computed(() => {
  if (files.value.length > 0) {
    const urls = files.value.map((fileItem) => {
      const file = fileItem as any;
      if (file.serverId) {
        return `/images/${file.serverId}`;
      }
      if (file.file) {
        return file.getFileEncodeDataURL();
      }
      return null;
    }).filter(Boolean); // Filter out any nulls
    
    return urls.length > 0 ? urls : null;
  }
  return null;
});

const fullAddress = computed(() => {
  return `${formData.value.address}, ${formData.value.zipCode}, ${formData.value.city}`
});

const selectedCategory = computed(() => {
    return categories.value.find(c => c.id === formData.value.categoryId);
});

// Fetch categories from API
const fetchCategories = async () => {
  try {
    isLoadingCategories.value = true;
    const response = await $fetch('/api/categories');
    categories.value = response;
  } catch (error) {
    console.error('Error fetching categories:', error);
    // Fallback to hardcoded categories if API fails
    categories.value = [
      { id: 1, name: 'Accommodation', icon: 'fi-bed', slug: '' },
      { id: 2, name: 'Food & Drink', icon: 'fi-cafe', slug: '' },
      { id: 3, name: 'Shopping', icon: 'fi-shopping-bag', slug: '' },
      { id: 4, name: 'Art & History', icon: 'fi-museum', slug: '' },
      { id: 5, name: 'Entertainment', icon: 'fi-entertainment', slug: '' },
      { id: 6, name: 'Fitness & Sport', icon: 'fi-dumbell', slug: '' },
      { id: 7, name: 'Night Life', icon: 'fi-disco-ball', slug: '' },
      { id: 8, name: 'Medicine', icon: 'fi-meds', slug: '' },
      { id: 9, name: 'Beauty', icon: 'fi-makeup', slug: '' },
      { id: 10, name: 'Car Rental', icon: 'fi-car', slug: '' }
    ];
  } finally {
    isLoadingCategories.value = false;
  }
};

// Form validation
const validateForm = () => {
  const errors = [];
  
  if (!formData.value.name.trim()) errors.push('Business name is required');
  if (!formData.value.description.trim()) errors.push('Description is required');
  if (!formData.value.address.trim()) errors.push('Address is required');
  if (!formData.value.district.trim()) errors.push('District is required');
  if (!formData.value.city.trim()) errors.push('City is required');
  if (!formData.value.zipCode.trim()) errors.push('Zip code is required');
  if (!formData.value.email.trim()) errors.push('Email is required');
  if (!formData.value.phone.trim()) errors.push('Phone is required');
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (formData.value.email && !emailRegex.test(formData.value.email)) {
    errors.push('Invalid email format');
  }
  
  return errors;
};

// Handle form submission
const handleSubmit = async () => {
  const errors = validateForm();
  
  if (errors.length > 0) {
    submitError.value = errors.join(', ');
    return;
  }
  
  isSubmitting.value = true;
  submitError.value = '';
  
  try {
    const requestData = {
      ...formData.value,
      categoryId: parseInt(formData.value.categoryId.toString()),
      photos: [
        ...processUploadedFiles(uploadedLogoFiles.value, true), // Logo files
        ...processUploadedFiles(uploadedFiles.value)      // Photo files
      ]
    };
    
    console.log('Uploaded logo files state:', uploadedLogoFiles.value);
    console.log('Uploaded gallery files state:', uploadedFiles.value);
    console.log('Submitting business data:', requestData);
    console.log('Photos array being sent:', requestData.photos);
    
    const response = await $fetch('/api/businesses', {
      method: 'POST',
      body: requestData
    });
    
    console.log('Business created successfully:', response);
    submitSuccess.value = true;
    
    // Redirect to business promotion page after successful submission
    setTimeout(() => {
      navigateTo('/vendor/business-promotion');
    }, 2000);
    
  } catch (error: any) {
    console.error('Error submitting business:', error);
    console.error('Error details:', error.data);
    
    if (error.data?.data) {
      // Handle validation errors from the API
      const validationErrors = error.data.data.map((err: any) => err.message).join(', ');
      submitError.value = `Validation errors: ${validationErrors}`;
    } else {
      submitError.value = error.data?.message || 'Failed to create business. Please try again.';
    }
  } finally {
    isSubmitting.value = false;
  }
};

// Handle category selection
const selectCategory = (categoryId: number) => {
  formData.value.categoryId = categoryId;
};

// Handle city change
const handleCityChange = () => {
  // Reset district when city changes
  formData.value.district = '';
};

// FilePond event handlers
const handleLogoFileAdd = (error: any, file: any) => {
  console.log('Logo file added:', file);
  if (error) {
    console.error('Logo file add error:', error);
  }
};

const handleLogoFileProcess = (error: any, file: any) => {
  console.log('Logo file processed:', file);
  if (error) {
    console.error('Logo file process error:', error);
  } else {
    // File was successfully uploaded
    uploadedLogoFiles.value.push(file);
    console.log('Logo file uploaded successfully:', file);
  }
};

const handleGalleryFileAdd = (error: any, file: any) => {
  console.log('Gallery file added:', file);
  if (error) {
    console.error('Gallery file add error:', error);
  }
};

const handleGalleryFileProcess = (error: any, file: any) => {
  console.log('Gallery file processed:', file);
  if (error) {
    console.error('Gallery file process error:', error);
  } else {
    // File was successfully uploaded
    uploadedFiles.value.push(file);
    console.log('Gallery file uploaded successfully:', file);
  }
};

onMounted(async () => {
    document.body.classList.add('bg-secondary');
    await fetchCategories();
})

onUnmounted(() => {
    document.body.classList.remove('bg-secondary');
})

// Watch file arrays for debugging
watch(logoFiles, (newFiles) => {
  console.log('Logo files changed:', newFiles);
}, { deep: true });

watch(files, (newFiles) => {
  console.log('Gallery files changed:', newFiles);
}, { deep: true });

watch(uploadedLogoFiles, (newFiles) => {
  console.log('Uploaded logo files changed:', newFiles);
}, { deep: true });

watch(uploadedFiles, (newFiles) => {
  console.log('Uploaded gallery files changed:', newFiles);
}, { deep: true });

const breadcrumbData = ref([
    {
        title: 'Home',
        link: '/',
        subitems: [
            {
                title: 'Adicionar Negócio',
            },
        ]
    }
])

definePageMeta({
    title: 'Adicionar Negócio',
    middleware: ['auth']
});
</script>
<template>
    <!-- Preview modal-->
    <div class="modal fade" id="preview-modal" tabindex="-1">
        <div class="modal-dialog modal-fullscreen" role="document">
            <div class="modal-content">
                <div class="modal-header d-block justify-content-between d-sm-flex">
                    <h3 class="h5 text-muted fw-normal modal-title d-none d-sm-block">Business preview</h3>
                    <div class="d-flex align-items-center"><button class="btn btn-primary btn-sm me-4" @click="handleSubmit" :disabled="isSubmitting"><span v-if="isSubmitting">Saving...</span><span v-else>Save and continue</span></button><span class="fs-xs text-muted ms-auto me-2">[ESC]</span>
                        <button class="btn-close ms-0" type="button" data-bs-dismiss="modal"></button>
                    </div>
                </div>
                <div class="modal-body p-0">
                    <div class="container mt-2 mt-sm-0 py-4 py-sm-5">
                        <h1 class="h2 mb-2">{{ formData.name }}</h1>
                        <p class="mb-4 fs-lg">{{ fullAddress }}</p>

                        <!-- With Uploaded Images -->
                        <div v-if="galleryPreviewUrls" class="overflow-auto pb-3 px-2 mx-n2 mb-4">
                            <div class="row g-2 g-md-3" style="min-width: 30rem;">
                                <div class="col-8"><img class="rounded rounded-md-3" :src="galleryPreviewUrls[0]" alt="Gallery thumbnail"></div>
                                <div class="col-4" v-if="galleryPreviewUrls.length > 1">
                                    <img v-if="galleryPreviewUrls[1]" class="rounded rounded-md-3 mb-2 mb-md-3" :src="galleryPreviewUrls[1]" alt="Gallery thumbnail">
                                    <img v-if="galleryPreviewUrls[2]" class="rounded rounded-md-3" :src="galleryPreviewUrls[2]" alt="Gallery thumbnail">
                                </div>
                            </div>
                        </div>

                        <!-- Fallback to Static Images -->
                        <div v-else class="overflow-auto pb-3 px-2 mx-n2 mb-4" data-simplebar>
                            <div class="row g-2 g-md-3" style="min-width: 30rem;">
                                <div class="col-8"><img class="rounded rounded-md-3" src="@/assets/img/city-guide/single/01.jpg" alt="Gallery thumbnail"></div>
                                <div class="col-4"><img class="rounded rounded-md-3 mb-2 mb-md-3" src="@/assets/img/city-guide/single/02.jpg" alt="Gallery thumbnail"><img class="rounded rounded-md-3" src="@/assets/img/city-guide/single/03.jpg" alt="Gallery thumbnail"></div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-7 mb-md-0 mb-4">
                                <!-- About-->
                                <div class="mb-4 pb-md-3">
                                    <h3 class="h4">About</h3>
                                    <p class="mb-1">{{ formData.description }}</p>
                                </div>
                            </div>
                            <!-- Sidebar-->
                            <aside class="col-md-5">
                                <!-- Place card-->
                                <article class="card mb-4 p-2 shadow-sm">
                                    <div class="card-body">
                                        <!-- Place info-->
                                        <div class="d-flex align-items-start mb-3 pb-2 border-bottom">
                                            <img v-if="logoPreviewUrl" class="rounded-circle" :src="logoPreviewUrl" width="60" alt="Place thumbnail">
                                            <img v-else class="rounded-circle" src="@/assets/img/city-guide/brands/hotel.svg" width="60" alt="Place thumbnail">

                                            <div class="ps-2 ms-1">
                                                <h3 class="h5 mb-2">{{ formData.name }}</h3>
                                                <ul v-if="selectedCategory" class="list-unstyled d-flex flex-wrap fs-sm">
                                                    <li class="me-2 mb-1 pe-1">
                                                        <i :class="`${selectedCategory.icon || 'fi-star'} mt-n1 me-1 align-middle opacity-70`"></i>
                                                        <b>{{ selectedCategory.name }}</b>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <!-- Place contacts-->
                                        <div class="mb-3 pb-3 border-bottom">
                                            <h4 class="h5 mb-2">Contacts:</h4>
                                            <ul class="nav flex-column">
                                                <li class="nav-item mb-2"><a class="nav-link p-0 fw-normal d-flex align-items-start" href="#"><i class="fi-map-pin mt-1 me-2 align-middle opacity-70"></i>{{ fullAddress }}</a></li>
                                                <li v-if="formData.phone" class="nav-item mb-2"><a class="nav-link d-inline-block p-0 fw-normal d-inline-flex align-items-start" :href="`tel:${formData.phone}`"><i class="fi-phone mt-1 me-2 align-middle opacity-70"></i>{{ formData.phone }}</a></li>
                                                <li v-if="formData.website" class="nav-item mb-2"><a class="nav-link p-0 fw-normal d-flex align-items-start" :href="formData.website" target="_blank"><i class="fi-globe mt-1 me-2 align-middle opacity-60"></i>{{ formData.website }}</a></li>
                                                <li v-if="formData.email" class="nav-item"><a class="nav-link p-0 fw-normal d-flex align-items-start" :href="`mailto:${formData.email}`"><i class="fi-mail mt-1 me-2 align-middle opacity-70"></i>{{ formData.email }}</a></li>
                                            </ul>
                                        </div>

                                        <!-- Follow-->
                                        <div class="d-flex align-items-center" v-if="formData.facebook || formData.instagram || formData.twitter">
                                            <h4 class="h5 mb-0 me-3">Follow:</h4>
                                            <div class="text-nowrap">
                                                <a v-if="formData.facebook" class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2" :href="formData.facebook" target="_blank"><i class="fi-facebook"></i></a>
                                                <a v-if="formData.instagram" class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2" :href="formData.instagram" target="_blank"><i class="fi-instagram"></i></a>
                                                <a v-if="formData.twitter" class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle" :href="formData.twitter" target="_blank"><i class="fi-twitter"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Page container-->
    <div class="container mt-5 mb-md-4 py-5">
        <div class="row">
            <!-- Page content-->
            <div class="col-lg-8">
                <!-- Breadcrumb-->
                <Breadcrumb :data="breadcrumbData" />

                <!-- Title-->
                <div class="mb-4">
                    <h1 class="h2 mb-0">Add business</h1>
                    <div class="d-lg-none pt-3 mb-2">33% content filled</div>
                    <div class="progress d-lg-none mb-4" style="height: 0.25rem">
                        <div class="progress-bar bg-warning" role="progressbar" style="width: 33%" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>

                <!-- Basic info-->
                <section class="card card-body border-0 shadow-sm p-4 mb-4" id="basic-info">
                    <h2 class="h4 mb-4">
                        <i class="fi-info-circle text-primary fs-5 mt-n1 me-2"></i>Basic info
                    </h2>
                    
                    <!-- Error/Success Messages -->
                    <div v-if="submitError" class="alert alert-danger mb-4" role="alert">
                        <i class="fi-alert-circle me-2"></i>{{ submitError }}
                    </div>
                    <div v-if="submitSuccess" class="alert alert-success mb-4" role="alert">
                        <i class="fi-check-circle me-2"></i>Business created successfully! Redirecting...
                    </div>
                    
                    <div class="mb-3">
                        <label class="form-label" for="ab-title">Official business name <span class="text-danger">*</span></label>
                        <input 
                            class="form-control" 
                            type="text" 
                            id="ab-title" 
                            v-model="formData.name"
                            placeholder="Title for your business" 
                            required 
                        />
                        <span class="form-text">{{ 48 - formData.name.length }} characters left</span>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Category <span class="text-danger">*</span></label>
                        <div class="btn-group d-block dropdown" data-bs-toggle="select">
                            <button class="btn btn-outline-secondary col-md-6 col-12 d-flex align-items-center justify-content-between ps-3 fw-normal dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="dropdown-toggle-label">{{ categories.find(c => c.id === formData.categoryId)?.name || 'Select Category' }}</span>
                            </button>
                            <input type="hidden" v-model="formData.categoryId" />
                            <div class="dropdown-menu w-100 my-1 p-3">
                                <div class="row row-cols-md-5 row-cols-sm-3 row-cols-2 g-2">
                                    <div class="col" v-for="category in categories" :key="category.id">
                                        <button 
                                            class="dropdown-item btn btn-outline-secondary border-0 d-block p-3 text-center" 
                                            type="button"
                                            :class="{ 'active': formData.categoryId === category.id }"
                                            @click="selectCategory(category.id)"
                                        >
                                            <i :class="`${category.icon || 'fi-star'} mb-1 fs-2 text-primary`"></i>
                                            <span class="dropdown-item-label d-block fs-sm">{{ category.name }}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section>
                <!-- Location-->
                <section class="card card-body border-0 shadow-sm p-4 mb-4" id="location">
                    <h2 class="h4 mb-4"><i class="fi-map-pin text-primary fs-5 mt-n1 me-2"></i>Location</h2>
                    <div class="row">
                        
                        <div class="col-sm-6 mb-3">
                            <label class="form-label" for="ab-city">City <span class="text-danger">*</span></label>
                            <select 
                                class="form-select" 
                                id="ab-city" 
                                v-model="formData.city"
                                @change="handleCityChange"
                                required
                            >
                                <option value="" disabled>Choose city</option>
                                <option v-for="city in cities" :key="city.name" :value="city.name">{{ city.name }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-8 mb-3">
                            <label class="form-label" for="ab-district">District <span class="text-danger">*</span></label>
                            <select 
                                class="form-select" 
                                id="ab-district" 
                                v-model="formData.district"
                                required
                            >
                                <option value="" disabled>Choose district</option>
                                <option v-for="district in availableDistricts" :key="district" :value="district">{{ district }}</option>
                            </select>
                        </div>
                        <div class="col-sm-4 mb-3">
                            <label class="form-label" for="ab-zip">Zip code <span class="text-danger">*</span></label>
                            <input 
                                class="form-control" 
                                type="text" 
                                id="ab-zip" 
                                v-model="formData.zipCode"
                                placeholder="Enter Zip code" 
                                required 
                            />
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="ab-address">Street address <span class="text-danger">*</span></label>
                        <input 
                            class="form-control" 
                            type="text" 
                            id="ab-address" 
                            v-model="formData.address"
                            required 
                        />
                    </div>
                    <div class="form-label fw-bold pt-3 pb-2">Display on the map</div>
                    <div class="interactive-map rounded-3" style="height: 250px">
                        <l-map ref="map" :zoom="zoom" :center="[formData.latitude, formData.longitude]" :use-global-leaflet="false">
                            <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base" name="OpenStreetMap"></l-tile-layer>
                        </l-map>
                    </div>
                </section>
                <!-- Contacts-->
                <section class="card card-body border-0 shadow-sm p-4 mb-4" id="contacts">
                    <h2 class="h4 mb-4"><i class="fi-phone text-primary fs-5 mt-n1 me-2"></i>Contacts</h2>
                    <div class="row">
                        <div class="col-sm-6 mb-3">
                            <label class="form-label" for="ab-email">Email <span class="text-danger">*</span></label>
                            <input 
                                class="form-control" 
                                type="email" 
                                id="ab-email" 
                                v-model="formData.email"
                                placeholder="Enter email" 
                                required 
                            />
                        </div>
                        <div class="col-sm-6 mb-3">
                            <label class="form-label" for="ab-phone">Phone <span class="text-danger">*</span></label>
                            <input 
                                class="form-control" 
                                type="tel" 
                                id="ab-phone" 
                                v-model="formData.phone"
                                placeholder="Enter phone number" 
                                required 
                            />
                        </div>
                        <div class="col-12 mb-3 pb-3">
                            <label class="form-label" for="ab-site">Website</label>
                            <input 
                                class="form-control" 
                                type="url" 
                                id="ab-site" 
                                v-model="formData.website"
                                placeholder="Enter your website" 
                            />
                        </div>
                        <div class="col-12">
                            <label class="form-label mb-3 fw-bold">Socials</label>
                            <div class="d-flex align-items-center mb-3">
                                <div class="btn btn-icon btn-light btn-xs shadow-sm rounded-circle pe-none flex-shrink-0 me-3">
                                    <i class="fi-facebook text-body"></i>
                                </div>
                                <input 
                                    class="form-control" 
                                    type="text" 
                                    v-model="formData.facebook"
                                    placeholder="Your Facebook account" 
                                />
                            </div>
                            <div class="d-flex align-items-center mb-3">
                                <div class="btn btn-icon btn-light btn-xs shadow-sm rounded-circle pe-none flex-shrink-0 me-3">
                                    <i class="fi-foursquare text-body"></i>
                                </div>
                                <input 
                                    class="form-control" 
                                    type="text" 
                                    v-model="formData.foursquare"
                                    placeholder="Your Foursquare account" 
                                />
                            </div>
                            <div class="d-flex align-items-center mb-3">
                                <div class="btn btn-icon btn-light btn-xs shadow-sm rounded-circle pe-none flex-shrink-0 me-3">
                                    <i class="fi-twitter text-body"></i>
                                </div>
                                <input 
                                    class="form-control" 
                                    type="text" 
                                    v-model="formData.twitter"
                                    placeholder="Your Twitter account" 
                                />
                            </div>
                            <div class="collapse" id="showMoreSocials">
                                <div class="d-flex align-items-center mb-3">
                                    <div class="btn btn-icon btn-light btn-xs shadow-sm rounded-circle pe-none flex-shrink-0 me-3">
                                        <i class="fi-instagram text-body"></i>
                                    </div>
                                    <input 
                                        class="form-control" 
                                        type="text" 
                                        v-model="formData.instagram"
                                        placeholder="Your Instagram account" 
                                    />
                                </div>
                                <div class="d-flex align-items-center mb-3">
                                    <div class="btn btn-icon btn-light btn-xs shadow-sm rounded-circle pe-none flex-shrink-0 me-3">
                                        <i class="fi-linkedin text-body"></i>
                                    </div>
                                    <input 
                                        class="form-control" 
                                        type="text" 
                                        v-model="formData.linkedin"
                                        placeholder="Your LinkedIn account" 
                                    />
                                </div>
                            </div>
                            <a class="collapse-label collapsed d-inline-block fs-sm fw-bold text-decoration-none pt-2 mb-1" data-bs-target="#showMoreSocials" data-bs-toggle="collapse" data-bs-label-collapsed="Show more" data-bs-label-expanded="Show less" role="button" aria-expanded="false" aria-controls="showMoreSocials"><i class="fi-arrow-down me-2"></i></a>
                        </div>
                    </div>
                </section>
                <!-- Description-->
                <section class="card card-body border-0 shadow-sm p-4 mb-4" id="description">
                    <h2 class="h4 mb-4"><i class="fi-edit text-primary fs-5 mt-n1 me-2"></i>Description</h2>
                    <label class="form-label" for="ab-description">Description <span class="text-danger">*</span></label>
                    <div class="row mb-4">
                        <div class="col-md-9 mb-md-0 mb-3">
                            <textarea 
                                class="form-control" 
                                id="ab-description" 
                                rows="6" 
                                v-model="formData.description"
                                placeholder="Describe your accommodation"
                            ></textarea>
                            <span class="form-text">{{ 8000 - formData.description.length }} characters left</span>
                        </div>
                        <div class="col-md-3">
                            <file-pond 
                                class="file-uploader bg-secondary p-4 pb-5" 
                                v-model="logoFiles" 
                                labelIdle='<i class="d-inline-block fi-cloud-upload fs-2 text-muted mb-2 pt-4"></i><br><span>Upload logo</span>' 
                                accepted-file-types="image/jpeg, image/jpg, image/png" 
                                allowMultiple="false" 
                                :maxFiles="1" 
                                :fileSizeBase="1024"
                                server="/api/upload"
                                name="file"
                                @addfile="handleLogoFileAdd"
                                @processfile="handleLogoFileProcess"
                                @init="() => console.log('Logo FilePond initialized')"
                            />
                        </div>
                    </div>
                    
                </section>
                
                <!-- Photos / video-->
                <section class="card card-body border-0 shadow-sm p-4 mb-4" id="photos">
                    <h2 class="h4 mb-4">
                        <i class="fi-image text-primary fs-5 mt-n1 me-2"></i>Photos / video
                    </h2>
                    <div class="alert alert-info mb-4" role="alert">
                        <div class="d-flex">
                            <i class="fi-alert-circle me-2 me-sm-3"></i>
                            <p class="fs-sm mb-1">
                                The maximum photo size is 8 MB. Formats: jpeg, jpg, png. Put the main picture
                                first.<br />The maximum video size is 10 MB. Formats: mp4, mov.
                            </p>
                        </div>
                    </div>
                    <file-pond 
                        class="file-uploader file-uploader-grid p-5 pb-3" 
                        v-model="files" 
                        labelIdle='<div class="btn btn-primary rounded-pill  mb-3"><i class="fi-cloud-upload me-1"></i>Upload photos / video</div><div class="mb-4">or drag them in</div>' 
                        accepted-file-types="image/jpeg, image/jpg, image/png" 
                        allowMultiple="true" 
                        :maxFiles="4" 
                        :fileSizeBase="1024"
                        server="/api/upload"
                        name="file"
                        @addfile="handleGalleryFileAdd"
                        @processfile="handleGalleryFileProcess"
                        @init="() => console.log('Gallery FilePond initialized')"
                    />
                </section>
                <!-- Action buttons -->
                <section class="d-sm-flex justify-content-between pt-2">
                    <a class="btn btn-outline-primary btn-lg d-block rounded-pill mb-3 mb-sm-2" data-bs-target="#preview-modal" data-bs-toggle="modal">
                        <i class="fi-eye-on ms-n1 me-2"></i>Preview
                    </a>
                    <button 
                        class="btn btn-primary btn-lg d-block rounded-pill mb-2" 
                        @click="handleSubmit"
                        :disabled="isSubmitting"
                    >
                        <span v-if="isSubmitting">
                            <i class="fi-loader me-2"></i>Saving...
                        </span>
                        <span v-else>
                            Save and continue
                        </span>
                    </button>
                </section>
            </div>
            <!-- Progress of completion-->
            <aside class="col-lg-3 offset-lg-1 d-none d-lg-block">
                <div class="sticky-top pt-5">
                    <h6 class="pt-5 mt-3 mb-2">33% content filled</h6>
                    <div class="progress mb-4" style="height: 0.25rem">
                        <div class="progress-bar bg-warning" role="progressbar" style="width: 33%" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <ul class="list-unstyled">
                        <li class="d-flex align-items-center">
                            <i class="fi-check text-primary me-2"></i>
                            <a class="nav-link fw-normal ps-1 p-0" href="#basic-info">Basic info</a>
                        </li>
                        <li class="d-flex align-items-center">
                            <i class="fi-check text-primary me-2"></i>
                            <a class="nav-link fw-normal ps-1 p-0" href="#location">Location</a>
                        </li>
                        <li class="d-flex align-items-center">
                            <i class="fi-check text-muted me-2"></i>
                            <a class="nav-link fw-normal ps-1 p-0" href="#contacts">Contacts</a>
                        </li>
                        <li class="d-flex align-items-center">
                            <i class="fi-check text-muted me-2"></i>
                            <a class="nav-link fw-normal ps-1 p-0" href="#description">Description</a>
                        </li>
                        <li class="d-flex align-items-center">
                            <i class="fi-check text-muted me-2"></i>
                            <a class="nav-link fw-normal ps-1 p-0" href="#price">Price range</a>
                        </li>
                        <li class="d-flex align-items-center">
                            <i class="fi-check text-muted me-2"></i>
                            <a class="nav-link fw-normal ps-1 p-0" href="#photos">Photos / video</a>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    </div>
</template>
