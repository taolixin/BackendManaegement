<template>
    <div>
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
            :collapse="isCollapse"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <h3>通用后台管理{{$store.state.name}}</h3>
            <br/> <br/> <br/> <br/>
            <el-menu-item v-for="item in noChildren" :key="item.name"  :index="item.name" @click="clickMenu(item)">
                <span>{{item.label}}</span>
            </el-menu-item>
            <el-sub-menu v-for="item in hasChildren" :key="item.label" :index="item.label" >
                <template #title>
                    <span>{{item.label}}</span>
                </template>
                <el-menu-item-group v-for="subitem in item.children" :key="subitem.path">
                    <el-menu-item @click="clickMenu(subitem)" :index="subitem.path" >{{subitem.label}}</el-menu-item >
                </el-menu-item-group>
            </el-sub-menu>
        </el-menu>
    </div>
</template>

<script  >
import store from "../store/index"
export default {
    name: 'MainView',
    data() {
        return {
            isCollapse:false,
            menuData: [
                {
                    path: "/",
                    name: "home",
                    label: "首页",
                    icon: "s-show",
                    url: "Home/Home"
                },
                {
                    path: "/mall",
                    name: "mall",
                    label: "商品管理",
                    icon: "video-play",
                    url: "MallManage/MallManage"
                },
                {
                    path: "/user",
                    name: "user",
                    label: "用户管理",
                    icon: "user",
                    url: "UserManage/UserManage"
                },
                {
                    label: "其他",
                    icon: "location",
                    children: [
                        {
                            path: "/pageone",
                            name: "pageone",
                            label: "页面one",
                            icon: "setting",
                            url: "Other/pageOne"
                        },
                        {
                            path: "/pagetwo",
                            name: "pagetwo",
                            label: "页面two",
                            icon: "setting",
                            url: "Other/pageTwo"
                        },
                    ]
                }

            ]
        }
    },
    computed:{
        noChildren(){
            return this.menuData.filter(v=>!v.children)
        },
        hasChildren(){
            return this.menuData.filter(v=>v.children)
        },
    },
    methods:{
        //点击菜单
        clickMenu(item){
            this.$router.push(item.path)
            this.$store.commit("selectMenu",item)
            console.log(111);
        }}
}
</script>

<style scoped>
    .el-menu{height: 100vw;border-right: none;}
    h3{color: #fff;position: absolute;left: 25%;top: 20px;}
</style>