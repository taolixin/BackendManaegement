
import Mock from 'mockjs'

Mock.mock("/api/home/getData",function(){
    //拦截请求后处理逻辑
    console.log("拦截到");
})