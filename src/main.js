import CheckAll from './index.vue'

const install = (Vue) => {
   if (install.installed) return
  Vue.component(CheckAll.name, CheckAll)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install
}


