import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { errorAlert } from "../../Alermessage";

export const AppContent = createContext();

export const AppContextProvider = ({ children }) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [isLoggedin,setIsLoggedin] = useState(false);
    const [userData,setUserData] = useState(false);

    const getAuthState = async ()=>{
        try {
            const { data } = await axios.get(`${backendUrl}/is-auth`,{withCredentials:true});
            
            if(data.success){
                setIsLoggedin(true)
                getUserData();
            }
        } catch (error) {
            
            errorAlert(error.response.data.message || error.message);
        }
    }

    const getUserData =async ()=>{
        try {
            const {data} = await axios.get(`${backendUrl}/user-details`,{withCredentials:true});
            data.success ? setUserData(data.user) : errorAlert(data.message);
        } catch (error) {
            
            errorAlert(error.response.data.message || error.message);
        }
    }

    useEffect(()=>{
        getAuthState()
    },[])

    const value = {
        backendUrl,
        isLoggedin,
        setIsLoggedin,
        userData,
        setUserData,
        getUserData
    }

    return (
        <AppContent.Provider value={value}>
            {children}
        </AppContent.Provider>
    )
}