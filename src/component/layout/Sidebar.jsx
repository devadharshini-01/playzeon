import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Sidebar =(props)=>{
    return(
        <>
        <div className="list-group bg-white h-100 ">
        <Link to="/Center" className="link-style">
          {" "}
          <p
            className={`${
              props.active === "Center"
                ? "p-1 bg-white  text-danger rounded-3  "
                : "text-black hover"
            } p-1  hover mt-2 `}
            onClick={() => props.setActive("Center")}
          >
          
              <div className="d-flex justify-content-between ">
    <div>Home</div>
    <div className="d-flex justify-content-end mt-2">
        <Icon icon="flowbite:angle-right-outline" width="15" height="15" />
    </div>
</div>
        
          
        
          </p>
        </Link>
        {/* <Link to="/Center" className="link-style">
          {" "}
          <p
            className={`${
              props.active === "Center"
                ? "p-1 bg-white  text-danger rounded-3  "
                : "text-black hover"
            } p-1  hover  `}
            onClick={() => props.setActive("Center")}
          >
          
              <div className="d-flex justify-content-between ">
    <div>Facilites</div>
    <div className="d-flex justify-content-end mt-2">
        <Icon icon="flowbite:angle-right-outline" width="15" height="15" />
    </div>
</div>
        
          
        
          </p>
        </Link> */}
       
      </div>

        </>
    )
}
export default Sidebar;