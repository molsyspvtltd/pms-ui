import {environment} from "../environment";
import http from "../shared/services/http-service.js";


export const doGetMySampleHistoryUrl = environment.baseUrl + '/api/samplecollection';
export const doGetPendingCollectionRequestsUrl = environment.baseUrl + '/api/samplecollection/to-be-tested';
export const doAssignSampleResultBaseUrl = environment.baseUrl + '/api/samplecollection/assign/';
export const doUpdateSampleResultBaseUrl = environment.baseUrl + '/api/samplecollection/update/';


export const doGetMySampleHistory = () => {
    return http.get(doGetMySampleHistoryUrl);
}

export const doGetPendingCollectionRequests = () => {


    return http.get(doGetPendingCollectionRequestsUrl);
}


export const doAssignSampleResult = (testRequestId) => {

    let request ={}



    const url = doAssignSampleResultBaseUrl +testRequestId ;

    return http.put(url, request);


}
export const doUpdateSampleCollection = (testRequestId,sampleResult) => {



    const url = doUpdateSampleResultBaseUrl +testRequestId ;

    return http.put(url, sampleResult);


}
