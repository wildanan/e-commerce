<template>
<div>
    <div id="app" style="border: 3px solid black">
    <h1 style="font-size : 100px">Nah-iki Store</h1>
    <div v-if="checkin == 'cust' && isLogin == 'off'" id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">My Cart</router-link> |
      <router-link to="/tes">Test</router-link> |
      <router-link to="/regLog"> Login </router-link>
    </div>
    <div v-if="checkin == 'cust' && isLogin == 'on'" id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">My Cart</router-link> |
      <router-link to="/tes">Test</router-link> |
      <!-- <router-link to="/regLog"> LogOut </router-link> -->
      <b-button @click="logout" type="is-danger">Logout</b-button>
    </div>
    <div v-if="checkin == 'admin' && isLogin == 'on'" id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/admin"> Admin </router-link> |
      <b-button @click="logout" type="is-danger">Logout</b-button>
    </div>
    <div v-if="checkin == 'admin' && isLogin == 'off'" id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/admin"> Admin </router-link> |
    </div>
    <router-view style=""/>
  </div>
</div>
</template>

<script>
export default {
    data(){
    return{
      checkin : 'cust',
      isLogin : 'off'
    }
  },
  methods : {
    loggedIn(){
      if(localStorage.getItem("token")){
        this.isLogin = 'on'
      }else{
        this.isLogin = 'off'
      }
    },
    checker(){
      console.log(localStorage.getItem('role'))
      if(`${localStorage.getItem('role')}` == 'admin'){
        console.log('masuk')
        this.checkin = 'admin'
      }
    },
    logout(){
      localStorage.clear()
      this.$router.redirect('/')
    }
  },
  created(){
    this.checker()
    this.loggedIn()
  }
  // watch : {
  //   loggedIn(){
  //     if(localStorage.getItem("token")){
  //       this.isLogin = 'on'
  //     }else{
  //       this.isLogin = 'off'
  //     }
  //   }
  // }
}
</script>

<style>

</style>
