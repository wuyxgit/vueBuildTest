import radioComponent from './radio.vue'

const hzRdio = {
  install: function (Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component('hzRadio', radioComponent)
  }
};

export default hzRdio
