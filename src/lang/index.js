import Vue from 'vue'
import zh from './zh'
import en from './en'
import vueI18n from 'vue-i18n'

Vue.use(vueI18n)

export default new vueI18n({
    locale:window.localStorage.langI18n || 'zh',
    messages:{
        zh:{
            ...zh
        },
        en:{
            ...en
        }
    }
})
