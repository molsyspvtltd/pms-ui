import {environment} from "../environment";
import http from "../shared/services/http-service.js";


export const doGetMyNutriconsultationHistoryUrl = environment.baseUrl + '/api/nutritionist';
export const doGetPendingNutriconsultationsUrl = environment.baseUrl + '/api/nutritionist/in-queue';
export const doAssignNutriconsultationBaseurl = environment.baseUrl + '/api/nutritionist/assign/'  ;
export const doCompleteNutriconsultationBaseurl = environment.baseUrl + '/api/nutritionist/update/' ;

export const doGetMyNutriconsultationHistory = () => {

    return http.get(doGetMyNutriconsultationHistoryUrl);

}
export const doGetPendingNutricounsulations = () => {
    return http.get(doGetPendingNutriconsultationsUrl);


}

export const doAssignNutriconsultation = (testRequestId) => {


    let request ={}

    return http.put(doAssignNutriconsultationBaseurl  + testRequestId, request);


}
export const doCompleteNutriconsultation = (testRequestId,nutriconsultationResult) => {

    // {
    //     "comments": "string",
    //     "suggestion": "NO_ISSUES"
    // }




    return http.put(doCompleteNutriconsultationBaseurl + testRequestId, nutriconsultationResult);


}
