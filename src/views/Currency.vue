<script setup>
import Loader from '@/components/Loader.vue'
import {storeToRefs} from 'pinia'
import {computed, onMounted, ref} from "vue";
import {useCurrencyStore} from "@/stores/currency.js";

const store = useCurrencyStore();
const {counter} = storeToRefs(store);

let loading = ref(true)
let currency = ref('')
let rub = ref(false)
let search = ref('')

onMounted(async () => {
  currency.value = await store.fetchCurrency()
  console.log(currency.value)
  console.log(loading.value)
  loading.value = false

})

const filteredList = computed(() => {
  if (!currency.value || !currency.value.Valute) return [];

  const searchLower = search.value.toLowerCase().trim();
  return Object.values(currency.value.Valute).filter(({CharCode, Name}) =>
      CharCode.toLowerCase().includes(searchLower) ||
      Name.toLowerCase().includes(searchLower)
  );
});

</script>

<template>
  <router-view/>
  <div class="main">
    <Loader v-if="loading"/>
    <div class="container" v-else>
      <div class="nav-wrapper blue lighten-3">
        <div class="input-field">
          <input id="search" type="search" v-model="search.value" required>
          <label class="label-icon" for="search"><i class="material-icons">search</i></label>
          <i @click="search.value=''" class="material-icons">close</i>
        </div>
      </div>
      <button @click="rub = !rub" class="waves-effect waves-light btn"><i class="material-icons">compare_arrows</i>
      </button>
      <router-link
          tag="div"
          :to="{
          name: 'Converter',
          params: { cur: cur.value}
          }"
          class="card"
          v-for="cur in filteredList"
          :key="cur.id">
        <div class="card__name">{{ cur.Name }}</div>
        <div class="card__items">

          <div v-if="!rub" class="card__items-nominal">1 {{ cur.CharCode }}</div>
          <div v-else>1 RUB</div>

          <img src="../assets/img/double-arrow.svg" class="col s2">

          <div v-if="!rub">{{ cur.Value / cur.Nominal }} RUB</div>
          <div v-else class="card__items-nominal">{{
              (1 / (cur.Value / cur.Nominal)).toFixed(6) + ' ' + cur.CharCode
            }}
          </div>

          <div
              class="card__items-prev"
              :class="{below: (cur.Value < cur.Previous)}"
          >
            <i
                class="material-icons"
                :class="{below: (cur.Value < cur.Previous)}"
            >
              arrow_upward
            </i>
            {{ Math.abs(cur.Value - cur.Previous).toFixed(4) }}
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<style lang="scss">
button {
  margin: 10px 0;
}

.card {
  cursor: pointer;
  padding: 10px;

  &__name {
    margin-bottom: 5px;
    color: gray;
  }

  &__items {
    display: flex;
    width: 100%;
    align-items: center;

    &-nominal {

    }

    img {
      margin: 0 20px;
      width: 25px;
    }

    &-prev {
      margin-left: auto;
      display: flex;
      align-items: center;
      color: #06ac06;

      &.below {
        color: red;

        i {
          transform: rotate(180deg);
        }
      }
    }
  }
}
</style>