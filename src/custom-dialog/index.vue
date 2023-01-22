<template>
    <div>
        <el-dialog v-model="dialogVisible" title="888自己封装的dialog" width="30%" :before-close="handleClose" @close="closeDialog">
            <span>自己封装的dialog</span>
            <template #footer>
            <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="dialogVisible = false">
                确定
            </el-button>
            </span>
            </template>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name:"MyDialog",
        props:["dialogVisible"],
        data() {
            return {
                
            }
        },
        methods:{
            closeDialog(){
                this.$emit("close")
            }
        }
    }
</script>

<style scoped>

</style>