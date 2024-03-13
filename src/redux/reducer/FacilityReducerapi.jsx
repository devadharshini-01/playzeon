import { facilityconstants } from "../constants/FacilityApiConstant";

let initialValues = {
  facilitygetapi: [],
};

export const FacilityReducer = (value = initialValues, action) => {
  switch (action?.type) {
    case facilityconstants.REQUEST:
      return { facilitygetapi: action.payload };
    case facilityconstants.SUCCESS:
      return { facilitygetapi: action.payload };
    case facilityconstants.ERROR:
      return { facilitygetapi: action.payload };
    default:
      return value;
  }
};
