<template>
  <div class="page">
    <TitlePage :title="title" :subtitle="subtitle" />
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
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
}
</script>
