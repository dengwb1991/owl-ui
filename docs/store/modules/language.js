const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'

const state = {
  lang: 'zh-cn'
}

const actions = {
  changeLanguage ({ commit }, lang) {
    commit(CHANGE_LANGUAGE, ['en', 'zh-cn'].includes(lang) ? lang : 'zh-cn')
  }
}

const mutations = {
  [CHANGE_LANGUAGE] (state, lang) {
    state.lang = lang
  }
}

export default {
  state,
  actions,
  mutations
}