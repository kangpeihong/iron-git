import Vue from 'vue'
import router from '@/router'

Vue.directive('permission', {
  inserted(el, binding) {
    const action = binding.value.action
    const effect = binding.value.effect
    console.log('action', action)
    console.log('effect', effect)

    // 判断 当前的路由所对应的组件中 如何判断用户是否具备action的权限
    console.log(router.currentRoute, '按钮权限')
    if (router.currentRoute.meta.rights.indexOf(action) === -1) {
      // 等于-1说明没找到 不具备权限
      if (effect === 'disabled') {
        el.disabled = true
        el.classList.add('is-disabled')
      } else {
        el.parentNode.removeChild(el)
      }
    }
  },
})
console.log(router, '按钮权限')
