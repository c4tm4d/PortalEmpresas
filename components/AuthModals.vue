<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Reactive data for forms
const signinForm = reactive({
  email: '',
  password: ''
})

const signupForm = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeToTerms: false
})

// Loading states
const isLoading = ref(false)
const errorMessage = ref('')

// Password visibility toggles
const showSigninPassword = ref(false)
const showSignupPassword = ref(false)
const showConfirmPassword = ref(false)

// Form validation
const signinErrors = reactive({
  email: '',
  password: ''
})

const signupErrors = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeToTerms: ''
})

// Validation functions
const validateSigninForm = () => {
  signinErrors.email = ''
  signinErrors.password = ''
  
  if (!signinForm.email) {
    signinErrors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signinForm.email)) {
    signinErrors.email = 'Please enter a valid email'
  }
  
  if (!signinForm.password) {
    signinErrors.password = 'Password is required'
  } else if (signinForm.password.length < 6) {
    signinErrors.password = 'Password must be at least 6 characters'
  }
  
  return !signinErrors.email && !signinErrors.password
}

const validateSignupForm = () => {
  signupErrors.name = ''
  signupErrors.email = ''
  signupErrors.password = ''
  signupErrors.confirmPassword = ''
  signupErrors.agreeToTerms = ''
  
  if (!signupForm.name) {
    signupErrors.name = 'Name is required'
  } else if (signupForm.name.length < 2) {
    signupErrors.name = 'Name must be at least 2 characters'
  }
  
  if (!signupForm.email) {
    signupErrors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signupForm.email)) {
    signupErrors.email = 'Please enter a valid email'
  }
  
  if (!signupForm.password) {
    signupErrors.password = 'Password is required'
  } else if (signupForm.password.length < 6) {
    signupErrors.password = 'Password must be at least 6 characters'
  }
  
  if (!signupForm.confirmPassword) {
    signupErrors.confirmPassword = 'Please confirm your password'
  } else if (signupForm.password !== signupForm.confirmPassword) {
    signupErrors.confirmPassword = 'Passwords do not match'
  }
  
  if (!signupForm.agreeToTerms) {
    signupErrors.agreeToTerms = 'You must agree to the terms'
  }
  
  return !signupErrors.name && !signupErrors.email && !signupErrors.password && !signupErrors.confirmPassword && !signupErrors.agreeToTerms
}

// Authentication functions
const handleSignin = async (e: Event) => {
  e.preventDefault()
  errorMessage.value = ''
  
  if (!validateSigninForm()) return
  
  isLoading.value = true
  
  try {
    await $fetch('/api/auth/login', {
      method: 'POST',
      body: {
        email: signinForm.email,
        password: signinForm.password
      }
    })
    
    if (process.client) {
      const { Modal } = await import('bootstrap')
      // Close modal and redirect
      const modal = document.getElementById('signin-modal')
      if (modal) {
        const bootstrapModal = Modal.getInstance(modal)
        bootstrapModal?.hide()
      }
      
      // Refresh the page to update auth state
      window.location.reload()
    }
    
  } catch (error: any) {
    errorMessage.value = error.data?.message || 'Sign in failed. Please try again.'
  } finally {
    isLoading.value = false
  }
}

const handleSignup = async (e: Event) => {
  e.preventDefault()
  errorMessage.value = ''
  
  if (!validateSignupForm()) return
  
  isLoading.value = true
  
  try {
    await $fetch('/api/auth/register', {
      method: 'POST',
      body: {
        name: signupForm.name,
        email: signupForm.email,
        password: signupForm.password
      }
    })
    
    if (process.client) {
      const { Modal } = await import('bootstrap')
      // Close modal and redirect
      const modal = document.getElementById('signup-modal')
      if (modal) {
        const bootstrapModal = Modal.getInstance(modal)
        bootstrapModal?.hide()
      }
      
      // Refresh the page to update auth state
      window.location.reload()
    }
    
  } catch (error: any) {
    errorMessage.value = error.data?.message || 'Sign up failed. Please try again.'
  } finally {
    isLoading.value = false
  }
}

// Clear forms when modals are hidden
const clearForms = () => {
  Object.assign(signinForm, { email: '', password: '' })
  Object.assign(signupForm, { name: '', email: '', password: '', confirmPassword: '', agreeToTerms: false })
  errorMessage.value = ''
  signinErrors.email = ''
  signinErrors.password = ''
  signupErrors.name = ''
  signupErrors.email = ''
  signupErrors.password = ''
  signupErrors.confirmPassword = ''
  signupErrors.agreeToTerms = ''
}
</script>

<template>
  <!-- Sign In Modal-->
  <div class="modal fade" id="signin-modal" tabindex="-1" aria-hidden="true" @hidden.bs.modal="clearForms">
    <div class="modal-dialog modal-lg modal-dialog-centered p-2 my-0 mx-auto" style="max-width: 950px">
      <div class="modal-content">
        <div class="modal-body px-0 py-2 py-sm-0">
          <button class="btn-close position-absolute top-0 end-0 mt-3 me-3" type="button" data-bs-dismiss="modal"></button>
          <div class="row mx-0 align-items-center">
            <div class="col-md-6 border-end-md p-4 p-sm-5">
              <h2 class="h3 mb-4 mb-sm-5">Hey there!<br />Welcome back.</h2>
              <img class="d-block mx-auto" src="@/assets/img/signin-modal/signin.svg" width="344" alt="Illustartion" />
              <!-- <div class="mt-4 mt-sm-5">
                Don't have an account?
                <a class="text-primary" data-bs-target="#signup-modal" data-bs-toggle="modal" data-bs-dismiss="modal">Sign up here</a>
              </div> -->
            </div>
            <div class="col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5">
              <!-- Error Message -->
              <div v-if="errorMessage" class="alert alert-danger mb-3" role="alert">
                {{ errorMessage }}
              </div>
              
              <form @submit="handleSignin" class="needs-validation" novalidate>
                <div class="mb-4">
                  <label class="form-label mb-2" for="signin-email">Email address</label>
                  <input 
                    class="form-control" 
                    :class="{ 'is-invalid': signinErrors.email }"
                    type="email" 
                    id="signin-email" 
                    v-model="signinForm.email"
                    placeholder="Enter your email" 
                    required 
                  />
                  <div v-if="signinErrors.email" class="invalid-feedback">
                    {{ signinErrors.email }}
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
                      :class="{ 'is-invalid': signinErrors.password }"
                      :type="showSigninPassword ? 'text' : 'password'" 
                      id="signin-password" 
                      v-model="signinForm.password"
                      placeholder="Enter password" 
                      autocomplete="off" 
                      required 
                    />
                    <label class="password-toggle-btn" aria-label="Show/hide password">
                      <input 
                        class="password-toggle-check" 
                        type="checkbox" 
                        v-model="showSigninPassword"
                      />
                      <span class="password-toggle-indicator"></span>
                    </label>
                  </div>
                  <div v-if="signinErrors.password" class="invalid-feedback">
                    {{ signinErrors.password }}
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
    </div>
  </div>

  <!-- Sign Up Modal-->
  <div class="modal fade" id="signup-modal" tabindex="-1" aria-hidden="true" @hidden.bs.modal="clearForms">
    <div class="modal-dialog modal-lg modal-dialog-centered p-2 my-0 mx-auto" style="max-width: 950px">
      <div class="modal-content">
        <div class="modal-body px-0 py-2 py-sm-0">
          <button class="btn-close position-absolute top-0 end-0 mt-3 me-3" type="button" data-bs-dismiss="modal"></button>
          <div class="row mx-0 align-items-center">
            <div class="col-md-6 border-end-md p-4 p-sm-5">
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
                Already have an account?
                <a class="text-primary" data-bs-target="#signin-modal" data-bs-toggle="modal" data-bs-dismiss="modal">Sign in</a>
              </div>
            </div>
            <div class="col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5">
              <a class="btn btn-outline-info w-100 mb-3" href="javascript:void(0);"><i class="fi-google fs-lg me-1"></i>Sign in with Google</a><a class="btn btn-outline-info w-100 mb-3" href="javascript:void(0);"><i class="fi-facebook fs-lg me-1"></i>Sign in with Facebook</a>
              <div class="d-flex align-items-center py-3 mb-3">
                <hr class="w-100" />
                <div class="px-3">Or</div>
                <hr class="w-100" />
              </div>
              
              <!-- Error Message -->
              <div v-if="errorMessage" class="alert alert-danger mb-3" role="alert">
                {{ errorMessage }}
              </div>
              
              <form @submit="handleSignup" class="needs-validation" novalidate>
                <div class="mb-4">
                  <label class="form-label" for="signup-name">Full name</label>
                  <input 
                    class="form-control" 
                    :class="{ 'is-invalid': signupErrors.name }"
                    type="text" 
                    id="signup-name" 
                    v-model="signupForm.name"
                    placeholder="Enter your full name" 
                    required 
                  />
                  <div v-if="signupErrors.name" class="invalid-feedback">
                    {{ signupErrors.name }}
                  </div>
                </div>
                <div class="mb-4">
                  <label class="form-label" for="signup-email">Email address</label>
                  <input 
                    class="form-control" 
                    :class="{ 'is-invalid': signupErrors.email }"
                    type="email" 
                    id="signup-email" 
                    v-model="signupForm.email"
                    placeholder="Enter your email" 
                    required 
                  />
                  <div v-if="signupErrors.email" class="invalid-feedback">
                    {{ signupErrors.email }}
                  </div>
                </div>
                <div class="mb-4">
                  <label class="form-label" for="signup-password">Password <span class="fs-sm text-muted">min. 6 char</span></label>
                  <div class="password-toggle">
                    <input 
                      class="form-control" 
                      :class="{ 'is-invalid': signupErrors.password }"
                      :type="showSignupPassword ? 'text' : 'password'" 
                      id="signup-password" 
                      v-model="signupForm.password"
                      minlength="6" 
                      required 
                      autocomplete="off" 
                    />
                    <label class="password-toggle-btn" aria-label="Show/hide password">
                      <input 
                        class="password-toggle-check" 
                        type="checkbox" 
                        v-model="showSignupPassword"
                      />
                      <span class="password-toggle-indicator"></span>
                    </label>
                  </div>
                  <div v-if="signupErrors.password" class="invalid-feedback">
                    {{ signupErrors.password }}
                  </div>
                </div>
                <div class="mb-4">
                  <label class="form-label" for="signup-password-confirm">Confirm password</label>
                  <div class="password-toggle">
                    <input 
                      class="form-control" 
                      :class="{ 'is-invalid': signupErrors.confirmPassword }"
                      :type="showConfirmPassword ? 'text' : 'password'" 
                      id="signup-password-confirm" 
                      v-model="signupForm.confirmPassword"
                      minlength="6" 
                      required 
                      autocomplete="off" 
                    />
                    <label class="password-toggle-btn" aria-label="Show/hide password">
                      <input 
                        class="password-toggle-check" 
                        type="checkbox" 
                        v-model="showConfirmPassword"
                      />
                      <span class="password-toggle-indicator"></span>
                    </label>
                  </div>
                  <div v-if="signupErrors.confirmPassword" class="invalid-feedback">
                    {{ signupErrors.confirmPassword }}
                  </div>
                </div>
                <div class="form-check mb-4">
                  <input 
                    class="form-check-input" 
                    :class="{ 'is-invalid': signupErrors.agreeToTerms }"
                    type="checkbox" 
                    id="agree-to-terms" 
                    v-model="signupForm.agreeToTerms"
                    required 
                  />
                  <label class="form-check-label" for="agree-to-terms">By joining, I agree to the <a href="javascript:void(0);">Terms of use</a> and
                    <a href="javascript:void(0);">Privacy policy</a></label>
                  <div v-if="signupErrors.agreeToTerms" class="invalid-feedback">
                    {{ signupErrors.agreeToTerms }}
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
    </div>
  </div>
</template>
