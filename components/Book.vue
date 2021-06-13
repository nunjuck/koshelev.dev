<template>
  <article class="book-card">
    <div class="book-card__cover">
      <img :src="getImage(cover)" :alt="name" width="100%" />
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
    <button
      class="book-card__copy"
      type="button"
      @click="copySign(name, $event)"
    >
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
    cover: {
      type: String,
      default() {
        return 'no-cover'
      },
    },
  },
  methods: {
    getImage(image) {
      return require(`../assets/images/book-covers/${image}`)
    },
    copySign(data, event) {
      const th = event.target
      const name = th.innerText
      navigator.clipboard
        .writeText(data)
        .then(() => {
          th.innerText = 'Скопировано'
          setTimeout(() => {
            th.innerText = name
          }, 2000)
        })
        .catch((error) => {
          console.error(
            'При копировании произошла ошибка. Обновите страницу или скопируйте вручную',
            error
          )
        })
    },
  },
}
</script>

<style lang="postcss" scoped>
.book-card {
  position: relative;
  padding-bottom: 2rem;
  max-width: 320px;
  &:not(:last-child) {
    margin-bottom: 2rem;
    @media (--screen-sm) {
      margin-bottom: 0;
    }
  }
}

.book-card__cover {
  border: 1px solid #f2f2f2;
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
  @media (--screen-md) {
    font-size: 0.875rem;
    text-align: left;
  }
}
</style>
