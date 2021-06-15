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
          `api/v1/databases/${process.env.DATA_BASE}/query`,
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
      fetchCategories({ commit, getters }) {
        const books = getters.getBooks
        const categories = []

        books.forEach((element) => {
          categories.push(element.properties.Category.select)
        })
        commit('setCategories', categories)
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
