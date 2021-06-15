import { mount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Header, {
      stubs: {
        NuxtLink: true,
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
