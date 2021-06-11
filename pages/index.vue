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
            v-for="category in categories"
            :key="category.id"
            class="category-nav__item"
          >
            <a
              href="#"
              @click="flterCategory(books, category.id)"
              class="category-nav__link"
              >{{ category.name }}</a
            >
          </li>
        </ul>
      </div>
      <section class="books">
        <Book
          v-for="book in booksIsFiltered.length !== 0 ? booksIsFiltered : books"
          :key="book.id"
          :name="book.properties.Name.title[0].plain_text"
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

export default {
  name: 'Index',
  components: { TitlePage, Book },
  async asyncData({ $axios }) {
    const apiResults = await $axios.$post(
      `https://api.notion.com/v1/databases/${process.env.DATA_BASE}/query`,
      {
        filter: {
          property: 'name',
          text: {
            is_not_empty: true,
          },
        },
      }
    )
    const books = apiResults.results
    return { books }
  },
  data() {
    return {
      title: 'Дам почитать, только тебе! 😉',
      subtitle: 'Выбери книгу и напиши мне в <a href="#">Телеграм</a>',
      books: [],
      categories: {},
      mobileMenuIsShow: false,
      booksIsFiltered: [],
    }
  },
  head() {
    return {
      title: 'Личная библеотека',
    }
  },
  created() {
    this.getCategories(this.books)
  },
  methods: {
    getCategories(array) {
      const categories = []
      array.forEach((element) => {
        categories.push(element.properties.Category.select)
      })
      this.categories = categories
    },
    flterCategory(books, categoryId) {
      const filteredBooks = books.filter(
        (element) => element.properties.Category.select.id === categoryId
      )
      this.booksIsFiltered = filteredBooks
    },
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
