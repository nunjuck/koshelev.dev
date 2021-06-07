import { mount } from '@vue/test-utils'
import TitlePage from '@/components/TitlePage.vue'

describe('Title Page Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TitlePage)
    expect(wrapper.vm).toBeTruthy()
  })
})
