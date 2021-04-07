import {mount } from '@vue/test-utils'
import MyTest from './MyTest.vue'

console.log('MyTest in spec.ts', MyTest)

test('test', () => {
    const wrapper = mount(MyTest);

    expect(wrapper.html()).toEqual('<div>._.</div>')
})