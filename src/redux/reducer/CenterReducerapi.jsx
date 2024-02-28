import {
  centerpostaction,
  centertconstants,
} from "../constants/CenterApiConstant";
import { CenterPostAction } from "../action/CenterAction";

let initialValues = {
  centergetapi: [],
  centerpostapi: [],
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
//post
export const postReducer = (value = initialValues, action) => {
  switch (action?.type) {
    case centerpostaction.REQUEST:
      return { centerpostapi: action?.payload };
    case centertconstants.SUCCESS:
      return { centerpostapi: action?.payload };
    case centerpostaction.ERROR:
      return { centerpostapi: action?.payload };
    default:
      return value;
  }
};
