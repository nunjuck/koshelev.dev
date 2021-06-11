import { shallowMount } from '@vue/test-utils'
import Book from '@/components/Book.vue'

describe('Index Page', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Book)
    expect(wrapper.vm).toBeTruthy()
  })
})
