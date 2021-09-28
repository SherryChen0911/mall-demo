import { request } from "./request.js"

export function getGoodDetail(id){
    console.log("getGoodDetail",id)
    return request({
        url:'/api/goods/'+id,
        method:'get',
        // params:{good:id}
    })
}

export function getCategoryAllData(){
    return request({
        url:'/api/goods',
        method:'get',
    })

}
