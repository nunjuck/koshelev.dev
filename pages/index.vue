<template>
  <div class="page">
    <TitlePage :title="title" :subtitle="subtitle" />
    <div class="container">
      <section class="projects">
        <h2>Мои проекты:</h2>
        <ul class="projects__list">
          <li class="projects__item">
            <NuxtLink to="/librarybook" class="projects__link"
              >Библеотека книг
            </NuxtLink>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import TitlePage from '@/components/TitlePage.vue'

export default {
  name: 'Index',
  components: { TitlePage },
  data() {
    return {
      title: 'Привет! Я фронтенд разработчик',
      subtitle:
        'Специализируюсь на разработке доступных и удобных интерфейсов. Хорошо разбираюсь в UX/UI',
    }
  },
  head() {
    return {
      title: 'Никита Кошелев – Frontend разработчик',
    }
  },
}
</script>

<style lang="postcss" scoped>
.projects {
  margin-top: 2rem;
  @media (--screen-md) {
    margin-top: 4rem;
  }
}
</style>
