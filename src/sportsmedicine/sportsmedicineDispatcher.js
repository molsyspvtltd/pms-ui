import {environment} from "../environment";
import http from "../shared/services/http-service.js";


export const doGetMySportsmedicineHistoryUrl = environment.baseUrl + '/api/sportsmedicines';
export const doGetPendingSportsmedicineUrl = environment.baseUrl + '/api/sportsmedicines/in-queue';
export const doAssignSportsmedicineBaseurl = environment.baseUrl + '/api/sportsmedicines/assign/'  ;
export const doCompleteSportsmedicineBaseurl = environment.baseUrl + '/api/sportsmedicines/update/' ;

export const doGetMySportsmedicineHistory = () => {

    return http.get(doGetMySportsmedicineHistoryUrl);

}
export const doGetPendingSportsmedicine = () => {
    return http.get(doGetPendingSportsmedicineUrl);


}

export const doAssignSportsmedicine = (testRequestId) => {


    let request ={}

    return http.put(doAssignSportsmedicineBaseurl  + testRequestId, request);


}
export const doCompleteSportsmedicine = (testRequestId,sportsmedicineResult) => {

    // {
    //     "comments": "string",
    //     "suggestion": "NO_ISSUES"
    // }




    return http.put(doCompleteSportsmedicineBaseurl + testRequestId, sportsmedicineResult);


}
