import { defineStore } from "pinia";
import * as cluster from "cluster";

export const useRegistrationDataStore = defineStore( {
  id: "form",
  state: () => ({
    step: 3 as number,
    maxStep: 3 as number,
    success: false as boolean,
    form: {
      "step_1": {},
      "step_2": {},
      "step_3": {},
    }
  }),

  actions: {
    nextStep() {
      if(this.step < this.maxStep) {
        this.step++;
      }
    },
    previousStep() {
      if(this.step > 1) {
        this.step--;
      }
    },
    dataByStep(step, data) {
      this.form["step_" + step] = data;
    },
    registrationSuccessful() {
      this.success = true
    },
    reset() {
      this.step = 1;
      this.maxStep = 3;
      this.success = false;
      this.form = {
        "step_1" : {},
        "step_2" : {},
        "step_3" : {}
      }
    }
  },
});
