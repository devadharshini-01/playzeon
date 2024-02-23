import axios from "axios";
import { centertconstants } from "../constants/CenterApiConstant";

export const CenterAction = () => async (dispatch) => {
  const Token = localStorage.getItem("accessToken")
  await dispatch({
    type:centertconstants.REQUEST,
    payload: { loading: true },
  });
  try {
    const { data } = await axios.get(
      ` https://gnat-saving-sturgeon.ngrok-free.app/api/timezones`,{headers:{Authorization:`Bearer${Token}`}}
    );
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
