import { Form, Placeholder } from "react-bootstrap";
import FormSelect from "react-bootstrap/FormSelect";
const Formselect = ({ data, label, mandatory, onChange,selectedTimezoneId,Placeholder,timezoneError }) => {
 

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
        <Form.Select required  onChange={(e) => onChange(e.target.value)} value={selectedTimezoneId}>
          <option value={null}>Select the Timezone</option>
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
      {  timezoneError&&<p >
          Please select an option.
        </p>}
      </Form.Group>
    </>
  );
};
export default Formselect;
