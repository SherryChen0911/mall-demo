import { request } from "./request.js"

export function addGoodsToShopcart(params){
    console.log("enter addGoodsToShopcart")
    console.log("param",params)
    return request({
        url:'/api/carts',
        method:'post',
        params:params,
    })
}

export function shopcartList(){
    console.log("enter shopcartList")
    return request({
        url:'/api/carts',
        method:'get',
    })
}