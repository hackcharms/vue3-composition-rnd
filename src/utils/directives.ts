import type { Directive, DirectiveBinding, VNode, VueElement, defineEmits } from 'vue'

export const BoldDirective: Directive = {
  beforeMount(el: VueElement, binding: DirectiveBinding, vnode: VNode) {
    el.innerHTML = `<b>${binding.value}</b>`
    return el
  }
}
export const BlurDirective: Directive = {
  beforeMount(el: VueElement, binding: DirectiveBinding, vnode: VNode) {
    binding.event = function (event: Event) {
      if (el == event.target || el.contains(event.target as Element)) {
        return
      }
      if (typeof binding.value === 'function') {
        binding.value.call()
      }
      if (typeof binding.value === 'boolean') {
        console.log(binding.value)
        binding.value = !binding.value
        console.log(binding.value)
      }
    }
    window.addEventListener('click', binding.event)
  },
  unmounted(el: VueElement, binding) {
    window.removeEventListener('click', binding.event)
  }
}

export const TransalteDirective: Directive = {
  beforeMount(el: VueElement, binding: DirectiveBinding, vnode: VNode) {
    // console.log('TransalteDirective')
    window.addEventListener('input', () => {
      // binding.value = binding.value + '1'
      // console.log('TransalteDirective listener', binding, binding.value)
    })
  },
  beforeUpdate(el: VueElement, binding: DirectiveBinding, vnode: VNode) {
    // console.log('TransalteDirective')
    // window.addEventListener('input', () => {
    // binding.value = binding.value + '1'
    const emit = new InputEvent('input-x', {
      data: binding?.value?.toString()?.toUpperCase() as string
    })
    el.dispatchEvent(emit)
    console.log(
      'TransalteDirective listener updated',
      binding?.value?.toString()?.toUpperCase(),
      binding
      // binding.value
    )
    // })
  }
}
