import { Icon } from "@iconify/react";
import { Form } from "react-bootstrap";

const Formcontrol =({label,type,className,icon})=>{
    return( 
        <>
         <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>{label}</Form.Label>
        <Form.Control type={type} className={className} />
        {/* <Icon icon={icon} width="10" height="10" /> */}
      </Form.Group>
   
     
      </Form>
        </>
    )
}
export default Formcontrol;