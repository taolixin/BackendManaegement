<template>
    <div class="head-container">
        <div class="l-content">
            <el-button><el-icon><Grid /></el-icon></el-button>
            <!-- //面包屑 -->
            <!-- <span class="text">首页</span> -->
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item><a href="/">商品管理</a></el-breadcrumb-item>
              <el-breadcrumb-item>用户管理</el-breadcrumb-item>
              <el-breadcrumb-item>其他</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="r-content">
            <el-dropdown @command="handleClick"><span class="el-dropdown-link">
              用户：yyy
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item command="cancel">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
    export default {
        name:"HeadView",
        methods:{
          handleClick(command){
            if(command==="cancel"){
              this.$router.push("/login")
            }
          }
        }
       
    }
</script>

<style scoped>
*{padding: 0;margin: 0;}
.head-container{
    background-color: #333;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}
.text{color: #fff;font-size: 14px;margin-left: 10px;}
</style>