const Privaterouter =({issigned,child})=>{
    return(
       <>
    {issigned ? (
        child
      ) : (
        <Redirect to="/" />
      )}
        </>
    )
}
export default Privaterouter;