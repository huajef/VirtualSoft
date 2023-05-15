<script setup lang="ts">
import { useRegistrationDataStore } from "@/stores/registrationData";

const form = useRegistrationDataStore()
</script>

<template>
  <header>
    <div class="shadow bg-white flex justify-center py-2 relative">
      <button v-if="form.step !== 1" @click="form.previousStep()" class="absolute left-4 top-2/4	translate-y-[-50%]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
          </svg>
      </button>
      <img src="../assets/Logo-Virtualsoft-gris.png" alt="logo de la empresa" height="50" />
    </div>
    <div class="h-3 bg-gray-100 flex">
        <div class="bg-primary-color" :style="{'width': ((100/3)*form.step) + '%'}" />
    </div>

  </header>
</template>

