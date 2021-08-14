import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import admins from './modules/admins'
import userManager from './modules/userManager'
import oldPeople from './modules/oldPeople'
import enviroment from './modules/enviroment'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    admins,
    userManager,
    oldPeople,
    enviroment
  },
  getters
})

export default store
