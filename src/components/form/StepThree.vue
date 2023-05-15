<script setup lang="ts">
  import {useRegistrationDataStore} from "@/stores/registrationData";
  import {ref} from "vue";

  const form = useRegistrationDataStore();
  const data = ref({
    address: "",
    postalCode: "",
    validAddress:false,
    validPostalCode:false,
  });

  function addFormData() {
    form.dataByStep(form.step, data.value)
    form.registrationSuccessful();
  }

  function validatefield(field: string) {
    const fieldValue = data.value[field];
    const validField = field === 'address' ? 'validAddress' : 'validPostalCode';
    data.value[validField] = fieldValue.length >= 5;
  }
</script>

<template>
  <form @submit.prevent="addFormData">
    <div class="flex flex-col mb-2.5">
      <label class="mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">Dirección residencia</label>
      <div class="flex items-center mb-2.5"> 
        <input
        required
        @input="() => validatefield('address')"
        type="text"
        placeholder="carrera x"
        v-model="data.address"
        class="py-2 px-2 rounded-md border border-gray-300 bg-white outline-none flex-1" />
        <span v-if="data.validAddress" class="text-green-700 text-3xl">✓</span>
        <span v-if="data.address.length >=1 && !data.validAddress" class="text-red-700 text-3xl">x</span> 
      </div>
    </div>
    <div class="flex flex-col mb-2.5">
      <label class="mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">Código postal</label>
      <div class="flex items-center mb-2.5"> 
        <input
        required
        @input="() => validatefield('postalCode')"
        type="number"
        placeholder="42323"
        v-model="data.postalCode"
        class="py-2 px-2 rounded-md border border-gray-300 bg-white outline-none flex-1" />
        <span v-if="data.validPostalCode" class="text-green-700 text-3xl">✓</span>
        <span v-if="data.postalCode.length >=1 && !data.validPostalCode" class="text-red-700 text-3xl">x</span> 
      </div>
    </div>
    <button class="bg-primary-color text-white hover:bg-primary-color-alt w-full py-2 rounded-md">
      {{form.step !== form.maxStep ? "Siguiente" : "Enviar"}}
    </button>
  </form>
</template>

<style scoped>

</style>
