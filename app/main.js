import Vue from 'vue'
import App from './App.vue'
import BootstrapVuea from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import router from './routes'
import store from './store'

Vue.use(BootstrapVuea);

var calcStorage = new Vue({
    el: "#app",
    router,
    store,
    template: `<App/>`,
    components: {
        App
    }
})
