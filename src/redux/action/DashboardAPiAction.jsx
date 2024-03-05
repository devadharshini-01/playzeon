import axios from "axios";
import { dashboardApiConstants } from "../constants/DashboardConstant";

export const DashboardGetAction = (centerId) => async (dispatch) => {
    const Token = localStorage.getItem("accessToken")
    
    
    await dispatch({
        type: dashboardApiConstants.REQUEST,
        payload: { loading: true },
    });
    try {
   

        
    //     const { data } = await axios.get(`https://gnat-saving-sturgeon.ngrok-free.app/api/account`), { headers: { "ngrok-skip-browser-warning": "true" }, {Authorization:`Bearer ${Token}`} }
    //    // {headers:{Authorization:`Bearer ${Token}`}});
    const { data } = await axios.get(
        "https://262a-2405-201-e059-b805-e4b7-e07a-11a3-9edb.ngrok-free.app/api/account",
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
            "Authorization": `Bearer ${Token}`
          }
        }
      );
        console.log(data?.orgId,"orgid" );
        localStorage.setItem("orgId",data?.orgId)
        localStorage.setItem("id",data?.id)
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