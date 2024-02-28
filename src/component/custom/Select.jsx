import { useEffect, useState } from "react";
import { FormSelect } from "react-bootstrap";

const Formselect=({value,option})=>{
const [timezone,setTimezone]=useState();

console.log(timezone,"++++");
    return(
        <>
   <FormSelect>
 
      {/* <option value="first"></option> */}
    
              {timezone?.map(val => {
                return (
                  <>
                    {' '}
                    <option value={val}>{val.displayNam}</option>{' '}
                  </>
                );
              })}
    </FormSelect>
        </>
    )
}
export default Formselect;