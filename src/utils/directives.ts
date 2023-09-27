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
  beforeMount(inputElement: HTMLInputElement, binding: DirectiveBinding, vnode: VNode) {
    console.log(inputElement)
    if (inputElement.tagName.toLocaleUpperCase() !== 'INPUT') {
      var els = inputElement.getElementsByTagName('input')
      if (els.length !== 1) {
        throw new Error('v-mask directive requires 1 input, found ' + els.length)
      } else {
        inputElement = els[0]
      }
    }

    inputElement.oninput = (event: Event) => {
      event.preventDefault()
      if (!event.isTrusted) return
      const _inputValue = inputElement.value
      console.log('at input', _inputValue)
      var position = inputElement.selectionEnd || 0
      // save the character just inserted
      var digit = inputElement.value[position - 1]
      inputElement.value = _inputValue?.toUpperCase()
      // if the digit was changed, increment position until find the digit again
      while (
        position < inputElement.value.length &&
        inputElement.value.charAt(position - 1) !== digit
      ) {
        position++
      }
      if (inputElement === document.activeElement) {
        inputElement.setSelectionRange(position, position)
        setTimeout(function () {
          inputElement.setSelectionRange(position, position)
        }, 0)
      } else {
        console.log('document.activeElement', document.activeElement)
      }
      event.stopImmediatePropagation()
      // const _event = new InputEvent('input', {
      //   data: '_inputValue'
      // })
      // dispatchEvent(_event)
      // binding.value = binding.value + '1'
      // console.log('TransalteDirective listener', binding, binding.value)
    }
  },
  beforeUpdate(el: VueElement, binding: DirectiveBinding, vnode: VNode) {
    // console.log('TransalteDirective')
    // window.addEventListener('input', () => {
    // binding.value = binding.value + '1'
    // const emit = new InputEvent('input-x', {
    //   data: binding?.value?.toString()?.toUpperCase() as string
    // })
    // el.dispatchEvent(emit)
    // console.log(
    //   el,
    //   'TransalteDirective listener updated',
    //   vnode,
    //   binding
    //   // binding.value
    // )
    // })
  }
}
