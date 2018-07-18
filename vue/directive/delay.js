/**
 * usage: <el-input v-delay.3000='youDataParams'></el-input>
 * 输入延迟获取
 * 输入延迟获取 .3000 为延时获取输入的时间  间隔3000  .2000 间隔 2000
 */
export default {
  bind(el, binding, vnode) {
    let timer = null
    let delay = 2000
    const keys = Object.keys(binding.modifiers)
    if (keys.length === 1) {
      delay = keys[0]
    } else {
      console.error('too many modifiers on v-delay! just need one')
    }
    el.children[0].addEventListener('input', function (e) {
      const value = el.children[0].value
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(function () {
        vnode.context[binding.expression] = value
      }, delay)
    }, false)
  },
  unbind(el) {
    // 快速解绑该节点上所有监听事件
    el.children[0] = el.children[0].cloneNode(true)
  }
}
