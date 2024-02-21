import axios from "axios";
import { centertconstants } from "../constants/CenterApiConstant";

export const CenterAction = () => async (dispatch) => {
  await dispatch({
    type:centertconstants.REQUEST,
    payload: { loading: true },
  });
  try {
    const { data } = await axios.get(
      `  https://abbd-2405-201-e059-b805-ed44-498e-91cd-6527.ngrok-free.app/api/timezones`
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
