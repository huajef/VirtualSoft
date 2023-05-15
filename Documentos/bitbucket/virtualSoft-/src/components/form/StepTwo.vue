<script setup lang="ts">
  import {useRegistrationDataStore} from "@/stores/registrationData";
  import {ref} from "vue";
  // import ValidEmailDirective from "@/directives/validEmail";


  const form = useRegistrationDataStore();
  const data = ref({
      email: "",
      phone: "",
      password: "",
      cellPhone: "",
      passwordConfirmation: "",
      validEmail: false,
      samePasswords: false,
  });

  function addFormData() {
    form.dataByStep(form.step, data.value)
    form.nextStep();
  }


  function validateEmail() {
    const emailRegex = /^[a-zA-Z0-9_\-\.~]{2,}@[a-zA-Z0-9_\-\.~]{2,}\.[a-zA-Z]{2,4}$/;
    data.value.validEmail = emailRegex.test(data.value.email);
  }
  function validatePassword() {
    data.value.samePasswords = data.value.password === data.value.passwordConfirmation;
  }
  
</script>

<template>
  <form @submit.prevent="addFormData">
    <div class="flex flex-col mb-2.5">
      <label class="mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">Correo electrónico</label>
      <div class="flex items-center">
        <input
        required
        @input="validateEmail"
        type="email"
        v-model="data.email"
        placeholder="yeferson@gmail.com"
        class="py-2 px-2 rounded-md border border-gray-300 bg-white outline-none flex-1" 
        >
        <span v-if="data.validEmail" class="text-green-700 text-3xl">✓</span>
        <span v-if="data.email.length >=1 && !data.validEmail" class="text-red-700 text-3xl">x</span>
      </div>
    </div>
    <div class="flex flex-col mb-2.5">
      <label class="mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">Contraseña</label>
      <div class="flex items-center">
        <input
        required
        type="password"
        placeholder="******"
        v-model="data.password"
        class="py-2 px-2 rounded-md border border-gray-300 bg-white outline-none flex-1" />
      </div>
      
    </div>
    <div class="flex flex-col mb-2.5">
      <label class="mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">Confirmación de Contraseña</label>
      <div class="flex items-center"> 
        <input
        required
        type="password"
        placeholder="******"
        v-model="data.passwordConfirmation"
        @input="validatePassword"
        class="py-2 px-2 rounded-md border border-gray-300 bg-white outline-none flex-1" />
        <span v-if="data.samePasswords" class="text-green-700 text-3xl">✓</span>
        <span v-if="data.passwordConfirmation.length >=1 && !data.samePasswords" class="text-red-700 text-3xl">x</span>
      </div>
      </div>
    <div class="flex flex-col mb-2.5">
      <label class="mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">Numero de teléfono</label>
      <input
        required
        type="number"
        placeholder="4522532"
        v-model.number="data.phone"
        class="py-2 px-2 rounded-md border border-gray-300 bg-white outline-none" />
    </div>
    <div class="flex flex-col mb-2.5">
      <label class="mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">Numero celular</label>
      <input
        required
        type="number"
        placeholder="3006738273"
        v-model.number="data.cellPhone"
        class="py-2 px-2 rounded-md border border-gray-300 bg-white outline-none" />
    </div>
    <button class="bg-primary-color text-white hover:bg-primary-color-alt w-full py-2 rounded-md">
      {{form.step !== form.maxStep ? "Siguiente" : "Enviar"}}
    </button>
  </form>
</template>


<style scoped>

</style>