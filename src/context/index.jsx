import { useState, createContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const userContext = createContext()

const UserProvider = ({ children }) => {
    const [state, setState] = useState({
        user: {},
        token: "",
    });

    useEffect(() => {
        setState(JSON.parse(localStorage.getItem("auth")));
    }, [])
    // const navigate = useNavigate()
    const token = state && state.token ? state.token : ""

    axios.defaults.baseURL = process.env.NEXT_PUBLIC_API;
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;



    axios.interceptors.response.use(
        function (response) {
            //Do something before request is sent
            return response;
        },
        function (error) {
            //Do something with request error
            let res = error.response
            if (res.status === 401 && res.config && !res.config._isRetryRequest) {
                setState(null);
                localStorage.removeItem('auth');
                // navigate("/login");

            }
        },

    )
    return (
        < userContext.Provider value={[state, setState]}>
            {children}
        </userContext.Provider>
    );
}

export { UserProvider, userContext };