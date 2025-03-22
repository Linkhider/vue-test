<script setup>
import Post from '../components/Post.vue'
import {ref} from 'vue'

let title = ref('')
let text = ref('')
const getInitialPosts =  () =>[
  {
    id: 1,
    title: 'Title1',
    text: 'text1',
  },
  {
    id: 2,
    title: 'Title2',
    text: 'text2',
  },
  {
    id: 3,
    title: 'Title3',
    text: 'text3',
  }
]
const posts = ref(getInitialPosts())
function addPost() {
  const newPost = {
    id: Date.now(),
    title: title.value,
    text: text.value,
  }
  posts.value.push(newPost)
}
</script>

<template>
  <main>
    <form class="inputs" @submit.prevent>
      <h4>Создание поста</h4>
      <input type="text" v-model="title" placeholder="Назавние">
      <input type="text" v-model="text" placeholder="Текст">
      <button @click="addPost">Отправить</button>
    </form>
    <TransitionGroup tag="div" name="fade" class="container">
      <Post
          v-for="(post, index) in posts"
          :key="post.id"
          :title=post.title
          :text=post.text
          @delete="posts.splice(index, 1)"
       />
    </TransitionGroup>
  </main>
</template>

<style scoped lang="scss">
.inputs {
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    border: 1px solid teal;
    padding: 10px 15px;
    margin-top: 10px;
  }

  button {
    padding: 10px 15px;
    border: 2px solid teal;
    background: transparent;
    margin-top: 10px;
    margin-left: auto;

    &:hover {
      color: aquamarine;
      cursor: pointer;
      background: teal;
    }
  }
}
.container{
  .container {
    position: relative;
    padding: 0;
    list-style-type: none;
  }
}
/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}
/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
</style>
