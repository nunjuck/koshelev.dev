<template>
  <div class="container">
    <div class="heading-page">
      <h1 class="heading-page__title">{{ title }}</h1>
      <p
        v-show="subtitle"
        class="heading-page__description"
        v-html="subtitle"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitlePage',
  props: {
    title: {
      type: String,
      required: true,
      default() {
        return 'Тут должен быть какой-то загловок! Где-то я ошибся'
      },
    },
    subtitle: {
      required: false,
      type: String,
      default() {
        return 'Тут должен подзаголвоок, который я не указал'
      },
    },
  },
}
</script>

<style lang="postcss" scoped>
.heading-page {
  margin-top: 140px;
}
.heading-page__title {
  font-size: 2.5rem;
  line-height: 1.5;
}
</style>
