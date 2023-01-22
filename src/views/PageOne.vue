<template>
    <div>
        <el-button @click="submit" >弹出对话框</el-button>
        <my-dialog :dialogVisible="isShow"   @close="closeDialog" ></my-dialog>
       
    </div>
</template>

<script>
import  MyDialog  from "@/custom-dialog/index.vue";
    export default {
        name:"PageOne",
        components:{
            "my-dialog":MyDialog
        },
        data() {
            return {
                isShow:false
            }
        },
        methods:{
            submit(){
                this.isShow=true
            },
            closeDialog(){
                this.isShow=false
            }
        }
    }
</script>

<style scoped>

</style>