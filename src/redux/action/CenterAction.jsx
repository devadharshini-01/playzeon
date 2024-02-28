import axios from "axios";
import { centerpostaction, centertconstants } from "../constants/CenterApiConstant";

export const CenterAction = () => async (dispatch) => {
  const Token = localStorage.getItem("accessToken")
  
  await dispatch({
    type:centertconstants.REQUEST,
    payload: { loading: true },
  });
  try {
    const { data } = await axios.get(
      `https://grouse-humane-terribly.ngrok-free.app/api/timezones`,
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
          "Authorization": `Bearer ${Token}`
        }
      });
    await dispatch({
      type:centertconstants.SUCCESS,
      payload: { loading: false, data: data },
    });
  } catch (error) {
    await dispatch({
      type:centertconstants.ERROR,
      payload: { loading: false, data: {} },
    });
  }
};

//post
export const CenterPostAction=()=>async(dispatch)=>{
  const Token = localStorage.getItem("accessToken")
  await dispatch({
    type:centerpostaction.REQUEST,
    payload:{loading:true},
  })
 try{
  const {value}=await axios.post(`https://grouse-humane-terribly.ngrok-free.app/api/v1/centers`,
  {
    headers:{
      "ngrok-skip-browser-warning": "true",
      "Authorization": `Bearer ${Token}`
    }
    
  });
  await dispatch({
    type:centerpostaction.SUCCESS,
    payload:{loading:false,value:value},

  });

 }catch(error){
  await dispatch({
    type:centerpostaction.ERROR,
    payload:{loading:false,value:{}}
  })
 }
};
