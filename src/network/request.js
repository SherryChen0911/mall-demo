import axios from 'axios'

export function request(config){
    const instance = axios.create({
        baseURL: 'https://api.shop.eduwork.cn',
        timeout: 10000,
    })

    //请求拦截
    instance.interceptors.request.use(
        config=>{
            console.log("请求拦截")
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
            console.log("response err",err)

        }
    )
    return instance(config);
}