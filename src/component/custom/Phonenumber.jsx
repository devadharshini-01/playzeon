import { Form } from "react-bootstrap";

const Phonenumber=({label,type,className,values,onChange,isInvalid,errors,name})=>{
    return(
        <>
              <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>{label}</Form.Label>
        <Form.Control type={type} name={name} className={className}values={values} onChange={onChange} isInvalid={isInvalid} errors={errors}/>
      </Form.Group>
   
     
      </Form>
        </>
    )
}
export default Phonenumber;