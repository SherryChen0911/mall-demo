import { request } from "./request.js"

//订单预览
export function orderPreviewAPI(){
    console.log("enter orderPreviewAPI")
    return request({
        url:'/api/orders/preview',
        method:'get',
    })
}

//创建订单
export function createOrderAPI(addressid){
    console.log("enter createOrderAPI")
    console.log("addressid",addressid)
    return request({
        url:'/api/orders',
        method:'post',
        params:{address_id:addressid}
    })
}

//获取订单列表
export function getOrderListAPI(param){
    console.log("enter getOrderListAPI")
    return request({
        url:'/api/orders',
        method:'get',
        params:param,
    })
}

//获取订单详情
export function getOrderDetailAPI(orderId){
    console.log("enter getOrderDetailAPI")
    console.log("orderId",orderId)
    return request({
        url:'/api/orders/'+orderId,
        method:'get',
        params: {
            include:'user,address,orderDetails.goods'
        }
    })
}

//获取购物车列表
export function shopcartList(){
    console.log("enter shopcartList")
    return request({
        url:'/api/carts',
        method:'get',
    })
}