import FormSelect from "react-bootstrap/FormSelect";
const Formselect = ({ data }) => {
  console.log(data, "data");
  return (
    <>
      <FormSelect>
        
        {data?.
          data?.length > 0 &&
          data?.data?.map((value, i) => {
            return(
                <option key={i}>{value.displayName}</option>
            )
         
          })}
          

      </FormSelect>
    </>
  );
};
export default Formselect;
