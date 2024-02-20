import { Form } from "react-bootstrap";

const Phonenumber=({label,type,className})=>{
    return(
        <>
              <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>{label}</Form.Label>
        <Form.Control type={type}  className={className}/>
      </Form.Group>
   
     
      </Form>
        </>
    )
}
export default Phonenumber;