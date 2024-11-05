import {createReducer} from "../config/create-reducer";
import {REHYDRATE} from 'redux-persist';
import {setAuthToken} from "./authDispatcher";

export const LOGIN = "auth/login";
export const LOGOUT = "auth/logout";



const getDefaultRoles =()=>{
    return getApplicableRoles({role:"ANONYMOUS"})
}
export const getApplicableRoles =(user)=>{


    const isApproved = (user.status === "APPROVED")

    let role = user.role;
    const isUser = (role === "USER")
    const isDoctor = (role === "DOCTOR")
    const isAuthority = (role === "DNALYST_ADMIN")
    const isTester = (role === "TESTER")
    const isGeneticcounsiller = (role === "GENETICCOUNSILLER")
    const isNutritionist = (role === "NUTRITIONIST")
    const isSportsmedicine = (role === "SPORTSMEDICINE")
    const isPhalbotomist = (role === "PHALBOTOMIST")
    const isPhysiotherapist = (role === "PHYSIOTHERAPIST")


    return {isUser,isDoctor,isAuthority,isTester,isGeneticcounsiller,isNutritionist,isSportsmedicine,isPhalbotomist,isPhysiotherapist,isApproved}
}

export const initialState = {
    isLoggedIn:false,
    token:null,
    user:null,
    roles:getDefaultRoles()
}


const loginUser =(state,action)=>{

    let updatedState = {}
    if(action?.payload?.user){
        const roles =getApplicableRoles(action.payload.user)
        updatedState={isLoggedIn:true,token:action.payload.token,user:action.payload.user,roles}
    }
    return { ...state,...updatedState}



};
const logOutUser =(state,action)=>{

    return { ...state,isLoggedIn:false,token:null,user:null,roles:getDefaultRoles()}

};
const rehydrateApp =(state,action)=>{

    if(action?.payload?.auth?.user){
        let {auth} = action.payload;
        let {user,token} = auth
        setAuthToken(token)
        const roles =getApplicableRoles(user)

        return { ...state,isLoggedIn:true,token:token,user:user,roles}
    }else {
        return {...state}
    }


};




const authReducer = createReducer(initialState, {
    [LOGIN]: loginUser,
    [REHYDRATE]:rehydrateApp,
    [LOGOUT]: logOutUser



});


export default authReducer;

