// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    //
    selectedYearSem: {},
    selectedDep: {}
  }),
})
