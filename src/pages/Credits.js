import React from 'react'
import {set4COSOC} from '../data/ComposeOrderedSentOnClick'
import {ListenChooseRelevantSet2} from '../data/ListentChooseRelevant'

export default function Credits() {
  const stripHtml = (html) => 
{
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}
  return (
    <div className="container">
      <div className="card card-credits">
      <ol>
        <h1>Lesson 1.3</h1>
        {set4COSOC.map((item) => (
          <li key={item.attr}>{stripHtml(item.attr)}</li>
        ))}
        <h1>Lesson 1.3</h1>
        {ListenChooseRelevantSet2.map((item) => (
          item.picture.map((itm) => (
            <li key={itm.attr}>{stripHtml(itm.attr)}</li>
          ))
        ))}
      </ol>
      </div>
    </div>
  )
}


