import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        title: 'Title Dari Vuex',
        token: localStorage.getItem('user-token')
    },
    mutations: {
        CHANGE_TITLE(state, payload) {
            state.title = payload
        },
        SET_TOKEN(state, token) {
            state.token = token
        }
    },
    actions: {
        changeTitle(context, newTitle){
            context.commit("CHANGE_TITLE", newTitle);
        },
        setToken(context, token){
            context.commit("SET_TOKEN", token);
        }
    },
    getters: {
        getTitle : state => {
            return state.title;
        },
        getToken : state => {
            return state.token;
        }
    }
})