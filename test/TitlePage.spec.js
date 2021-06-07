import { mount } from '@vue/test-utils'
import TitlePage from '@/components/TitlePage.vue'

describe('Test Title Page Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TitlePage, { propsData: { title: 'Title page' } })

    expect(wrapper.vm).toBeTruthy()
  })
})
