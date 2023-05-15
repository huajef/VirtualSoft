<script setup lang="ts">
  import { onMounted } from 'vue'
  import {useRegistrationDataStore} from "@/stores/registrationData";
  const form = useRegistrationDataStore();

  onMounted(() => {
    const stepOne = form.form["step_1"];
    const stepTwo = form.form["step_2"];
    const stepThree = form.form["step_3"];

    for (const property in stepOne) {
      console.log(`${property}: ${stepOne[property]}`);
    }
    for (const property in stepTwo) {
      console.log(`${property}: ${stepTwo[property]}`);
    }
    for (const property in stepThree) {
      console.log(`${property}: ${stepThree[property]}`);
    }
  })
</script>

<template>
  <div class="fixed inset-x-0	inset-y-0	bg-black-opacity z-10 flex justify-center items-center">
    <div class="bg-white z-10 w-[500px] h-[300px] m-3 rounded-md flex justify-center items-center relative">
      <div class="flex justify-center items-center flex-col	">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-green-600 text-3xl">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
        <p class="text-green-600 text-3xl">¡EXITO!</p>
      </div>
      <button class="absolute top-2 right-2" @click="form.reset()">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
</style>