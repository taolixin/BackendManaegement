<template>
    <div>
        <el-row>
            <el-col :span="8" style="padding-right:10px">
                <el-card class="box-card">
                    <div class="user">
                        <img src="../assets/logo.png" alt="">
                        <div class="userinfo">
                            <p class="name">Admin</p>
                            <p class="access">超级管理员</p>
                        </div>
                    </div>
                    <div class="login-info">
                        <p>上次登录时间：<span>2023-1-17</span></p>
                        <p>上次登陆地点：<span>大连</span></p>
                    </div>
                </el-card>
                <el-card>
                    <el-table :data="tableData" stripe style="width: 100%">
                        <el-table-column v-for="(val, key) in tanleLabel" :prop="key" :label="val" />
                        <!-- <el-table-column prop="name" label="今日购买"  />
                      <el-table-column prop="age" label="本月购买"  />
                      <el-table-column prop="address" label="总购买" /> -->
                    </el-table>
                </el-card>
            </el-col>
            <el-col :span="16" style="padding-left:10px">
               <div class="num">
                <el-card v-for="item in countData" :key="item.name" :body-style="{ display: 'flex'}" class="numcard">
                    <!-- <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"></i> -->
                    <el-icon><Clock /></el-icon>
                    <div class="numRight">
                        <p  class="price">{{item.value}}</p>
                        <p  class="number">{{item.color}}</p>
                    </div>
                </el-card>
               </div>
               <el-card style="height:280px;">
                       <!-- 折线图 -->
                       <div ref="zxtEcharts" style="width:880px;height:300px"></div>
               </el-card>
               <div class="grid">
                <el-card style="height:260px">
                   <div ref="zxtEcharts2" style="width:440px;height:280px"></div>
                </el-card>
                <el-card style="height:260px">
                   <div ref="zxtEcharts3" style="width:440px;height:240px"></div>
                </el-card>
               </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import {getData,getEcharts1Data,getPie} from "../api/index"
import * as echarts from 'echarts';
export default {
    name: "HomeView",
    data() {
        return {
            tableData: [
            ],
            countData:[
             {
                name:"111",
                value:"111",
                icon:"success",
                color:"#2ec7c9"
             },
             {
                name:"222",
                value:"222",
                icon:"success",
                color:"#2ec7c9"
             },
             {
                name:"333",
                value:"333",
                icon:"success",
                color:"#2ec7c9"
             },
             {
                name:"444",
                value:"444",
                icon:"success",
                color:"#2ec7c9"
             },
             {
                name:"555",
                value:"555",
                icon:"success",
                color:"#2ec7c9"
             },
             {
                name:"666",
                value:"666",
                icon:"success",
                color:"#2ec7c9"
             }
            
            ],
            tanleLabel: {
                date: "课程",
                name: "今日购买",
                age: "本月购买",
                address: "总购买"

            }
        }
    },
    mounted(){
        getEcharts1Data().then(res=>{
            this.tableData=res.data

            // 获取一个div。给echarts用
            const zxtEcharts = echarts.init(this.$refs.zxtEcharts)
            //指定图标配置项
            var option = {
                title:{
                   text:"销量柱状图",
                   left:"center"
                },
                xAxis: {
                    type: 'category',
                    data: this.tableData.map((v)=>{return v.name})
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: this.tableData.map((v)=>{return v.age}),
                        type: 'bar',
                        showBackground: true,
                        backgroundStyle: {
                            color: 'rgba(180, 180, 180, 0.2)'
                        }
                    }
                ]
            };
            zxtEcharts.setOption(option)
        }
            
        ),
        getEcharts1Data().then(res=>{
            const zxtEcharts2 = echarts.init(this.$refs.zxtEcharts2)
            var option = {
                title:{
                   text:"销量折线图",
                   left:"center"
                },
                xAxis: {
                    type: 'category',
                    data: this.tableData.map((v)=>{return v.name})
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: this.tableData.map((v)=>{return v.age}),
                        type: 'line',
                        showBackground: true,
                        backgroundStyle: {
                            color: 'rgba(180, 180, 180, 0.2)'
                        }
                    }
                ]
            };
            zxtEcharts2.setOption(option)
        })
        getPie().then(res=>{
            const zxtEcharts3 = echarts.init(this.$refs.zxtEcharts3)
            var option = {
                title:{
                   text:"销量饼状图",
                   left:"center"
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left'
                },
                series: [
                    {
                        data:res.data,
                        type:"pie"
                    }
                ]
            };
            zxtEcharts3.setOption(option)
        })
    }

}
</script>

<style scoped lang="scss">
.user {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    // border:1px solid

    img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 3px solid #ccc;
    }

    .userinfo {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin-left: 15px;
    }

    .name {
        font-size: 50px;
    }
}

.login-info {
    border-top: 2px solid #ccc;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .name {
        font-size: 32px;
        margin-bottom: 10px;
        margin-top: 10px;
    }

    .access {
        color: #999;
    }
}
.num{
   display: flex;flex-wrap: wrap;
   .numcard{width: 32%;}
   .price{font-size: 32px;}
   .number{margin-top: 15px;}
}
.el-icon{width: 80px;height: 80px;font-size: 32px;background: #f09;text-align: center;color: #fff;line-height: 80px;}
.grid{
    display: flex;justify-content: space-between;margin-top: 20px;
    .el-card{
        width: 48%;
    }
}
</style>