<template>
  <div>
    <div class="container">
      <header class="header">
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
        <nav
          class="main-nav"
          aria-label="Главная навигация по сайту"
          role="navigation"
        >
          <ul class="main-nav__list">
            <li
              class="main-nav__item main-nav__item--dissabled"
              aria-current="page"
            >
              <a href="#" class="main-nav__link">Обо мне</a>
            </li>
            <li class="main-nav__item">
              <a href="#" class="main-nav__link">Проекты</a>
            </li>
          </ul>
        </nav>
        <div class="contacts">
          <ul class="contacts__list" aria-label="Список контактных данных">
            <li class="contacts__item">
              <a
                href="https://github.com/nunjuck"
                class="contacts__link"
                target="_blank"
                >Гитхаб</a
              >
            </li>
            <li class="contacts__item">
              <a
                href="https://t.me/nunjuck"
                class="contacts__link"
                target="_blank"
                >Телеграм</a
              >
            </li>
          </ul>
        </div>
      </header>
    </div>
    <Nuxt />
  </div>
</template>

<style lang="postcss" scoped>
.header {
  padding-top: 1.875rem;
  display: flex;
  flex-wrap: wrap;
  @media (--screen-md) {
    justify-content: space-between;
    align-items: center;
  }
}

.person-self {
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 0.5rem;

  @media (--screen-md) {
    width: auto;
    flex-grow: 1;
    margin-bottom: 0;
  }
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

.main-nav__list,
.contacts__list {
  list-style-type: none;
  padding-left: 0;
}

.main-nav__list {
  margin-right: 1rem;

  @media (--screen-md) {
    margin-right: 1.2rem;
  }
}

.contacts__list {
  position: relative;
  padding-left: 1rem;

  @media (--screen-md) {
    padding-left: 1.2rem;
  }
  &::before {
    --size: 3px;

    position: absolute;
    content: '';
    left: calc(var(--size) / -2);
    top: 50%;
    width: var(--size);
    height: var(--size);
    background-color: #c4c4c4;
    border-radius: 50%;
  }
}

.main-nav__item,
.contacts__item {
  display: inline-block;
  &:not(:last-child) {
    margin-right: 0.4rem;

    @media (--screen-sm) {
      margin-right: 1rem;
    }

    @media (--screen-md) {
      margin-right: 1.2rem;
    }
  }
}
.main-nav__link,
.contacts__link {
  color: var(--nav-color);
  text-decoration: none;
  font-size: 0.875rem;

  &:hover,
  &:focus,
  &:active {
    color: #333;
  }

  @media (--screen-md) {
    font-size: 1rem;
  }
}

.main-nav__item--dissabled {
  opacity: 0.4;
}
</style>
