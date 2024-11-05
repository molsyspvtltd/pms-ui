import {Button, React, useHistory, useState,} from "../component"
import {doGetMySportsmedicineHistory} from "./sportsmedicineDispatcher";
import RequestHistory from "../testrequests/RequestHistory";
import {Fragment} from "react";
import {useGlobalStyles} from "../styles/GlobalStyles";


function SportsmedicineHistory() {
//Based on the logged in user ,display his tests
    const classes = useGlobalStyles();
    const history = useHistory();

    const [requests, setRequests] = useState([]);

    async function onUpdateSportsmedicineHistory(index){
        const currentRequest = requests[index]
        history.push("/update-sportsmedicine/" + currentRequest.requestId)


    }


    const actionColumns =[{
        name: 'Actions',
        options: {
            filter: false,
            sort: false,
            empty: true,
            customBodyRenderLite: (dataIndex) => {

                const currentRequest = requests[dataIndex]
                if(currentRequest && currentRequest.status && currentRequest.status == "SPORTS_COUNSELLING_IN_PROGRESS"){
                    return   <div>

                        <Button  onClick={() => {
                            onUpdateSportsmedicineHistory(dataIndex)
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
        <RequestHistory actionColumns={actionColumns} getMyHistory={doGetMySportsmedicineHistory} onDataLoaded ={(results) => {
            setRequests(results)
        }}></RequestHistory>

    )
}

export default SportsmedicineHistory
