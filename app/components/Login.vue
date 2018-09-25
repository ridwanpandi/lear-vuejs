<template>
    <b-container fluid>
        <span v-html="message"> </span>
        <b-row>
            <b-col>
                <b-form @submit="onSubmit" @reset="onReset">
                    <b-form-group id="email"
                                    label="Email address:"
                                    label-for="email"
                                    description="Your email address">
                        <b-form-input id="email"
                                    type="email"
                                    v-model="email"
                                    required
                                    placeholder="Enter email">
                        </b-form-input>
                    </b-form-group>
                    
                    <b-form-group id="password"
                                    label="Password:"
                                    label-for="password"
                                    description="Your Password">
                        <b-form-input id="password"
                                    type="password"
                                    v-model="password"
                                    required
                                    placeholder="Enter Password">
                        </b-form-input>
                    </b-form-group>
                    
                    <b-button type="submit" variant="primary">Login</b-button>
                    <b-button type="reset" variant="danger">Reset</b-button>
                </b-form>
            </b-col>
        </b-row>
  </b-container>
</template>

<script>
import {login} from '../utils/auth.js'

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
            message: ''
        }
    },
    methods: {
        onReset() {
        },
        onSubmit() {
            let email = this.email
            let password = this.password

            var doLogin = login(email, password);
            console.log(doLogin);

            if (doLogin) {
                this.$router.go('/');
            } else {
                this.message = "<div class='alert alert-danger'>gagal login</div>"
            }
        }
    }
}
</script>

<style>

</style>
