<template>
  <div class="header">
    <router-link class="header__item" to="/">Main</router-link>
    <router-link class="header__item" to="/test">Test</router-link>
  </div>
</template>
<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
  background: #aeaeae;
  .router-link-active {
    color: #00a650;
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
      width: 0; /*задаём длинну линии до наведения курсора*/
      height: 2px; /*задаём ширину линии*/
      background-color: #00a650; /*задаём цвет линии*/
      content: "";
      transition: width 0.3s ease-out; /*задаём время анимации*/
    }
    &:hover:after,
    &:focus:after {
      width: 100%; /*устанавливаем значение 100% чтобы ссылка подчёркивалась полностью*/
    }
  }
}
</style>