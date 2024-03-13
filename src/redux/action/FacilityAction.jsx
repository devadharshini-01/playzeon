import React from "react";
import { facilityconstants } from "../constants/FacilityApiConstant";
import axios from "axios";

export const FacilityAction = () => async (dispath) => {
  await dispath({
    type: facilityconstants.REQUEST,
    payload: { loading: true },
  });
  try {
    const { facility } = await axios.get(
      `https://362d-2405-201-e059-b805-d82e-8e9-a77a-db15.ngrok-free.app/api/v1/facilities?centerId.equals=82357 `,
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
          Authorization: `Bearer ${Token}`,
        },
      }
    );
    await dispath({
      type: facilityconstants.SUCCESS,
      payload: { loading: false, facility: facility },
    });
  } catch (error) {
    await dispath({
      type: facilityconstants.ERROR,
      payload: { loading: false, facility: {} },
    });
  }
};
