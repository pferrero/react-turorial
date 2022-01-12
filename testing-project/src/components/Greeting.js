import { useState } from "react";

const Greeting = () => {
  const [textHasChanged, setTextHasChanged] = useState(false);
  return (
    <div>
      <h2>Hello world!</h2>
      {!textHasChanged && <p>It's good to see you</p>}
      {textHasChanged && <p>Changed!</p>}
      <button onClick={() => setTextHasChanged(true)}>Change text</button>
    </div>
  );
};

export default Greeting;
