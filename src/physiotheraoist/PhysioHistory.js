import {Button, React, useHistory, useState,} from "../component"
import {doGetMyPhysioHistory} from "./physioDispatcher";
import RequestHistory from "../testrequests/RequestHistory";
import {Fragment} from "react";
import {useGlobalStyles} from "../styles/GlobalStyles";


function PhysioHistory() {
//Based on the logged in user ,display his tests
    const classes = useGlobalStyles();
    const history = useHistory();

    const [requests, setRequests] = useState([]);

    async function onUpdatePhysioHistory(index){
        const currentRequest = requests[index]
        history.push("/update-physio/" + currentRequest.requestId)


    }


    const actionColumns =[{
        name: 'Actions',
        options: {
            filter: false,
            sort: false,
            empty: true,
            customBodyRenderLite: (dataIndex) => {

                const currentRequest = requests[dataIndex]
                if(currentRequest && currentRequest.status && currentRequest.status == "PHYSIO_COUNSELLING_IN_PROGRESS"){
                    return   <div>

                        <Button  onClick={() => {
                            onUpdatePhysioHistory(dataIndex)
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
        <RequestHistory actionColumns={actionColumns} getMyHistory={doGetMyPhysioHistory} onDataLoaded ={(results) => {
            setRequests(results)
        }}></RequestHistory>

    )
}

export default PhysioHistory
