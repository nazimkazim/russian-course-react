import React, { useState, useEffect, useRef } from 'react';
var _ = require('lodash');


function Index(props) {
  const [items, setArr] = useState([]);
  const [list, setList] = useState(props.data);
  const [dragging, setDragging] = useState(false);
  const dragItem = useRef();
  const dragNode = useRef();
  useEffect(() => {
    const arr = props.data.reduce(
      (tmpArr, group) => tmpArr.concat(group.items),
      []
    );
    setArr(_.shuffle(arr));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDragStart = (e, params) => {
    //console.log('drag starting');
    //console.log(params);
    dragItem.current = params;
    dragNode.current = e.target;
    dragNode.current.addEventListener('dragend', handleDragEnd);
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnd = () => {
    //console.log('ending drag')
    setDragging(false);
    dragNode.current.removeEventListener('dragend', handleDragEnd);
    dragItem.current = null;
    dragNode.current = null;
  };

  const handleDragEnter = (e, params) => {
    console.log('entering drag', params);
    const currentItem = dragItem.current
    console.log(currentItem)
    setList(oldList => {
      let newList = JSON.parse(JSON.stringify(oldList))
      newList[0].items.push(currentItem)
      return newList
    })
  };

  const getStyles = (params) => {
    const currentItem = dragItem.current;
    if (currentItem === params) {
      return 'current dnd-item';
    }
    return 'dnd-item';
  };
  //console.log(items);
  console.log(list);
  return (
    <div className="drag-n-drop">
      <>
        { props.data.map((grp, grpI) => (
          <>
            <div className="dnd-group">
              <div key={ grpI } className="group-title">{ grp.groupName }</div>
              {grp.items.map((item) => (
                <div className="dnd-item">{item}</div>
              ))}
            </div>
            <div>
            </div>
          </>
        )) }
        { items.map((item, itemI) => (
          <div
            key={ itemI }
            onDragStart={ (e) => handleDragStart(e, { itemI }) }
            draggable
            className={ dragging ? getStyles(itemI) : "dnd-item" }
            onDragEnter={ dragging ? (e) => handleDragEnter(e, itemI) : null }
          >
            <p>{ item }</p>
          </div>
        )) }
      </>
    </div>

  );
}

export default Index;
