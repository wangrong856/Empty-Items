import Vue from "vue"
const installFn = require.context('./',true,/\.vue$/)

export default installFn.keys().forEach(t => {
    const components = installFn(t).default
    Vue.component(components.name,components)
});