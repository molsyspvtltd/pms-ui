import {Container, Grid, makeStyles, React, useEffect, useHistory, useState,} from "../component"
import MUIDataTable from "mui-datatables";
import {appNotification} from "../shared/notification/app-notification";
import {doAssignPhysio, doGetPendingPhysio} from "./physioDispatcher";
import {confirmMessageService} from "../shared/confirm/confirm-message-service";
import Button from '@material-ui/core/Button';

import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import {useDispatch} from "react-redux";
import {errorHandler} from "../shared/common-helpers";
import {useGlobalStyles} from "../styles/GlobalStyles";



function PendingPhysio() {

    const classes = useGlobalStyles();
    const history = useHistory();

    const [data, setData] = useState([]);

    const [requests, setRequests] = useState([]);
    const columns = [

        {
            name: "Request ID",
            options: {
                filter: true,
            }
        },
        {
            name: "Name",
            options: {
                filter: true,
            }
        },
        {

            name: "Age",
            options: {
                filter: true,
            }
        },
        {

            name: "Status",
            options: {
                filter: true,
            }
        },
        {
            name: 'Actions',
            options: {
                filter: false,
                sort: false,
                empty: true,
                customBodyRenderLite: (dataIndex) => {

                    return <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<AssignmentIndIcon/>}
                        onClick={() => {
                            onAssignToMeClicked(dataIndex)
                        }}
                    >
                        Assign to Me
                    </Button>

                },
            }
        }

    ];


    const options = {
        filter: true,
        filterType: 'dropdown',
        responsive: 'standard',
        selectableRows: 'none',

    };


    async function onAssignToMeClicked(index) {
        const pendingRequest = requests[index]


            await confirmMessageService.show("Do you want to Assign yourself for Physio Consultaion " + pendingRequest.name + "?")

            doAssignPhysio(pendingRequest.requestId).subscribe((res) => {
                appNotification.showSuccess("Request Assigned to you, Please update your diagnosis details.")

                history.push("/update-physio/" + pendingRequest.requestId)

            }, errorHandler);




    }



    function reloadPendingPhysio() {

        doGetPendingPhysio()
            .subscribe((pendingPhysio) => {


                setRequests(pendingPhysio)
                const buffer = pendingPhysio.map(item => {

                    const {result} = item.labResult
                    return [item.requestId, item.name, item.age, result]
                })

                const results = []
                results.push(buffer)
                setData(buffer)

            }, errorHandler)
    }


    useEffect(() => {


        reloadPendingPhysio();


    }, [])


    return (
        <React.Fragment>
            <Container maxWidth="md" component="main" className={classes.heroContent}>
                <h1>
                    Pending Physio Consultations
                </h1>
                <hr/>
            </Container>
            <Container component="main" maxWidth="md">
                <Grid container>
                    <Grid item md={12}>

                        <MUIDataTable title={"Pending Physio Consultations"} data={data} columns={columns} options={options}/>

                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>

    )
}

export default PendingPhysio
