import { createI18n } from "vue-i18n";
import zh from './langs/zh';
import en from './langs/en';
import ft from './langs/ft'

const messages = {
    zh,
    en,
    ft
}

const i18n = createI18n({
    legacy: false,
    interpolation: {
        prefix: '%{',  // 改用 %{var} 代替 | {var}
        suffix: '}'
    },
    locale: localStorage.getItem('lang') || 'ft',
    messages
})

export default i18n