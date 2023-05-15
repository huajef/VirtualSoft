<script setup lang="ts">
import axios from "axios";
import { useRegistrationDataStore } from "@/stores/registrationData";
import { onMounted, ref } from "vue";
import { computed } from "vue";


const form = useRegistrationDataStore();

const countries = ref(null);
const data = ref({
  name: "",
  gender: "",
  document: "",
  country: "",
  secondName:"",
  documentType: "",
  imageOne: null,
  imageTwo: null,
  nameValid: null,
  documentValid: false,
  dirty:false,
});

function gettingImage(event) {
  const name = event.target.name
  data.value[name] = event.target.files;
}

// function validateName() {
//   data.value.nameValid = data.value.name.length >= 1;
//   console.log(data.value.name.length)

// }

function validateDocument() {
  data.value.documentValid = data.value.document.length >= 5;
  // console.log(data.value.document.length)
  console.log(data.value.document)

}

function validName() {
  const nameRegex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]{2,}$/u;
  data.value.nameValid = nameRegex.test(data.value.name);
  console.log('valor del ',data.value.nameValid);
}





// function submit() {
//   if (!data.value.formValid) {
//     document.getElementById("error-msg").innerText = "Falta llenar algún campo";
//     return;
//   }
//   console.log("Formulario enviado");
// }

// const formValid = computed(() => {
//   return data.value.nameValid && data.value.emailValid;
// });

function addFormData() {
  form.dataByStep(form.step, data.value)
  form.nextStep();
}

onMounted(async () => {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    countries.value = response.data;
  } catch (error) {
    console.error(error);
  }
});



</script>

<template>
  <form @submit.prevent="addFormData">
    <div class="flex flex-col mb-2.5">
      <label class="mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">País</label>
      <select required v-model="data.country" class="py-2 px-2 rounded-md border border-gray-300 bg-white outline-none">
        <option value="" selected disabled hidden>Seleccionar País</option>
        <!-- <option value="Colombia">Colombia</option>
                  <option value="Brasil">Brasil</option> -->
        <option v-for="country in countries" :value="country.name.common" :key="country.name.common">{{
          country.name.common }}</option>

        <!-- <option v-for="country in countries" :key="country.name.common">{{ country.name.common }}</option> -->
      </select>
    </div>
    <div class="flex flex-col mb-2.5">
      <label class="mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">Género</label>
      <select required v-model="data.gender" class="py-2 px-2 rounded-md border border-gray-300 bg-white outline-none">
        <option value="" selected disabled hidden>Seleccionar Género</option>
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
      </select>
    </div>
    <div class="flex flex-col mb-2.5">
      <label class="mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">Primer nombre</label>
      <div class="flex items-center">
        <input r equired @input="validName" type="text" v-model="data.name" placeholder="Yeferson"
          class="py-2 px-2 rounded-md border border-gray-300 bg-white outline-none" @focus="data.dirty = true" />

        <!-- <span v-if="data.nameValid" class="text-green-700 text-3xl">✓</span>
        <span v-if="data.nameValid = null && !data.nameValid"  class="text-green-700 text-3xl"></span> -->
        <span v-if="data.nameValid" class="text-green-700 text-3xl">✓</span>
        <span v-if="data.dirty && !data.nameValid" class="text-green-700 text-3xl">x</span>

        <!-- <span v-else class="text-red-700 text-3xl">✕</span> -->
        
      </div>

    </div>
    <div class="flex flex-col mb-2.5">
      <label class="mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">Segundo nombre</label>
      <input required  @input="validName" type="text" placeholder="Yeferson" v-model="data.secondName"
        class="py-2 px-2 rounded-md border border-gray-300 bg-white outline-none" @focus="data.secondName = ''" />
        <span v-if="data.nameValid" class="text-green-700 text-3xl">✓</span>
        <span v-if="data.secondName.length >=1 && !data.nameValid" class="text-green-700 text-3xl">x</span>
    </div>
    <div class="flex flex-col mb-2.5">
      <label class="mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">Fecha de nacimiento</label>
      <input required type="date" class="py-2 px-2 rounded-md border border-gray-300 bg-white outline-none" />
     
    </div>
    <div class="flex flex-col mb-2.5">
      <label class="mb-1">Tipo documento</label>
      <select required v-model="data.documentType"
        class="py-2 px-2 rounded-md border border-gray-300 bg-white outline-none">
        <option value="" selected disabled hidden>Seleccionar tipo de documento</option>
        <option value="Cédula de ciudadanía">Cédula de ciudadanía</option>
        <option value="Pasaporte">Pasaporte</option>
        <option value="Cédula de extranjería">Cédula de extranjería</option>
      </select>
    </div>
    <div class="flex flex-col mb-2.5">
      <label class="mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">
        Número documento
      </label>
      <div class="flex items-center">
        <input required @input="validateDocument" type="number" placeholder="108186294" v-model.number="data.document"
          class="py-2 px-2 rounded-md border border-gray-300 bg-white outline-none" />
        <span v-if="data.documentValid" class="text-green-700 text-3xl">✓</span>


      </div>

    </div>
    <div class="flex flex-col mb-2.5">
      <label class="mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">Foto documento – Frente</label>
      <input required type="file" name="imageOne" accept="image/jpg" @change="gettingImage" class="py-2 px-2 rounded-md border
                  border-gray-300 bg-white outline-none
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-violet-50 file:text-violet-700
                  hover:file:bg-violet-100" />
    </div>
    <div class="flex flex-col mb-2.5">
      <label class="mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">Foto documento – Reverso</label>
      <input required type="file" name="imageTwo" accept="image/jpg" @change="gettingImage" class="py-2 px-2 rounded-md border
                  border-gray-300 bg-white outline-none
                  border-gray-300 bg-white outline-none
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-violet-50 file:text-violet-700
                  hover:file:bg-violet-100" />
    </div>
    <button class="bg-primary-color text-white hover:bg-primary-color-alt w-full py-2 rounded-md">
      {{ form.step !== form.maxStep ? "Siguiente" : "Enviar" }}
    </button>
  </form>
</template>

<style scoped></style>