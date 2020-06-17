import React, { useEffect, useState } from "react";
import Card from "./Card";
function Index({ data }) {
  const [dataInternal, setData] = useState([]);
  const [value, setValue] = useState('')
  const [theArray, setTheArray] = useState([]);
  
  useEffect(() => {
    const arr = data.map(item => ({
      value: item.value,
      pic: item.pic,
      turned: false
    }));
    setData(arr);
  }, [data]);

  console.log(theArray)
  
  return (
    <div className="memory-game-container">
      { dataInternal &&
        dataInternal.map((item, index) => (
          <div
            onClick={ () => {
              const newData = [...dataInternal];
              newData[index].turned = true;
              setData(newData);
              setValue(item.value)
              setTheArray([...theArray, value]);
            } }
          >
            <Card key={ index } item={ item } id={ index } />
          </div>
        )) }
    </div>
  );
}
export default Index;