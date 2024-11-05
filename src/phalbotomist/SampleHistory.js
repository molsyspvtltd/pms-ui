import {Button, React, useHistory, useState,} from "../component"
import {doGetMySampleHistory} from "./SampleDispatcher";
import RequestHistory from "../testrequests/RequestHistory";
import {Fragment} from "react";
import {useGlobalStyles} from "../styles/GlobalStyles";


function SampleHistory() {

    const classes = useGlobalStyles();
    const history = useHistory();

    const [requests, setRequests] = useState([]);

    async function onUpdateSampleHistory(index){
        const currentRequest = requests[index]
        console.log(currentRequest)
        history.push("/update-sample-report/" + currentRequest.requestId)


    }


    const actionColumns =[{
        name: 'Actions',
        options: {
            filter: false,
            sort: false,
            empty: true,
            customBodyRenderLite: (dataIndex) => {

                const currentRequest = requests[dataIndex]
                if(currentRequest && currentRequest.status && currentRequest.status == "SAMPLE_COLLECTION_IN_PROGRESS"){
                    return   <div>

                        <Button onClick={() => {
                            onUpdateSampleHistory(dataIndex)
                        }} color="secondary" variant="outlined" className={classes.link}>
                            Update
                        </Button>



                    </div>
                }else{
                    return <Fragment></Fragment>
                }



            },
        }
    }]

    return (
    //   <RequestHistory actionColumns={actionColumns} getMyHistory={doGetMySampleHistory} onDataLoaded ={(results) => {
    //       setRequests(results)
    //   }}></RequestHistory>
    <RequestHistory 
  actionColumns={actionColumns} 
  getMyHistory={doGetMySampleHistory} 
  onDataLoaded={(results) => {
    console.log("onDataLoaded results: ", results);  // Check if data is being received
    setRequests(results);
  }} 
/>


    )
}

export default SampleHistory
