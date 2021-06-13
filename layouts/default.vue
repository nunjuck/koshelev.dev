<template>
  <div class="layout-wrap">
    <div class="layout-wrap__header">
      <Header />
    </div>
    <div class="layout-wrap__main">
      <Nuxt />
    </div>
    <div class="layout-wrap__footer">
      <Footer />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.layout-wrap {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.layout-wrap__main {
  flex-grow: 1;
}
</style>
