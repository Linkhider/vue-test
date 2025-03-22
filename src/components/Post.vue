<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="post">
    <h1 class="post__title">{{ title }}</h1>
    <h3>
     {{text}}
    </h3>
    <button @click="$emit('delete')">Удалить</button>
  </div>
</template>

<style scoped lang="scss">
.post{
  margin-top: 15px;
  border: 2px solid black;
  padding: 10px;
  min-height: 100px;
  &__title {
  }
  button{
    margin-top: 10px;
    padding: 10px;
    border: 2px solid red;
    background: transparent;
    &:hover{
      background: red;
      color: white;
      cursor: pointer;
    }
  }
}
</style>
