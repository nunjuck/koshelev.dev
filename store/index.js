import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
    state: {
      books: [],
      categories: [],
    },
    getters: {
      getBooks(state) {
        return state.books
      },
      getCategories(state) {
        return state.categories
      },
    },
    actions: {
      async fetchBooks({ commit }) {
        const result = await this.$axios.$post(
          'api/v1/databases/c6baa094890c49d3ae3bfd3f209dc48d/query',
          {
            filter: {
              property: 'name',
              text: {
                is_not_empty: true,
              },
            },
          }
        )
        const books = result.results
        commit('setBooks', books)
      },
      filterCategories({ commit, getters }, data) {
        const books = getters.getBooks

        const categories = books.map((elementBook) => {
          return elementBook.properties.Category.select
        })

        const filteredCategories = categories.filter((category, index) => {
          return (
            index ===
            categories.findIndex((obj) => {
              return JSON.stringify(obj) === JSON.stringify(category)
            })
          )
        })
        commit('setCategories', filteredCategories)
      },
    },
    mutations: {
      setBooks(state, books) {
        state.books = books
      },
      setCategories(state, categories) {
        state.categories = categories
      },
    },
  })
}

export default store
