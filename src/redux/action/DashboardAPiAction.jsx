import axios from "axios";
import { dashboardApiConstants } from "../constants/DashboardConstant";

export const DashboardGetAction = (centerId) => async (dispatch) => {
    const Token = localStorage.getItem("accessToken")
    await dispatch({
        type: dashboardApiConstants.REQUEST,
        payload: { loading: true },
    });
    try {
   

        
        const { data } = await axios.get(`https://0a41-2405-201-e059-b805-e525-da6b-2897-c20e.ngrok-free.app/api/account`,
        {headers:{Authorization:`Bearer ${Token}`}});
        console.log(data);
        await dispatch({
            type: dashboardApiConstants.SUCCESS,
            payload: { loading: false, data: data },
            
        });
    } catch (error) {
        await dispatch({
            type: dashboardApiConstants.ERROR,
            payload: { loading: false, data: {} },
        });
    }
};