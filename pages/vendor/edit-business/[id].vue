<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Breadcrumb from '@/components/Breadcrumb.vue'

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
const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview
);

const route = useRoute()
const router = useRouter()
const businessId = route.params.id as string

onMounted(() => {
    document.body.classList.add('bg-secondary')
})

const breadcrumbData = ref([
    {
        title: 'Home',
        link: '/',
        subitems: [
            {
                title: 'Os Meus Negócios',
                link: '/vendor/businesses'
            },
            {
                title: 'Editar Negócio'
            }
        ]
    }
])

definePageMeta({
    title: 'Editar Negócio',
});

// Form data
const formData = ref({
    name: '',
    description: '',
    address: '',
    district: '',
    city: '',
    zipCode: '',
    email: '',
    phone: '',
    categoryId: 0,
    website: '',
    facebook: '',
    foursquare: '',
    twitter: '',
    instagram: '',
    linkedin: '',
    latitude: null as number | null,
    longitude: null as number | null
})

// File upload states
const files = ref([])
const logoFiles = ref([])
const uploadedFiles = ref<Array<{serverId: string, url: string}>>([])
const uploadedLogoFiles = ref<Array<{serverId: string, url: string}>>([])

// Loading and error states
const isLoading = ref(true)
const isSubmitting = ref(false)
const submitError = ref('')
const submitSuccess = ref(false)
const loadError = ref('')

// Categories from API
const categories = ref<Array<{id: number, name: string, icon: string | null, slug: string}>>([])
const isLoadingCategories = ref(true)

// Cities and districts
const cities = [
    { name: 'Berlin', districts: ['Berlin-Mitte', 'Charlottenburg', 'Prenzlauer Berg', 'Friedrichshain', 'Kreuzberg'] },
    { name: 'Hamburg', districts: ['Hamburg-Mitte', 'Altona', 'Eimsbüttel', 'Hamburg-Nord', 'Wandsbek'] },
    { name: 'Munich', districts: ['Altstadt', 'Maxvorstadt', 'Schwabing', 'Haidhausen', 'Au-Haidhausen'] },
    { name: 'Frankfurt am Main', districts: ['Innenstadt', 'Sachsenhausen', 'Bornheim', 'Bockenheim', 'Nordend'] },
    { name: 'Stuttgart', districts: ['Mitte', 'Bad Cannstatt', 'Degerloch', 'Möhringen', 'Vaihingen'] },
    { name: 'Cologne', districts: ['Innenstadt', 'Lindenthal', 'Ehrenfeld', 'Nippes', 'Chorweiler'] }
]

// Computed districts based on selected city
const availableDistricts = computed(() => {
    const selectedCity = cities.find(city => city.name === formData.value.city)
    return selectedCity ? selectedCity.districts : []
})

// Computed properties for preview
const logoPreviewUrl = computed(() => {
    if (logoFiles.value.length > 0) {
        const logoFile = logoFiles.value[0] as any
        if (logoFile.serverId) {
            return `/images/${logoFile.serverId}`
        }
        if (logoFile.file) {
            return logoFile.getFileEncodeDataURL()
        }
    }
    return null
})

const galleryPreviewUrls = computed(() => {
    if (files.value.length > 0) {
        const urls = files.value.map((fileItem) => {
            const file = fileItem as any
            if (file.serverId) {
                return `/images/${file.serverId}`
            }
            if (file.file) {
                return file.getFileEncodeDataURL()
            }
            return null
        }).filter(Boolean)
        
        return urls.length > 0 ? urls : null
    }
    return null
})

const fullAddress = computed(() => {
    return `${formData.value.address}, ${formData.value.zipCode}, ${formData.value.city}`
})

const selectedCategory = computed(() => {
    return categories.value.find(c => c.id === formData.value.categoryId)
})

// Fetch categories from API
const fetchCategories = async () => {
    try {
        isLoadingCategories.value = true
        const response = await $fetch('/api/categories')
        categories.value = response
    } catch (error) {
        console.error('Error fetching categories:', error)
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
        ]
    } finally {
        isLoadingCategories.value = false
    }
}

// Fetch business data
const fetchBusiness = async () => {
    try {
        isLoading.value = true
        const business = await $fetch(`/api/businesses/${businessId}`)
        if ((business as any)?.status === 'not_found') {
            loadError.value = (business as any)?.message || 'Business not found.'
            return
        }
        // Type guard: only access properties if not not_found
        const isBusiness = (b: any): b is { [key: string]: any } => !b.status
        if (!isBusiness(business)) return
        const validBusiness = business as any
        // Populate form data
        formData.value = {
            name: validBusiness.name,
            description: validBusiness.description,
            address: validBusiness.address,
            district: validBusiness.district,
            city: validBusiness.city,
            zipCode: validBusiness.zipCode,
            email: validBusiness.email,
            phone: validBusiness.phone,
            categoryId: validBusiness.categoryId,
            website: validBusiness.website || '',
            facebook: validBusiness.facebook || '',
            foursquare: validBusiness.foursquare || '',
            twitter: validBusiness.twitter || '',
            instagram: validBusiness.instagram || '',
            linkedin: validBusiness.linkedin || '',
            latitude: validBusiness.latitude,
            longitude: validBusiness.longitude
        }
        // Handle existing photos
        if (validBusiness.photos && validBusiness.photos.length > 0) {
            // Convert existing photos to the format expected by processUploadedFiles
            const existingPhotos = validBusiness.photos.map((photo: any) => ({
                serverId: photo.url.split('/').pop() || '',
                url: photo.url
            }))
            
            // Separate logo from gallery photos
            if (validBusiness.logo) {
                uploadedLogoFiles.value = [{
                    serverId: validBusiness.logo.split('/').pop() || '',
                    url: validBusiness.logo
                }]
            }
            
            uploadedFiles.value = existingPhotos.filter((photo: any) => 
                photo.url !== validBusiness.logo
            )
        }
    } catch (error: any) {
        console.error('Error fetching business:', error)
        loadError.value = error.data?.message || 'Failed to load business data'
    } finally {
        isLoading.value = false
    }
}

// Form validation
const validateForm = () => {
    const errors = []
    
    if (!formData.value.name.trim()) errors.push('Name is required')
    if (!formData.value.description.trim()) errors.push('Description is required')
    if (!formData.value.address.trim()) errors.push('Address is required')
    if (!formData.value.district.trim()) errors.push('District is required')
    if (!formData.value.city.trim()) errors.push('City is required')
    if (!formData.value.zipCode.trim()) errors.push('Zip code is required')
    if (!formData.value.email.trim()) errors.push('Email is required')
    if (!formData.value.phone.trim()) errors.push('Phone is required')
    if (!formData.value.categoryId) errors.push('Category is required')
    
    return errors
}

// Process uploaded files for API
const processUploadedFiles = (files: Array<{serverId: string, url: string}>, isLogo = false) => {
    return files
        .filter(file => file && file.url && file.url.trim() !== '') // Filter out invalid files
        .map(file => ({
            url: file.url,
            isLogo: isLogo,
            isPrimary: false
        }))
}

// Handle form submission
const handleSubmit = async () => {
    const errors = validateForm()
    
    if (errors.length > 0) {
        submitError.value = errors.join(', ')
        return
    }
    
    isSubmitting.value = true
    submitError.value = ''
    
    try {
        const processedLogoFiles = processUploadedFiles(uploadedLogoFiles.value, true)
        const processedGalleryFiles = processUploadedFiles(uploadedFiles.value, false)
        
        const requestData = {
            ...formData.value,
            categoryId: parseInt(formData.value.categoryId.toString()),
            latitude: formData.value.latitude ? parseFloat(formData.value.latitude.toString()) : null,
            longitude: formData.value.longitude ? parseFloat(formData.value.longitude.toString()) : null,
            photos: [...processedLogoFiles, ...processedGalleryFiles]
        }
        
        console.log('Request data being sent:', requestData)
        console.log('Photos array:', requestData.photos)
        console.log('Form data:', formData.value)
        
        const response = await $fetch(`/api/businesses/${businessId}`, {
            method: 'PUT',
            body: requestData
        })
        
        console.log('Business updated successfully:', response)
        submitSuccess.value = true
        
        // Redirect to businesses list after successful update
        setTimeout(() => {
            router.push('/vendor/businesses')
        }, 2000)
        
    } catch (error: any) {
        console.error('Error updating business:', error)
        
        if (error.data?.data && Array.isArray(error.data.data)) {
            const validationErrors = error.data.data.map((err: any) => err.message).join(', ')
            submitError.value = `Validation errors: ${validationErrors}`
        } else if (error.data?.message) {
            submitError.value = error.data.message
        } else {
            submitError.value = 'Failed to update business. Please try again.'
        }
    } finally {
        isSubmitting.value = false
    }
}

// Handle category selection
const selectCategory = (categoryId: number) => {
    formData.value.categoryId = categoryId
}

// Handle city change
const handleCityChange = () => {
    formData.value.district = ''
}

// FilePond event handlers
const handleLogoFileAdd = (error: any, file: any) => {
    console.log('Logo file added:', file)
    if (error) {
        console.error('Logo file add error:', error)
    }
}

const handleLogoFileProcess = (error: any, file: any) => {
    console.log('Logo file processed:', file)
    if (error) {
        console.error('Logo file processing error:', error)
    } else {
        // File was successfully uploaded
        uploadedLogoFiles.value = [file]
        console.log('Logo file uploaded successfully:', file)
    }
}

const handleFileAdd = (error: any, file: any) => {
    console.log('File added:', file)
    if (error) {
        console.error('File add error:', error)
    }
}

const handleFileProcess = (error: any, file: any) => {
    console.log('File processed:', file)
    if (error) {
        console.error('File processing error:', error)
    } else {
        // File was successfully uploaded
        uploadedFiles.value.push(file)
        console.log('File uploaded successfully:', file)
    }
}

// Initialize data
onMounted(async () => {
    await Promise.all([
        fetchCategories(),
        fetchBusiness()
    ])
})
</script>

<template>
    <!-- Page container-->
    <div class="container mt-5 mb-md-4 py-5">
        <!-- Breadcrumbs-->
        <Breadcrumb :data="breadcrumbData" />

        <!-- Page title-->
        <div class="d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch justify-content-between pb-4 mb-2 mb-md-3">
            <h1 class="h2 mb-sm-0">Edit Business</h1>
        </div>

        <!-- Loading state -->
        <div v-if="isLoading" class="text-center py-5">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p class="mt-3">Loading business data...</p>
        </div>

        <!-- Error state -->
        <div v-else-if="loadError" class="alert alert-danger" role="alert">
            <h4 class="alert-heading">Error Loading Business</h4>
            <p>{{ loadError }}</p>
            <hr>
            <nuxt-link to="/vendor/businesses" class="btn btn-outline-danger">
                Back to Businesses
            </nuxt-link>
        </div>

        <!-- Form -->
        <form v-else @submit.prevent="handleSubmit" class="needs-validation" novalidate>
            <!-- Success message -->
            <div v-if="submitSuccess" class="alert alert-success" role="alert">
                <h4 class="alert-heading">Success!</h4>
                <p>Business updated successfully. Redirecting to businesses list...</p>
            </div>

            <!-- Error message -->
            <div v-if="submitError" class="alert alert-danger" role="alert">
                <h4 class="alert-heading">Error</h4>
                <p>{{ submitError }}</p>
            </div>

            <!-- Basic Information -->
            <section class="card card-body border-0 shadow-sm p-4 mb-4" id="basic-info">
                <h2 class="h4 mb-4"><i class="fi-edit text-primary fs-5 mt-n1 me-2"></i>Basic Information</h2>
                
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label class="form-label" for="business-name">Business Name <span class="text-danger">*</span></label>
                        <input 
                            class="form-control" 
                            type="text" 
                            id="business-name" 
                            v-model="formData.name"
                            placeholder="Enter business name"
                            required
                        />
                    </div>
                    <div class="col-md-6 mb-3">
                        <label class="form-label" for="business-category">Category <span class="text-danger">*</span></label>
                        <select 
                            class="form-select" 
                            id="business-category" 
                            v-model="formData.categoryId"
                            required
                        >
                            <option value="">Select category</option>
                            <option 
                                v-for="category in categories" 
                                :key="category.id" 
                                :value="category.id"
                            >
                                {{ category.name }}
                            </option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label class="form-label" for="business-email">Email <span class="text-danger">*</span></label>
                        <input 
                            class="form-control" 
                            type="email" 
                            id="business-email" 
                            v-model="formData.email"
                            placeholder="Enter email address"
                            required
                        />
                    </div>
                    <div class="col-md-6 mb-3">
                        <label class="form-label" for="business-phone">Phone <span class="text-danger">*</span></label>
                        <input 
                            class="form-control" 
                            type="tel" 
                            id="business-phone" 
                            v-model="formData.phone"
                            placeholder="Enter phone number"
                            required
                        />
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label class="form-label" for="business-website">Website</label>
                        <input 
                            class="form-control" 
                            type="url" 
                            id="business-website" 
                            v-model="formData.website"
                            placeholder="https://example.com"
                        />
                    </div>
                </div>
            </section>

            <!-- Location -->
            <section class="card card-body border-0 shadow-sm p-4 mb-4" id="location">
                <h2 class="h4 mb-4"><i class="fi-map-pin text-primary fs-5 mt-n1 me-2"></i>Location</h2>
                
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label class="form-label" for="business-city">City <span class="text-danger">*</span></label>
                        <select 
                            class="form-select" 
                            id="business-city" 
                            v-model="formData.city"
                            @change="handleCityChange"
                            required
                        >
                            <option value="">Select city</option>
                            <option v-for="city in cities" :key="city.name" :value="city.name">
                                {{ city.name }}
                            </option>
                        </select>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label class="form-label" for="business-district">District <span class="text-danger">*</span></label>
                        <select 
                            class="form-select" 
                            id="business-district" 
                            v-model="formData.district"
                            required
                        >
                            <option value="">Select district</option>
                            <option v-for="district in availableDistricts" :key="district" :value="district">
                                {{ district }}
                            </option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-8 mb-3">
                        <label class="form-label" for="business-address">Address <span class="text-danger">*</span></label>
                        <input 
                            class="form-control" 
                            type="text" 
                            id="business-address" 
                            v-model="formData.address"
                            placeholder="Enter street address"
                            required
                        />
                    </div>
                    <div class="col-md-4 mb-3">
                        <label class="form-label" for="business-zipcode">Zip Code <span class="text-danger">*</span></label>
                        <input 
                            class="form-control" 
                            type="text" 
                            id="business-zipcode" 
                            v-model="formData.zipCode"
                            placeholder="12345"
                            required
                        />
                    </div>
                </div>
            </section>

            <!-- Description and Logo -->
            <section class="card card-body border-0 shadow-sm p-4 mb-4" id="description">
                <h2 class="h4 mb-4"><i class="fi-edit text-primary fs-5 mt-n1 me-2"></i>Description & Logo</h2>
                <div class="row mb-4">
                    <div class="col-md-9 mb-md-0 mb-3">
                        <label class="form-label" for="business-description">Description <span class="text-danger">*</span></label>
                        <textarea 
                            class="form-control" 
                            id="business-description" 
                            rows="6" 
                            v-model="formData.description"
                            placeholder="Describe your business"
                            required
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
                        />
                        <!-- Show existing logo if available -->
                        <div v-if="uploadedLogoFiles.length > 0" class="mt-3">
                            <img :src="uploadedLogoFiles[0].url" alt="Current logo" class="img-fluid rounded" />
                            <p class="text-muted small mt-1">Current logo</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Photos -->
            <section class="card card-body border-0 shadow-sm p-4 mb-4" id="photos">
                <h2 class="h4 mb-4"><i class="fi-image text-primary fs-5 mt-n1 me-2"></i>Photos</h2>
                <file-pond 
                    class="file-uploader bg-secondary p-4 pb-5" 
                    v-model="files" 
                    labelIdle='<i class="d-inline-block fi-cloud-upload fs-2 text-muted mb-2 pt-4"></i><br><span>Upload photos</span>' 
                    accepted-file-types="image/jpeg, image/jpg, image/png" 
                    allowMultiple="true" 
                    :maxFiles="10" 
                    :fileSizeBase="1024"
                    server="/api/upload"
                    name="file"
                    @addfile="handleFileAdd"
                    @processfile="handleFileProcess"
                />
                
                <!-- Show existing photos -->
                <div v-if="uploadedFiles.length > 0" class="mt-4">
                    <h5>Current Photos</h5>
                    <div class="row">
                        <div v-for="photo in uploadedFiles" :key="photo.serverId" class="col-md-3 col-sm-4 col-6 mb-3">
                            <img :src="photo.url" alt="Business photo" class="img-fluid rounded" />
                        </div>
                    </div>
                </div>
            </section>

            <!-- Social Media -->
            <section class="card card-body border-0 shadow-sm p-4 mb-4" id="social-media">
                <h2 class="h4 mb-4"><i class="fi-share text-primary fs-5 mt-n1 me-2"></i>Social Media</h2>
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label class="form-label" for="business-facebook">Facebook</label>
                        <input 
                            class="form-control" 
                            type="url" 
                            id="business-facebook" 
                            v-model="formData.facebook"
                            placeholder="https://facebook.com/yourpage"
                        />
                    </div>
                    <div class="col-md-6 mb-3">
                        <label class="form-label" for="business-instagram">Instagram</label>
                        <input 
                            class="form-control" 
                            type="url" 
                            id="business-instagram" 
                            v-model="formData.instagram"
                            placeholder="https://instagram.com/yourpage"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label class="form-label" for="business-twitter">Twitter</label>
                        <input 
                            class="form-control" 
                            type="url" 
                            id="business-twitter" 
                            v-model="formData.twitter"
                            placeholder="https://twitter.com/yourpage"
                        />
                    </div>
                    <div class="col-md-6 mb-3">
                        <label class="form-label" for="business-linkedin">LinkedIn</label>
                        <input 
                            class="form-control" 
                            type="url" 
                            id="business-linkedin" 
                            v-model="formData.linkedin"
                            placeholder="https://linkedin.com/company/yourcompany"
                        />
                    </div>
                </div>
            </section>

            <!-- Submit buttons -->
            <div class="d-flex justify-content-between">
                <nuxt-link to="/vendor/businesses" class="btn btn-outline-secondary">
                    <i class="fi-arrow-left me-2"></i>Cancel
                </nuxt-link>
                <button 
                    type="submit" 
                    class="btn btn-primary" 
                    :disabled="isSubmitting"
                >
                    <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-2" role="status"></span>
                    <i v-else class="fi-check me-2"></i>
                    {{ isSubmitting ? 'Updating...' : 'Update Business' }}
                </button>
            </div>
        </form>
    </div>
</template> 