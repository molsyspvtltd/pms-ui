import {Button, React, useHistory, useState,} from "../component"
import {doGetMyCounsellorconsultationHistory} from "./counsellorDispatcher";
import RequestHistory from "../testrequests/RequestHistory";
import {Fragment} from "react";
import {useGlobalStyles} from "../styles/GlobalStyles";


function CounsellorconsultationHistory() {
//Based on the logged in user ,display his tests
    const classes = useGlobalStyles();
    const history = useHistory();

    const [requests, setRequests] = useState([]);

    async function onUpdateCounsellorconsultationHistory(index){
        const currentRequest = requests[index]
        history.push("/update-counsellorconsultation/" + currentRequest.requestId)


    }


    const actionColumns =[{
        name: 'Actions',
        options: {
            filter: false,
            sort: false,
            empty: true,
            customBodyRenderLite: (dataIndex) => {

                const currentRequest = requests[dataIndex]
                if(currentRequest && currentRequest.status && currentRequest.status == "GENETIC_COUNSILLING_IN_PROGRESS"){
                    return   <div>

                        <Button  onClick={() => {
                            onUpdateCounsellorconsultationHistory(dataIndex)
                        }} color="secondary" variant="outlined" className={classes.link}>
                            Update
                        </Button>



                    </div>
                }else{
                    return <Fragment></Fragment>
                }



            },
        }
    },]


    return (
        <RequestHistory actionColumns={actionColumns} getMyHistory={doGetMyCounsellorconsultationHistory} onDataLoaded ={(results) => {
            setRequests(results)
        }}></RequestHistory>

    )
}

export default CounsellorconsultationHistory
