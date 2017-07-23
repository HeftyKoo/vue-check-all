import CheckAll from './index.vue'

const install = (Vue) => {
  Vue.component(CheckAll.name, CheckAll)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install
}


