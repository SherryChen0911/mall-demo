import { request } from "./request.js"

// export function useRequest(){
//     request("abc");
//     console.log("useRequest")
//     return "ddd"
// }

export function getHomeAllData(){
    return request({
        url:'/api/index',
        method:'get',
    })
    // console.log("result",result)
    // return result

}