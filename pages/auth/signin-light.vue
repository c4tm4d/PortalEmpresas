<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.go(-1); // or router.back()
}

// Form data
const form = reactive({
  email: '',
  password: ''
})

// Form validation errors
const errors = reactive({
  email: '',
  password: ''
})

// Loading and error states
const isLoading = ref(false)
const errorMessage = ref('')

const passwordType = ref('password');
const togglePassword = () => {
    passwordType.value = passwordType.value === 'password' ? 'text' : 'password';    
}

// Validation function
const validateForm = () => {
  errors.email = ''
  errors.password = ''
  
  if (!form.email) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email'
  }
  
  if (!form.password) {
    errors.password = 'Password is required'
  } else if (form.password.length < 6) {
    errors.password = 'Password must be at least 6 characters'
  }
  
  return !errors.email && !errors.password
}

// Handle form submission
const handleSubmit = async (e: Event) => {
  e.preventDefault()
  errorMessage.value = ''
  
  if (!validateForm()) return
  
  isLoading.value = true
  
  try {
    const response = await $fetch('/api/auth/login', {
      method: 'POST',
      body: {
        email: form.email,
        password: form.password
      }
    })
    
    // Redirect to home page
    router.push('/')
    
  } catch (error: any) {
    errorMessage.value = error.data?.message || 'Sign in failed. Please try again.'
  } finally {
    isLoading.value = false
  }
}

definePageMeta({
    layout: 'auth',
    title: 'Sign In',
});
</script>
<template>
    <!-- Page content-->
    <div class="container-fluid d-flex h-100 align-items-center justify-content-center py-4 py-sm-5 vh-100">
        <div class="card card-body" style="max-width: 940px">
            <a @click="goBack" class="position-absolute top-0 end-0 nav-link fs-sm py-1 px-2 mt-3 me-3" href="javascript:void(0);"><i class="fi-arrow-long-left fs-base me-2"></i>Go back</a>
            <div class="row mx-0 align-items-center">
                <div class="col-md-6 border-end-md p-2 p-sm-5">
                    <h2 class="h3 mb-4 mb-sm-5">Hey there!<br />Welcome back.</h2>
                    <img class="d-block mx-auto" src="@/assets/img/signin-modal/signin.svg" width="344" alt="Illustartion" />
                    <div class="mt-4 mt-sm-5">
                        Don't have an account? <nuxt-link to="/auth/signup-light">Sign up here</nuxt-link>
                    </div>
                </div>
                <div class="col-md-6 px-2 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5">
                    <a class="btn btn-outline-info w-100 mb-3" href="javascript:void(0);">
                        <i class="fi-google fs-lg me-1"></i>Sign in with Google</a>
                    <a class="btn btn-outline-info w-100 mb-3" href="javascript:void(0);">
                        <i class="fi-facebook fs-lg me-1"></i>Sign in with Facebook</a>
                    <div class="d-flex align-items-center py-3 mb-3">
                        <hr class="w-100" />
                        <div class="px-3">Or</div>
                        <hr class="w-100" />
                    </div>
                    
                    <!-- Error Message -->
                    <div v-if="errorMessage" class="alert alert-danger mb-3" role="alert">
                        {{ errorMessage }}
                    </div>
                    
                    <form @submit="handleSubmit" class="needs-validation" novalidate>
                        <div class="mb-4">
                            <label class="form-label mb-2" for="signin-email">Email address</label>
                            <input 
                                class="form-control" 
                                :class="{ 'is-invalid': errors.email }"
                                type="email" 
                                id="signin-email" 
                                v-model="form.email"
                                placeholder="Enter your email" 
                                required 
                            />
                            <div v-if="errors.email" class="invalid-feedback">
                                {{ errors.email }}
                            </div>
                        </div>
                        <div class="mb-4">
                            <div class="d-flex align-items-center justify-content-between mb-2">
                                <label class="form-label mb-0" for="signin-password">Password</label>
                                <a class="fs-sm" href="javascript:void(0);">Forgot password?</a>
                            </div>
                            <div class="password-toggle">
                                <input 
                                    class="form-control" 
                                    :class="{ 'is-invalid': errors.password }"
                                    :type="passwordType" 
                                    id="signin-password" 
                                    v-model="form.password"
                                    placeholder="Enter password" 
                                    required 
                                    autocomplete="off" 
                                />
                                <label class="password-toggle-btn" aria-label="Show/hide password">
                                    <input class="password-toggle-check" @click="togglePassword()" type="checkbox" />
                                    <span class="password-toggle-indicator"></span>
                                </label>
                            </div>
                            <div v-if="errors.password" class="invalid-feedback">
                                {{ errors.password }}
                            </div>
                        </div>
                        <button 
                            class="btn btn-primary btn-lg w-100" 
                            type="submit"
                            :disabled="isLoading"
                        >
                            <span v-if="isLoading" class="spinner-border spinner-border-sm me-2" role="status"></span>
                            {{ isLoading ? 'Signing in...' : 'Sign in' }}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
