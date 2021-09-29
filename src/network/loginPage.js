import { request } from "./request.js"

export function register(params){
    console.log("enter register")
    console.log("param",params)
    return request({
        url:'/api/auth/register',
        method:'post',
        params:params,
    })
}

export function login(params){
    console.log("enter login")
    console.log("param",params)
    return request({
        url:'/api/auth/login',
        method:'post',
        params:params,
    })
}

export function logout(){
    console.log("enter logout")
    return request({
        url:'/api/auth/logout',
        method:'post',
    })
}