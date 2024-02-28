import { useState } from "react"

const FormCheck =()=>{
    const[checked,setChecked]=useState()

    const handleChecked=(e)=>{
      setChecked(e.target.checked);
    }
    return(
        <>
         <Form.Check type="checkbox" onChange={(e)=>handleChecked(e)}/>
        </>
    )
}
export default FormCheck