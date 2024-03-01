import axios from "axios";
import { centerpostaction, centertconstants } from "../constants/CenterApiConstant";
import { useParams } from "react-router-dom";

export const CenterAction = () => async (dispatch) => {
  const Token = localStorage.getItem("accessToken")
const {id}=useParams();
  await dispatch({
    type:centertconstants.REQUEST,
    payload: { loading: true },
  });
  try {
    const { data } = await axios.get(
      `http://192.168.29.26:8080/api/timezones id=${id}`,
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
export const CenterPostAction=(values)=>async(dispatch)=>{
  console.log("CenterPostAction Token");
 const Token= localStorage.getItem("accessToken")
  console.log(Token,"Token");
  await dispatch({
    type:centerpostaction.REQUEST,
    payload:{loading:true},
  })
 try{
  console.log("test ");
  const {value} = await axios.post(`http://192.168.29.26:8080/api/v1/centers`,values,
  {
    headers: {
      "ngrok-skip-browser-warning": "true",
      "Authorization": `Bearer ${Token}`
    }
    
  });
  await dispatch({
    type:centerpostaction.SUCCESS,
    payload:{loading:false,value:value},

  });

 }catch(error){
  console.log("err test ");
  await dispatch({
    type:centerpostaction.ERROR,
    payload:{loading:false,value:{}}
  })
 }
};
