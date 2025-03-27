<template>
  <div class="header-wrap">
    <div class="header">
      <router-link class="header__item" to="/">Main</router-link>
      <router-link class="header__item" to="/currency">Currency</router-link>
    </div>
  </div>

</template>
<style scoped lang="scss">
.header-wrap{
    display: flex;
    align-items: center;
    position: sticky;
    height: 60px;
    top: -30px;
  background: rgba(0, 128, 128, 0.4);

}
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  height: 30px;
  width: 100%;

  .router-link-active {

    &:after {
      transform: scaleX(1);
    }
  }
  &__item {
    position: relative;
    color: black;
    text-decoration: none;
    padding: 10px;
    &:after {
      display: block;
      position: absolute;
      left: 0; /*изменить на right:0;, чтобы изменить направление подчёркивания */
      width: 100%; /*задаём длинну линии до наведения курсора*/
      height: 2px; /*задаём ширину линии*/
      background-color: #00a650; /*задаём цвет линии*/
      content: "";
      transform: scaleX(0);
      transition: transform 0.3s ease-out; /*задаём время анимации*/
    }
    &:hover:after,
    &:focus:after {
      transform: scaleX(1);
    }
  }
}
</style>
<script setup lang="ts">
</script>