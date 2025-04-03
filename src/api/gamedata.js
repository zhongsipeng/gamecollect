import { post,request,get } from "@/utils/request";
export function getGameData(data) {
    return post('/gameDataQuery', data);
}

export function gameDataUpdate(data) {
    return post('/gameDataUpdate', data);
}
export function gameDataUpdateByYxbh(data) {
    return post('/gameDataUpdateByYxbh', data);
}

export function gameDataDelete(data) {
    return post('/gameDataDelete', data);
}

export function gameDataOutput(data) {
    return post('/gameDataOutput', data);
}
