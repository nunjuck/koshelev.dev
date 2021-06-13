<template>
  <footer>
    <div class="container">
      <div class="main-foot">
        <div class="main-foot__copyright">2021 ИП Кошелев Н.А.</div>
        <div class="main-foor__mail">
          <a href="mailto:koshelevn92@gmail.com">koshelevn92@gmail.com</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
footer {
  margin-top: 2rem;
  padding: 1rem 0;
}

.main-foot {
  @media (--screen-md) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.main-foot__copyright {
  font-size: 0.875rem;
  color: var(--text-light-color);
  margin-bottom: 0.5rem;
}

.main-foor__mail {
  font-size: 0.875rem;
  a {
    color: var(--text-light-color);
    &:hover,
    &:focus,
    &:active {
      color: darken(var(--text-light-color), 10%);
    }
  }
}
</style>
