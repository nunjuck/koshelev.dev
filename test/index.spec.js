import { shallowMount } from '@vue/test-utils'
import indexPage from '@/pages/index.vue'

describe('Index Page', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(indexPage)
    expect(wrapper.vm).toBeTruthy()
  })
})
