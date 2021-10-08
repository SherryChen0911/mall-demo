import { request } from "./request.js"

//获取地址
export function getAddressList(){
    console.log("enter getAddressList")
    return request({
        url:'/api/address',
        method:'get',
    })
}

//获取地址详情
export function getAddressDetail(id){
    console.log("enter getAddressDetail")
    return request({
        url:'/api/address/'+id,
        method:'get',
    })
}

//添加地址
export function addAddress(param){
    console.log("enter addAddress")
    return request({
        url:'/api/address',
        method:'post',
        params:param,
    })
}

//修改地址详情
export function setAddressDetail(id,param){
    console.log("enter setAddressDetail")
    return request({
        url:'/api/address/'+id,
        method:'put',
        params:param,
    })
}

//删除地址详情
export function delAddressDetail(id){
    console.log("enter delAddressDetail")
    return request({
        url:'/api/address/'+id,
        method:'delete',
    })
}