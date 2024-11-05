// import {
//     Button,
//     Container,
//     FormControl,
//     Grid,
//     makeStyles,
//     React,
//     TextField,
//     Typography,
//     useEffect,
//     useHistory,
//     useState,
// } from "../component"
// import {doUpdateSampleCollection} from "./SampleDispatcher";
// import {appNotification} from "../shared/notification/app-notification";
// import {useLocation, useRouteMatch} from "react-router-dom";
// import {useDispatch} from "react-redux";
// import {doGetTestRequestByID} from "../testrequests/testRequestDispatcher";
// import InputLabel from "@material-ui/core/InputLabel";
// import Select from "@material-ui/core/Select";
// import TextareaAutosize from "@material-ui/core/TextareaAutosize";
// import TestRequestDetail from "../testrequests/TestRequestDetail";
// import {errorHandler} from "../shared/common-helpers";


// const useStyles = makeStyles((theme) => ({
//     paperWhite: {
//         margin: "0 auto",
//         padding: "20px 20px 20px 20px",
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         backgroundColor:'white',
//     },
//     mt40:{
//         marginTop:40,
//     },
//     w100:{
//         width: '100%',
//     },
//     select100Form:{
//         width: '100%',
//     },
//     formControl: {
//         margin: theme.spacing(1),
//         minWidth: 120,
//     },
//     selectEmpty: {
//         marginTop: theme.spacing(2),
//     },

//     formContainer:{
//       padding:"50 50 50 50"
//     },
//     form: {
//         width: '100%', // Fix IE 11 issue.
//         marginTop: theme.spacing(3),
//     },
//     submit: {
//         margin: theme.spacing(3, 0, 2),
//     },
// }));

// function UpdateSampleCollection() {

//     const classes = useStyles();

//     const history = useHistory();
//     let location = useLocation();
//     let {params} = useRouteMatch("/update-sample-report/:id");
//     const dispatch = useDispatch()
//     const {id} =params
//     const [testRequest, setTestRequest] = useState(null);

//     const [sampleId, setSampleId] = useState('102');
//     const [comments, setComments] = useState('Should be left');
//     const [testTubeId, setTestTubeId] = useState('97');
//     const [result, setResult] = useState('NEGATIVE');
    
//     function handleSubmit(event) {




//         event.preventDefault();
//         const payload = {
//             sampleId,
//             comments,
//             result,
//             testTubeId
//         }
//         doUpdateSampleCollection(id,payload)
//             .subscribe((response) => {
//                 appNotification.showSuccess("Succesfully Updated Sample Collections")
//                 history.push("/sample-history")

//             }, errorHandler)

//     }




//     useEffect(() => {


//         doGetTestRequestByID(id)
//             .subscribe((result) => {
//                 setTestRequest(result)
//                 console.log(result)

//             }, errorHandler)





//     }, [])




//     return (
//         <React.Fragment>
//             <Container component="main" className={classes.mt40}>


//                  <Grid container spacing={2}  className={classes.paperWhite} >

//                     <Typography component="h1" variant="h5">
//                        Update Sample Collections
//                         <hr />
//                     </Typography>
//                     <Grid container spacing={2}  className={classes.formContainer} >

//                         <Grid item xs={6} >
//                             <TestRequestDetail testRequest={testRequest}></TestRequestDetail>

//                         </Grid>
//                         <Grid item xs={6} >
//                             <form className={classes.form} onSubmit={handleSubmit} noValidate>

//                                 <Grid container spacing={2}>
//                                     <Grid item xs={12} >




//                                         <TextField
//                                             variant="outlined"
//                                             value={sampleId}
//                                             onInput={e => setSampleId(e.target.value)}
//                                             required
//                                             className={classes.w100}
//                                             fullWidth
//                                             id="sampleId"
//                                             label="Sample Id"
//                                             name="sampleId"
//                                             autoComplete="sampleId"
//                                         />



//                                     </Grid>


//                                     <Grid item xs={12} >
//                                         <TextField
//                                             variant="outlined"
//                                             value={testTubeId}
//                                             onInput={e => setTestTubeId(e.target.value)}
//                                             required
//                                             fullWidth
//                                             id="testTubeId"
//                                             label="Test Tube Id"
//                                             name="testTubeId"
//                                             autoComplete="testTubeId"
//                                         />
//                                     </Grid>

                                    



//                                     <Grid item xs={12}>

//                                         <TextareaAutosize
//                                             className={classes.w100}
//                                             aria-label="comments"
//                                             rowsMin={3}
//                                             value={comments}
//                                             name="comments"
//                                             label="comments"

//                                             id="comments"
//                                             onInput={e => setComments(e.target.value)}
//                                             placeholder="Comments" />

//                                     </Grid>

//                                     <Grid item xs={12}>
//                                          <FormControl variant="outlined" className={classes.select100Form}>
//                                                <InputLabel htmlFor="outlined-result-native-simple">Test Result</InputLabel>
//                                                <Select
//                                                 native={false} // native must be set to false to enable multi-select with chips
//                                                 multiple
//                                                 value={result}
//                                                 onChange={e => setResult(e.target.value)}
//                                                 label="Test Result"
//                                                 className={classes.select100}
//                                                 inputProps={{
//                                                 name: 'result',
//                                                 id: 'selectLabResult',
//                                                 }}
//                                                 renderValue={(selected) => selected.join(', ')} // Display selected items as a comma-separated string
//                                                 >
//                                                   <MenuItem value="BLOOD_DNA">Blood DNA</MenuItem>
//                                                   <MenuItem value="SALIVA">Saliva</MenuItem>
//                                                   <MenuItem value="CBC">CBC</MenuItem>
//                                                   <MenuItem value="HBAIC">HBAIC</MenuItem>
//                                                    <MenuItem value="LIPID_PROFILE">LIPID Profile</MenuItem>
//                                                     <MenuItem value="LFT">LFT</MenuItem>
//                                                     <MenuItem value="TFT">TFT</MenuItem>
//                                                   <MenuItem value="KFT">KFT</MenuItem>
//                                                    <MenuItem value="VIT_D">VIT D</MenuItem>
//                                                  <MenuItem value="VIT_B12">VIT B12</MenuItem>
//                                                  <MenuItem value="CRP">CRP</MenuItem>
//                                                  <MenuItem value="SUGAR_RANDOM">Sugar Random</MenuItem>
//                                                   <MenuItem value="HOMOCYSTEINE">HOMOCYSTEINE</MenuItem>
//                                                    <MenuItem value="CORTISOL">CORTISOL</MenuItem>
//                                        </Select>
//                                    </FormControl>
//                                 </Grid>




//                                 </Grid>
//                                 <Button
//                                     type="submit"
//                                     fullWidth
//                                     variant="contained"
//                                     color="primary"
//                                     className={classes.submit}
//                                 >
//                                     Update Sample Collections
//                                 </Button>

//                             </form>

//                         </Grid>
//                     </Grid>


//                  </Grid>

//             </Container>
//         </React.Fragment>

//     )
// }

// export default UpdateSampleCollection

import React, { useState, useEffect } from "react";
import {
    Button,
    Container,
    FormControl,
    Grid,
    TextField,
    Typography,
    InputLabel,
    Select,
    MenuItem,
    TextareaAutosize,
    makeStyles,
} from "@material-ui/core";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { doUpdateSampleCollection } from "./SampleDispatcher";
import { appNotification } from "../shared/notification/app-notification";
import { doGetTestRequestByID } from "../testrequests/testRequestDispatcher";
import TestRequestDetail from "../testrequests/TestRequestDetail";
import { errorHandler } from "../shared/common-helpers";

const useStyles = makeStyles((theme) => ({
    paperWhite: {
        margin: "0 auto",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
    },
    mt40: {
        marginTop: 40,
    },
    w100: {
        width: "100%",
    },
    select100Form: {
        width: "100%",
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    formContainer: {
        padding: "50px",
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function UpdateSampleCollection() {
    const classes = useStyles();
    const history = useHistory();
    let location = useLocation();
    let { params } = useRouteMatch("/update-sample-report/:id");
    const dispatch = useDispatch();
    const { id } = params;

    const [testRequest, setTestRequest] = useState(null);
    const [sampleId, setSampleId] = useState("102");
    const [comments, setComments] = useState("Should be left");
    const [testTubeId, setTestTubeId] = useState("97");
    const [result, setResult] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        const payload = {
            sampleId,
            comments,
            result,
            testTubeId,
        };
        doUpdateSampleCollection(id, payload)
            .subscribe(
                (response) => {
                    appNotification.showSuccess("Successfully Updated Sample Collections");
                    history.push("/sample-history");
                },
                (error) => errorHandler(error)
            );
    }

    useEffect(() => {
        doGetTestRequestByID(id).subscribe(
            (result) => {
                setTestRequest(result);
            },
            (error) => errorHandler(error)
        );
    }, [id]);

    return (
        <React.Fragment>
            <Container component="main" className={classes.mt40}>
                <Grid container spacing={2} className={classes.paperWhite}>
                    <Typography component="h1" variant="h5">
                        Update Sample Collections
                        <hr />
                    </Typography>
                    <Grid container spacing={2} className={classes.formContainer}>
                        <Grid item xs={6}>
                            <TestRequestDetail testRequest={testRequest} />
                        </Grid>
                        <Grid item xs={6}>
                            <form className={classes.form} onSubmit={handleSubmit} noValidate>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            value={sampleId}
                                            onInput={(e) => setSampleId(e.target.value)}
                                            required
                                            className={classes.w100}
                                            fullWidth
                                            id="sampleId"
                                            label="Sample Id"
                                            name="sampleId"
                                            autoComplete="sampleId"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            value={testTubeId}
                                            onInput={(e) => setTestTubeId(e.target.value)}
                                            required
                                            fullWidth
                                            id="testTubeId"
                                            label="Test Tube Id"
                                            name="testTubeId"
                                            autoComplete="testTubeId"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextareaAutosize
                                            className={classes.w100}
                                            aria-label="comments"
                                            rowsMin={3}
                                            value={comments}
                                            name="comments"
                                            id="comments"
                                            onInput={(e) => setComments(e.target.value)}
                                            placeholder="Comments"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl variant="outlined" className={classes.select100Form}>
                                            <InputLabel htmlFor="outlined-result-native-simple">Test Result</InputLabel>
                                            <Select
                                                multiple
                                                value={result}
                                                onChange={(e) => setResult(e.target.value)}
                                                label="Test Result"
                                                className={classes.select100}
                                                inputProps={{
                                                    name: "result",
                                                    id: "selectLabResult",
                                                }}
                                                renderValue={(selected) => selected.join(", ")}
                                            >
                                                <MenuItem value="BLOOD_DNA">Blood DNA</MenuItem>
                                                <MenuItem value="SALIVA">Saliva</MenuItem>
                                                <MenuItem value="CBC">CBC</MenuItem>
                                                <MenuItem value="HBAIC">HBAIC</MenuItem>
                                                <MenuItem value="LIPID_PROFILE">LIPID Profile</MenuItem>
                                                <MenuItem value="LFT">LFT</MenuItem>
                                                <MenuItem value="TFT">TFT</MenuItem>
                                                <MenuItem value="KFT">KFT</MenuItem>
                                                <MenuItem value="VIT_D">VIT D</MenuItem>
                                                <MenuItem value="VIT_B12">VIT B12</MenuItem>
                                                <MenuItem value="CRP">CRP</MenuItem>
                                                <MenuItem value="SUGAR_RANDOM">Sugar Random</MenuItem>
                                                <MenuItem value="HOMOCYSTEINE">HOMOCYSTEINE</MenuItem>
                                                <MenuItem value="CORTISOL">CORTISOL</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Update Sample Collections
                                </Button>
                            </form>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}

export default UpdateSampleCollection;
