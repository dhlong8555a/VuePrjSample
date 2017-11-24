import VueI18n from 'vue-i18n'

import EnElementLang from 'element-ui/lib/locale/lang/en'
import ZhElementLang from 'element-ui/lib/locale/lang/zh-CN'
import ElementLocale from 'element-ui/lib/locale'

import EnLang from '@/js/lang/en'
import ZhLang from '@/js/lang/zh'

export const LANG_EN = 'en'
export const LANG_ZH = 'zh'
export let i18n

let curLocal = LANG_ZH

const messages = {
  [LANG_EN]: {
    ...EnLang,
    ...EnElementLang
  },
  [LANG_ZH]: {
    ...ZhLang,
    ...ZhElementLang
  }
}

export function setLang (lang) {
  curLocal = lang
  i18n.locale = curLocal
}

export function getLang () {
  return curLocal
}

export function useI18n (Vue) {
  Vue.use(VueI18n)

  i18n = new VueI18n({
    locale: `${curLocal}`,
    messages
  })

  ElementLocale.i18n((key, value) => i18n.t(key, value))
}
