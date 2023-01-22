<template>
    <div>
          <el-form :model="form" ref="ruleFormRef" :rules="rules" label-width="80px" class="login-container">
            <h3 class="login-title">登录系统</h3>
            <el-form-item label="用户名" prop="username" >
                <el-input v-model="form.username" />
            </el-form-item>
            <el-form-item label="密码" prop="password" >
                <el-input v-model="form.password" type="password"/>
            </el-form-item>
            <el-form-item >
                <el-button type="primary" @click="loginHandle" class="login-button">登录</el-button>
            </el-form-item>
          </el-form>
    </div>
</template>

<script>
import axios from "axios"
import { ElMessage } from "element-plus"
    export default {
         name:"LoginView",
         data() {
            return {
                form:{
                    username:"",
                    password:""
                },
                rules:{
                    username:[{ required: true, message: '请输入用户名',}],
                    password:[{ required: true, message: '请输入密码',}]
                }
            }
         },
         methods: {
            loginHandle(){
               axios.get("http://localhost:3000/auth").then(res=>{
                let ret = res.data[0]
                if(this.form.username==ret.username&&this.form.password==ret.password){
                    this.$router.push("/")
                }else{ElMessage("请输入正确账号密码")}
               }
              )
            }
         },
    }
</script>

<style scoped>
.login-container{
    width: 400px;margin: 180px auto;border: 2px solid #ccc;padding: 35px,35px,15px,35px;background-color: #fff;
    box-sizing: border-box;
}
.login-title{text-align: center;margin: 10px;}
.login-button{position: absolute;left: 35%;margin-top: 10px;}
</style>