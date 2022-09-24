import { defineStore } from 'pinia';

const useMainStore = defineStore('main', {
  state: () => ({ count: 0 }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count += 1;
    },
  },
});
export default useMainStore;
