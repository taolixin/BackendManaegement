<template>
    <div class="manageView">
        <el-dialog v-model="dialogVisible" :title="modelType?'修改数据':'新增数据'" width="80%" :before-close="handleClose">
            <el-form :model="userForm" :inline="true" :rules="rules" ref="ruleFormRef" >
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="userForm.name" placeholder="请输入姓名" />
                </el-form-item>
                <el-form-item label="性别" prop="gender">
                    <el-input v-model="userForm.gender" placeholder="请输入性别" />
                </el-form-item>
                <el-form-item label="年龄" prop="age">
                    <el-input v-model="userForm.age" placeholder="请输入年龄" />
                </el-form-item>
                <el-form-item label="生日" prop="birth" >
                    <el-date-picker v-model="userForm.birth" type="date"  :value-format="YYYY-MM-DD"
                        style="{width:50%}" />
                </el-form-item>
                <el-form-item label="地址" prop="addr">
                    <el-input v-model="userForm.addr" placeholder="请输入地址" />
                </el-form-item>
                
            </el-form>
            <template #footer  #default="scope">
                <span class="dialog-footer">
                    <el-button @click="cancel">取消</el-button>
                    <el-button type="primary" @click="handleSubmit">提交</el-button>
                </span>
            </template>
        </el-dialog>
        <div class="userHeader">
            <el-button @click="openDialog">
                +添加
            </el-button>
            <div class="userHeader-r">
                <el-form :model="userForm2" :inline="true">
                    <el-form-item placeholder="请输入">
                        <el-input v-model="userForm2.name" />
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="handleSearch(userForm2.name)">搜索</el-button>
                    </el-form-item>
                    
                </el-form>
            </div>
        </div>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="age" label="age" />
            <el-table-column prop="name" label="name" />
            <el-table-column prop="birth" label="birth" />
            <el-table-column prop="addr" label="addr" />
            <el-table-column prop="gender" label="gender" />
            <el-table-column label="Operations">
                <template #default="scope">
                    <el-button size="small" @click="handleEdit(scope.row)">修改</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="example-pagination-block">
            <!-- <div class="example-demonstration">页面切换</div> -->
            <el-pagination layout="prev, pager, next" :total="total" @current-change="handlePage"/>
        </div>
    </div>
</template>

<script>
import { userInfo } from "../api/index"
import axios from "axios"
import { ElMessageBox } from 'element-plus'
export default {
    name: "PageTwo",
    data() {
        return {
            dialogVisible: false,
            total:0,
            modelType:0, //0表示新增  1表示编辑
            userForm: {
                name: "",
                age: "",
                gender: "",
                addr: "",
                birth: ""
            },
            tableData: [
            ],
            userForm2:{ name:""} ,
            rules: {
                name: [
                    { required: true, message: 'Please input Activity name' }
                ],
                age: 
                    { required: true, message: 'Please input age' }
                ,
                addr: 
                    { required: true, message: 'Please input address' }
                ,
                gender: 
                    { required: true, message: 'Please input gender' }
                ,
                birth: 
                    { required: true, message: 'Please input birth' }
                ,
            }
        }
    },
    methods: {
        handleClose() {
            ElMessageBox.confirm('Are you sure to close this dialog?')
                .then(() => {
                    this.dialogVisible=false
                })
                .catch(() => {
                    // catch error
                })
        },
        cancel(){
            // this.handleClose()
            this.dialogVisible=false
        },
        //新增
        openDialog() {
            this.dialogVisible = true
            this.modelType=0
        },
         //查询
         handleSearch(name){
            userInfo().then(res => {
                console.log(res);
                let ret=res.data.filter(v=>{
                    return v.name == name
                })
                this.tableData=ret
        })
             
        },
        //编辑
         handleEdit(row){
                this.modelType=1
                this.dialogVisible=true
                this.userForm=JSON.parse(JSON.stringify(row))
                //  axios.put(`http://localhost:3000/userInfo/${idx}`,this.userForm)
                //  userInfo().then(res => {this.tableData = res.data})
        },
        //删除
        handleDelete(item,val){
            let idx=item.id
            axios.delete(`http://localhost:3000/userInfo/${idx}`).then(res => {
                         console.log('删除成功')
                     }) 
            userInfo().then(res => {
            this.tableData = res.data})

        },
        //用户提交表单
        handleSubmit(){
            // this.modelType=0
            this.$refs.ruleFormRef.validate((valid)=>{
            if(valid){
                if(this.modelType==0){
                    axios.post('http://localhost:3000/userInfo/',this.userForm)
                    userInfo().then(res => {
                    this.tableData = res.data})
                    this.$refs.ruleFormRef.resetFields()
                    this.dialogVisible=false
                    }
                if(this.modelType==1){
                    // let id=row.id
                    axios.put(`http://localhost:3000/userInfo/${this.userForm.id}`,this.userForm)
                    userInfo().then(res => {
                    this.tableData = res.data})
                    this.$refs.ruleFormRef.resetFields()
                    this.dialogVisible=false
                }
            
            }
            })
           
            
        },
        handlePage(val){
            //选择页码。跳转
            // console.log(val,"00000000000000");
        }
       
    },
    mounted() {
        userInfo().then(res => {
            this.tableData = res.data
            this.total=res.data?res.data.length:0
        })
              
            
            // axios.put('http://localhost:3000/userInfo/88', {
            //     "name": "xiaoyang", "age": 666, "gender": "男",
            //     "addr": "国宝",
            //     "birth": "2022.8.1",
            //     "id": 88
            // })
    }
}
</script>

<style scoped>
.manageView {
    position: relative;height: 90%;
}

.userHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;

}

.userHeader-r {
    height: 62px;
    line-height: 62px;
}
</style>