import { centertconstants } from "../constants/CenterApiConstant";

let initialValues = {
  centergetapi: [],
};
export const centerReducer = (value = initialValues, action) => {
  switch (action?.type) {
    case centertconstants.REQUEST:
      return { centergetapi: action?.payload };
    case centertconstants.SUCCESS:
      return { centergetapi: action?.payload };
    case centertconstants.ERROR:
      return { centergetapi: action?.payload };
    default:
      return value;
  }
};
