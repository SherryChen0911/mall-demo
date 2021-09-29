import axios from 'axios'
import { Notify,Toast } from 'vant';

export function request(config){
    const instance = axios.create({
        baseURL: 'https://api.shop.eduwork.cn',
        timeout: 10000,
    })

    //请求拦截
    instance.interceptors.request.use(
        config=>{
            console.log("请求拦截")
            let token =  window.localStorage.getItem('token')
            if(token){
                config.headers.Authorization = 'Bearer '+ token;
            }
            return config;

        },
        err=>{
            console.log("request err",err)

        }
    )

    //响应拦截
    instance.interceptors.response.use(
        res=>{
            console.log("响应拦截",res)
            return res;
        },
        err=>{
            if(err.response.status == 401){
                Toast({
                    message:'请先登录！',
                    duration:500
                });
                setTimeout(()=>{
                    this.$router.push({path:'/login'});
                  },500);
            }


            console.log("response err",err.response.data)
            let errMsg = err.response.data.errors[Object.keys(err.response.data.errors)[0]][0]
            Notify(errMsg)
        }
    )
    return instance(config);
}