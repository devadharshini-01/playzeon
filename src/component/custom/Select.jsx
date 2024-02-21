import { useEffect, useState } from "react";
import { FormSelect } from "react-bootstrap";

const Formselect=({value,option})=>{
const [timezone,setTimezone]=useState();

console.log(timezone,"++++");
    return(
        <>
   <FormSelect>
    {/* {timezone.data.map((map)=>{

    })} */}
      <option value="first"></option>
      
    </FormSelect>
        </>
    )
}
export default Formselect;