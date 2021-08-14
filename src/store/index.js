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
import physiology from './modules/physiology'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    admins,
    userManager,
    oldPeople,
    enviroment,
    physiology
  },
  getters
})

export default store
