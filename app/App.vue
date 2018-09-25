<template>
    <div>

        <div>
            <b-nav>
                <b-nav-item to="/">Home</b-nav-item>
                <b-nav-item to="/login">Login</b-nav-item>
                <b-nav-item to="/logout" v-if="isLoggedIn" @click="doLogout()">Logout</b-nav-item>
            </b-nav>
        </div>
        
        <router-view></router-view>
    </div>
</template>

<script>
import {logout} from './utils/auth.js'

export default {
    name: "App",
    data(){
        return {
        }
    },
    computed: {
        isLoggedIn: function () {
            let token = this.$store.getters.getToken;
            console.log(token);
            if (token != null) {
                return true
            } else {
                return false;
            }
        }
    }, 
    methods: {
        doLogout() {
            logout();
            this.$router.go('/');
        }
    }
}
</script>

<style>

</style>
