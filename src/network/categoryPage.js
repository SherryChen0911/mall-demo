import { request } from "./request.js"

export function getCategoryAllData(){
    return request({
        url:'/api/goods',
        method:'get',
    })

}

export function getTypeGoods(cid=1,currpage=1,type="sales"){
    let myParam = {
        category_id: cid,
        page: currpage,
    }
    if(type == "sales"){
        myParam.sales = 1;
    }
    else if(type == "price"){
        myParam.price = 1;
    }
    else{
        myParam.comments_count = 1; 
    }
    console.log("myParam",myParam)
    return request({
        url:'/api/goods',
        method:'get',
        params:myParam
    })
}