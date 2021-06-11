<template>
  <article class="book-card">
    <div class="book-card__cover">
      <img src="~/assets/images/mooks/book.jpg" alt="Book" />
    </div>
    <h3 class="book-card__name" title="Чистая архитектура">
      {{ name }}
    </h3>
    <span
      class="book-card__availability"
      :class="{ 'book-card__availability--yes': vailability }"
    >
      {{ vailability ? 'Доступна' : 'Занята' }}
    </span>
    <button class="book-card__copy" type="button" @click="copySign">
      Скопировать название
    </button>
  </article>
</template>

<script>
export default {
  name: 'Book',
  props: {
    name: {
      type: String,
      default() {
        return 'Забыл добавить название книги'
      },
    },
    vailability: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
  methods: {
    copySign() {
      navigator.clipboard.writeText(this.$refs.foo.$el.outerHTML)
    },
  },
}
</script>

<style lang="postcss" scoped>
.book-card {
  position: relative;
  padding-bottom: 2rem;
}
.book-card__cover {
  img {
    width: 100%;
  }
}

.book-card__name {
  margin-top: 1rem;
  color: var(--text-color);
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.book-card__availability {
  display: block;
  margin-top: 0.6rem;
  color: var(--danger-color);

  &--yes {
    color: var(--access-color);
  }
}

.book-card__copy {
  border: 0;
  background-color: transparent;
  padding: 0;
  color: var(--link-color);
  position: absolute;
  bottom: 0;
  cursor: pointer;
}
</style>
