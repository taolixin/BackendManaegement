<template>
    <div>
        <div class="common-layout">
            <el-container>
                <el-aside width="200px">
                    <ConmonAside></ConmonAside>
                </el-aside>
                <el-container>
                    <el-header>
                        <HeadView></HeadView>
                    </el-header>
                    <el-main>
                        <router-view></router-view>
                    </el-main>
                </el-container>
            </el-container>
        </div>
    </div>
   
</template>

<script>
import ConmonAside from "../components/CommonAside.vue";
import HeadView from "../components/HeadView.vue";
export default {
    name: 'MainView',
    components:{ConmonAside,HeadView}
}
</script>

<style scoped>
.el-header{padding:0;height: 100px;}
</style>