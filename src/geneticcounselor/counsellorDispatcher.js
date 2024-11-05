import {environment} from "../environment";
import http from "../shared/services/http-service.js";


export const doGetMyCounsellorconsultationHistoryUrl = environment.baseUrl + '/api/geneticcounsillers';
export const doGetPendingCounsellorconsultationsUrl = environment.baseUrl + '/api/geneticcounsillers/in-queue';
export const doAssignCounsellorconsultationBaseurl = environment.baseUrl + '/api/geneticcounsillers/assign/'  ;
export const doCompleteCounsellorconsultationBaseurl = environment.baseUrl + '/api/geneticcounsillers/update/' ;

export const doGetMyCounsellorconsultationHistory = () => {

    return http.get(doGetMyCounsellorconsultationHistoryUrl);

}
export const doGetPendingCounsellorcounsulations = () => {
    return http.get(doGetPendingCounsellorconsultationsUrl);


}

export const doAssignCounsellorconsultation = (testRequestId) => {


    let request ={}

    return http.put(doAssignCounsellorconsultationBaseurl  + testRequestId, request);


}
export const doCompleteCounsellorconsultation = (testRequestId,counsellorconsultationResult) => {

    // {
    //     "comments": "string",
    //     "suggestion": "NO_ISSUES"
    // }




    return http.put(doCompleteCounsellorconsultationBaseurl + testRequestId, counsellorconsultationResult);


}
