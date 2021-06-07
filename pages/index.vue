<template>
  <TitlePage :title="title" :subtitle="subtitle" />
</template>

<script>
export default {
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
