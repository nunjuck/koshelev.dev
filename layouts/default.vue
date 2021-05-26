<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="person-self">
          <picture>
            <img
              class="person-self__avatar avatar"
              src="~/assets/images/my-avatar/my-avatar.jpg"
              srcset="~/assets/images/my-avatar/my-avatar@2x.jpg 2x"
              alt="Фото Никиты Кошелева"
            />
          </picture>
          <div class="person-self__info">
            <div class="person-self__name">Никита Кошелев</div>
            <span class="person-self__signature">Моя библеотека книг 📚</span>
          </div>
        </div>
      </div>
    </header>
    <Nuxt />
  </div>
</template>

<style lang="postcss">
.header {
  padding-top: 1.875rem;
}

.person-self {
  display: flex;
  align-items: center;
}

.person-self__avatar {
  margin-right: 1rem;
  width: 40px;
  height: 40px;

  @media (--screen-md) {
    width: auto;
    height: auto;
  }
}

.person-self__name {
  font-weight: 500;
  font-size: var(--font-size-base);
  line-height: 1.3;

  @media (--screen-md) {
    font-size: 1.375rem;
  }
}

.person-self__signature {
  color: var(--text-light-color);
  line-height: 1.2;
  margin-top: 0.438rem;
  display: inline-block;
  font-size: 0.875rem;

  @media (--screen-md) {
    font-size: 1.25rem;
  }
}
</style>
