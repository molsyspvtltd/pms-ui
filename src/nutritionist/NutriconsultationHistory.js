import {Button, React, useHistory, useState,} from "../component"
import {doGetMyNutriconsultationHistory} from "./nutritionDispatcher";
import RequestHistory from "../testrequests/RequestHistory";
import {Fragment} from "react";
import {useGlobalStyles} from "../styles/GlobalStyles";


function NutriconsultationHistory() {
//Based on the logged in user ,display his tests
    const classes = useGlobalStyles();
    const history = useHistory();

    const [requests, setRequests] = useState([]);

    async function onUpdateNutriconsultationHistory(index){
        const currentRequest = requests[index]
        history.push("/update-nutriconsultation/" + currentRequest.requestId)


    }


    const actionColumns =[{
        name: 'Actions',
        options: {
            filter: false,
            sort: false,
            empty: true,
            customBodyRenderLite: (dataIndex) => {

                const currentRequest = requests[dataIndex]
                if(currentRequest && currentRequest.status && currentRequest.status == "NUTRITIONIST_COUNSILLING_IN_PROGRESS"){
                    return   <div>

                        <Button  onClick={() => {
                            onUpdateNutriconsultationHistory(dataIndex)
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
        <RequestHistory actionColumns={actionColumns} getMyHistory={doGetMyNutriconsultationHistory} onDataLoaded ={(results) => {
            setRequests(results)
        }}></RequestHistory>

    )
}

export default NutriconsultationHistory
