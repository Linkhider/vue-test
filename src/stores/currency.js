import {defineStore} from 'pinia';

export const useCurrencyStore = defineStore('counter', {
  actions: {
    async fetchCurrency() {
      const res = await fetch(`https://www.cbr-xml-daily.ru/daily_json.js`)
      return await res.json()
    }
  },

});