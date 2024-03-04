import { Icon } from "@iconify/react";
import { Form } from "react-bootstrap";

const Formcontrol =({label,type,className,mandatory,values,onChange,isInvalid,errors,name,min})=>{

    return( 
        <>
         <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>{label}<span className="text-primary"><b>{mandatory? "*":""}</b></span></Form.Label>
        <Form.Control type={type} className={className}  values={values} min={min}  onChange={onChange} isInvalid={isInvalid} errors={errors} name={name}/>

      </Form.Group>
   
     
      </Form>
        </>
    )
}
export default Formcontrol;