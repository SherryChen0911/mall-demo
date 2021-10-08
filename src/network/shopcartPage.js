import { request } from "./request.js"

//加入购物车
export function addGoodsToShopcart(params){
    console.log("enter addGoodsToShopcart")
    console.log("param",params)
    return request({
        url:'/api/carts',
        method:'post',
        params:params,
    })
}

//移除购物车
export function deleteGoodsToShopcart(cartid){
    console.log("enter deleteGoodsToShopcart")
    console.log("cartid",cartid)
    return request({
        url:'/api/carts/'+cartid,
        method:'delete',
    })
}

//改变购物车数量
export function changeGoodsCount(cartid,changenum){
    console.log("enter changeGoodsCount")
    console.log("cartid",cartid)
    return request({
        url:'/api/carts/'+cartid,
        method:'put',
        params:{num:changenum},
    })
}

//改变购物车选中状态
export function changeGoodsSelect(selectList){
    console.log("enter changeGoodsSelect")
    console.log("selectList",selectList)
    return request({
        url:'/api/carts/checked',
        method:'patch',
        params:{cart_ids:selectList},
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