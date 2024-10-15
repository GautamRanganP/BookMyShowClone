<template>
    <div class="login-page">
    <form @submit.prevent="handleForm">
      <div class="grp-form">
        <h3>BookMyShow</h3>
        <Input type="text" :value="username" label="username" :input="updateUsername"></Input>
        <Input type="password" :value="password" label="password" :input="updatePassword"></Input>
        <div class="gr-flex center">
          <Button type="submit" label="Login"></Button>
        </div>
    </div>
    </form>
  </div>
</template>

<script>

import Input from '../components/Input.vue';
import Button from '../components/Button.vue';
export default{
data(){
  return{
    username:'',
    password:''
  }
},
methods:{
  updateUsername(event){
      if(event.inputType==='deleteContentBackward')
        this.username = this.username.slice(0,this.username.length - 1)
      else
        this.username += event.data
  },
  updatePassword(event){
    if(event.inputType==='deleteContentBackward')
      this.password = this.password.slice(0,this.password.length - 1)
    else
      this.password += event.data
  },
  handleForm(){
      if(this.username && this.password){
        
      }
  }
},
components:{
  Input,
  Button
}

}

</script>

<style>
  .login-page{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90%;
  }
  .grp-form{
    border-radius: 10px;
    position: relative;
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 0.6778px solid rgb(189, 187, 187);
    box-shadow: 2px 2px 15px rgb(189, 187, 187);
    padding: 10px;
  }
  .login-page form h3{
    position: absolute;
    top: 60px;
  }

</style>

