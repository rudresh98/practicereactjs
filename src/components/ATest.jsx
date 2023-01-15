import { useState, useEffect } from "react";

const ATest = (props) => {
  console.log("ATEST", props);
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);
  return (
    <>
      <h1>
        HI i'm a A component {props.name}
        {props.age}
      </h1>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </>
  );
};

export default ATest;
