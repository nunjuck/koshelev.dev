import { mount } from '@vue/test-utils'
import TitlePage from '@/components/TitlePage.vue'

describe('Test Title Page Component', () => {
  const wrapper = mount(TitlePage, { propsData: { title: 'Title page' } })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('has a header', () => {
    const title = wrapper.find('h1')
    expect(title.element.tagName).toBeTruthy()
  })
})
