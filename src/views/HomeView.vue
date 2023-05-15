<script setup lang="ts">
import StepOne from "@/components/form/StepOne.vue";
import StepTwo from "@/components/form/StepTwo.vue";
import StepThree from "@/components/form/StepThree.vue";
import Success from "@/components/form/Success.vue";

import { useRegistrationDataStore } from "@/stores/registrationData";
const form = useRegistrationDataStore();
</script>

<template>
  <main >
    <div
       class=" mx-auto mt-8 sm:w-[500px] w-11/12">
      <h1 class="text-primary-color text-2xl mb-1">Paso {{form.step}} de {{form.maxStep}}: Cliente</h1>
      <div class="border-t py-6">
        <StepOne v-if="form.step === 1"/>
        <StepTwo v-if="form.step === 2"/>
        <StepThree v-if="form.step === 3"/>
      </div>
    </div>
    <Success v-if="form.success"/>
  </main>
</template>
