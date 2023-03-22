function Example() {
  const [b,setB] =useState (false)
  return (
    <div onClick ={()= {
      setB(!b)
    }}>
      Example
{/* <p v-if> */}
      { b && <p>Visas kanske</p>}
    </div>
  );
}
export default Example;

// Det som är till vänster måste vara true för att operatorn ska kolla på det till höger.

Example
{b && <p>Visas kanse</p>}
{b ? <h1>h1</h1> : <h2>h2</h2>}
