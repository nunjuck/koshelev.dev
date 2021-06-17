<template>
  <div class="page">
    <TitlePage :title="title" :subtitle="subtitle" />
    <div class="container">
      <div class="category-nav">
        <button
          type="button"
          :aria-expanded="mobileMenuIsShow"
          class="category-nav__mobile-button"
          @click="mobileMenuIsShow = !mobileMenuIsShow"
        >
          {{ mobileMenuIsShow ? 'Скрыть категории' : 'Показать категории' }}
        </button>
        <ul v-show="mobileMenuIsShow" class="category-nav__list">
          <li
            v-for="category in getCategories"
            :key="category.id"
            class="category-nav__item"
          >
            <a href="#" class="category-nav__link">{{ category.name }}</a>
          </li>
        </ul>
      </div>
      <section class="books">
        <Book
          v-for="book in getBooks"
          :key="book.id"
          :name="book.properties.Name.title[0].plain_text"
          :cover="book.properties.Cover.files[0].name"
          :vailability="book.properties.Available.checkbox"
        />
      </section>
    </div>
    <!-- <pre>{{ books }}</pre> -->
  </div>
</template>

<script>
import TitlePage from '@/components/TitlePage.vue'
import Book from '@/components/Book.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'LibraryBook',
  components: { TitlePage, Book },
  data() {
    return {
      title: 'Дам почитать, только тебе! 😉',
      subtitle: 'Выбери книгу и напиши мне в <a href="#">Телеграм</a>',
      mobileMenuIsShow: false,
      booksIsFiltered: [],
    }
  },
  head() {
    return {
      title: 'Личная библеотека',
    }
  },
  computed: mapGetters(['getBooks', 'getCategories']),
  async mounted() {
    await this.$store.dispatch('fetchBooks')
    this.$store.dispatch('filterCategories')
  },
}
</script>

<style lang="postcss" scoped>
.category-nav__mobile-button {
  @media (--screen-lg) {
    display: none;
  }
}
.category-nav {
  margin-top: 6.25rem;
  position: relative;
  margin-bottom: 2rem;
}
.category-nav__list {
  padding-left: 0;
  @media (--screen-lg) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: block !important;
  }
}
.category-nav__item {
  list-style-type: none;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
  @media (--screen-lg) {
    padding-bottom: 0.813rem;
    display: inline-block;
    &:not(:last-child) {
      margin-right: 3.75rem;
      margin-bottom: 0;
    }
  }
}
.category-nav__item--active {
  border-bottom: 1px solid #000;
  a {
    opacity: 1;
  }
}
.category-nav__link {
  color: var(--nav-color);
  opacity: 0.54;
  text-decoration: none;
  font-size: 1.125rem;
  transition: opacity 0.15s ease;
  &:hover,
  &:focus {
    opacity: 0.7;
  }
  &:active {
    opacity: 1;
  }
}
.books {
  padding-bottom: 3rem;
  @media (--screen-sm) {
    grid-gap: 30px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (--screen-md) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (--screen-lg) {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
