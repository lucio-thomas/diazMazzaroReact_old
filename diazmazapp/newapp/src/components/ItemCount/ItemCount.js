import React, {useState} from "react";
import Button from "../Button/Button";

function ItemCount() {
    const [count, setCount] = useState(0);
  
    let incrementCount = () => {
      setCount(count + 1);
    };
  
    let decrementCount = () => {
      setCount(count - 1);
      
    };
  
    return (
      <div className="itemcount" style={{background:'#282c34'}}>
        <div>
          <div class="count">
            <h3>Cantidad:</h3>
            <h1>{count}</h1>
          </div>
          <div class="buttons">
            <Button title={"-"} action={decrementCount} />
            <Button title={"+"} action={incrementCount} />
          </div>
        </div>
      </div>
    );
  }

  export default ItemCount