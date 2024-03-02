import { Form, Placeholder } from "react-bootstrap";
import FormSelect from "react-bootstrap/FormSelect";
const Formselect = ({ data, label, mandatory, onChange,selectedTimezoneId }) => {
  console.log(data, "datagdfgfgggdfgdfhdfhdfhd ");

  return (
    <>
      {/* <FormSelect onChange={onChange} >
        
        {data?.
          data?.length > 0 &&
          data?.data?.map((value, i) => {
            return(
                <option value={value.id} key={i}>{value.displayName}</option>
            )
         
          })}
          

      </FormSelect> */}

      <Form.Group controlId="validationCustom06">
        <Form.Label>
          {label}
          <span className="text-primary">
            <b>{mandatory ? "*" : ""}</b>
          </span>
        </Form.Label>
        <Form.Select required Placeholder={Placeholder} onChange={(e) => onChange(e.target.value)} value={selectedTimezoneId}>
          {data?.data?.length > 0 &&
            data?.data?.map((value, i) => {
              return (
                
                <option 
                 value={value.id} key={i}>
                  {value.displayName}
                </option>
              );
            })}
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Please select an option.
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
};
export default Formselect;
