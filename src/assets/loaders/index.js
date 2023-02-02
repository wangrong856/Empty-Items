

import LoadingVue from './Loaders.vue'

const $loading = {
    install: (Vue) => {
        const LoadingComponent = Vue.extend(LoadingVue);
        const vm = new LoadingComponent()
        const tpl = vm.$mount().$el
        document.body.appendChild(tpl)
        Vue.prototype.$showLoading = () => {
            vm.isShow = true
        }
        Vue.prototype.$hiddenLoading = () => {
            vm.isShow = false
        }
    }
}

export default $loading