<script setup lang="ts">
  import {useRegistrationDataStore} from "@/stores/registrationData";
  import {ref} from "vue";

  const form = useRegistrationDataStore();
  const data = ref({
    address: "",
    postalCode: ""
  });

  function addFormData() {
    form.dataByStep(form.step, data.value)
    form.registrationSuccessful();
  }
</script>

<template>
  <form @submit.prevent="addFormData">
    <div class="flex flex-col mb-2.5">
      <label class="mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">Dirección residencia</label>
      <input
        required
        type="text"
        placeholder="carrera x"
        v-model="data.address"
        class="py-2 px-2 rounded-md border border-gray-300 bg-white outline-none" />
    </div>
    <div class="flex flex-col mb-2.5">
      <label class="mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">Código postal</label>
      <input
        required
        type="number"
        placeholder="42323"
        v-model="data.postalCode"
        class="py-2 px-2 rounded-md border border-gray-300 bg-white outline-none" />
    </div>
    <button class="bg-primary-color text-white hover:bg-primary-color-alt w-full py-2 rounded-md">
      {{form.step !== form.maxStep ? "Siguiente" : "Enviar"}}
    </button>
  </form>
</template>

<style scoped>

</style>