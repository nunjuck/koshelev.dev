<template>
  <div class="page">
    <TitlePage :title="title" :subtitle="subtitle" />
    <section class="container">
      <div class="category-nav">
        <button
          type="button"
          :aria-expanded="mobileMenuIsShow"
          class="category-nav__mobile-button"
          @click="mobileMenuIsShow = !mobileMenuIsShow"
          v-html="mobileMenuIsShow ? 'Скрыть категории' : 'Показать категории'"
        ></button>
        <ul v-show="mobileMenuIsShow" class="category-nav__list">
          <li
            v-for="category in categories"
            :key="category"
            class="category-nav__item"
          >
            <a href="#" class="category-nav__link">{{ category }}</a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import TitlePage from '@/components/TitlePage.vue'

export default {
  name: 'Index',
  components: { TitlePage },
  data() {
    return {
      title: 'Дам почитать, только тебе! 😉',
      subtitle: 'Выбери книгу и напиши мне в <a href="#">Телеграм</a>',
      categories: [
        'Маркетинг',
        'Дизайн',
        'Программирование',
        'Бизнес',
        'Психология',
      ],
      mobileMenuIsShow: false,
    }
  },
  head() {
    return {
      title: 'Личная библеотека',
    }
  },
}
</script>

<style lang="postcss" scoped>
.category-nav {
  margin-top: 6.25rem;
  position: relative;
}
.category-nav__list {
  padding-left: 0;
  @media (--screen-lg) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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
</style>
