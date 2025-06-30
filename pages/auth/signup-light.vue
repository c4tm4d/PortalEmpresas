<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.go(-1); // or router.back()
}

// Form data
const form = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeToTerms: false
})

// Form validation errors
const errors = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeToTerms: ''
})

// Loading and error states
const isLoading = ref(false)
const errorMessage = ref('')

const passwordType = ref('password');
const confirmPasswordType = ref('password');
const togglePassword = () => {
    passwordType.value = passwordType.value === 'password' ? 'text' : 'password'
}
const toggleConfirmPassword = () => {
    confirmPasswordType.value = confirmPasswordType.value === 'password' ? 'text' : 'password'
}

// Validation function
const validateForm = () => {
  errors.name = ''
  errors.email = ''
  errors.password = ''
  errors.confirmPassword = ''
  errors.agreeToTerms = ''
  
  if (!form.name) {
    errors.name = 'Name is required'
  } else if (form.name.length < 2) {
    errors.name = 'Name must be at least 2 characters'
  }
  
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
  
  if (!form.confirmPassword) {
    errors.confirmPassword = 'Please confirm your password'
  } else if (form.password !== form.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match'
  }
  
  if (!form.agreeToTerms) {
    errors.agreeToTerms = 'You must agree to the terms'
  }
  
  return !errors.name && !errors.email && !errors.password && !errors.confirmPassword && !errors.agreeToTerms
}

// Handle form submission
const handleSubmit = async (e: Event) => {
  e.preventDefault()
  errorMessage.value = ''
  
  if (!validateForm()) return
  
  isLoading.value = true
  
  try {
    const response = await $fetch('/api/auth/register', {
      method: 'POST',
      body: {
        name: form.name,
        email: form.email,
        password: form.password
      }
    })
    
    // Redirect to home page
    router.push('/')
    
  } catch (error: any) {
    errorMessage.value = error.data?.message || 'Sign up failed. Please try again.'
  } finally {
    isLoading.value = false
  }
}

definePageMeta({
    layout: 'auth',
    title: 'Sign Up',
});
</script>
<template>
    <div class="container-fluid d-flex h-100 align-items-center justify-content-center py-4 py-sm-5">
        <div class="card card-body" style="max-width: 940px">
            <a @click="goBack" class="position-absolute top-0 end-0 nav-link fs-sm py-1 px-2 mt-3 me-3" href="javascript:void(0);"><i class="fi-arrow-long-left fs-base me-2"></i>Go back</a>
            <div class="row mx-0 align-items-center">
                <div class="col-md-6 border-end-md p-2 p-sm-5">
                    <h2 class="h3 mb-4 mb-sm-5">Join Finder.<br />Get premium benefits:</h2>
                    <ul class="list-unstyled mb-4 mb-sm-5">
                        <li class="d-flex mb-2">
                            <i class="fi-check-circle text-primary mt-1 me-2"></i><span>Add and promote your listings</span>
                        </li>
                        <li class="d-flex mb-2">
                            <i class="fi-check-circle text-primary mt-1 me-2"></i><span>Easily manage your wishlist</span>
                        </li>
                        <li class="d-flex mb-0">
                            <i class="fi-check-circle text-primary mt-1 me-2"></i><span>Leave reviews</span>
                        </li>
                    </ul>
                    <img class="d-block mx-auto" src="@/assets/img/signin-modal/signup.svg" width="344" alt="Illustartion" />
                    <div class="mt-sm-4 pt-md-3">
                        Already have an account? <nuxt-link to="/auth/signin-light">Sign in</nuxt-link>
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
                            <label class="form-label" for="signup-name">Full name</label>
                            <input 
                                class="form-control" 
                                :class="{ 'is-invalid': errors.name }"
                                type="text" 
                                id="signup-name" 
                                v-model="form.name"
                                placeholder="Enter your full name" 
                                required 
                            />
                            <div v-if="errors.name" class="invalid-feedback">
                                {{ errors.name }}
                            </div>
                        </div>
                        <div class="mb-4">
                            <label class="form-label" for="signup-email">Email address</label>
                            <input 
                                class="form-control" 
                                :class="{ 'is-invalid': errors.email }"
                                type="email" 
                                id="signup-email" 
                                v-model="form.email"
                                placeholder="Enter your email" 
                                required 
                            />
                            <div v-if="errors.email" class="invalid-feedback">
                                {{ errors.email }}
                            </div>
                        </div>
                        <div class="mb-4">
                            <label class="form-label" for="signup-password">Password <span class="fs-sm text-muted">min. 6 char</span></label>
                            <div class="password-toggle">
                                <input 
                                    class="form-control" 
                                    :class="{ 'is-invalid': errors.password }"
                                    :type="passwordType" 
                                    id="signup-password" 
                                    v-model="form.password"
                                    minlength="6" 
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
                        <div class="mb-4">
                            <label class="form-label" for="signup-password-confirm">Confirm password</label>
                            <div class="password-toggle">
                                <input 
                                    class="form-control" 
                                    :class="{ 'is-invalid': errors.confirmPassword }"
                                    :type="confirmPasswordType" 
                                    id="signup-password-confirm" 
                                    v-model="form.confirmPassword"
                                    minlength="6" 
                                    required 
                                    autocomplete="off" 
                                />
                                <label class="password-toggle-btn" aria-label="Show/hide password">
                                    <input class="password-toggle-check" @click="toggleConfirmPassword()" type="checkbox" />
                                    <span class="password-toggle-indicator"></span>
                                </label>
                            </div>
                            <div v-if="errors.confirmPassword" class="invalid-feedback">
                                {{ errors.confirmPassword }}
                            </div>
                        </div>
                        <div class="form-check mb-4">
                            <input 
                                class="form-check-input" 
                                :class="{ 'is-invalid': errors.agreeToTerms }"
                                type="checkbox" 
                                id="agree-to-terms" 
                                v-model="form.agreeToTerms"
                                required 
                            />
                            <label class="form-check-label" for="agree-to-terms">By joining, I agree to the <a href="javascript:void(0);">Terms of use</a> and
                                <a href="javascript:void(0);">Privacy policy</a></label>
                            <div v-if="errors.agreeToTerms" class="invalid-feedback">
                                {{ errors.agreeToTerms }}
                            </div>
                        </div>
                        <button 
                            class="btn btn-primary btn-lg w-100" 
                            type="submit"
                            :disabled="isLoading"
                        >
                            <span v-if="isLoading" class="spinner-border spinner-border-sm me-2" role="status"></span>
                            {{ isLoading ? 'Signing up...' : 'Sign up' }}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
