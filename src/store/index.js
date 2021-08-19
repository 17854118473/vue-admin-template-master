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
import equipment from './modules/equipment'
import permission from './modules/permission'
import reminder from './modules/reminder'

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
    physiology,
    equipment,
    permission,
    reminder
  },
  getters
})

export default store
