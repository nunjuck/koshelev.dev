import { shallowMount } from '@vue/test-utils'
import indexPage from '@/pages/index.vue'

describe('Index Page', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(indexPage, {
      stubs: {
        NuxtLink: true,
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
