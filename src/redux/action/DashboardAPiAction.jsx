import axios from "axios";
import { dashboardApiConstants } from "../constants/DashboardConstant";

export const DashboardGetAction = (centerId) => async (dispatch) => {
    const Token = localStorage.getItem("accessToken")
    await dispatch({
        type: dashboardApiConstants.REQUEST,
        payload: { loading: true },
    });
    try {
   

        
        const { data } = await axios.get(` https://abbd-2405-201-e059-b805-ed44-498e-91cd-6527.ngrok-free.app/api/account`,
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