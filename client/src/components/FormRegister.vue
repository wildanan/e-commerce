<template>
<div>
    <section v-if="show == ''">
        <form>
            <b-field label="Username"
                :type="{'is-danger': errors.has('username')}"
                :message="errors.first('username')">
                <b-input type="text" v-model="username" name="username" v-validate="'required|alpha'" />
            </b-field>

            <b-field label="Password"
                :type="{'is-danger': errors.has('password')}"
                :message="errors.first('password')">
                <b-input type="password" v-model="password" name="password" />
            </b-field>

            <b-field label="email"
                :type="{'is-danger': errors.has('email')}"
                :message="errors.first('email')">
                <b-input type="text" v-model="email" name="email" v-validate="'required|alpha'" />
            </b-field>
            <button @click.prevent="register" type="submit" class="button is-primary"> register </button><br>
            <button @click.prevent="goLogin" type="submit" class="button is-primary"> login </button>
        </form>
    </section>

    <section v-if="show == 'formLogin'">
        <form>
           
            <b-field label="email"
                :type="{'is-danger': errors.has('email')}"
                :message="errors.first('email')">
                <b-input type="text" v-model="email" name="email" v-validate="'required|alpha'" />
            </b-field>
             <b-field label="Password"
                :type="{'is-danger': errors.has('password')}"
                :message="errors.first('password')">
                <b-input type="password" v-model="password" name="password" v-validate="'required|min:8'" />
            </b-field>
            <button @click.prevent="login" type="submit" class="button is-primary"> Login </button>
        </form>
    </section>
</div>
</template>

<script>
import VeeValidate from 'vee-validate'
import axios from 'axios';

export default {
    data(){
        return{
            show : '',
            isLogin : false,
            username: '',
            password: '',
            email: '',
            flagTerms: false
        }
    },
    created(){
        // this.register()
        // if (localStorage.getItem('token')) {
        //     this.$router.replace({
        //     path: '/'
        // })
        // }
    },
    methods : {
        login(){
            // this.isLogin = true
            console.log('masuk ke login')
            axios.post('http://localhost:3000/user/signin', {email : this.email, password : this.password})
            .then(({data}) => {
                console.log('login success')
                localStorage.setItem('token', `${data.token}`)
                localStorage.setItem('username', `${data.payload.username}`)
                localStorage.setItem('email', `${data.payload.email}`)
                localStorage.setItem('userId', `${data.payload.id}`)
                localStorage.setItem('role', `${data.payload.role}`)
                this.$router.replace({ path: '/' })
            })
        },
        register(){
            console.log('halo', this.username, this.password, this.email)
            axios.post('http://localhost:3000/user/signup', {username : this.username, password : this.password, email : this.email}).then(({data}) => {
                console.log('register sucess')
                // this.$router.replace({ path: '/' })
                this.goLogin()
            })
        },
        goLogin(){
            this.show = 'formLogin'
            // this.register()
        }
    }
}
</script>

<style>

</style>
