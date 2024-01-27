import {
  describe,
  expect,
  it,
} from 'vitest'
import { shallowMount } from '@vue/test-utils'
import BaseButton from './BaseButton.vue'

describe('base Button Color Prop', () => {
  it('accepts red color prop', () => {
    const wrapper = shallowMount(BaseButton, { propsData: { color: 'red' } })
    expect(wrapper.classes()).toContain('bg-red-500')
  })

  it('uses default blue color prop', () => {
    const wrapper = shallowMount(BaseButton)
    expect(wrapper.classes()).toContain('bg-blue-500')
  })
})
