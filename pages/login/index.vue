<script setup lang="ts">
import type { FormError, FormErrorEvent, FormSubmitEvent } from '#ui/types'

const state = reactive({
  email: undefined,
  password: undefined
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.email) errors.push({ path: 'email', message: 'Required' })
  if (!state.password) errors.push({ path: 'password', message: 'Required' })
  return errors
}

async function onSubmit (event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data)
}

async function onError (event: FormErrorEvent) {
  const element = document.getElementById(event.errors[0].id)
  element?.focus()
  element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
</script>

<template>
<div class="login__wrapper">
  <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit" @error="onError">
    <h1 class="title">Xin chào</h1> 
  
    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email" placeholder="Nhập tài khoản" />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput v-model="state.password" type="password" placeholder="Nhập mật khẩu" />
    </UFormGroup>

    <UButton type="submit">
      Submit
    </UButton>
  </UForm>
</div>
</template>

<style lang="scss" scoped>
.login {
  $self: &;
    
  &__wrapper {
    @apply bg-[url('/imgs/home-mesh-gradient.png')] bg-cover bg-center bg-no-repeat;
    @apply flex justify-center items-center m-auto h-full;
    
    form {
      @apply border p-10 max-w-xl flex flex-col items-center justify-center animate-fade;
      
      button {
        @apply flex justify-center items-center w-full;
      }
    }
  }
}
</style>
