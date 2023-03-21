function CounterButton(props) {
  console.log(props);
  return <input type="button" value={props.test}></input>;
}
export default CounterButton;

// export default function CounterButton (){
//   return <h1>Hej</h1>
// }

import CounterButton from ".component/CounterButton";

function App() {
  return (
    <h1>
      <CounterButton a="hej" b="test" c={(1, 2, 3)}></CounterButton>
      Hej
    </h1>
  );
}
