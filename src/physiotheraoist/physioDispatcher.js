import {environment} from "../environment";
import http from "../shared/services/http-service.js";


export const doGetMyPhysioHistoryUrl = environment.baseUrl + '/api/physiotherapist';
export const doGetPendingPhysioUrl = environment.baseUrl + '/api/physiotherapist/in-queue';
export const doAssignPhysioBaseurl = environment.baseUrl + '/api/physiotherapist/assign/'  ;
export const doCompletePhysioBaseurl = environment.baseUrl + '/api/physiotherapist/update/' ;

export const doGetMyPhysioHistory = () => {

    return http.get(doGetMyPhysioHistoryUrl);

}
export const doGetPendingPhysio = () => {
    return http.get(doGetPendingPhysioUrl);


}

export const doAssignPhysio = (testRequestId) => {


    let request ={}

    return http.put(doAssignPhysioBaseurl  + testRequestId, request);


}
export const doCompletePhysio = (testRequestId,physioResult) => {

    // {
    //     "comments": "string",
    //     "suggestion": "NO_ISSUES"
    // }




    return http.put(doCompletePhysioBaseurl + testRequestId, physioResult);


}
