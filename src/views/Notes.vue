<script setup>
import Post from '../components/Post.vue'
import {ref} from 'vue'

let title = ref('')
let text = ref('')
const getInitialPosts = () => [
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
  title.value = ''
  text.value = ''
}
</script>

<template>
  <main>
    <form class="inputs" @submit.prevent="addPost">
      <h2>Создание поста</h2>
      <div class="form__group field">
        <input
            v-model="title"
            type="text"
            class="form__field"
            placeholder="Name"
            name="title"
            id='title'
            required/>
        <label for="title" class="form__label">Назавние</label>
      </div>
      <div class="form__group field">
        <input
            v-model="text"
            type="text"
            class="form__field"
            placeholder="Name"
            name="text"
            id='text'
            required/>
        <label for="text" class="form__label">Текст</label>
      </div>
      <button type="submit">Отправить</button>
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
main {
  padding: 15px;
}

$primary: #11998e;
$secondary: #38ef7d;
$black: #2c2c2c;
$gray: #9b9b9b;
.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid $gray;
  outline: 0;
  font-size: 1.3rem;
  color: $black;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: $gray;
}

.form__field:focus {
  ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: $primary;
    font-weight: 700;
  }

  padding-bottom: 6px;
  //font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, $primary, $secondary);
  border-image-slice: 1;
}

.form__field {
  &:required, &:invalid {
    box-shadow: none;
  }
}

.inputs {
  border: 3px solid teal;
  padding: 10px;
  border-radius: 10px;
  width: 50%;
  margin-left: 25%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;

  h2 {
    color: teal;
  }

  button {
    border-radius: 10px;
    padding: 10px 15px;
    border: 2px solid teal;
    background: transparent;
    margin-top: 10px;
    margin-left: auto;
    transition: 0.2s ease;

    &:hover {
      color: aquamarine;
      cursor: pointer;
      background: teal;
    }
  }
}

.container {
  position: relative;
  padding: 0;
  list-style-type: none;
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
  width: 100%;
}
</style>
