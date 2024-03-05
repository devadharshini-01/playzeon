import axios from "axios";
import { centerpostaction, centertconstants } from "../constants/CenterApiConstant";
import { useParams } from "react-router-dom";

export const CenterAction = () => async (dispatch) => {
  const Token = localStorage.getItem("accessToken")

  await dispatch({
    type:centertconstants.REQUEST,
    payload: { loading: true },
  });
  try {
    const { data } = await axios.get(
      `https://262a-2405-201-e059-b805-e4b7-e07a-11a3-9edb.ngrok-free.app/api/timezones `,
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
  const {value} = await axios.post(`https://262a-2405-201-e059-b805-e4b7-e07a-11a3-9edb.ngrok-free.app/api/v1/centers`,values,
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
